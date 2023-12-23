import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { auth, googleProvider } from "../../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithPopup, signOut } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

import Details from "./Details";

const Navbar = ({ user, setUser }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Main>
      <div className="right">
        <p>
          <span>🤘🏻</span> ZERO COST COURSES
        </p>
      </div>
      <div className="leftAuth">
        {user ? (
          <Details user={user} signOutUser={signOutUser} />
        ) : (
          <button onClick={signInGoogle}>LOGIN </button>
        )}
      </div>
    </Main>
  );
};

export default Navbar;

const Main = styled.div`
  font-family: "cubano";
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  .right {
    p {
      span {
        font-size: 3rem;
      }
      font-size: 2rem;
      color: var(--text);
    }
  }
  .leftAuth {
    button {
      font-size: 1.2rem;
      color: black;
      padding: 0.5rem 1rem;
      font-family: "cubano";
      background-color: var(--text);
      border: none;
      margin-left: 10px;
      transition: all 0.2s ease-in-out;
      &:hover {
        cursor: pointer;
        background-color: #c804c8;
        color: var(--text);
      }
    }
    p {
      font-size: 1.2rem;

      font-family: "cubano";
      margin: 0;
    }
  }
`;
