import React from 'react';
import CSSModules from 'react-css-modules';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styles from './style.css';

@CSSModules(styles)
export default class QAManagement extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <div>问答库管理</div>
                <div styleName='test'>问答库管理内容</div>
            </div>
        )
    }
}