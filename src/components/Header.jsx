import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <div>My Food Todo List</div>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  color: white;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #363356;
  padding: 20px 50px 20px 30px;
  border-radius: 20px;
  margin-bottom: 10px;
`;
