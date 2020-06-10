import React from 'react'
import Input from './Input'


class Form extends React.Component{

    render() {
        return (
            <form className="IPM-form uk-form-stacked">
                <label className="uk-form-label IPM-form__label" htmlFor="form-stacked-text">Данные иностранного гражданина</label>
                <div className="uk-grid uk-grid-small uk-width-1-1">
                    <div className="uk-width-1-2">
                        <div className="uk-form-controls IPM-form__mark">
                            <Input type={'text'} class={'uk-input'} placeholder={'Фамилия'} name={'surname'} />
                        </div>
                    </div>
                    <div className="uk-width-1-2">
                        <div className="uk-form-controls IPM-form__mark">
                            <input className="uk-input " type="text" placeholder="Имя Отчество" />
                        </div>
                    </div>
                </div>
                <div className="uk-margin">
                    <div className="uk-form-controls IPM-form__mark">
                        <input className="uk-input " type="text" placeholder="Гражданство (подданство)" />
                    </div>
                </div>

                <div className="uk-margin">
                    <label className="uk-form-label IPM-form__label" htmlFor="form-stacked-select">Дата и место рождения</label>
                    <div className="uk-form-controls IPM-form__mark">
                        <input className="uk-input" type="date" id="form-stacked-select" placeholder="Гражданство (подданство)" />
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
                    <button className="IPM-button IPM-button--blue">Сохранить</button>
                </div>


            </form>
        );
    }

}


export default Form