import React from 'react'
import notes from '../notes'

class Input extends React.Component{
    render() {
        return(
            <input onChange={this.handleChange} onClick={this.handleClick()} className={this.props.class} type={this.props.type}  placeholder={this.props.placeholder} name={this.props.name} />
        );
    }
    handleChange = () => {
        console.log('---', 'changed')
    }
    handleClick = () => {
        console.log('---', 'click')
    }

}
Input.defaultProps = {val: ""};
export default Input