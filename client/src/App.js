import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import LoginPage from './component/LoginPage'
import HomePage from "./component/HomePage";
import NewsPage from "./component/NewsPage";
import StudentsPage from "./component/StudentsPage";
import CollegesPage from "./component/CollegesPage";
import AboutPage from "./component/AboutPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                    <BrowserRouter>
                        <Route exact path="/login" component={LoginPage}/>
                        <Route exact path="/home" component={HomePage}/>
                        <Route exact path="/news" component={NewsPage}/>
                        <Route exact path="/students" component={StudentsPage}/>
                        <Route exact path="/colleges" component={CollegesPage}/>
                        <Route exact path="/about" component={AboutPage}/>
                    </BrowserRouter>
            </div>
        );
    }
}

export default App;
