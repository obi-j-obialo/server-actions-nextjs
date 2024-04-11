export default function TodosPage() {
  return (
    <div className="flex flex-col justify-center items-center mt-32 max-w-[400px] m-auto">
      <h1 className="mb-8">Todos</h1>
      <form className="flex flex-col space-y-4 w-full">
        <input
          placeholder="Add todo"
          type="text"
          name="todo"
          className="border rounded-md py-2 px-4"
        />
        <button className="bg-green-400 rounded p-2">Add</button>
      </form>
    </div>
  );
}
