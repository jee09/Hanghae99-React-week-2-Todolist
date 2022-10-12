const ADD_TODO = "ADD_TODO";
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

const UPDATE_TODO = "UPDATE_TODO";
export const updateTodo = (payload) => {
  return { type: UPDATE_TODO, payload };
};

const DETAIL_TODO = "DETAIL_TODO";
export const detailTodo = (payload) => {
  return { type: DETAIL_TODO, payload };
};

const FoodOrderList = {
  todos: [
    {
      id: 1,
      title: "한솥도시락",
      content: "빅치킨마요",
      flag: true,
    },
    {
      id: 2,
      title: "이삭토스트",
      content: "트리플소세지",
      flag: false,
    },
  ],
};

const todos = (list = FoodOrderList, data) => {
  switch (data.type) {
    case ADD_TODO:
      return {
        ...list,
        todos: [...list.todos, data.payload],
      };
    case DELETE_TODO:
      return {
        ...list,
        todos: list.todos.filter((todo) => todo.id !== data.payload),
      };
    case UPDATE_TODO:
      return {
        ...list,
        todos: list.todos.map((todo) => {
          if (todo.id === data.payload) {
            return {
              ...todo,
              flag: !todo.flag,
            };
          } else {
            return todo;
          }
        }),
      };
    default:
      return list;
  }
};

export default todos;
