import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/card";

const CustomStyle = styled.div`
  .profile {
    margin: 20px auto;
  }
`;
const User = () => {
  let { id } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    if (user.length === 0) {
      getUser();
      console.log("no data");
    }
  });
  console.log(id);
  console.log(user);

  const getUser = async () => {
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(res.data);
    setUser(res.data);
  };

  return (
    <>
      <CustomStyle>
        <div className="profile">
          <Card data={user} />
          
        </div>
      </CustomStyle>
    </>
  );
};

export default User;
