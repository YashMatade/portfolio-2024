import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yash Matade </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently employed as a software developer at Primates
            Development pvt ltd.
            <br />
            Core Competencies: <br /> 1. Proficient in MongoDB, Express.js,
            React, and Node.js <br /> 2. Strong understanding of data structures
            and algorithms <br /> 3. Experience with cloud platforms like AWS
            and Azure
            <br /> 4. Skilled in system design and architecture <br /> 5.
            Knowledgeable in CI/CD pipelines and DevOps practices
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning From Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Posts On linkedin
            </li>
            <li className="about-activity">
              <ImPointRight /> Create and learn about AI
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Imagine, Believe, And Achieve"
          </p>
          <footer className="blockquote-footer">Yash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
