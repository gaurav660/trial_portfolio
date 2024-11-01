import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import portfolio from "../../Assets/Projects/portfolio.png";
import server from "../../Assets/Projects/server.png";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";

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
              imgPath={portfolio}
              isBlog={false}
              title="Gaurav | Portfolio"
              description="Designed and developed a website using React.js and hosted on vercel.com. It’s a multi-page website and well structured for maintainability and future updates."
              ghLink="https://github.com/gaurav660/trial_portfolio"
              demoLink="https://www.grvdev.online/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={server}
              isBlog={false}
              title="efficient Server"
              description="Developed an AWS server with elastic scalability using Terraform and Git, optimizing performance under variable traffic loads through ELB and ASG with real-time monitoring through CloudWatch and notifications via SNS."
              ghLink="https://github.com/gaurav660/elastic-and-scalable-server-on-AWS"
              demoLink=""
            />
          </Col>
            
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              // isBlog={false}
              // title="Chatify"
              // description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              description="Working on it."
              // ghLink="https://github.com/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={bitsOfCode}
              // isBlog={false}
              // title="Bits-0f-C0de"
              // description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              description="Working on it."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={editor}
              // isBlog={false}
              // title="Editor.io"
              // description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              description="Working on it."
              // ghLink="https://github.com/"
              // demoLink="https://"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              // isBlog={false}
              // title="Plant AI"
              // description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              description="Working on it."
              // ghLink="https://github.com/"
              // demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              // isBlog={false}
              // title="Face Recognition and Emotion Detection"
              // description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              // Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              description="Working on it."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // // demoLink=""      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
