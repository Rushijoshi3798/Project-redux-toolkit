import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
// import { removeAllUsers } from "../store/slices/UserSlice";
import { removeAllUsers } from "../store/extraReducer/action";

const DeleteAllUsers = () => {

  const dispatch = useDispatch();

  const clearUsers = () => {
    dispatch(removeAllUsers());
  }
  return (
    <Wrapper>
      <button className="btn2 clear-btn" onClick={clearUsers}>Clear Data</button>
    </Wrapper>
  );
};

export default DeleteAllUsers;

const Wrapper = styled.div`
  .clear-btn {
    text-transform: capitalize;
    margin-top: 2rem;
    margin-bottom: 100px;
  }
`;
