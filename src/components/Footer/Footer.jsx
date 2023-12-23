import React from "react";
import styled from "styled-components";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <Main>
      <div className="left"></div>
      <div className="center">
        @Copyright 2023 |{" "}
        <a href="mailto:writetokhair@gmail.com">
          {" "}
          <CiMail /> YOGESH VASHISTH{" "}
        </a>
      </div>
      <div className="right"></div>
    </Main>
  );
};

export default Footer;

const Main = styled.div`
  font-family: "cubano";
  color: var(--text);
  text-align: center;
  font-size: 2rem;
  padding: 1rem;

  a {
    color: var(--text);
    text-decoration: None;
    align-items: center;
    justify-content: center;
    &:hover {
      color: var(--high);
    }
  }
`;
