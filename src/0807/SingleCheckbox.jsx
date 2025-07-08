import React, { useState } from 'react'

function SingleCheckbox() {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(prev => !prev)
    }

    return (
        <label>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Kuralları okudum, onaylıyorum.
        </label>
    )
}

export default SingleCheckbox