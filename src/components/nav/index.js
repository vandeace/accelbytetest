import React from "react";
import Link from "../Link";
import styled from "styled-components";

const CustomStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 30px;
    padding: 0;
    margin: 0;
  }
`;

const Nav = () => {
  return (
    <>
      <CustomStyle>
        <Link link="/">
          <h1>Home</h1>
        </Link>
      </CustomStyle>
    </>
  );
};

export default Nav;
