import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Mhung',
        channel: 'Atoets'
    }

    handleOnChangeName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () =>{
        console.log('hihifsdf');
        alert('click me')
    }

    /*
    JSX =>
    */
    render() {

        // let name = 'Mhung';

        return (
            // <React.Fragment>
            <>
                <div className="1">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello my Component, my name is {this.state.name}
                </div>
                <div className="2">
                    My ex: {this.state['channel']}
                </div>
                <div className="3">
                    <button onClick={this.handleClickButton}>Click me </button>
                </div>
            </>
            // </React.Fragment>
        )
    }
}

export default MyComponent;