import React from "react";

const OptionItem = (props) => {
    return (
        <div className="option">
            <p>{props.count}. {props.optionText}</p>
            <button onClick = {(e) => props.handleRemoveOption(props.optionText)} className="button button--link">Remove</button>
        </div>
    )
}

export default OptionItem;


// class OptionItem extends React.Component {
//     render(){
//         return(<p>{this.props.optionText}</p>);
//     }
// }
