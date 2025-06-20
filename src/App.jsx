import { useEffect, useState } from 'react'
import './App.css'
import TaskAdder from './TodoList/TaskAdder';
import SearchBar from './TodoList/SearchBar';
import FilterMenu from './TodoList/FilterMenu';
import TaskList from './TodoList/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = localStorage.getItem("tasks")
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      done: false
    };
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const toggleDone = (id) => {
    setTasks(
      tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)
    )
  }

  const filteredTasks = tasks
    .filter(t => t.text.toLowerCase().includes(search.toLowerCase()))
    .filter(t =>
      filter === "all"
        ? true
        : filter === "done"
          ? t.done
          : !t.done
    )

  return (
    <>
      <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
        <h1>📝 Görev Listesi 📝</h1>
        <TaskAdder onAdd={addTask} />
        <SearchBar search={search} setSearch={setSearch} />
        <FilterMenu filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleDone}
        />
      </div>
    </>
  )
}

export default App