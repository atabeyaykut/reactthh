import axios from 'axios';
import React, { useEffect, useState } from 'react'

function RandomDogButton() {
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [refreshKey, setRefreshKey] = useState(0);

    useEffect(() => {
        const fetchDogImage = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get("https://random.dog/woof.json");

                if (response.data.url.endsWith(".mp4") || response.data.url.endsWith(".webm")) {
                    setRefreshKey(prev => prev + 1);
                } else {
                    setImageURL(response.data.url);
                }
            } catch (err) {
                setError("Köpek getirilemedi...");
            } finally {
                setLoading(false);
            }
        }

        fetchDogImage();

    }, [refreshKey]);

    const handleClick = () => {
        setRefreshKey(prev => prev + 1);
    }

    return (
        <>
            <div>
                <h2 onClick={handleClick} style={{ cursor: "pointer" }}>Yeni bir köpek getir</h2>

                {loading && <p>Yükleniyor...</p>}
                {error && <p style={{ color: "crimson" }}>{error}</p>}
                {!loading && !error && (
                    <div>
                        <img
                            src={imageURL || null}
                            alt="İT"
                            style={{ maxWidth: "300px" }}
                        />
                    </div>
                )}
            </div>
        </>
    )
}

export default RandomDogButton