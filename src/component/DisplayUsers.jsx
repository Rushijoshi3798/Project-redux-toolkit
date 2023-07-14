import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from 'react-icons/md';
import { removeSingleUser } from "../store/slices/UserSlice";

const DisplayUsers = () => {

  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.userSlice;
  });

  console.log(data);

  const removeUser = (id) => {
    dispatch(removeSingleUser(id))
  }

  return (
    <Wrapper>
      {data.map((el, i) => (
        <li key={i}>
          {el} <button className="btn-delete" onClick={() => removeUser(i)}>
            <MdDeleteForever className='delete-icon' />
          </button>
        </li>
      ))}
    </Wrapper>
  );
};

export default DisplayUsers;

const Wrapper = styled.div`
  margin-block: 20px;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 10px;
    color: #8f8f8f;
    border-bottom: 1px solid #8f8f8f;
  }

  li > button{
   margin-left: 0px;
   background-color: transparent;
   font-size: small;
   border: none;
  }
`;
