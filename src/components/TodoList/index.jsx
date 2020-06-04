import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

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
        <ul className="todo-list container text-center mt-4">
            {todos && todos.map(todo => (
                <li
                    key={todo.id}
                    className="mb-3"
                >
                    {todo.title}
                    <button style={{ marginLeft: "5px" }} onClick={() => handleClick(todo)} className="btn_Remove">Remove</button>
                </li>
            ))}
        </ul >
    );
}

export default TodoList;