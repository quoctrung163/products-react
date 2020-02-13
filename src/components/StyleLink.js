import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleLink = styled(Link)`
  text-decoration: none;
  color: #111;
  &:hover {
    color: #007bff;
    transition: all 0.5s;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    transition: all 0.4s;
  }

  &:active {
    transition: all 0.1s;
    color: #111;
  }
`;

export default props => <StyleLink {...props} />;
