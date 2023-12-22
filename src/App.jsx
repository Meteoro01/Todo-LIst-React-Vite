import { useEffect, useState } from "react";
import "./App.css";
import Taks from "./components/Taks";

function App() {
  // Estado para las tareas
  const [tasks, setTasks] = useState([]);

  //la nueva tarea
  const [newTaks, setnewTaks] = useState("");

  // Efecto para cargar las tareas desde localStorage al cargar la página
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Efecto para guardar las tareas en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // funcion para agregar una nueva tarea
  const addTask = () => {
    if (newTaks === "") {
      alert("Por favor ingresa una nueva tarea");
      return;
    }
    if (tasks.length === 0) {
      setTasks([newTaks]);
      setnewTaks("");
      console.log(tasks);
      return;
    } else {
      setTasks([...tasks, newTaks]);
      setnewTaks("");
      // console.log(tasks);
      return;
    }
  };

  const onDelete = (e) => {
    setTasks(tasks.filter((t) => t !== e));
  };
  const onEdit = (i, e) => {
    tasks[i] = e;
    setTasks([...tasks]);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="contenido mt-16 px-auto mx-auto flex-col">
          <div className="  text-center mx-auto">
            <div className=" w-full  pt-8 absolute">
            <h3 className="text-1xl text-right font-bold mr-8 ">count: {tasks.length}</h3>
          </div>
            <h1 className="pt-10 pb-5 text-4xl font-bold">TODO LIST</h1>
          </div>

          <div className="w-full  flex  justify-center">
            <div className="w-[30%]">
              <span className=" text-[20px] ml-5   text-center">
                New Task :
              </span>
            </div>
            <div className="w-[70%] flex items-center justify-center">
              <input
                type="text"
                value={newTaks}
                onChange={(e) => setnewTaks(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTask()}
                className=" w-[100%] p-1 content-text"
                placeholder="Nueva tarea..."
              />
            </div>
            <div className="w-[20%] flex justify-center items-center">
              <button
                className="text-white text-left"
                id="btn-add"
                onClick={addTask}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm-6 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="overflow-y-auto max-h-[480px] mt-5">
            {tasks.length === 0 ? (
              <h1 className="text-center text-xl mt-10">
                No hay tareas pendientes
              </h1>
            ) : (
              tasks.map((task, index) => (
                <Taks
                  index={index}
                  task={task}
                  onDelete={onDelete}
                  onEdit={onEdit}
                />
              ))
            )}
          </div>

          <div className="mx-auto flex justify-center items-center absolute w-full  bottom-7">
            {tasks.length > 0 ? (
              <button
                type="button"
                className="btn-vaciar text-center text-white font-bold "
                onClick={() => setTasks([])}
              >
                Vaciar tareas
              </button>
            ) : null}
          </div>
        </div>
        <div>
          <h1 className="text-center text-white pb-5 text-xl mt-10">
            Creado por: MeteoroDev
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
