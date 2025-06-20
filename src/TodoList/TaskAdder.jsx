import React, { useState } from 'react'

function TaskAdder({ onAdd }) {
    const [text, setText] = useState("");

    const handleAdd = () => {
        if (text.trim()) {
            onAdd(text);
            setText("");
        }
    }

    return (
        <>
            <div style={{ marginBottom: 10 }}>
                <input
                    type="text"
                    value={text}
                    placeholder='Yeni görev...'
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={handleAdd}>Ekle</button>
            </div>
        </>
    )
}

export default TaskAdder