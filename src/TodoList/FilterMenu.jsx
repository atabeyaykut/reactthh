import React from 'react'

function FilterMenu({ filter, setFilter }) {
    return (
        <>
            <div style={{ marginBottom: 10 }}>
                <button
                    onClick={() => setFilter("all")}
                    style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
                >
                    Tümü
                </button>
                <button
                    onClick={() => setFilter("done")}
                    style={{ fontWeight: filter === "done" ? "bold" : "normal", marginLeft: 5 }}
                >
                    Yapılanlar
                </button>
                <button
                    onClick={() => setFilter("not_done")}
                    style={{ fontWeight: filter === "not_done" ? "bold" : "normal", marginLeft: 5 }}
                >
                    Yapılacaklar
                </button>
            </div>
        </>
    )
}

export default FilterMenu