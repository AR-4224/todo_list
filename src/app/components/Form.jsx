import VisuallyHiddenStyling from "./VisuallyHiddenStyling";
import Plus from "./plusIcon";

function Form({setTodos}){
    function handleSubmit (event) {
        event.preventDefault();
        const value = event.target.todo.value;
        event.target.reset();
        setTodos((prev) => [
            ...prev,
            {title: value, id: crypto.randomUUID(), is_completed: false}
        ])
    };
    return(
        <form className="flex self-center gap-3 w-97/100 max-w-md mt-[30px]" onSubmit={handleSubmit}>
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
                <VisuallyHiddenStyling text="Add task"/>
                <Plus/>
            </button>
        </form>
    );
}
export default Form;