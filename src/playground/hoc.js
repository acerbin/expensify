import React from "react";
import ReactDOM from "react-dom";


const Info = (props) => {
    return (
        <div>
            <h1>Important Information</h1>
            <p>The information is: {props.info}</p>
        </div>
    )
}


// ReactDOM.render(<Info info="This is important"/>, document.getElementById('root'))

const withAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : "Please, authenticate to see this information."}
        </div>
    )
}

const AuthenticatedComponent = withAuthentication(Info);

ReactDOM.render(<AuthenticatedComponent isAuthenticated={false} info="This is important"/>, document.getElementById('root'))
