import React, { useEffect, useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("✅ Mount edildi...");

        return () => {
            console.log("❌ Unmount edildi...")
        }
    }, []);

    useEffect(() => {
        console.log("Count güncellendi: ", count);
    }, [count])

    return (
        <>
            <h2>Sayaç: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Arttır</button>
        </>
    )
}

export default Counter