import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Bport from '../assets/images/Bport.jpg';
import theGive from '../assets/images/theGive.jpg';
import tweeter from '../assets/images/tweeter.jpg';
import Rport from '../assets/images/Rport.jpg';
import Card from '../components/Card';
import Leena from '../assets/images/Leena.jpg';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Leena Rao Portfolio',
                    subTitle: 'React/Gatsby/Sanity',
                    imgSrc: Leena,
                    link: 'https://leenarao.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Surviving Baby',
                    subTitle: 'JavaScript Game',
                    imgSrc: Bport,
                    link: 'https://kelliematteson.github.io/project1',
                    selected: false
                },
                {
                    id: 2,
                    title: 'The Give',
                    subTitle: 'Ruby on Rails & React',
                    imgSrc: theGive,
                    link: 'https://thegiveapp.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: `What's for Dinner?`,
                    subTitle: 'Full Stack MERN',
                    imgSrc: Rport,
                    link: 'https://myrecipe-app21.herokuapp.com',
                    selected: false
                },
                {
                    id: 4,
                    title: `Tweeter`,
                    subTitle: 'Group Ruby/React',
                    imgSrc: tweeter,
                    link: 'https://tweeter-ui-goat.herokuapp.com/',
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