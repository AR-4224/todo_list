"use client";
import VisuallyHiddenStyling from "./VisuallyHiddenStyling";

function Form(){
    function handleSubmit (event) {
        event.preventDefault();
        event.target.reset();
    };
    return(
        <form className="flex items-center gap-3 w-97/100 max-w-md mt-[30px]" onSubmit={handleSubmit}>
            <label className="w-9/10" htmlFor="todo">
                <input 
                    className="bg-DeepForest text-PaleForest w-full h-[50px] outline-none border-none rounded-[11px] p-1"
                    type="text" 
                    name="todo" 
                    id="todo" 
                    placeholder="Write your next task"
                />
            </label>
            <button className="bg-PastelPurple text-PaleForest w-1/10 h-[50px] rounded-[11px] border-none"> 
                <VisuallyHiddenStyling text="Add task"/>
                <svg>
                    <path d="" />
                </svg>
            </button>
        </form>
    );
}
export default Form;