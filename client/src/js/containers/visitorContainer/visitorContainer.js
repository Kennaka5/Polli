import React from 'react';
import { Link } from 'react-router-dom';

class VisitorContainer extends React.Component {
    constructor(props) {
        super(props)
    }


render() {
    return (
        <div className="visitorBody">
            <ul>
                <li><a href="#/">Visitor Name</a></li>
            </ul>
        </div>
    )
}
}

export default VisitorContainer;
