import React from "react";
import OptionItem from "./OptionItem";

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__h3">Your Options</h3>
                <button onClick={props.handleRemoveAll} className="button button--link">Remove All</button>
            </div>
            {props.options.length === 0 && <p className="widget__p"> Please add some Options here </p>}
            {props.options.length > 0 && props.options.map((option, index) => <OptionItem key = {option} optionText = {option} count={index+1} handleRemoveOption = {props.handleRemoveOption}>{option}</OptionItem>)}
        </div>
    )

export default Options;

// class Options extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render() {
//         console.log(this.props.options.length)
//         return (
//             <div>
//                 <button onClick={this.props.handleRemoveAll}>Remove All</button>
//                 {this.props.options.length > 0 && this.props.options.map((option) => <Option key = {option} optionText = {option}>{option}</Option>)}
//             </div>
//         );
//     }
// }

// This is a simple stateless functional component
// const User = (props) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <p>Age: {props.age}</p>
//             <p>Location: {props.location}</p>
//         </div>
//     )
// }
//ReactDOM.render(<User name = "Divy" age={21} location={"India"}/>, document.getElementById("newApp"));