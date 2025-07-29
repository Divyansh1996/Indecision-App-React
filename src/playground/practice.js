console.log('App is running!');

// // var userName = "Divyansh";
// // var userAge = 29;
// // var userLocation = "India";

// const user = {
//     name: "Divyansh",
//     age: 29,
//     location: "India"
// }

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }

// const app = {
//     title: "Indecision App",
//     subtitle: "Put your life in the hands of a computer",
//     options: []
// }
// // var template=(
// //     <div>
// //     <h3>{user.name}</h3>
// //     <p>{user.age ? user.age : "No age provided"}</p>
// //     {getLocation(user.location)}
// //     </div>
// // );

// const template = (
//     <div>
//         {<p>Location: {user.location}</p>}
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         {app.options.length > 0 ? 
//         <div>
//         <p>Here are your options</p>
//         <ol>
//             <li>{app.options[0]}</li>
//             <li>{app.options[1]}</li>
//         </ol>
//         </div>
//         : <p>No options</p>}
//     </div>

// );


let count = 0;

function addOne(){
    ++count;
    rerender();
    console.log("Adding one");
}

const minusOne = () => {
    --count;
    rerender();
    console.log("Minus one");
}


const reset = () => {
    count = 0;
    rerender();
    console.log("Resetting");
}

const rerender = () => {
    const template = (
    <div>
        <h1>Count: {count}</h1>
        <button id="button-id" className="buttonClass" onClick={addOne}>+</button>
        <button id="button-id" className="buttonClass" onClick={minusOne}>-</button>
        <button id="button-id" className="buttonClass" onClick={reset}>reset</button>
    </div>
    );
    const locate = document.getElementById('newApp');
    ReactDOM.render(template, locate);
}

rerender();

