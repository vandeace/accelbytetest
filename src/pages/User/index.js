import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/card";
import Link from "../../components/Link";

const CustomStyle = styled.div`
  .profile {
    margin: 20px auto;
  }
  .album {
    margin: 20px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  h5 {
    font-size: 24px;
  }
  .data {
    text-align: left;
  }
  .item {
    padding: 10px;
  }
`;
const User = () => {
  let { id } = useParams();
  const [user, setUser] = useState("");
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    if (user.length === 0) {
      getUser();
      console.log("no data");
    }
    if (albums === null) {
      getAlbums();
    }
  });
  console.log(id);
  console.log(user);
  const getAlbums = async () => {
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/albums?userId=${id}`
    );
    setAlbums(res.data);
    console.log(res.data);
  };
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
        <div className="album">
          <h5>Albums</h5>
          <div className="data">
            {albums &&
              albums.length > 0 &&
              albums.map((item) => (
                <div className="item">
                  <Link key={item.id} link={`/album/${item.id}`}>
                    {item.title}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </CustomStyle>
    </>
  );
};

export default User;
