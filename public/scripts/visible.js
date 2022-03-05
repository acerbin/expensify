'use strict';

var dataShown = false;

var renderApp = function renderApp() {
    var handleShowData = function handleShowData() {
        dataShown = !dataShown;
        renderApp();
    };
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Information'
        ),
        React.createElement(
            'button',
            { onClick: handleShowData },
            !dataShown ? 'Show Data' : 'Hide Data'
        ),
        React.createElement(
            'p',
            { hidden: !dataShown },
            'Data!'
        )
    );

    ReactDOM.render(template, document.getElementById("root"));
};

renderApp();
