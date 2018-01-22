import React from 'react';
import { Link } from 'react-router-dom';

class CreateSurveyContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            surveyModel: false
        }
        this.handleSurveyModal = this.handleSurveyModal.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleSurveyModal() {
        this.setState({ surveyModel: true })
        console.log("click")
    }

    handleClose(){
        this.setState({surveyModel: false})
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
                        <label>Let's add a question</label>
                        <input type="text" id="fname" name="firstname" placeholder="Question"/>
                        <label>Answer A</label>
                        <input type="text" id="fname" name="firstname" placeholder="A"/>
                        <label>Answer B</label>
                        <input type="text" id="fname" name="firstname" placeholder="B"/>
                        <label>Answer C</label>
                        <input type="text" id="fname" name="firstname" placeholder="C"/>
                        <label>Answer D</label>
                        <input type="text" id="fname" name="firstname" placeholder="D"/>
                              <input type="submit" value="Submit" onClick={this.handleClose}/>
                    </form>
                    </div>
                </div>

            </div>)
        }
    }
render() {
    return(
        <div>
            <div>
                <div className="dashpage">
                {this.renderSurveyModal()}
                    <ul className="admin">
                        <li><a className="active" href="#/">UserName</a></li>
                        <li><a onClick={this.handleSurveyModal}>Post Question</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                        <div className="dashboard">
                            <h2>"Survey Name"</h2>
                            <h3>add, post and edit your questions here</h3>
                        </div>
                </div>
            </div>
        </div>
    )
}
}

export default CreateSurveyContainer