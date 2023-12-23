import React from "react";
import styled from "styled-components";

const Details = ({ user, signOutUser }) => {
  return (
    <Main>
      <div className="items">
        <div className="name">
          <p>
            <span style={{ fontSize: "1.9rem", marginRight: "0.5rem" }}>
              👋🏻
            </span>
            {user.displayName}
          </p>
        </div>

        <button onClick={signOutUser}>LOGOUT</button>
      </div>
    </Main>
  );
};

export default Details;

const Main = styled.div`
  .items {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .name {
      color: var(--high);
      font-size: 4rem;
    }
  }

  button {
    transition: all 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      background-color: #c804c8;
      color: var(--text);
    }
  }
`;
