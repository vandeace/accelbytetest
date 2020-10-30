import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import { Input } from "reactstrap";
import Post from "../../components/Post";

const CustomStyle = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .card-container {
    height: 90vh;
    flex-grow: 1;
    max-height: 90vh;
    border: 1px solid #000;
    margin: 20px;
  }
  h1 {
    text-align: center;
    margin: 0;
    padding: 10px;
  }
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 5px 0;
  }
  .title {
    font-size: 16px;
    text-transform: capitalize;
    width: 50%;
    text-align: left;
    margin: 0;
    padding: 0 5px 0 20px;
  }
  .user {
    width: 50%;
    text-transform: capitalize;
    text-align: left;
    padding: 0 5px;
  }
  .search {
    display: flex;
    flex-direction: row;
  }
  .input-search {
    width: 50%;
    margin: 10px 60px;
    display: flex;
    flex-direction: column;
  }
  h6 {
    font-size: 20px;
    margin: 10px 0px;
  }
`;

const Home = () => {
  // states
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  //fetching
  const getData = async () => {
    setLoading(true);
    const res = await Axios.get("https://jsonplaceholder.typicode.com/albums");
    setAllData(res.data);
    setData(res.data);
    setLoading(false);
  };

  const getUser = async () => {
    setLoading(true);
    const result = await Axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setUser(result.data);
    setLoading(false);
  };

  const handleFilterData = (value) => {
    if (value.length > 0) {
      let dataFilter = allData.filter((person) => {
        return person.title.toLowerCase().search(value) !== -1;
      });
      console.log(dataFilter, "dataFilter");
      setData(dataFilter);
    } else {
      getData();
    }
  };

  const handleFilterUser = (value) => {
    console.log(user, "before");
    console.log("show user", value);

    const filteredUser = [];

    let userFilter = user.filter((data) => {
      return data.name.toLowerCase().search(value) !== -1;
    });

    userFilter.forEach((item) => {
      filteredUser.push(item.id);
    });

    const filteredData = [];
    filteredUser.forEach((i) => {
      const filtered = allData.filter((item) => {
        return item.userId === i;
      });

      filtered.map((i) => filteredData.push(i));
    });
    setData(filteredData);
  };

  useEffect(() => {
    if (user === null) {
      getUser();
    }
    if (data === null) {
      getData();
    }
  }, [allData, data, user]);

  return (
    <div>
      <CustomStyle>
        <div className="container">
          <h1>ALBUMS</h1>
          <div className="search">
            <div className="input-search">
              <h6>Search By Album</h6>
              <Input
                type="text"
                aria-label="search by albums"
                onChange={(e) => handleFilterData(e.target.value)}
              />
            </div>
            <div className="input-search">
              <h6>Search By Name</h6>
              <Input
                type="text"
                aria-label="search by albums"
                onChange={(e) => handleFilterUser(e.target.value)}
              />
            </div>
          </div>
          <div>
            {data && data.length > 0 && user && user.length > 0 && (
              <Post user={user} data={data} loading={loading} />
            )}

            <div className="pagi"></div>
          </div>
        </div>
      </CustomStyle>
    </div>
  );
};

export default Home;
