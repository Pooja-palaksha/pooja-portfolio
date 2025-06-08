import React from 'react';
import './Hobbies.css'; // We will create this CSS file next
import { Fade } from 'react-awesome-reveal';

function Hobbies() {
    return (
        <section className="hobbies">
            <Fade direction="right" triggerOnce={true}>
                <h2>Hobbies</h2>
                <ul>
                    <li>Reading books, drawing and journaling.</li>
                </ul>
            </Fade>
        </section>
    );
}

export default Hobbies; 