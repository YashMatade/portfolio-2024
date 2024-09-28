import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Implemented online payment gateway with Razorpay integration. Developed email notifications for buyers and admins. Created an admin dashboard for managing products. Built and managed a catalog of over 500 products.",
    },
    {
      title: "Learning Management System (LMS)",
      description:
        "Developed role-based login and secure authentication using JWT. Integrated video calling and real-time chat using WebRTC and Socket.io. Automated tutor scheduling and student booking. Managed over 1,000 active users.",
    },
    {
      title: "Race Management System (RMS)",
      description:
        "Created dynamic databases and real-time participant tracking. Developed a user-friendly interface with React.js, Redux, and AG Grid. Enabled instant updates and progress tracking for participants. Managed data for races involving over 2,000 participants.",
    },
    {
      title: "Digital Wallet Web App",
      description:
        "Implemented merchant account creation with PAN card verification. Integrated services for mobile recharge, bill payments, and AEPS systems. Developed video KYC functionality for merchant registration. Enabled over 10,000 transactions per month.",
    },
    {
      title: "Vehicle Service Management System",
      description:
        "Developed secure API endpoints with authorization tokens. Implemented role-based login for different user roles. Created API endpoints for generating PDF documents. Managed service schedules and histories for over 500 vehicles.",
    },
    {
      title: "Social Media App",
      description:
        "Built user profile management, posts, and feeds. Implemented search and discovery features. Integrated real-time data communication using Socket.io and WebRTC. Supported a community of over 5,000 users.",
    },
    {
      title: "Hospital Management System",
      description:
        "Developed appointment booking for doctors and lab tests. Integrated pharmacy product management with add-to-cart functionality. Implemented Razorpay payment integration. Managed over 1,500 daily transactions and bookings.",
    },
    {
      title: "PG Booking System",
      description:
        "Developed a platform to book PG accommodations directly based on rent. Implemented features for secure user registration and authentication. Designed an intuitive interface for browsing and booking PGs. Integrated real-time availability checks and booking confirmations. Enabled payment processing through secure gateways.",
    },
  ];

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
          {projects?.map((data, key) => {
            return (
              <Col md={4} className="project-card">
                <ProjectCard
                  title={data.title}
                  description={data.description}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
