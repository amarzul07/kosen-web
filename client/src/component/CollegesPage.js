import React from 'react';
import TopNav from "../TopNav";
import {Pagination} from 'react-bootstrap';

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

                    <div className="text-center">
                        {this.state.pageOfItems.map((item) => (
                            <div key={item.id}>{item.name}</div>
                        ))}
                        <Pagination items={this.state.exampleItems} onChangePage={this.onChangePage.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
}
