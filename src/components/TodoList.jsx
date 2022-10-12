import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todos";
import styled from "styled-components";
import TodoCard from "./TodoCard";
// import TodoDetail from "./TodoDetail";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  // 기능 구현
  const fnDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  //   const fnDetail = (todoId) => {
  //     return (
  //       <StTodos>
  //         {todos.map((todo) => {
  //           if (todoId === todo.id) {
  //             console.log("ㅎㅇㅎㅇ");
  //             return <TodoDetail todo={todo} />;
  //           }
  //         })}
  //       </StTodos>
  //     );
  //   };

  const fnFlag = (todoId) => {
    dispatch(updateTodo(todoId));
  };

  return (
    <div>
      {/* 진행중 */}
      <StH1>🔥 Doing</StH1>
      <StTodos>
        {todos.map((todo) => {
          if (false === todo.flag) {
            return (
              <TodoCard
                todo={todo}
                onFlag={fnFlag}
                onDelete={fnDelete}
                // onDetail={fnDetail}
              />
            );
          } else {
            return null;
          }
        })}
      </StTodos>
      <br></br>
      <br></br>
      {/* 완료 */}
      <StH1>🌈 Done</StH1>
      <StTodos>
        {todos.map((todo) => {
          if (true === todo.flag) {
            return (
              <TodoCard
                todo={todo}
                onFlag={fnFlag}
                onDelete={fnDelete}
                // onDetail={fnDetail}
              />
            );
          } else {
            return null;
          }
        })}
      </StTodos>
    </div>
  );
};

export default TodoList;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const StH1 = styled.div`
  color: #fee0b2;
  font-size: 35px;
  margin-bottom: 15px;
  text-shadow: -1px 0px #242343, 0px 1px #242343;
`;
