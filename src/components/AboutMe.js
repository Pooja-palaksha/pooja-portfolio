import React from 'react';
import './AboutMe.css'; // We will create this CSS file next
import { Fade } from 'react-awesome-reveal';

function AboutMe() {
    return (
        <section className="about-me">
            <Fade direction="up" triggerOnce={true}>
                <h2>About Me</h2>
                <p>Focused and committed individual with a background in Computer Science, eager to contribute effectively and continuously enhance technical skills to support organizational goals.</p>
            </Fade>
        </section>
    );
}

export default AboutMe; 