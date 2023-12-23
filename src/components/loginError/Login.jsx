import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Main>
      <div className="error">
        <h1>
          <span style={{ fontSize: "2rem" }}>👋🏻</span> LOGIN TO POST
        </h1>
      </div>
    </Main>
  );
};

export default Login;

const Main = styled.div`
  font-family: "cubano";
  color: var(--high);
  text-align: center;

  .error {
    padding: 15rem;
    margin: 1rem 10rem;
    border-radius: 1rem;
    background-color: var(--border);
  }
`;
