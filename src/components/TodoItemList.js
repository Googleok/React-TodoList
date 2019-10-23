// src/components/TodoItemList.js

import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const {todos, color, onToggle, onRemove} = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    color={color}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;