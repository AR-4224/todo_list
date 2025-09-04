import VisuallyHiddenStyling from "./VisuallyHiddenStyling";

function List({ todos }) {
  return (
    <ol className="flex flex-col self-center items-center w-97/100 max-w-md mt-[27px] mb-[27px] gap-[27px]">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => <ListItem key={index} item={item} />)
      ) : (
        <p>Let's add a task</p>
      )}
    </ol>
  );
}

export default List;

function ListItem({ item }) {
  return (
    <li
      id={item?.id}
      className="flex justify-between items-center h-[70px] w-full max-w-md 
        border border-solid border-PastelPurple text-base bg-Mute text-PaleForest p-3"
    >
      <button className="flex items-center bg-transparent border-none text-PaleForest gap-3 text-base">
        <svg>
          <circle cx="12" cy="12" r="10" fillRule="nonzero" />
        </svg>
        <p>{item?.title}</p>
      </button>
      <div className="flex items-center gap-1">
        <button className="bg-transparent text-PaleForest border-none">
          <VisuallyHiddenStyling text="Edit" />
          <svg className="fill-PaleForest">
            <path d="" />
          </svg>
        </button>
        <button className="bg-transparent text-PaleForest border-none">
          <VisuallyHiddenStyling text="Delete" />
          <svg className="fill-PaleForest">
            <path d="" />
          </svg>
        </button>
      </div>
    </li>
  );
}
