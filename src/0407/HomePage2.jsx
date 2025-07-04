import React from 'react'
import { Link } from 'react-router-dom'
const users =
  [
    {
      id: 1,
      name: "Hilal",
    },
    {
      id: 2,
      name: "Hakkı",
    },
    {
      id: 3,
      name: "Ata",
    },
    {
      id: 4,
      name: "Murat",
    },
    {
      id: 5,
      name: "Mustafa",
    }, {
      id: 1,
      name: "Hilal",
    },
    {
      id: 2,
      name: "Hakkı",
    },
    {
      id: 3,
      name: "Ata",
    },
    {
      id: 4,
      name: "Murat",
    },
    {
      id: 5,
      name: "Mustafa",
    }, {
      id: 1,
      name: "Hilal",
    },
    {
      id: 2,
      name: "Hakkı",
    },
    {
      id: 3,
      name: "Ata",
    },
    {
      id: 4,
      name: "Murat",
    },
    {
      id: 5,
      name: "Mustafa",
    }, {
      id: 1,
      name: "Hilal",
    },
    {
      id: 2,
      name: "Hakkı",
    },
    {
      id: 3,
      name: "Ata",
    },
    {
      id: 4,
      name: "Murat",
    },
    {
      id: 5,
      name: "Mustafa",
    }, {
      id: 1,
      name: "Hilal",
    },
    {
      id: 2,
      name: "Hakkı",
    },
    {
      id: 3,
      name: "Ata",
    },
    {
      id: 4,
      name: "Murat",
    },
    {
      id: 5,
      name: "Mustafa",
    },
  ]

function HomePage2() {

  return (
    <div>
      <h1>Ana Sayfa</h1>
      <p>Kullanıcalardan birine git: </p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage2