import React from 'react';
import './Projects.css'; // We will create this CSS file next
import { Fade } from 'react-awesome-reveal';

function Projects() {
    return (
        <section className="projects">
            <Fade direction="down" triggerOnce={true}>
                <h2>Projects</h2>
            </Fade>
            <Fade direction="up" delay={200} triggerOnce={true}>
                <div className="project-item">
                    <h3>Spotify Website Clone</h3>
                    <p>
Built a Spotify clone using HTML and CSS, replicating the main design of the Spotify homepage. Developed a functional music player interface using styled icons, focusing on layout and visual consistency to mimic the original platform
</p>
                </div>
                <div className="project-item">
                    <h3>Fertistock – Fertilizer Stock Inventory management website</h3>
                    <p>Currently developing a fertilizer inventory management website. Successfully built the frontend using React.js with a responsive design and role-based login (Admin/Worker). Now working on backend integration using Node.js and MongoDB to enable authentication, user management, and real-time stock tracking features.</p>
                </div>
            </Fade>
        </section>
    );
}

export default Projects; 