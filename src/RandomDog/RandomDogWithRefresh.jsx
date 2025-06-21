import React, { useEffect, useState } from 'react'

function RandomDogWithRefresh() {
    const [imageURL, setImageURL] = useState("");
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        fetch("https://random.dog/woof.json")
            .then(res => res.json())
            .then(data => setImageURL(data.url));
    }, [refreshKey])

    const handleClick = () => {
        setRefreshKey(prev => prev + 1);
    }

    return (
        <>
            <h2>Rastgele it</h2>
            <button onClick={handleClick}>Yeni Köpek Göster</button>
            <br />
            {imageURL ? <img src={imageURL} style={{ maxWidth: "300px" }}></img> : <p>Yükleniyor...</p>}
        </>
    )
}

export default RandomDogWithRefresh