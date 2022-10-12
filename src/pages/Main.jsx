import React from "react";
import TodoList from "../components/TodoList";
import styled from "styled-components";
import Addtodo from "../components/Addtodo";
import Header from "../components/Header";
//import "../components/style.css";

const TodoContainer = () => {
  return (
    <StContainer>
      <Header></Header>
      <Addtodo></Addtodo>
      <TodoList></TodoList>
    </StContainer>
  );
};

export default TodoContainer;

const StContainer = styled.section`
  @font-face {
    font-family: "ghanachoco";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ghanachoco.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "ghanachoco";

  border-radius: 20px;
  border: 3px solid #242343;
  background-color: rgb(205, 212, 255);
  max-width: 1200px;
  min-width: 900px;
  min-height: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;
