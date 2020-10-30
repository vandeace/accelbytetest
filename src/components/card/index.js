import React from "react";
import styled from "styled-components";
import { Card, Col, Row } from "reactstrap";

const Style = styled(Card)`
  margin: 20px auto;
  width: 500px;
  box-shadow: 0 2px 4px #ddd;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  span {
    text-align: left;
  }
  h1 {
    padding: 15px 0;
    margin: 0;
    font-size: 30px;
  }
  h4 {
    width: 100%;
    margin: 10px 0;
    font-size: 16px;
    justify-content: space-between;
  }
  .row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    font-size: 20px;
  }
  .col {
    padding: 5px;
    padding-left: 10px;
    text-align: left;
    width: 50%;
  }
`;
const CustomCard = (props) => {
  let { data } = props;
  console.log(data, "data card");

  return (
    <>
      <Style>
        <h1>Authors Profile</h1>
        <Row>
          <Col className="name">Name</Col>
          <Col>{data.name}</Col>
        </Row>
        <Row>
          <Col className="name">Username</Col>
          <Col>{data.username}</Col>
        </Row>
        <Row>
          <Col className="name">Email</Col>
          <Col>{data.email}</Col>
        </Row>
        <Row>
          <Col className="name">Phone</Col>
          <Col>{data.phone}</Col>
        </Row>
        <Row>
          <Col className="name">Website</Col>
          <Col>{data.website}</Col>
        </Row>
      </Style>
    </>
  );
};

export default CustomCard;
