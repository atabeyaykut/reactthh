import './App.css'
import RandomDogButton from './RandomDog/RandomDogButton';

function App() {
  // const [tasks, setTasks] = useState([]);
  // const [search, setSearch] = useState("");
  // const [filter, setFilter] = useState("all");

  // useEffect(() => {
  //   const saved = localStorage.getItem("tasks")
  //   if (saved) {
  //     setTasks(JSON.parse(saved))
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks))
  // }, [tasks]);

  // const addTask = (text) => {
  //   const newTask = {
  //     id: Date.now(),
  //     text,
  //     done: false
  //   };
  //   setTasks([...tasks, newTask])
  // };

  // const deleteTask = (id) => {
  //   setTasks(tasks.filter(t => t.id !== id))
  // };

  // const toggleDone = (id) => {
  //   setTasks(
  //     tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)
  //   )
  // };

  // const filteredTasks = tasks
  //   .filter(t => t.text.toLowerCase().includes(search.toLowerCase()))
  //   .filter(t =>
  //     filter === "all"
  //       ? true
  //       : filter === "done"
  //         ? t.done
  //         : !t.done
  //   );

  // let sayac = 0;

  // const intervalId = setInterval(() => {
  //   console.log("Sayı: ", sayac);
  //   sayac++;
  //   if (sayac > 5) {
  //     clearInterval(intervalId);
  //     console.log("Sayaç doldu...")
  //   }
  // }, 1000);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("Component mount edildi");
  //   }, 1000);

  //   return () => {
  //     console.log("Component temizlendi");
  //     clearInterval(interval);
  //   }
  // }, [])

  return (
    <>
      <RandomDogButton />
    </>
  )
}

export default App