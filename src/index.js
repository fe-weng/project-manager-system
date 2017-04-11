/**
 * Created by 51212 on 2017/4/7.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, browserHistory, Switch} from 'react-router-dom';
import createBrowserHistroy from 'history/createBrowserHistory';
import LoginIn from './components/loginIn/loginIn';
import ProjectManage from './components/projectManage/projectManage';

//const newHistroy = createBrowserHistroy();
ReactDOM.render(
        <Switch histroy={browserHistory}>
            <div>
                <Route path="/" component={LoginIn}></Route>
                <Route path="/ProjectManage" component={ProjectManage}></Route>
            </div>
        </Switch>,
    document.getElementById('container')
)

//ReactDOM.render(
//    <LoginIn></LoginIn>,
//    document.getElementById('container')
//);
