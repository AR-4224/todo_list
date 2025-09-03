"use client";

function Form(){
    function handleSubmit (event) {
        event.preventDefault();
        event.target.reset();
    };
    return(
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="todo">
                <input 
                    type="text" 
                    name="todo" 
                    id="todo" 
                    placeholder="Write your next task"
                />
            </label>
            <button> 
                <span className="visually-hidden">Add Task</span>
                <svg>
                    <path d="" />
                </svg>
            </button>
        </form>
    );
}
export default Form;