import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class SideBar extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/qa-management`}>问答管理</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/other`}>其他管理</Link>
                    </li>
                </ul>
            </div>
        )
    }
}