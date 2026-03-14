import React from "react";
import m1 from '../assets/images/m1.png';
import m2 from '../assets/images/m2.png';
import m3 from '../assets/images/m3.png';
import m4 from '../assets/images/m4.png';
import m5 from '../assets/images/m5.png';
import m6 from '../assets/images/m6.png';
import m7 from '../assets/images/m7.png';
import m8 from '../assets/images/m8.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>

        <div className="projects-grid">

            <div className="project">
                <a href="https://game-changers-main.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={m1} className="zoom" alt="thumbnail" width="100%"/>
                </a>

                <a href="https://game-changers-main.vercel.app/" target="_blank" rel="noreferrer">
                    <h2>Code Share Test</h2>
                </a>

                <p>
                Real-time collaborative coding platform enabling multiple users to write, run,
                and preview code simultaneously. Built live code synchronization using WebSockets,
                integrated Judge0 API for multi-language code execution, and implemented secure
                backend APIs for collaborative session management.
                </p>
            </div>


            <div className="project">
                <a href="https://github.com/amareshwar3/API-Gateway-with-Analytics" target="_blank" rel="noreferrer">
                    <img src={m2} className="zoom" alt="thumbnail" width="100%"/>
                </a>

                <a href="https://github.com/amareshwar3/API-Gateway-with-Analytics" target="_blank" rel="noreferrer">
                    <h2>API Sentry — API Gateway & Analytics</h2>
                </a>

                <p>
                Designed a scalable API gateway system with JWT authentication,
                RBAC authorization, and Redis-backed rate limiting.
                </p>
            </div>


            <div className="project">
                <a href="https://iiitapfolio-8d6f.onrender.com/" target="_blank" rel="noreferrer">
                    <img src={m3} className="zoom" alt="thumbnail" width="100%"/>
                </a>

                <a href="https://iiitapfolio-8d6f.onrender.com/" target="_blank" rel="noreferrer">
                    <h2>IIITA Portfolio Platform</h2>
                </a>

                <p>
                Developed a full-stack portfolio platform allowing developers to showcase
                projects, skills, and professional experience.
                </p>
            </div>


            <div className="project">
                <a href="https://finboard-rosy.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={m4} className="zoom" alt="thumbnail" width="100%"/>
                </a>

                <a href="https://finboard-rosy.vercel.app/" target="_blank" rel="noreferrer">
                    <h2>FinBoard — Financial Analytics Dashboard</h2>
                </a>

                <p>
                Interactive financial analytics dashboard visualizing market data
                using dynamic charts and real-time metrics.
                </p>
            </div>


            <div className="project">
                <a href="https://realschoolmanagementsystem.netlify.app/" target="_blank" rel="noreferrer">
                    <img src={m5} className="zoom" alt="thumbnail" width="100%"/>
                </a>

                <a href="https://realschoolmanagementsystem.netlify.app/" target="_blank" rel="noreferrer">
                    <h2>EduWave — School Management System</h2>
                </a>

                <p>
                Built a comprehensive school management system to streamline
                student records and administrative workflows.
                </p>
            </div>


            <div className="project">
                <a href="https://github.com/amareshwar3/Retrieval-Augmented-Generation-RAG" target="_blank" rel="noreferrer">
                    <img src={m6} className="zoom" alt="thumbnail" width="100%"/>
                </a>

                <a href="https://github.com/amareshwar3/Retrieval-Augmented-Generation-RAG" target="_blank" rel="noreferrer">
                    <h2>AI Tutor — RAG Chatbot</h2>
                </a>

                <p>
                AI-powered chatbot answering chemistry questions using
                Retrieval-Augmented Generation with LangChain and ChromaDB.
                </p>
            </div>


            <div className="project">
                <a href="https://github.com/amareshwar3/Stock-Price-Prediction" target="_blank" rel="noreferrer">
                    <img src={m7} className="zoom" alt="thumbnail" width="100%"/>
                </a>

                <a href="https://github.com/amareshwar3/Stock-Price-Prediction" target="_blank" rel="noreferrer">
                    <h2>Stock Price Prediction</h2>
                </a>

                <p>
                Machine learning model for predicting stock price trends
                using historical financial datasets.
                </p>
            </div>


            <div className="project">
                <a href="https://github.com/amareshwar3/Translation-with-Transformer" target="_blank" rel="noreferrer">
                    <img src={m8} className="zoom" alt="thumbnail" width="100%"/>
                </a>

                <a href="https://github.com/amareshwar3/Translation-with-Transformer" target="_blank" rel="noreferrer">
                    <h2>Transformer Neural Machine Translation</h2>
                </a>

                <p>
                Implemented a transformer-based neural machine translation model
                from scratch using TensorFlow with attention visualization.
                </p>
            </div>

        </div>
    </div>
    );
}

export default Project;