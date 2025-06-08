import React from 'react';
import './Education.css'; // We will create this CSS file next
import { Slide } from 'react-awesome-reveal';

function Education() {
    return (
        <section className="education">
            <Slide direction="left" triggerOnce={true}>
                <h2>Education</h2>
                <ul>
                    <li>
                        <strong>BE-CSE:</strong> Malnad College of Engineering Hassan (CGPA: 9.33/2026)
                    </li>
                    <li>
                        <strong>PUC:</strong> Shree Subramanyeshwara Pre-University College, Subramanya (93.83%/2020)
                    </li>
                    <li>
                        <strong>SSLC:</strong> Government High School, Elimale,Sullia TQ (94.24%/2018)
                    </li>
                </ul>
            </Slide>
        </section>
    );
}

export default Education; 