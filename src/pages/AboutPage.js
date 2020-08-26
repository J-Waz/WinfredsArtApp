import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>The earliest memory I have hinting at creativity was climbing up and starting a record player to hear a
particular song. I had also been fascinated with cursive writing I saw on letters . My childhood was a
mixture of creative surroundings , as well as vibrant characters surrounding family life and daily routines .
Although I was exposed to violence I sought out various positive influences that included cooking,
drawing, music, sewing and sports.</p>

            <p>From a very early age I was encouraged to create and was chosen for local and regional art display.
My inspiration can simply rely on the beauty of nature and past experiences, or the complex and evolving
nature of the human psycho/social condition. As I create , there are moments where I feel I am
reconciling with parts of my past that were less than favorable . Having had several oppurtunities to
travel to some beautful destinations also inspire me to paint and try to convey the feeling of a vibrant
scene and a resolved subconscience.</p>

            <p>Throught out the years I rely on painting as a form of therapy and incorporate other forms of creativity . I
feel somewhat compelled to create as continues to help me grow as an individual as well as a major
coping mechanisim and at times provided a form of financial stability whwich in turn allows mem to help
others in several meanin ful ways</p>

            <p>Post high-school education started with busines college then progressed to The University of
Washington , Seattle in college I concetrated on ceramics drawing, , jewelry-making , painting ,
photography and screen-printing. I was also fortunate to present jewelry for boutiques as well as enjoy a
steady program showing art work .</p>

            <p>I enjoy painting the most and , specically painting landscapes and conveying feelings through my
combination of colors and shapes both real and imagined</p>
            </Content>
        </div>
    );

}

export default AboutPage;