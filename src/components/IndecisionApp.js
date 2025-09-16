import React from "react";

import Options from "./Options";
import App from "./App";
import Header from "./Header";
import OptionModals from "./OptionModals";
import AddOption from "./AddOption";

class IndecisionApp extends React.Component{
    state = {
        options:[],
        selectedOptions: undefined
    }

    closeModal = () => {
        this.setState(() => ({
            selectedOptions: undefined
        }))
    }
    handleRemoveOption = (optionToRemove) =>{
        this.setState((prevState) => {
            return {
                options: prevState.options.filter(option =>{
                    return optionToRemove !== option;
                })
            }
        })

    }

    handleRemoveAll = () => {
        // this.setState(() =>{
        //     return {
        //         options: []
        //     }
        // });
        this.setState(() => ({options: []}))
    }

    handleRandomPick = () => {
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomIndex];
        this.setState(() => (
            {selectedOptions: option}
        ))
    }
    handleAddOption = (option) => {
        if(!option){
            return "Enter a valid option";
        }
        else if(this.state.options.indexOf(option) > -1){
            return "This option already exists";
        }
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // })

        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <div className="container">
                    <App isButtonEnabled = {this.state.options.length > 0} handleRandomPick = {this.handleRandomPick}/>
                    <div className="widget">
                        <Options options = {this.state.options} handleRemoveAll = {this.handleRemoveAll} handleRemoveOption = {this.handleRemoveOption}/>
                        {/* <Action handleRandomPick = {this.handleRandomPick} isButtonEnabled = {this.state.options.length > 0}/> */}
                        <AddOption handleAddOption = {this.handleAddOption}/>
                    </div>
                </div>
                <OptionModals selectedOptions={this.state.selectedOptions} closeModal={this.closeModal}/>
            </div>
        );
    }

    componentDidMount(){
        if(localStorage.getItem('options')){
            const json = localStorage.getItem('options');
            const obj = JSON.parse(json);
            this.setState(() => ({options:obj}))
        }
        //console.log("Component Mounted!!")
    }

    componentDidUpdate(prevProps, prevState) {
        try{
            if(prevState.options.length !== this.state.options.length){
                const json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
        catch(e){

        }
        //console.log("Component updated");
    }

    componentWillUnmount() {
        //console.log("Component unmounted");
    }
}

IndecisionApp.defaultProps = {
    options: ["Default Option 1", "Default Option 2"]
}

export default IndecisionApp;


