import React from "react";
import ChildComponent from "./ChildComponent";


class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs:[
            {id: 'job01', title: 'developer', salary: '500$'},
            {id: 'job02', title: 'tester', salary: '500$'},
            {id: 'job03', title: 'devops', salary: '500$'}
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input: ', this.state)
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
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)} /><br />

                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.value} onChange={this.handleChangeLastName} /><br /><br />

                    <input type="submit"

                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>

                <ChildComponent
                    name={this.state.firstName}
                    age={'20'}
                    address={'hai duong'}
                    arrJobs={this.state.arrJobs}
                />
            </>
            // </React.Fragment>F
        )
    }
}

export default MyComponent;