class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
       if(localStorage.getItem('num')){
            const numStr = localStorage.getItem('num');
            const num = parseInt(numStr, 10);
            if(!isNaN(num)){
                this.setState(() => ({count: num}))
            }
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('num', this.state.count)
        }
    }

    componentWillUnmount(){

    }

    handleAddOne(){
       this.setState((prevState) =>{
            return {
                count: prevState.count +1
            }
       })
    }
    handleMinusOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        })
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count:5
// }
ReactDOM.render(<Counter />, document.getElementById("newApp"))