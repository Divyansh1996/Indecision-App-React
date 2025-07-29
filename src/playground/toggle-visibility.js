let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    rerender();
}

const rerender = () =>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility? "Hide Details":"Show Details"}</button>
            {
              visibility && <p>I think this is the details which you are looking for.</p>
            }
        </div>
    );
const locate = document.getElementById("newApp");
ReactDOM.render(template,locate);
}

rerender();