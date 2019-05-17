import React from 'react';
import TopNav from "../TopNav";
import image from "../images/icon/about.png";
import Footer from "../Footer";

const newsChild = (
    <div>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.I am a very simple card.
        I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.I am a very simple card.
        I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.
    </div>
);

export class NewsCard extends React.Component {
    render() {
        const title = this.props.title;
        const image = this.props.image;
        const newsChild = this.props.newsChild;
        return (
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src={image}/>
                        <span className="card-title blue-text">{title}</span>
                    </div>
                    <div className="card-content">
                        {newsChild}
                    </div>
                </div>
            </div>
        )
    }
}

export default class NewsPage extends React.Component {
    constructor(props) {
        //必須
        super(props);

        //初期化
        this.state = {news: []};
    }

    componentDidMount() {
        this.setState({news: [1, 2, 3, 4, 5, 6]});
    }

    render() {
        return (
            <div>
                <TopNav/>
                <div className="bodyContainer">
                    <div className="title">
                        News
                    </div>
                    <div className="row">
                        {this.state.news.map((news, index) => (
                            <NewsCard
                                key={index}
                                title={'Title'}
                                image={image}
                                newsChild={newsChild}
                            />
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
