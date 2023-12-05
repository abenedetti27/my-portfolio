import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgURL, appURL, repoURL }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-card">
        <img src={imgURL} alt="Project" />
        <div className="project-details">
          <h3>{title}</h3>
          <a href={appURL} target="_blank" rel="noopener noreferrer">
            <img src={imgURL} alt={title} className="project-image" />
          </a>
          <p>
            <a href={repoURL} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </p>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
