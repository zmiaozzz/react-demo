import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Sidebar from './component/Sidebar';

// 项目管理
const ProjectManagement = Loadable({
    loader: () => import('./router/ProjectManagement'),
    loading: () => null
});

// 问答库管理
const QAManagement = Loadable({
    loader: () => import('./router/QAManagement'),
    loading: () => null
});

// 其他管理
const Other = Loadable({
    loader: () => import('./router/Other'),
    loading: () => null
});

const ProjectRouter = ({ match }) => (
    <div>
        <Sidebar match={match} />
        <Switch>
            <Route exact path={`${match.path}/qa-management`} component={QAManagement} />
            <Route path={`${match.path}/other`} component={Other} />
            <Redirect to={`${match.url}/qa-management`} />
        </Switch>
    </div>
);

const AppRouter = () => (
    <Router>
        <div>
            <Switch>
                <Route path='/project-management' exact component={ProjectManagement} />
                <Route path='/project/:project' component={ProjectRouter} />
                <Redirect to='/project-management' />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
