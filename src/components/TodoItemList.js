// src/components/TodoItemList.js

import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;
        return (
            <div>
                <TodoItem text={"리액트 예제 해보기"}/>
                <TodoItem text={"TO DO LIST 만들기"}/>
                <TodoItem text={"리액트 공부"}/>
            </div>
        );
    }
}

export default TodoItemList;