import { prisma } from "@/libs/prisma";


async function loadTasks() {
//!Obtengo tareas haciendo uso de la API
  // const res = await fetch("http://localhost:3000/api/task");
  // const data = await res.json();
//!Obtengo tareas haciendo consulta directo a la BBDD
  const data = await prisma.task.findMany()
  return data;
}

async function HomePage() {
  const tasks = await loadTasks();
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h1>
            {task.id} - {task.title}
          </h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
