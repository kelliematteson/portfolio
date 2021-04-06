import React from 'react';

import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {



    return(
        <div>
            <Hero title={props.title}/>

            <Content>
             <p>
             I’m an actor who codes. An easy fit for me because the two require a similar approach. Acting allows me to find my own way into a character. With programming, I step into challenges with an open mind and leverage the tools available to creatively problem solve and breathe life into products.</p>  
             
             <p>
            List all the programs I've worked with here. 
             </p> 
            </Content>

        </div>
    );

}

export default AboutPage;