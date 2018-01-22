import React from 'react';
import { Link } from 'react-router-dom';

class AdminContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            surveyModel: false
        }
        this.handleSurveyModal = this.handleSurveyModal.bind(this)
    }

    handleSurveyModal() {
        this.setState({ surveyModel: true })
        console.log("click")
    }


    renderSurveyModal() {
        const surveyModel = this.state.surveyModel
        if (surveyModel === false) {
            return null
        }
        if (surveyModel === true) {
            return (<div className="modal">

                <div className="modal-content">
                    <div className="surveyForm">
                    <form action="/action_page.php">
                        <label>Let's create a survey</label>
                        <input type="text" id="fname" name="firstname" placeholder="Name of survey"/>
                                <Link to="/createsurvey"><input type="submit" value="Submit" /></Link>
                    </form>
                    </div>
                </div>

            </div>)
        }
    }

    render() {
        return (
            <div>
                            <div className="dashpage">
                                {this.renderSurveyModal()}
                                <ul className="admin">
                                    <li><a className="active" href="#home">UserName</a></li>
                                    <li><a onClick={this.handleSurveyModal}>Add Survey</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#about">About</a></li>
                                </ul>
                                <div className="dashboard">
                                    <h2>Hello Admin</h2>
                                    <h3>You and add and Maintain your surveys here!</h3>
                                </div>
                            </div>
                        </div>
                        )
    }
}

export default AdminContainer