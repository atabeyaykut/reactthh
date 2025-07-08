import React, { useState } from 'react'
import Checkbox from './Checkbox';

const HOBBIES = ["Müzik", "Spor", "Film", "Kitap Okuma", "Yüzme"];

function HobbiesForm() {
    const [selected, setSelected] = useState([]);

    const handleChange = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setSelected(prev => [...prev, value]);
        } else {
            setSelected(prev => prev.filter(hobbie => hobbie !== value))
        }
    }

    return (
        <div>
            <h3>Hobilerinizi Seçin: </h3>
            {HOBBIES.map((hobby) => (
                <Checkbox
                    key={hobby}
                    label={hobby}
                    value={hobby}
                    checked={selected.includes(hobby)}
                    onChange={handleChange}
                />
            ))}
            <p>Seçilen Hobiler: {selected.join(", ")}</p>
        </div>
    )
}

export default HobbiesForm