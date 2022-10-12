import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

/*
              todo={todo}
              onFlag={fnFlag}
              onDelete={fnDelete}
              onDetail={fnDetail}
*/
export default function TodoCard({ todo, onFlag, onDelete, onDetail }) {
  const navigate = useNavigate();
  return (
    <StTodoCard>
      {/* <div>{todo.id}</div> */}
      <StTitle>{todo.title}</StTitle>
      <div>{todo.content}</div>
      <StButtons>
        <StButton onClick={() => onDelete(todo.id)}>Delete</StButton>
        <StButton onClick={() => onFlag(todo.id)}>
          {todo.flag ? "UnClear" : "Clear"}
        </StButton>
        {/* <StButton onClick={() => onDetail(todo.id)}>상세보기</StButton> */}
        <StButton onClick={() => navigate(`/detail/${todo.id}`)}>
          Detatil
        </StButton>
        {/* <button
          onClick={() => {
            `{todo.id}`;
          }}
        >
          {" "}
          상세보기
        </button> */}
      </StButtons>
    </StTodoCard>
  );
}

const StTodoCard = styled.div`
  color: #a292e2;
  border: 1px solid #ddd;
  width: 220px;
  height: 300px;
  display: flex;
  padding: 24px;
  border-radius: 12px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: linear-gradient(#b8d1fa, #c1c4fe);
  font-size: 20px;
  box-shadow: 3px 3px 3px 3px whitesmoke;
  margin-right: 20px;
`;

const StButton = styled.button`
  color: #fee0b2;
  font-family: "ghanachoco";
  border: 1px solid white;
  background-color: #afcdfe;
  height: 35px;
  cursor: pointer;
  border-radius: 12px;
  margin-right: 20px;
  &:hover {
    background-color: skyblue;
    color: White;
  }
`;

const StButtons = styled.div`
  display: flex;
  width: 250px;
  justify-content: center;
`;

const StTitle = styled.div`
  font-size: 25px;
`;
