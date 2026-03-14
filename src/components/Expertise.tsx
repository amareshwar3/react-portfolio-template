import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
"React",
"Next.js",
"Node.js",
"Express.js",
"FastAPI",
"TypeScript",
"REST APIs",
"MongoDB",
"PostgreSQL"
];

const labelsSecond = [
"Docker",
"Kubernetes",
"Redis",
"System Design",
"Microservices",
"API Architecture",
"Caching",
"Rate Limiting"
];

const labelsThird = [
"Python",
"LLMs",
"RAG",
"Transformers",
"Embeddings",
"Vector Databases",
"AI Chatbots",
"Machine Learning"
];

// function Expertise() {
//     return (
//     <div className="container" id="expertise">
//         <div className="skills-container">
//             <h1>Expertise</h1>
//             <div className="skills-grid">
//                 <div className="skill">
//                     <FontAwesomeIcon icon={faReact} size="3x"/>
//                     <h3>Full Stack Web Development</h3>
//                     <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Flask. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsFirst.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill">
//                     <FontAwesomeIcon icon={faDocker} size="3x"/>
//                     <h3>DevOps & Automation</h3>
//                     <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsSecond.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>

//                 <div className="skill">
//                     <FontAwesomeIcon icon={faPython} size="3x"/>
//                     <h3>GenAI & LLM</h3>
//                     <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise grade GenAI-enabled solutions to empower intelligent decision making.</p>
//                     <div className="flex-chips">
//                         <span className="chip-title">Tech stack:</span>
//                         {labelsThird.map((label, index) => (
//                             <Chip key={index} className='chip' label={label} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// }

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>

            <div className="skills-grid">

                {/* Full Stack Development */}

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack & Backend Engineering</h3>

                    <p>
                        I build scalable full-stack applications and high-performance backend systems.
                        My experience includes designing RESTful APIs, implementing microservice
                        architectures, and developing interactive web interfaces using modern
                        frameworks such as React, Next.js, and Node.js. I focus on clean architecture,
                        efficient data flow, and production-ready systems.
                    </p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                {/* DevOps / Systems */}

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>System Design, DevOps & Scalable Infrastructure</h3>

                    <p>
                        I design reliable and scalable systems with a focus on performance,
                        observability, and maintainability. My experience includes containerizing
                        applications with Docker, implementing caching and rate limiting using Redis,
                        and architecting backend services with modular patterns such as
                        Handler-Service-Repository. I also build monitoring dashboards and analytics
                        pipelines for production environments.
                    </p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>


                {/* AI / LLM */}

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI Systems, LLMs & Retrieval-Augmented Generation</h3>

                    <p>
                        I work on modern AI-driven applications leveraging Large Language Models,
                        Retrieval-Augmented Generation (RAG), and transformer architectures.
                        My work includes building intelligent chatbots, optimizing embedding
                        strategies, designing vector search pipelines, and integrating AI
                        capabilities into production systems to enable context-aware decision
                        support and knowledge retrieval.
                    </p>

                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}


export default Expertise;