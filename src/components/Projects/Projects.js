import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bestBuyReplica from "../../Assets/Projects/bestBuyReplica.png";
import compilerSimulator from "../../Assets/Projects/compilerSimulator.png";
import neuralNetClassifier from "../../Assets/Projects/neuralNetClassifier.png";
import geneticAlgorithm from "../../Assets/Projects/geneticAlgorithm.png";
import kMeansClustering from "../../Assets/Projects/kMeansClustering.png";
import binaryClassificationComparison from "../../Assets/Projects/binaryClassificationComparison.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Portfolio Showcase </strong>
        </h1>
        <p style={{ color: "white" }}>
          Listed here are all the projects I have been involved in.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bestBuyReplica}
              isBlog={false}
              title="Best buy Replica"
              description="A microservice-based replica of the Best Buy website was developed. It included containerized apps, database integration, caching, RabbitMQ for intercommunication, and rigorous load testing. Technologies used: Java, Spring Boot, PostgreSQL, MongoDB, Redis, RabbitMQ, Docker, Kubernetes."
              ghLink="https://github.com/Ziaad-Khaled/best-buy-replica"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compilerSimulator}
              isBlog={false}
              title="Compiler Simulator"
              description="The Compiler Simulator project explores vital compiler components, such as RegExToNfa (for converting regular expressions to NFAs), NfaToDfa (transforming NFAs into DFAs), FallbackDfa (handling binary strings), CfgLeftRecElim (eliminating left recursion), CfgFirstFollow (computing First and Follow sets), and CfgLl1Parser (LL(1) parsing)."
              ghLink="https://github.com/Ziaad-Khaled/compiler-simulator"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neuralNetClassifier}
              isBlog={false}
              title="Neurral Network Classifier"
              description="The neuralnet-classifier project trains a neural network for banknote authentication using a simple architecture. It utilizes the Banknote Authentication dataset, split into training, validation, and testing sets. The training process employs batch training and backpropagation. Results include accuracy metrics, presented visually."
              ghLink="https://github.com/Ziaad-Khaled/neuralnet-classifier"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geneticAlgorithm}
              isBlog={false}
              title="Genetic Algorithm"
              description="The genetic-algorithm project implements a Genetic Algorithm (GA) for optimizing two objective functions, one for global maximum search and another for global minimum search. It offers variable representations, crossover and mutation methods, and provides visualizations and fitness functions for solution quality evaluation."
              ghLink="https://github.com/Ziaad-Khaled/genetic-algorithm"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kMeansClustering}
              isBlog={false}
              title="K-Means Clustering"
              description="The K-Means project clusters CIFAR-10 dataset images into airplane, bird, and truck categories using K-means with K=3. It selects the best clustering outcome, assigns majority class labels to clusters, and classifies test images based on Euclidean distances to cluster centers."
              ghLink="https://github.com/Ziaad-Khaled/k-means-clustering"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={binaryClassificationComparison}
              isBlog={false}
              title="Binary Classification Comparison"
              description="TThe Binary Classification Comparison project analyzes and compares three machine learning models 
              across three datasets: Heart Disease, Income, and Gene Expression. It involves data preprocessing, training nine 
              models, and assessing performance metrics like accuracy, precision, recall, and F1-score."
              ghLink="https://github.com/Ziaad-Khaled/binary-classification-comparison"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
