import React from "react";
export default class AddOption extends React.Component {
    state = {
        error:undefined
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target.elements.addOption.value.trim();
        const error = this.props.handleAddOption(text);
        // this.setState(() => {
        //     return {
        //         error: error
        //     }
        // })

        this.setState(() =>({error: error}))
        e.target.elements.addOption.value = ""
    }
    render() {
        return (
            <div>
            {this.state.error && <p className="add-option-errorMessage">{this.state.error}</p>}
            <form onSubmit={this.handleSubmit} className="add-option__form">
                <input type="text" placeholder="Add your option here" name="addOption" className="add-option__input"/>
                <button className="button">Add Option</button>
                {/* {<p>Add Option component here</p>} */}
            </form>
            </div>
        );
    }
}