import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TodoListItemWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
`;

export const TodoListItem = styled.li`
  list-style: decimal;
  margin: 5px 0;
  text-decoration: ${props => (props.completed ? "line-through" : "unset")};
`;

export const DeleteButton = styled.span`
  color: blue;
  cursor: pointer;

  :hover {
    font-weight: 700;
  }
`;

export const TodoItem = props => {
  const handleOnClick = () => {
    props.onCompleteTodo(props.todo.id);
  };

  const handleOnDelete = () => {
    props.onDeleteTodo(props.todo.id);
  };

  return (
    <TodoListItemWrapper>
      <TodoListItem completed={props.todo.completed} onClick={handleOnClick}>
        {props.todo.text}
      </TodoListItem>
      <DeleteButton onClick={handleOnDelete}>X</DeleteButton>
    </TodoListItemWrapper>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.any.isRequired,
  onCompleteTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
};
