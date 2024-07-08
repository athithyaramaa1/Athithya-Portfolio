import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ECommerce from "../../Assets/Projects/E-Commerce.jpg";
import CulinaryOdyssey from "../../Assets/Projects/Culinary_Odyssey.webp";
import ContactManager from "../../Assets/Projects/Contact_Manager.jpg";
import Filmora from "../../Assets/Projects/Filmora.jpg";
import GameDev from "../../Assets/Projects/Game_Dev.png";
import ToDo from "../../Assets/Projects/To_do.png";
import WeatherApp from "../../Assets/Projects/Weather_App.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ECommerce}
              isBlog={false}
              title="Var Tech Pro"
              description="This is a full-featured e-commerce application built using MERN Stack. It has separate admin and user dashboards. It allows admins to manage categories and products, while users can browse products, add them to their cart, and proceed through checkout to a payment gateway. The application emphasizes clean coding techniques and an MVP architecture, uses Context API to ensure efficient state management and robust security. It is also SEO optimized with dynamic page names."
              ghLink="https://github.com/athithyaramaa1/Var-Tech-Pro"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GameDev}
              isBlog={false}
              title="MiMory Game"
              description="Developed using HTML, CSS & JS, MiMory is an engaging memory game website that includes features such as text-to-speech for reading out text, and the ability to remember users' names and scores."
              ghLink="https://github.com/athithyaramaa1/mimory-game---final"
              demoLink="https://athithyaramaa1.github.io/mimory-game---final"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CulinaryOdyssey}
              isBlog={false}
              title="Culinary Odyssey"
              description="Designed and developed a dynamic food recipe website utilizing HTML, CSS, JavaScript, and external APIs. The site features a daily randomized meal presentation and a comprehensive search functionality allowing users to explore recipes by category. Each recipe includes detailed ingredient lists, descriptions, and direct YouTube links, enhancing user engagement and culinary exploration."
              ghLink="https://github.com/athithyaramaa1/Culinary-Odyssey/"
              demoLink="https://athithyaramaa1.github.io/Culinary-Odyssey/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ContactManager}
              isBlog={false}
              title="Contact Manager App - An Exclusive Backend App"
              description="This is a fully backend application designed for managing contacts. Users can perform CRUD operations on their contacts. It uses the MVP architecture for an organized folder structure and adheres to clean coding techniques. The application includes protected routes that are accessible only to authenticated users, utilizing JWT for security, and makes perfect use of middleware."
              ghLink="https://github.com/athithyaramaa1/Backend-Project-Contact-Manager-App"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="To - Do - App ~ Squadathon"
              description="A to-do app built during a squadathon where participants were tasked with creating a fully functional MERN stack application without external resources in under 2 hours. I efficiently completed the task, resulting in a feature-rich to-do app, and secured first place in the competition. The project maintained clean coding techniques and utilized MVP architecture, demonstrating my proficiency in organized coding techniques and development best practices along with MERN stack."
              ghLink="https://github.com/athithyaramaa1/V_ATHITHYA_RAMAA---Squadathon"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              isBlog={false}
              title="Weather App - Get real time updates of all cities around the world!"
              description="Created a weather app website using Vanilla JS where users can explore detailed information on instant weather reports of any city they search for."
              ghLink="https://github.com/athithyaramaa1/Weather-App"
              demoLink="https://weather-app-vartechpro.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
