import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';




function AboutPage(props) {



    return(
        <div>
            <Hero title={props.title}/>

            <Content>
             <p>
             <strong>I’m a Problem Solver.</strong> And I will not give up. This leaves me bleary eyed in front of my screen a little too often. Thankfully, I know when to pull away, go for a run and come back refreshed and eager to try a different approach. I love to build a full stack application. I love the challenge of a new framework and the excitement of seeing the magic it comes with. I also obsess over the little details of the front end, getting that heading in just the right spot or playing around with a little spring animation. My two little ones push me to keep learning<strong> and</strong> to stop everything and play hide and seek.
             </p>
             <h4>
            Skills: 
             </h4>
             <strong><p>Programming Languages</p></strong>
             <p>Javascript, HTML5, CSS/Sass</p>
             <strong><p>Libraries & Frameworks</p></strong>
             <p>jQuery, React, Node.js, Express, Gatsby</p>
             <strong><p>Tools & Platforms</p></strong>
             <p>Git, Gulp, Sanity, Netlify, Webpack, Heroku, Wordpress, PostrgreSQL, MongoDB, Mongoose, Postman, Bootstrap</p>
             <p>Take a look at my <a href="https://docs.google.com/document/d/e/2PACX-1vTc3nPUynC535J8tkDYz281XN3mlVz6gLpb7YoESWyaAw81_THvt4BQDOvowDboT2P0FmTBQEZ4igM6/pub">Resume</a></p>
             
            </Content>

        </div>
    );

}

export default AboutPage;