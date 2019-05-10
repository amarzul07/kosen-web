import React from 'react';
import home from "./images/icon/home.png";
import student from "./images/icon/student.png";
import school from "./images/icon/school.png";
import about from "./images/icon/about.png";


export default class TopNav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/"><img src={home} alt="home"/></a>
                <a href="/news"><img src={about}/></a>
                <a href="/students"><img src={student}/></a>
                <a href="/colleges"><img src={school}/></a>
                <a href="/about"><img src={about}/></a>
                <div className="title"><span>Kosen Community</span></div>
            </div>
        )
    }
}
