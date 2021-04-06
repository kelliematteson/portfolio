import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Bport from '../assets/images/Bport.jpg';
import KMport from '../assets/images/KMport.jpg';
import Rport from '../assets/images/Rport.jpg';
import Card from '../components/Card';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Baby Project',
                    subTitle: 'JavaScript Game',
                    imgSrc: Bport,
                    selected: false
                },
                {
                    id: 1,
                    title: 'Kellie Matteson',
                    subTitle: 'FullStack Engineer',
                    imgSrc: KMport,
                    selected: false
                },
                {
                    id: 2,
                    title: 'Tweeter',
                    subTitle: 'Ruby on Rails',
                    imgSrc: Rport,
                    selected: false
                }
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