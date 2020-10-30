import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "reactstrap";
import styled from "styled-components";
import Link from "..//../components/Link";

const Custom = styled.div`
  .card {
    text-align: left;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .content {
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 150px;
  }
  p {
    height: 100px;
    width: 150px;
  }
  h1 {
    text-transform: capitalize;
    width: 100%;
    text-align: center;
    margin: 20px;
  }
  h5 {
    width: 100%;
    justify-content: center;
    display: flex;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  h2 {
    width: 100%;
    text-align: center;
    margin: 5px;
    padding: 0;
  }
  h3 {
    margin: 5px;
    padding: 0;
  }
  .albums {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`;

const Albums = () => {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    if (!data.length > 0) {
      getData();
      getAlbum();
    }
  });

  const getAlbum = async () => {
    const res = await Axios.get(`
    https://jsonplaceholder.typicode.com/albums/${id}
    `);
    console.log(res.data);
    setAlbums(res.data);
    getUser(res.data.id);
    console.log(res.data.id, "id");
    console.log(albums, "albums");
  };

  const getUser = async (value) => {
    const res = await Axios.get(`
    https://jsonplaceholder.typicode.com/users/${value}
    `);
    setUser(res.data);
    console.log(res.data, "data user");
  };
  const getData = async () => {
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );
    console.log(res.data, "data");
    setData(res.data);
  };

  return (
    <>
      <Custom>
        <div className="albums">
          <h1>{albums.title}</h1>
          <h5>Created By</h5>
          <Link link={`/user/${user.id}`}>
            <h2> {user.name}</h2>
          </Link>
          <Link link={`/user/${user.id}`}>
            <h3> {user.email}</h3>
          </Link>
        </div>
        <Card>
          <h1> Photos Albums</h1>
          {data.length > 0 &&
            data.map((item, i) => (
              <div key={i} className="content">
                <img src={item.thumbnailUrl} />
                <p>{item.title}</p>
              </div>
            ))}
        </Card>
      </Custom>
    </>
  );
};

export default Albums;
