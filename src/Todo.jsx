import React, { useEffect, useState } from 'react'

function Todo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem("todos");
        if (saved) {
            setTodos(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

    const addTodo = () => {
        if (input.trim() === "") return;
        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false,
        };

        setTodos([...todos, newTodo]);
        setInput("");
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }


    return (
        <div style={{ maxWidth: 400, margin: "50px autor", fontFamily: "Arial" }}>
            <h2>To Do List</h2>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Yeni Görev...'
                />
                <button onClick={addTodo}>Ekle</button>
            </div>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            margin: "8px 0",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "#000",
                            padding: "8px",
                            borderRadius: "5px"
                        }}
                    >
                        <span
                            style={{
                                flex: 1,
                                marginRight: "10px",
                                textDecoration: todo.completed ? "line-through" : "none",
                                color: todo.completed ? "#aaa" : "#fff",
                                fontStyle: todo.completed ? "italic" : "normal"
                            }}
                        >
                            {todo.text}
                        </span>
                        <span
                            style={{ cursor: "pointer", marginRight: "10px" }}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            ✅
                        </span>
                        <span style={{ cursor: "pointer" }} onClick={() => deleteTodo(todo.id)}>
                            ❌
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo