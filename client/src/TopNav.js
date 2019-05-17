import React from 'react';
import home from "./images/icon/home.png";
import student from "./images/icon/student.png";
import school from "./images/icon/school.png";
import about from "./images/icon/about.png";
import M from "materialize-css";

export default class TopNav extends React.Component {
    componentDidMount() {
        M.AutoInit();
        let dropdowns = document.querySelectorAll('.dropdown-trigger');
        let options = {
            inDuration: 300,
            outDuration: 300,
            coverTrigger: false, // Displays dropdown below the button
        };
        M.Dropdown.init(dropdowns,  options);

    }

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
                            <li><a href="/home">Home</a></li>
                            <li><a href="/news">News</a></li>
                            <li><a href="/students">Students</a></li>
                            <li><a href="/colleges">Colleges</a></li>
                            <li><a href="/about">About</a></li>
                        </ul>
                        <ul id="nav-mobile" className="left hide-on-large-only">
                            <a
                                className='dropdown-trigger'
                                data-target='dropdown1'
                            >
                                <i className="material-icons">dehaze</i></a>
                            <ul id='dropdown1' className='dropdown-content'>
                                <li><a href="/home">Home</a></li>
                                <li><a href="/news">News</a></li>
                                <li><a href="/students">Students</a></li>
                                <li><a href="/colleges">Colleges</a></li>
                                <li><a href="/about">About</a></li>
                            </ul>
                        </ul>
                        <ul className="right">
                            <li><a href="#"><i className="material-icons">search</i></a></li>
                            <li><a href="#"><i className="material-icons">account_circle</i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
