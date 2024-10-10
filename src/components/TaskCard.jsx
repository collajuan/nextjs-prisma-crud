'use client'
import { useRouter } from "next/navigation";

function TaskCard({task}) {
    const router = useRouter()

  return (
    <div    
      className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer relative"
      onClick={()=> router.push('/tasks/edit/' + task.id)}>
      <h3 className="font-bold text-2xl mb-2">{task.id}</h3>
      <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
      <p className="mb-5">{task.description}</p>
      <p className="text-gray-500 absolute bottom-2 right-2">
      {new Date(task.cratedAt).toDateString()}
      </p>
    </div>
  );
}

export default TaskCard;
