/**
 * Created by 51212 on 2017/4/7.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, browserHistory} from 'react-router-dom';
//import { Router, Route, hashHistory } from 'react-router';
//import createBrowserHistroy from 'history/createBrowserHistory';
import LoginIn from './components/loginIn/loginIn';
import ProjectManageIndex from './components/projectManageIndex/projectManageIndex';

//const newHistroy = createBrowserHistroy();
class App extends Component{
    render(){
        return(
            <Router history={ browserHistory }>
                <div>
                    <Route path="/LoginIn" component={LoginIn}></Route>
                    <Route path="/ProjectManageIndex" component={ProjectManageIndex}></Route>
                </div>
            </Router>
        )
    }
};
ReactDOM.render(
      <App></App>,
    document.getElementById('container')
)

//ReactDOM.render(
//    <LoginIn></LoginIn>,
//    document.getElementById('container')
//);
