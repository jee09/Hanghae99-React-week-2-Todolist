import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";
// import { v4 as uuidv4 } from "uuid";

const Addtodo = () => {
  // const { v4: uuidv4 } = require("uuid");
  //const { todos } = useSelector((state) => state.todos);

  // list에 추가하기 위한 임시 객체 생성
  const Food = {
    id: 0,
    title: "",
    content: "",
    flag: false,
  };

  // 삽임하는 데이터를 개별적으로 관리하기 위한 변수
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (title === "" || content === "") {
      alert("빈 값은 입력할 수 없습니다.");
      return;
    }

    // #TODO : ID 수정할 것
    //let tempID = 1 + todos.length;
    // let tempID = uuidv4();
    let tempID = Date.now();

    Food.id = tempID;
    Food.title = title;
    Food.content = content;

    dispatch(addTodo(Food));
    setTitle("");
    setContent("");
  };

  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        {/* 제목 */}
        <label>가게 이름</label>
        <StInput
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          placeholder="가게 이름을 입력해주세요"
        />

        {/* 내용 */}
        <label>메뉴 이름</label>
        <StInput
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          placeholder="메뉴 이름을 입력해주세요"
        />

        <StButton>추가하기</StButton>
      </form>
    </StFormContainer>
  );
};

export default Addtodo;

const StFormContainer = styled.div`
  color: #564d98;
  font-size: 20px;
  display: flex;
  gap: 24px;
  padding: 30px;
  justify-content: center;
`;

const StButton = styled.button`
  font-family: "ghanachoco";
  font-size: 17px;
  border: none;
  background-color: rgb(130, 176, 251);
  height: 42px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
  color: white;
  &:hover {
    background-color: #a6d5e8;
    color: White;
  }
`;

const StInput = styled.input`
  font-family: "ghanachoco";

  padding-left: 10px;
  border: 1px solid #eee;
  margin: 0 15px;
  height: 40px;
  width: 200px;
  border-radius: 12px;
  outline: none;
`;
