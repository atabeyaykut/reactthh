import React, { useState } from 'react'

function UserApp() {
    const [users, setUsers] = useState([
        { id: 1, name: "Cabbar" },
        { id: 2, name: "Kareem" },
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const [newUser, setNewUser] = useState("");

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleAdd = () => {
        if (!newUser.trim()) return;
        setUsers([...users, { id: Date.now(), name: newUser }]);
        setNewUser("");
    }

    const handleRemove = (id) => {
        setUsers(users.filter(user => user.id !== id))
    }

    return (
        <>
            <h1>Kullanıcı Yönetimi</h1>
            <input type="text" placeholder='Ara...' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <div>
                <input type="text" placeholder='Yeni kullanıcı adı' value={newUser} onChange={e => setNewUser(e.target.value)} />
                <button onClick={handleAdd}>Ekle</button>
            </div>
            <ul>
                {filteredUsers.map(user => <li key={user.id}>{user.name}<button onClick={() => handleRemove(user.id)}>Sil</button></li>)}
            </ul>
        </>
    )
}

export default UserApp