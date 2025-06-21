import React, { useEffect, useState } from 'react'

function RandomDog() {
    const [imageURL, setImageURL] = useState("");

    useEffect(() => {
        setInterval(() => {
            fetch("https://random.dog/woof.json")
                .then(res => res.json())
                .then(data => setImageURL(data.url))
        }, 1200);

    }, [])

    return (
        <>
            <div>
                <h2>Rastgele it</h2>
                {imageURL ? <img src={imageURL} style={{ maxWidth: "300px" }}></img> : <p>Yükleniyor...</p>}
            </div>
        </>
    )
}

export default RandomDog