import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/technology.module.css";
import TechnologyItemCard from "./TechnologyItemCard";

export default function Technoloy() {
  return (
    <section id="skills" className={`${classes.technology}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="12" md="12">
            <div className={`${classes.technology__content}`}>
              <SectionSubtitle subtitle="Skills" />
            </div>
            <div className={`${classes.technology__card}`}>
              <TechnologyItemCard
                cardTitle={"Javascript"}
                cardDec={"I have 4 years of experience in Javascript"}
                iconName={"ri-braces-fill"}
              />

              <TechnologyItemCard
                cardTitle={"React"}
                cardDec={"I have 4 years of experience in React"}
                iconName={"ri-reactjs-line"}
              />
              <TechnologyItemCard
                cardTitle={"Node Js"}
                cardDec={"I have 4 years of experience in Node Js"}
                iconName={"ri-npmjs-line"}
              />
              <TechnologyItemCard
                cardTitle={"Mango DB"}
                cardDec={"I have 4 years of experience in Mango"}
                iconName={"ri-database-2-line"}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
