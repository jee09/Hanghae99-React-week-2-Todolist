import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

function TodoDetail() {
  const todos = useSelector((state) => state.todos.todos);
  const param = useParams();
  const DetailTodo = todos.find((todo) => todo.id === +param.id);
  const { id, title, content } = DetailTodo;
  console.log(DetailTodo);

  const navigate = useNavigate();
  console.log(DetailTodo);

  return (
    <StWrap>
      <Stcontainer>
        <StTop>
          <div>ID: {id}</div>
          <Stbutton onClick={() => navigate(-1)}>이전으로</Stbutton>
        </StTop>
        <StTitle>{title}</StTitle>
        <div>{content}</div>
      </Stcontainer>
    </StWrap>
  );
}

export default TodoDetail;

const Stcontainer = styled.div`
  font-family: "ghanachoco";

  border: 3px solid #242343;
  background: linear-gradient(#b8d1fa, #c1c4fe);
  //background-color: rgb(205, 212, 255);
  border-radius: 20px;

  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 10px;

  padding: 20px;
`;

const StWrap = styled.div`
  height: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a292e2;
`;
const StTop = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
`;
const Stbutton = styled.button`
  width: 80px;
  height: 50px;
  font-family: "ghanachoco";
  font-size: 17px;
  border: none;
  background-color: rgb(129, 160, 209);
  height: 42px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
  color: white;
  &:hover {
    background-color: skyblue;
    color: White;
  }
`;

const StTitle = styled.div`
  color: #a292e2;
  font-size: 30px;
  margin-bottom: 20%;
`;
