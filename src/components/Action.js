import React from "react"


const Action = (props) => (
        <div>
            <button onClick={props.handleRandomPick} disabled={!props.isButtonEnabled}>Random Option Picker</button>
        </div>
    )

export default Action;

// class Action extends React.Component {
//     constructor(props){
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleRandomPick} disabled={!this.props.isButtonEnabled}>Random Option Picker</button>
//             </div>
//         )
//     }

// }