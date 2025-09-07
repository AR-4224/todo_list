import VisuallyHiddenStyling from "./VisuallyHiddenStyling";
import Ring from "./RingIcon";
import Circle from "./CircleIcon";
import Bin from "./BinIcon";
import Edit from "./EditIcon";

function List({ todos, setTodos }) {
  return (
    <ol className="flex flex-col self-center items-center w-97/100 max-w-md mt-[27px] mb-[27px] gap-[27px]">
      {todos && todos.length > 0 ? (
        todos?.map((item, index) => (
          <ListItem key={index} item={item} setTodos={setTodos} />
        ))
      ) : (
        <p>Let's add a task</p>
      )}
    </ol>
  );
}

export default List;

function ListItem({ item, setTodos }) {
  const competeTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === item.id
          ? {...todo, is_completed: !todo.is_completed}
          : todo
      )
    );
  };
  return (
    <li
      id={item?.id} onClick={competeTodo}
      className="flex justify-between items-center h-[70px] w-full max-w-md 
        border border-PaleForest text-base  text-PaleForest p-3 rounded-[14px]"
    >
      <button
        className="flex items-center self-start bg-transparent border-none text-PaleForest gap-2 text-base h-[50px] w-full text-start"
      >
        {item?.is_completed ? <Circle /> : <Ring />}
        <p style={item.is_completed ? {textDecoration: "line-through"} : {}}>
          {item?.title}
        </p>
      </button>
      <div className="flex items-end gap-1">
        <button
          className="bg-transparent text-PaleForest border-none"
        >
          <VisuallyHiddenStyling text="Edit" />
          <Edit />
        </button>
        <button className="bg-transparent text-PaleForest border-none">
          <VisuallyHiddenStyling text="Delete" />
          <Bin />
        </button>
      </div>
    </li>
  );
}
