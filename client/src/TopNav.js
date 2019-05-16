import React from 'react';
import home from "./images/icon/home.png";
import student from "./images/icon/student.png";
import school from "./images/icon/school.png";
import about from "./images/icon/about.png";

export default class TopNav extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper  teal lighten-2">
                        <a href="#" className="brand-logo center">
                            <i className="material-icons">people_outline</i>
                            Kosen Community
                        </a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/students">Students</a></li>
                            <li><a href="/colleges">Colleges</a></li>
                            <li><a href="/colleges">News</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#"><i className="material-icons">search</i></a></li>
                            <li><a href="#"><i className="material-icons">account_circle</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
