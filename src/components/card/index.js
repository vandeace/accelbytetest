import React from "react";
import styled from "styled-components";
import { Card } from "reactstrap";

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
`;
const CustomCard = (props) => {
  let { data } = props;
  console.log(data, "data card");

  return (
    <>
      <Style>
        <h1>Authors Profile</h1>
        <h4>
          <span>Name</span>
          <span>{data.name}</span>
        </h4>
        <h4>
          <span>Username</span>
          <span>{data.username}</span>
        </h4>
        <h4>
          <span>Email</span>
          <span>{data.email}</span>
        </h4>
        <h4>
          <span>Phone</span>
          <span>{data.phone}</span>
        </h4>
        <h4>
          <span>Website</span>
          <span>{data.website}</span>
        </h4>
      </Style>
    </>
  );
};

export default CustomCard;
