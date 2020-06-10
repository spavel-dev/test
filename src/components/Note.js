import React from 'react'


class Note extends React.Component{
    render() {
        const params = this.props.note;
        return (
            <div className="IPM-notes">
                <div className="IPM-notes__caption">Подсказка:</div>
                <div className="IPM-notes__text">{params.text}</div>
            </div>
        );
    }
}
Note.defaultProps = {text: "Tom", age: '23'};
export default Note