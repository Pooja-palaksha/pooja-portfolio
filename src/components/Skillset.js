import React from 'react';
import './Skillset.css'; // We will create this CSS file next
import { Slide } from 'react-awesome-reveal';

function Skillset() {
    return (
        <section className="skillset">
            <Slide direction="right" triggerOnce={true}>
                <h2>Skillset</h2>
                <ul>
                    <li>Programming Language – Java (OOPs), C</li>
                    <li>Web Development -HTML, CSS, JavaScript and MERN Stack (Currently Learning)</li>
                    <li>UI/UX - Figma</li>
                    <li>Databases -SQL, MongoDB</li>
                </ul>
            </Slide>
        </section>
    );
}

export default Skillset; 