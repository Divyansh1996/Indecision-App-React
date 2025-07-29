import React from "react";

class App extends React.Component {
    newButton(){
        alert("Button clicked!");
    }

    render() {
        return (
            <div>
                <button className = "big-button" onClick={this.props.handleRandomPick} disabled={!this.props.isButtonEnabled}>What Should I do?</button>
            </div>
        );
    }
}

export default App;