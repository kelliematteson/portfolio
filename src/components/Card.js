import React from 'react';

import CardInfo from '../components/CardInfo';

function Card(props) {

    return (
        <div className="d-inline-block k-card" onClick={(e) => props.click(props.item)}>
            <img className="k-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
    { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} /> }
        </div>
    )


}

export default Card;