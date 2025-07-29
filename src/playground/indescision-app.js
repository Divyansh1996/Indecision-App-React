//OldSyntax


import React from "react";

import AddOption from "./AddOption";
import Action from "./Action";
import Options from "./Options";
import App from "./App";
import Header from "./Header";

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleRandomPick = this.handleRandomPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    componentDidMount(){
        if(localStorage.getItem('options')){
            const json = localStorage.getItem('options');
            const obj = JSON.parse(json);
            this.setState(() => ({options:obj}))
        }
        console.log("Component Mounted!!")
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
        console.log("Component updated");
    }

    componentWillUnmount() {
        console.log("Component unmounted");
    }

    handleRemoveOption(optionToRemove){
        this.setState((prevState) => {
            return {
                options: prevState.options.filter(option =>{
                    return optionToRemove !== option;
                })
            }
        })

    }

    handleRemoveAll(){
        // this.setState(() =>{
        //     return {
        //         options: []
        //     }
        // });
        this.setState(() => ({options: []}))
    }

    handleRandomPick(){
        const randomIndex = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomIndex];
        if(option){
            alert(`Randomly Selected Option: ${option}`)
        }
    }
    handleAddOption(option){
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
                <App isButtonEnabled = {this.state.options.length > 0}/>
                <Options options = {this.state.options} handleRemoveAll = {this.handleRemoveAll} handleRemoveOption = {this.handleRemoveOption}/>
                <Action handleRandomPick = {this.handleRandomPick} isButtonEnabled = {this.state.options.length > 0}/>
                <AddOption handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: ["Default Option 1", "Default Option 2"]
}

export default IndecisionApp;



//------------>


const Layout = (props) => {
  return (
     <div>
        <p>This is Header</p>
        {props.children}
        <p>This is Footer</p>
     </div>
  );
}
ReactDOM.render(
<Layout> 
  <div>
    <p>Content new 1</p>
    <p>Content new 2</p>
    </div>
</Layout>, document.getElementById("newApp"))
