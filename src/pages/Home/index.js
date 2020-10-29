import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import Link from "../../components/Link";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

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

  /* pagination */
  .pagi {
    /* display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 0; */
    justify-content: center;
    align-items: center;
    height: 10vh;
  }
  .pagination {
    justify-content: center;
    align-items: center;
    display: flex;
    list-style: none;
    outline: none;
    padding: 0;
  }
  .pagination > .active > a {
    background-color: #47ccde;
    border-color: #47ccde;
    color: #fff;
  }
  .pagination > li > a {
    border: 1px solid #47ccde;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: #47ccde;
    border-color: #47ccde;
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: #47ccde;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
`;

const Home = () => {
  const [data, setData] = useState(null);
  const [allData, setAllData] = useState(null);
  const [user, setUser] = useState(null);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [isFirstGet, setFirstGet] = useState(true);

  //query search 1 https://jsonplaceholder.typicode.com/photos?albumId=1&&id=1
  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
    console.log(res.data, "getData");
    handlePaginate(res.data);

    // const data = res.data;
    // const slice = data.slice(offset, offset + perPage);
    // setPageCount(Math.ceil(data.length / perPage));
    // setData(slice);
    // setAllData(data);
    // console.log(slice);
    // console.log(result.data, "data");
  };

  const handlePaginate = async (value) => {
    const data = value;
    const slice = data.slice(offset, offset + perPage);
    setPageCount(Math.ceil(data.length / perPage));
    setData(slice);
    setAllData(data);
    console.log(slice, "dataslice");
    // console.log(result.data, "data");
  };

  const getUser = async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    console.log(result, "user");
    setUser(result.data);
  };

  const handlePageClick = (e) => {
    console.log(data, "rawdata");
    console.log("artifact");
    const selectedPage = e.selected;
    console.log(selectedPage, "selectedPage");
    const offset = selectedPage * perPage;
    console.log(offset, "offset");
    setCurrentPage(selectedPage);
    console.log(currentPage);
    setOffset(offset);
    getData();
  };

  const handleFilterData = (value) => {
    console.log("rawData", data);
    let getData = data.slice(offset, offset + perPage);
    if (value.length > 0) {
      // let dataFilter = allData;
      // console.log("ini datanya before", dataFilter);
      let dataFilter = allData.filter((person) => {
        return person.title.toLowerCase().search(value) !== -1;
        // return lowerCase;
      });
      console.log(dataFilter, "dataFilter");
      if (dataFilter.length > 20) {
        console.log("jalan");
        let x = dataFilter.slice(offset, offset + perPage);
        setData(x);
      }
      if (dataFilter.length < 20) {
        setData(dataFilter);
      }
    }
    if (value.length < 1) {
      setData(getData);
    }
  };

  const handleFilterUser = (value) => {
    console.log(user, "before");
    console.log("show user", value);
    let userFilter = user.filter((data) => {
      return data.name.toLowerCase().search(value) !== -1;
    });
    console.log(userFilter, "after");

    // setShowData(true);
    // setShowUser(false);
    // console.log(value.length, "value");
  };

  useEffect(() => {
    if (isFirstGet) {
      console.log("getdata");
      getData();
    }

    if (user === null) {
      getUser();
    }
    // if (data === null) {
    //   getData();
    // }
  }, [isFirstGet]);

  return (
    <div>
      <CustomStyle>
        <div className="container">
          <h1>ALBUMS</h1>
          <h6>Search By Album</h6>
          <Input
            type="text"
            aria-label="search by albums"
            onChange={(e) => handleFilterData(e.target.value)}
          />
          <h6>Search By Name</h6>
          <Input
            type="text"
            aria-label="search by albums"
            onChange={(e) => handleFilterUser(e.target.value)}
          />
          <div className="card-container">
            {data &&
              data.length > 0 &&
              data.map((item, i) => (
                <div className="card">
                  <div className="title">
                    {" "}
                    <Link link={`/album/${item.id}`}>{item.title} </Link>
                  </div>
                  {/* {thumb.length > 0 &&
              thumb
                .filter((thumbs, i) => thumbs.id === item.id)
                .map((thumbi, i) => (
                  <div>
                    <img src={thumbi.thumbnailUrl} />
                  </div>
                ))} */}
                  {user &&
                    user.length > 0 &&
                    user
                      .filter((users, i) => users.id === item.userId)
                      .map((users, i) => (
                        <div className="user">
                          <Link link={`/user/${users.id}`}> {users.name} </Link>
                        </div>
                      ))}
                  {/* {user
              .filter((user, key) => user.id === item.albumsId)
              .map((user, key) => (
                <div key={key}>{user.name}</div>
              ))} */}
                </div>
              ))}
          </div>
          <div>
            <div className="pagi">
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </div>
      </CustomStyle>
    </div>
  );
};

export default Home;
