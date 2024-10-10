import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  //!Obtengo tareas haciendo uso de la API
  // const res = await fetch("http://localhost:3000/api/task");
  // const data = await res.json();
  //!Obtengo tareas haciendo consulta directo a la BBDD
  const data = await prisma.task.findMany();
  return data;
}

export const dynamic = 'force-dynamic'

async function HomePage() {
  const tasks = await loadTasks();
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
         <TaskCard key={task.id} task={task}/> 
        ))}
      </div>
    </section>
  );
}

export default HomePage;
