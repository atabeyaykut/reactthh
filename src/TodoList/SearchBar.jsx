import React from 'react'

function SearchBar({ search, setSearch }) {
    return (
        <>
            <input
                type="text"
                placeholder='Ara...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: 10, width: "100%", padding: 6 }}
            />
        </>
    )
}

export default SearchBar