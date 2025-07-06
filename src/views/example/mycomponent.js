import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Mhung',
        channel: 'Atoets'
    }

    /*
    JSX =>
    */
    render() {

        let name = 'Mhung';

        return (
            // <React.Fragment>
            <>
                <div className="1">
                    Hello my Component, my name is {this.state.name}
                </div>
                <div className="2">
                    My ex: {this.state['channel']}
                </div>
            </>
            // </React.Fragment>
        )
    }
}

export default MyComponent;