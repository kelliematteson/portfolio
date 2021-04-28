import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props) {



    return(
        <div>
            <Hero title={props.title}/>

            <Content>
             <p>
             <strong>I’m an actor who codes.</strong> An easy fit for me because both require breaking into the unknown. When crafting a character, I sift through the script and use trusted technique to pull it together. As a developer, I turn to my favorite tools, javascript, React and Ruby, to tease out creative functionality and elegant solutions. 
             </p>
             <h4>
            Skills: 
             </h4>
             <strong><p>Programming Languages</p></strong>
             <p>Javascript, HTML5, CSS/Sass</p>
             <strong><p>Libraries & Frameworks</p></strong>
             <p>jQuery, React, Node.js, Express</p>
             <strong><p>Tools & Platforms</p></strong>
             <p>Git, Gulp, Webpack, Heroku, Wordpress, PostrgreSQL, MongoDB, Mongoose, Postman, Bootstrap</p>
             <h4>Resume</h4>
             <img src="../assets/images/kelliematteson_fullstackdevResume.jpg" alt="resume"/>
            </Content>

        </div>
    );

}

export default AboutPage;