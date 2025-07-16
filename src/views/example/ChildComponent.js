import React from "react";

class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
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
        console.log('>>> check props: ', this.props)

        // let name = this.props.name;
        // let age = this.props.age;

        let { name, age, address, arrJobs } = this.props; //rút gọn

        let a ='';

        return (
            // <React.Fragment>
            <>
                <div className="jobLists">
                    {
                        a = arrJobs.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                    {console.log('>>> Check map array: ', a)}
                </div>
            </>
            // </React.Fragment>
        )
    }
}

export default ChildComponent;