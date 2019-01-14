import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class ProjectManagement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>项目管理</h1>
                <div>
                    <div>
                        <Link to={`project/1`}>项目1</Link>
                    </div>
                    <div>
                        <Link to={`project/2`}>项目2</Link>
                    </div>
                </div>
            </div>
        );
    }
}

