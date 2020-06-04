import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function TodoList(props) {
    const { todos, onTodoClick } = props;

    const handleClick = (todo) => {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <ul className="todo-list">
            {todos && todos.map(todo => (
                <li
                    key={todo.id}
                >
                    {todo.title}
                    <button style={{ marginLeft: "5px" }} onClick={() => handleClick(todo)} className="btn_Remove">Remove</button>
                </li>
            ))}
        </ul >
    );
}

export default TodoList;