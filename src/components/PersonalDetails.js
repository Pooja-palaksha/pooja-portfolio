import React from 'react';
import './PersonalDetails.css'; // We will create this CSS file next
import { Fade } from 'react-awesome-reveal';

function PersonalDetails() {
    return (
        <section className="personal-details">
            <Fade direction="up" triggerOnce={true}>
                <h2>Personal Details</h2>
                <p><strong>Location:</strong> Hassan</p>
                <p><strong>Phone Number:</strong> +91 8431671762</p>
                <p><strong>Email:</strong> poojapalaksha30@gmail.com</p>
                <p><strong>GitHub:</strong> <a href="https://github.com/Pooja-palaksha" target="_blank" rel="noopener noreferrer">github.com/Pooja-palaksha</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/pooja-k-p779b79267" target="_blank" rel="noopener noreferrer">linkedin.com/in/pooja-k-p779b79267</a></p>
            </Fade>
        </section>
    );
}

export default PersonalDetails; 