import React from 'react';

import Card from '../components/Card';

import GraphicMemories from '../assets/images/GraphicMemories.jpg';
import MovingForward from '../assets/images/MovingForward.jpg';
import Heidi from '../assets/images/Heidi.jpg';
import VirgoIntent from '../assets/images/VirgoIntent.jpg';
import SoFarSoGood from '../assets/images/SoFarSoGood.jpg';
import winfredprof from '../assets/images/winfredprof.jpg';
import Settled from '../assets/images/Settled.jpg';
import Mindscape from '../assets/images/Mindscape.jpg';
import Mindscape2 from '../assets/images/Mindscape2.jpg';
import TruthFollows from '../assets/images/TruthFollows.jpg';
import Mindscape3 from '../assets/images/Mindscape3.jpg';
import TheWayWeLove from '../assets/images/TheWayWeLove.jpg';
import TogetherAtLast from '../assets/images/TogetherAtLast.jpg';
import WheneverImWithYou from '../assets/images/WheneverImWithYou.jpg';
import EffiesPoint from '../assets/images/EffiesPoint.jpg';
import RoseTrio from '../assets/images/RoseTrio.jpg';
import FlowerStudy from '../assets/images/FlowerStudy.jpg';
import FlowerStudy2 from '../assets/images/FlowerStudy2.jpg';
import FlowersForMaya from '../assets/images/FlowersForMaya.jpg';
import Bouqet from '../assets/images/Bouqet.jpg';
import Bouqet2 from '../assets/images/Bouqet2.jpg';
import Bouqet3 from '../assets/images/Bouqet3.jpg';
import EmpireDreams from '../assets/images/EmpireDreams.jpg';
import PermissionToDream from '../assets/images/PermissionToDream.jpg';
import Tulips from '../assets/images/Tulips.jpg';
import HeartCondition from '../assets/images/HeartCondition.jpg';
import OfSoundMind from '../assets/images/OfSoundMind.jpg';
import Mindscape4 from '../assets/images/Mindscape4.jpg';
import FlowerStudy3 from '../assets/images/FlowerStudy3.jpg';
import Untitled from '../assets/images/Untitled.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Winfred Taylor',
                    subTitle: 'This is also my Life',
                    imgSrc: winfredprof,
                    link: 'https://www.artspacechicago.com/art-openings',
                    selected: false
                },
                {
                    id: 1,
                    title: "Of Sound Mind",
                    subTitle: '13 x 15 Oil on Canvas, $400',
                    imgSrc: OfSoundMind,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 2,
                    title: "Flower Study 2",
                    subTitle: '5 x 7 Oil on Canvas, $100',
                    imgSrc: FlowerStudy,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 3,
                    title: "Flower Study 2",
                    subTitle: '18 x 24 Oil on Canvas, $100',
                    imgSrc: FlowerStudy2,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Graphic Memories',
                    subTitle: '16 x 20 Oil on Canvas, $400',
                    imgSrc: GraphicMemories,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Moving Forward',
                    subTitle: '15 x 30 Oil on Canvas, $500',
                    imgSrc: MovingForward,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Heidi',
                    subTitle: '16 x 20 Oil on Canvas, $450',
                    imgSrc: Heidi,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Virgo Intent',
                    subTitle: '18 x 24 Oil on Canvas, $500',
                    imgSrc: VirgoIntent,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 8,
                    title: 'So far, So good',
                    subTitle: '14 x 18 Oil on Canvas, $400',
                    imgSrc: SoFarSoGood,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 9,
                    title: 'Settled',
                    subTitle: '25 x 33 Oil on Canvas, $700',
                    imgSrc: Settled,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 10,
                    title: 'Mindscapes',
                    subTitle: '4 x 4 Oil on Canvas, $75',
                    imgSrc: Mindscape,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 11,
                    title: 'Mindscapes',
                    subTitle: '4 x 4 Oil on Canvas, $75',
                    imgSrc: Mindscape2,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 12,
                    title: 'Truth Follows',
                    subTitle: '18 x 20 Oil on Canvas, $400',
                    imgSrc: TruthFollows,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 13,
                    title: 'Mindscapes',
                    subTitle: '4 x 4 Oil on Canvas, $75',
                    imgSrc: Mindscape3,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 14,
                    title: 'The Way We Love',
                    subTitle: '18 x 24 Oil on Canvas, $400',
                    imgSrc: TheWayWeLove,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 15,
                    title: 'Together At Last',
                    subTitle: '10 x 10 Oil on Canvas, $250',
                    imgSrc: TogetherAtLast,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 16,
                    title: "Whenever I'm With You",
                    subTitle: '18 x 24 Oil on Canvas, $700',
                    imgSrc: WheneverImWithYou,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 17,
                    title: "Effie's Point",
                    subTitle: '18 x 25 Oil on Canvas, $525',
                    imgSrc: EffiesPoint,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 18,
                    title: "Rose Trio",
                    subTitle: '18 x 24 Oil on Canvas, $250',
                    imgSrc: RoseTrio,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 19,
                    title: "Flowers for Maya",
                    subTitle: '5 x 7 Oil on Canvas, $150',
                    imgSrc: FlowersForMaya,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 20,
                    title: "Bouqet 3",
                    subTitle: '12 x 16 Oil on Canvas, $300',
                    imgSrc: Bouqet,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 21,
                    title: "Bouqet 2",
                    subTitle: '4 x 4 Oil on Canvas, $75',
                    imgSrc: Bouqet2,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 22,
                    title: "Bouqet",
                    subTitle: '4 x 4 Oil on Canvas, $75',
                    imgSrc: Bouqet3,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 23,
                    title: "Empire Dreams",
                    subTitle: '12 x 24 Oil on Canvas, $450',
                    imgSrc: EmpireDreams,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 24,
                    title: "Permission To Dream",
                    subTitle: '8 x 17 Oil on Canvas, $300',
                    imgSrc: PermissionToDream,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 25,
                    title: "Tulips",
                    subTitle: '11 x 14 Oil on Canvas, $300',
                    imgSrc: Tulips,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 26,
                    title: "Heart Condition",
                    subTitle: '16 x 20 Oil on Canvas, $400',
                    imgSrc: HeartCondition,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 27,
                    title: "Mindscapes",
                    subTitle: '4 x 4 Oil on Canvas, $75',
                    imgSrc: Mindscape4,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 28,
                    title: "Untitled",
                    subTitle: '4 x 4 Oil on Canvas, $75',
                    imgSrc: Untitled,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                {
                    id: 29,
                    title: "Flower Study 3",
                    subTitle: '4 x 4 Oil on Canvas, $75',
                    imgSrc: FlowerStudy3,
                    link: 'https://www.artspacechicago.com/shop',
                    selected: false
                },
                
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;