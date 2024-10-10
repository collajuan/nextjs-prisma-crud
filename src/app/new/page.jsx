"use client";
function NewPage() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const res = await fetch("/api/task", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2"
       onSubmit={onSubmit}>
        <label htmlFor="title" className="font-bold text-sm">
          Título de la tarea
        </label>
        <input
          type="text"
          id="title"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Título"
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripción de la tarea
        </label>
        <textarea
          rows="3"
          name="description"
          id="description"
          className="border border-gray-400 p-2 mb-4 w-full text-black"
          placeholder="Describe la tarea"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewPage;
