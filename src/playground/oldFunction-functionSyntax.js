import React from "react";

const OptionItem = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button onClick = {(e) => props.handleRemoveOption(props.optionText)}>Remove</button>
        </div>
    )
}

export default OptionItem;


// class OptionItem extends React.Component {
//     render(){
//         return(<p>{this.props.optionText}</p>);
//     }
// }
