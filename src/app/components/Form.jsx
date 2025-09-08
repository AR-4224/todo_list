import Plus from "./plusIcon";

function Form({ setTodos }) {
  function handleSubmit(event) {
    event.preventDefault();

    const value = event.target.todo.value.trim();
    if (!value) return;

    const newTodo = {
      title: value,
      id: crypto.randomUUID(),
      is_completed: false,
    };

    setTodos(prev => [...prev, newTodo]);
    event.target.reset();
    
  }
  return (
    <form
      className="flex self-center gap-3 w-97/100 max-w-md mt-[30px]"
      onSubmit={handleSubmit}
    >
      <label className="w-9/10" htmlFor="todo">
        <input
          className="bg-DeepForest text-PaleForest w-full h-[50px] outline-none border-none rounded-[11px] p-1"
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
        />
      </label>
      <button className="bg-PastelPurple text-PaleForest w-[12%] h-[50px] rounded-[11px] border-none">
        
        <Plus />
      </button>
    </form>
  );
}
export default Form;
