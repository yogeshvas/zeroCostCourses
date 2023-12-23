import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const PostList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFullLink, setShowFullLink] = useState(false);
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  // New Post States
  const getPostList = async () => {
    try {
      const data = await getDocs(postsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostList(filteredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  // Filter data based on search term
  const filteredData = postList
    ? postList.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const reversedData = filteredData.slice().reverse();

  return (
    <Main>
      <div className="cards">
        <div className="search">
          <input
            type="text"
            placeholder="Search For a course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {reversedData.length === 0 ? (
          <div className="empty">
            <p style={{ fontFamily: "cubano", fontSize: "3rem" }}>
              Sorry, No Such Course Found.
            </p>
            <button
              style={{
                fontFamily: "cubano",
                padding: "0.5rem 1rem",
                fontSize: "1.5rem",
                marginTop: "1rem",
              }}
            >
              Request Course
            </button>
          </div>
        ) : (
          reversedData.map((item) => (
            <div className="card" key={item.title}>
              <p className="title">
                Title:{" "}
                <span style={{ fontFamily: "Poppins" }}>{item.title} </span>
              </p>
              <hr />
              <p>
                <span style={{ fontFamily: "cubano", margin: "2rem 0rem" }}>
                  Description 👇🏻{" "}
                </span>
              </p>
              <p className="desc">{item.description}</p>
              <p className="links">
                <div className="left">
                  <p style={{ fontFamily: "cubano" }}>
                    Link 👉🏻
                    <span style={{ margin: "1rem" }}>
                      <a
                        href={`http://${item.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {showFullLink
                          ? item.link
                          : item.link.substring(0, 15) + "..."}
                      </a>
                    </span>
                  </p>
                </div>
                <div className="right">Posted By: {item.name}</div>
              </p>
            </div>
          ))
        )}
      </div>
    </Main>
  );
};

export default PostList;

const Main = styled.div`
  text-align: center;
  color: var(--text);
  .search {
    input {
      width: 50%;
      font-family: "cubano";
      border-radius: 1rem;
      padding: 1rem;
    }
  }
  .cards {
    padding: 1rem 10rem;

    .card {
      margin-bottom: 1rem;
      background-color: var(--border);
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: black;
      border: 2px solid var(--text);
      p {
        text-align: left;
        font-size: 1.5rem;
      }
      .title {
        font-family: "cubano";
      }
      .desc {
        font-family: "Open Sans";
        font-weight: 600;
      }
      .links {
        display: flex;
        justify-content: space-between;

        a {
          text-decoration: none;
          font-family: "Poppins";
          color: #ff5959;
          transition: all 0.5s ease-out;

          &:hover {
            color: #f69090;
          }
        }
      }
    }
  }

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
  }
  .right {
    font-family: "cubano";
  }
`;
