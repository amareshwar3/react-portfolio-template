import React from 'react';
import '../assets/styles/EducationSkills.scss';

function EducationSkills() {
  return (
    <div className="container" id="education-skills">
      <div className="education-skills-container">
        <h1>Education and Skills</h1>

        <div className="education-grid">
          <div className="education-card">
            <h3>Indian Institute of Information Technology Allahabad</h3>
            <p className="edu-meta">India | Nov 2022 - Jun 2026</p>
            <p>Bachelor of Technology, Information Technology</p>
            <p>CGPA: 8.13 (till 7th semester)</p>
          </div>

          <div className="education-card">
            <h3>Narayana Junior College, Hyderabad</h3>
            <p className="edu-meta">India | 2020 - 2022</p>
            <p>Class XII Percentage: 97%</p>
          </div>
        </div>

        <div className="skills-block">
          <h2>Technical Skills</h2>

          <p>
            <span className="label">Languages:</span> C/C++, Java, Go, Python, JavaScript,
            TypeScript, SQL
          </p>

          <p>
            <span className="label">Frameworks and Technologies:</span> React Js, Next Js,
            Spring Boot, Node Js, Express Js, FastAPI, Tailwind CSS, REST APIs, Redis,
            Machine Learning, RAG, Embeddings, Transformers
          </p>

          <p>
            <span className="label">Databases and Tools:</span> MongoDB, PostgreSQL, Git,
            Postman, Docker, Kubernetes
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationSkills;