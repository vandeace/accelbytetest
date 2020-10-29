import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Albums = () => {
  let { id } = useParams();
  const [data, setData] = useState("");
  const [user, setUser] = useState("");
  useEffect(() => {
    if (!data.length > 0) {
      getData();
    }
  });
  const getUser = async () => {
    const res = await Axios.get(`
    
    `);
  };
  const getData = async () => {
    const res = await Axios.get(
      `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
    );
    const data = res.data;
    const slice = data.slice(0, 10);
    console.log(slice);
    setData(slice);
  };

  return (
    <div>
      {data.length > 0 && data.map((item, i) => <div>{item.title}</div>)}
    </div>
  );
};

export default Albums;
