"use strict";

// import {React} from "react"
// console.log("App.js is running")

var appDetails = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a machine.",
    options: []
};

var showOptions = function showOptions(option, index) {
    return React.createElement(
        "li",
        { key: index },
        option
    );
};

var handleFormSubmit = function handleFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    e.target.elements.option.value = '';
    if (option) {
        appDetails.options.push(option);
    }
    renderApp();
};

var handleRemoveAll = function handleRemoveAll() {
    appDetails.options = [];
    renderApp();
};

var handleChooseOption = function handleChooseOption() {
    var optionIndex = Math.floor(Math.random() * appDetails.options.length);
    alert(appDetails.options[optionIndex]);
};

// const template = (
//     <div>
//         <h1>{appDetails.title}</h1>
//         {appDetails.subtitle && <p>{appDetails.subtitle}</p>}
//         {(appDetails.options && appDetails.options.length > 0) ? <p>Here are your options: </p> : <p>No options.</p>}
//         <ul>
//         {appDetails.options && appDetails.options.length > 0 && appDetails.options.map(showOptions)}
//         </ul>
//         <h1>Counter: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={takeAwayOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//     </div>
// ) 
// const appRoot = document.getElementById('root')
// ReactDOM.render(template, appRoot)

var renderApp = function renderApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            appDetails.title
        ),
        appDetails.subtitle && React.createElement(
            "p",
            null,
            appDetails.subtitle
        ),
        appDetails.options && appDetails.options.length > 0 ? React.createElement(
            "p",
            null,
            "Here are your options: "
        ) : React.createElement(
            "p",
            null,
            "No options."
        ),
        React.createElement(
            "button",
            { disabled: appDetails.options.length === 0, onClick: handleChooseOption },
            "Chose Option"
        ),
        React.createElement(
            "button",
            { onClick: handleRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ul",
            null,
            appDetails.options && appDetails.options.length > 0 && appDetails.options.map(showOptions)
        ),
        React.createElement(
            "form",
            { onSubmit: handleFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                { type: "submit" },
                "Add Option"
            )
        )
    );
    var appRoot = document.getElementById('root');
    ReactDOM.render(template, appRoot);
};

renderApp();
