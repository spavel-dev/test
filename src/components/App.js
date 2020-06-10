import React, {Component} from 'react'
import Form from './Form'
import Note from './Note'
import notes from '../notes'


class App extends Component{
    state = {
        id: 0,
        email: '',
        doc: '',
        formErrors: {email: '', doc: ''},
        emailValid: false,
        docValid: false,
        formValid: false,
        emailValidClass: 'uk-input',
        docValidClass: 'uk-input'
    }


    render(){
        return (
        <div className="uk-grid uk-grid-collapse">
            <div className="uk-width-3-4">
                <button className="IPM-button IPM-button--default"><span uk-icon="icon: chevron-left;"></span>Вернуться назад</button>
                <h1 className="IPM-h1">Уведомление о прибытии иностранного гражданина</h1>
                <p>Уведомления о регистрации иностранного гражданина или лица без гражданства по месту пребывания, подаваемое принимающей стороной на почте России, МФЦ или в УФМС</p>
                <div className="IPM-content">
                    <form className="IPM-form uk-form-stacked">
                        <label className="uk-form-label IPM-form__label" htmlFor="form-stacked-text">Данные иностранного гражданина</label>
                        <div className="uk-grid uk-grid-small uk-width-1-1">
                            <div className="uk-width-1-2">
                                <div className="uk-form-controls IPM-form__mark">
                                    <input onClick={this.handleClick.bind(this, 1)} className="uk-input" id="form-stacked-text" type="text" placeholder="Фамилия" />
                                </div>
                            </div>
                            <div className="uk-width-1-2">
                                <div className="uk-form-controls IPM-form__mark">
                                    <input onClick={this.handleClick.bind(this, 2)} className="uk-input " type="text" placeholder="Имя Отчество" />
                                </div>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <div className="uk-form-controls IPM-form__mark">
                                <input onClick={this.handleClick.bind(this, 3)} className="uk-input " type="text" placeholder="Гражданство (подданство)" />
                            </div>
                        </div>
                        <div className="uk-margin">
                            <div className="uk-form-controls IPM-form__mark">
                                <input name="email" onClick={this.handleClick.bind(this, 4)} onChange={this.handleChange} className={this.state.emailValidClass} type="email" placeholder="Email" value={this.state.email} />
                            </div>
                        </div>
                        <div className="uk-margin">
                            <div className="uk-form-controls IPM-form__mark">
                                <input name="doc" onClick={this.handleClick.bind(this, 5)} onChange={this.handleChange} className={this.state.docValidClass} type="text" placeholder="Документ" value={this.state.doc} />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <label className="uk-form-label IPM-form__label" htmlFor="form-stacked-select">Дата и место рождения</label>
                            <div className="uk-form-controls IPM-form__mark">
                                <input className="uk-input" type="date" id="form-stacked-select" placeholder="Дата и место рождения" />
                            </div>
                        </div>

                        <div className="uk-margin">
                            <div className="uk-form-label IPM-form__label">Пол</div>
                            <div className="uk-form-controls">
                                <label><input className="uk-radio" type="radio" name="radio1" /> мужской</label><br/>
                                <label><input className="uk-radio" type="radio" name="radio1" /> женский</label>
                            </div>
                        </div>

                        <div className="uk-flex uk-flex-right">
                            <button className="IPM-button IPM-button--blue" disabled={!this.state.formValid}>Сохранить</button>
                        </div>


                    </form>




                </div>
            </div>
            <div className="uk-width-expand IPM-notes-box">
                <Note note={notes[this.state.id]}/>
            </div>
        </div>
        )
    }

    handleClick = (id) => {
        this.setState({
            id: id
        });
    }

    handleChange = (e) => {


        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value},
            () => { this.validateField(name, value) });


    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let docValid = this.state.docValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                 if(emailValid){
                     this.setState({emailValidClass: 'uk-input uk-form-success'});
                 }else{
                     this.setState({emailValidClass: 'uk-input uk-form-danger'});
                 }
                break;

            case 'doc':
                docValid = value.match(/^([0-9]{4}[-]{1}[0-9]{6})$/i);

                if(docValid){
                    this.setState({docValidClass: 'uk-input uk-form-success'});
                }else{
                    this.setState({docValidClass: 'uk-input uk-form-danger'});
                }
                break;

            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid, docValid: docValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid &&
        this.state.docValid});
    }
}



export default App