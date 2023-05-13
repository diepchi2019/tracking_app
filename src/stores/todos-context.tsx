import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObject = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

type TodoProps = {
    children: React.ReactNode;
}

export const TodosContext = React.createContext<TodoContextObject>({

    items: [],
    addTodo: (text: string) => { },
    removeTodo: (id: string) => { }

});

const TodosContextProvider: React.FC<TodoProps> = (props: {children: React.ReactNode}) => {
    useState();
    const [todos, setTodos] = useState<Todo[]>([]);
    const addTodoHandler = (todoText: string) => {

        setTodos((prevTodos) => {
            return prevTodos.concat(new Todo(todoText)
            )
        });
    };
    const removeTodoHandler = (id: string) => {

        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== id);

        });
    };

    const createValue: TodoContextObject = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };
    return <TodosContext.Provider value={createValue}>{props.children}</TodosContext.Provider>
}


export default TodosContextProvider;