import React from 'react';
import TopNav from "../TopNav";
import M from "materialize-css";
import kosenClubImage from '../images/kosen-club.jpg';
import kosenClubImage2 from '../images/kosen-club2.jpg';
import Footer from "../Footer";
import { FacebookProvider, Page } from 'react-facebook';

export default class AboutPage extends React.Component {
    componentDidMount() {
        M.AutoInit();

        const options = {
            responsiveThreshold: 0
        }

        let parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax, options);
    }

    render() {
        return (
            <div>
                <TopNav/>
                <div className="">
                    <div className="parallax-container">
                        <div className="parallax"><img src={kosenClubImage}/></div>
                    </div>
                    <div className="section white">
                        <div className="bodyContainer">
                            <h2 className="title">Kosen Club</h2>
                            <div className="description">
                                1990 оноос Японы засгийн газрын шугамаар , Японы технологийн сургуульд Монгол оюутан
                                суралцаж эхэлжээ.
                                Жилээс жилд суралцагчдын тоо өсөн нэмэгдсээр, эдүгээ 200 илүү суралцагчид болон
                                төгсөгчидтэй “Коосэн”-ийхан гэдэг нэгэн өргөн арми бий болсон байна.
                                “Коосэн”-гийхан бид бүхэн коосэн, цаашлаад их сургуулиар дамжин, бодит капиталыг бий
                                болгох технологийг эзэмшин, нийгмийн сайн сайхны төлөө бүтээн байгуулалтыг хийх
                                “инженерүүд” болдог билээ.
                                “Коосэн” клуб нь , “Коосэн”-ийнхан , “Инженерүүд” гэсэн бидний холбоог үндэслэн ,
                                өөрсдийн ашиг сонирхолыг илэрхийлэн, бие биенээ тусалж дэмжиж цаашлаад Монгол Японыг
                                холбосон гүүр үүсгэн
                                ажиллах зорилготой юм. Тус клуб нь сайн дурын хэт албархаг бус , ашгийн бус байгууллага
                                байх болно.
                            </div>
                            <FacebookProvider appId="247230897566">
                                <Page href="https://www.facebook.com/groups/247230897566/" tabs="timeline" />
                            </FacebookProvider>
                        </div>
                    </div>
                    <div className="parallax-container">
                        <div className="parallax"><img src={kosenClubImage2}/></div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
