import React, { useState } from "react";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";

const PostData = ({ user }) => {
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newLink, setNewLink] = useState("");
  const [newName, setNewName] = useState("");
  const postCollectionRef = collection(db, "posts");
  const onSubmitPost = async () => {
    // Check if any of the required fields is empty
    if (!newPostTitle || !newDescription || !newLink) {
      alert("Please Fill All the Feilds");
      return;
    }

    try {
      await addDoc(postCollectionRef, {
        title: newPostTitle,
        name: user.displayName,
        description: newDescription,
        link: newLink,
      });
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <div className="inputPost">
        <div className="title">
          <p>Title</p>
          <input
            type="text"
            onChange={(e) => setNewPostTitle(e.target.value)}
          />
        </div>

        <div className="desc">
          <p>Description</p>
          <textarea
            name=""
            id=""
            onChange={(e) => setNewDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="last">
          <div className="link">
            <p>Link</p>
            <input type="text" onChange={(e) => setNewLink(e.target.value)} />
          </div>
          <div className="btn">
            <button onClick={onSubmitPost}>Submit</button>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default PostData;

const Main = styled.div`
  /* align-items: center; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 20rem;
  text-align: center;
  .title {
    padding-bottom: 1rem;
  }
  .desc {
    padding-bottom: 1rem;
  }

  .inputPost {
    min-width: 30rem;
    background-color: var(--border);
    padding: 4rem;
    border-radius: 1rem;
    border: 1px solid var(--text);
  }
  p {
    font-family: "Cubano";
    font-size: 1.5rem;
    color: var(--text);
  }
  input {
    font-family: "Poppins";
    width: 100%;
    min-width: 20rem;
    height: 3rem;
    border-radius: 1rem;
    font-size: 1rem;
    padding: 1rem;
    border: none;
  }
  textarea {
    font-family: "Poppins";
    width: 100%;
    min-width: 20rem;
    border-radius: 1rem;
    font-size: 1rem;
    padding: 1rem;
  }

  .last {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* align-items: baseline; */
    /* padding-bottom: 1rem; */
    input {
      width: 100%;
    }
  }
  button {
    border: none;
    font-family: "cubano";
    font-size: 1.3rem;
    color: black;
    padding: 0.5rem 1rem;
    font-family: "cubano";
    background-color: var(--text);
    align-items: baseline;
    transition: all 0.2s ease-in-out;
    margin: 1rem;
    /* border-radius: 1rem; */
    &:hover {
      cursor: pointer;
      background-color: #c804c8;
      color: var(--text);
    }
  }

  @media (max-width: 768px) {
    .last {
      flex-direction: column;

      /* align-items: flex-start; */
    }
  }
`;
