import React from 'react';
import TopNav from "../TopNav";
import M from "materialize-css";
import image from '../images/icon/about.png';
import Footer from "../Footer";
import {NewsCard} from "./NewsPage";

const newsChild = (
    <div>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.I am a very simple card.
        I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.I am a very simple card.
        I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.
    </div>
);

export class TopImages extends React.Component {
    render() {
        return (
            <div className="carousel carousel-slider center">
                <div className="carousel-fixed-item center">
                    <a className="btn waves-effect white grey-text darken-text-2">button</a>
                </div>
                <div className="carousel-item red white-text" href="#one!">
                    <h2>First Panel</h2>
                    <p className="white-text">This is your first panel</p>
                </div>
                <div className="carousel-item amber white-text" href="#two!">
                    <h2>Second Panel</h2>
                    <p className="white-text">This is your second panel</p>
                </div>
                <div className="carousel-item green white-text" href="#three!">
                    <h2>Third Panel</h2>
                    <p className="white-text">This is your third panel</p>
                </div>
                <div className="carousel-item blue white-text" href="#four!">
                    <h2>Fourth Panel</h2>
                    <p className="white-text">This is your fourth panel</p>
                </div>
            </div>
        )
    }
}

export default class HomePage extends React.Component {
    constructor(props) {
        //必須
        super(props);

        //初期化
        this.state = {news: []};
    }

    componentDidMount() {
        M.AutoInit();

        let carousel = document.querySelectorAll('.carousel.carousel-slider');

        this.setState({news: [1, 2, 3]});

        M.Carousel.init(carousel, {
            indicators: true,
            fullWidth: true
        });
    }

    render() {
        return (
            <div>
                <TopNav/>
                <TopImages/>
                <div className="newsContainer">
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
                < Footer/>
            </div>
        )
    }
}
