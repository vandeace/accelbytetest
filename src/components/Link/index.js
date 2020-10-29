import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  padding: 5px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  cursor: pointer;
  color: #444;
  text-decoration: none;
  line-height: 1;
  font-size: 1rem;
  user-select: none;
  transition: box-shadow 0.2s ease-out;
  box-shadow: 0 6px 4px -4px transparent;
  &:hover {
    box-shadow: 0 6px 4px -4px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.2s ease-in;
  }
`;

const Card = ({ link, children }) => (
  <StyledLink to={link}>{children}</StyledLink>
);

export default Card;
