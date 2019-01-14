import React from 'react';

export default class Other extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <div>其他管理</div>
            </div>
        )
    }
}