import React from 'react'

function TaskList({ tasks, onDelete, onToggle }) {
    return (
        <>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            backgroundColor: "#303030",
                            marginBottom: 8,
                            padding: 10,
                            borderRadius: 4,
                            textDecoration: task.done ? "line-through" : "none",
                            fontStyle: task.done ? "italic" : "normal",
                            color: task.done ? "#a4a4a4" : "#000000",
                            color: "#fff",
                            cursor: "crosshair"
                        }}
                    >
                        <span>{task.text}</span>
                        <div>
                            <button onClick={() => onToggle(task.id)}>✅</button>
                            <button onClick={() => onDelete(task.id)}>❌</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TaskList