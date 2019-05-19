import React from 'react';
import TopNav from "../TopNav";
import CollegeInfo from "./CollegeInfo";
import Footer from "../Footer";

export default class CollegesPage extends React.Component {
    constructor(props) {
        super(props);

        // an example array of items to be paged
        const exampleItems = [...Array(150).keys()].map(i => ({id: (i + 1), name: 'Item ' + (i + 1)}));

        this.state = {
            exampleItems: exampleItems,
            pageOfItems: []
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({pageOfItems: pageOfItems});
    }

    render() {
        return (
            <div>
                <TopNav/>
                <div className="bodyContainer">
                    <div className="title">
                        College List
                    </div>
                    <div className="collegeSearch">
                        <div className="search-wrapper right">
                            <input placeholder="Search College"
                                   id="search" type="text" className="searchInput"/>
                            <i className="material-icons">search</i>
                            <div className="searchResults"></div>
                        </div>
                    </div>
                    <CollegeInfo/>
                </div>
                <Footer/>
            </div>
        )
    }
}
