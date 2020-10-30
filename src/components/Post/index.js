import React from "react";
import Link from "../Link";

const Posts = ({ data, loading, user }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {data.map((item) => (
        <div className="card" key={item.id}>
          {/* <div className="title">
            <Link key={i} link={`/album/${item.id}`}>
              {item.title}
            </Link>
          </div> */}
          {user
            .filter((users) => users.id === item.userId)
            .map((users) => (
              <>
                <div className="title">
                  <Link key={user.id} link={`/album/${item.id}`}>
                    {item.title}
                  </Link>
                </div>
                <div className="user" key={user.id}>
                  <Link key={user.id} link={`/user/${users.id}`}>
                    {users.name}
                  </Link>
                </div>
              </>
            ))}
        </div>
      ))}
    </ul>
  );
};

export default Posts;
