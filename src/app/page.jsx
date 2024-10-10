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
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10' >
      {tasks.map((task) => (
        <div key={task.id} className='bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer relative' >
          <h3 className='font-bold text-2xl mb-2'>{task.id}</h3>
          <h3 className='font-bold text-2xl mb-2' >
            {task.title}
          </h3>
          <p className='mb-5' >{task.description}</p>
          <p className='text-gray-500 absolute bottom-0 right-0' >{new Date(task.cratedAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
    </section>
  );
}

export default HomePage;
