import React from "react";

class MyComponent extends React.Component {

    state = {
        name: '',
        ex: 'Atoets'
    }

    handleOnChangeName = (event) =>{
        // console.log(event.target.value, 'event target: ', event.target, 'event object: ', event)

        // this.state.name = event.target.value; //không nên dùng

        this.setState({
            name: event.target.value,
            ex: 'at'
        })
    }

    handleClickButton = () =>{
        alert('click me')
    }
 
    /*
    JSX =>
    */
    render() {
        console.log('>>> call render: ', this.state)
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
                    My ex: {this.state['ex']}
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