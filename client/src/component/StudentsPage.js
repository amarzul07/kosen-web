import React from 'react';
import TopNav from "../TopNav";
import Footer from "../Footer";


export class Students extends React.Component {
    render() {
        return (
            <div>
                <table class="striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>College</th>
                        <th>University</th>
                        <th>Company</th>
                        <th>Mail Address</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.props.students.map((student)=>(
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.college}</td>
                            <td>{student.university}</td>
                            <td>{student.company}</td>
                            <td>{student.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default class StudentsPage extends React.Component {
    constructor(props) {
        //必須
        super(props);

        //初期化
        this.state = {
            years: [2000, 2001, 2002, 2003, 2004],
            studentsInfo: []
        };

    }

    componentDidMount() {
        this.setState({
            studentsInfo: [
                {
                    year: 2000,
                    students: [
                        {name: 'Gerlee', college: 'Sendai', university: 'Tokyo', company: 'Yahoo', email: 'bbb@mail.com'},
                        {name: 'Chimgee', college: 'Toyota', university: 'Tokyo',company: 'Yahoo', email: 'bbb@mail.com'}
                    ]
                },
                {
                    year: 2001,
                    students: [
                        {name: 'Gerlee', college: 'Sendai', university: 'Tokyo', company: 'Yahoo', email: 'bbb@mail.com'},
                        {name: 'Chimgee', college: 'Toyota', university: 'Tokyo',company: 'Yahoo', email: 'bbb@mail.com'}
                    ]
                },
                {
                    year: 2002,
                    students: [
                        {name: 'Gerlee', college: 'Sendai', university: 'Tokyo', company: 'Yahoo', email: 'bbb@mail.com'},
                        {name: 'Chimgee', college: 'Toyota', university: 'Tokyo',company: 'Yahoo', email: 'bbb@mail.com'}
                    ]
                },
                {
                    year: 2003,
                    students: [
                        {name: 'Gerlee', college: 'Sendai', university: 'Tokyo', company: 'Yahoo', email: 'bbb@mail.com'},
                        {name: 'Chimgee', college: 'Toyota', university: 'Tokyo',company: 'Yahoo', email: 'bbb@mail.com'}
                    ]
                },
                {
                    year: 2004,
                    students: [
                        {name: 'Gerlee', college: 'Sendai', university: 'Tokyo', company: 'Yahoo', email: 'bbb@mail.com'},
                        {name: 'Chimgee', college: 'Toyota', university: 'Tokyo',company: 'Yahoo', email: 'bbb@mail.com'}
                    ]
                },
                {
                    year: 2012,
                    students: [
                        {name: 'Amraa', college: 'Sendai', university: 'UEC',company: 'Yahoo', email: 'aaa@mail.com'},
                        {name: 'Eegii', college: 'Toyota', university: 'UEC',company: 'Yahoo', email: 'aaa@mail.com'}
                    ]
                },
            ]
        })
    }

    render() {

        return (
            <div>
                <TopNav/>
                <div className="bodyContainer">
                    <div className="title">Student List of Year</div>
                    <ul className="collapsible">
                        {this.state.studentsInfo.map((info, index) => (
                            <li key={index}>
                                <div className="collapsible-header">
                                    <i className="material-icons">group</i>
                                    {info.year} onii elsegchid
                                </div>
                                <div className="collapsible-body">
                                        <Students
                                            key={index}
                                            students={info.students}
                                        />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Footer/>
            </div>
        )
    }
}
