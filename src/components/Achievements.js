import React from 'react';
import './Achievements.css'; // We will create this CSS file next
import { Zoom } from 'react-awesome-reveal';

function Achievements() {
    return (
        <section className="achievements">
            <Zoom triggerOnce={true}>
                <h2>Personal Achievements</h2>
                <ul>
                    <li>Certified in Soft Skills Development -NPTEL</li>
                  
                </ul>
            </Zoom>
        </section>
    );
}

export default Achievements; 