import React, { useState } from 'react'

function MultipleCheckboxes() {
    const [selectedHobbies, setSelectedHobbies] = useState([]);

    const handleChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setSelectedHobbies(prev => [...prev, value]);
        } else {
            setSelectedHobbies(prev => prev.filter(hobbie => hobbie !== value))
        }
    }

    return (
        <div>
            <label>
                <input type="checkbox" value="Müzik" onChange={handleChange} />
                Müzik
            </label>
            <label>
                <input type="checkbox" value="Film" onChange={handleChange} />
                Film
            </label>
            <label>
                <input type="checkbox" value="Spor" onChange={handleChange} />
                Spor
            </label>
            <label>
                <input type="checkbox" value="Kitap Okuma" onChange={handleChange} />
                Kitap Okuma
            </label>

            <p>Seçilen Hobiler: {selectedHobbies.join(", ")}</p>
        </div>
    )
}

export default MultipleCheckboxes