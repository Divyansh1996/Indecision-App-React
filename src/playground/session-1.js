const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
}

const addOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        rerender();
    }
}

const removeAll = () => {
    app.options = [];
    rerender();
}

const generateRandom = () => {
    const randomIndex= Math.floor(Math.random() * app.options.length);
    alert(app.options[randomIndex]);
}
const rerender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>Item length is: {app.options.length}</p>
            <button disabled = {app.options.length === 0} onClick={generateRandom}>Generate Random</button>
            <ol>
                {
                   app.options.map(num => {
                    return <li key={num}>{num}</li>
                   })
                }
            </ol>
            <form onSubmit={addOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
                <button onClick={removeAll}>Remove All</button>
            </form>
        </div>
    );
    const appRoot = document.getElementById("newApp")
    ReactDOM.render(template, appRoot);
}
rerender();