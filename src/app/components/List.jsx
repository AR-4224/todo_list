import React from "react";
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
  const [edit, setEdit] = React.useState(false);

  const inputRef = React.useRef(null);

  const competeTodo = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
  };

  const handleDelete = () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== item.id));
  }
  
  const handleEdit = () => {
    setEdit(true);
  };

  React.useEffect(() => {
    if (edit && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [edit]);

  const handleChange = (e) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === item.id ? { ...todo, title: e.target.value } : todo
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEdit(false);
  };

  const handleBlur = () => {
    setEdit(false);
  };

  return (
    <li
      id={item?.id}
      className="flex justify-between items-center h-[70px] w-full max-w-md 
        border border-PaleForest text-base  text-PaleForest p-3 rounded-[14px]"
    >
      { edit ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="edit-todo">
            <input
              className="flex justify-between items-center h-[100%-12px] w-full max-w-md  border-transparent text-base  text-PaleForest p-3 rounded-[14px] outline-transparent"
              ref={inputRef}
              type="text"
              name="edit-todo"
              id="edit-todo"
              defaultValue={item?.title}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
        </form>
      ) : (
      <>
        <button
          onClick={competeTodo}
          className="flex items-center self-start bg-transparent border-none h-[50px] w-auto "
        >
          {item?.is_completed ? <Circle /> : <Ring />}
        </button>
        <p
          className="flex items-center self-start text-PaleForest text-base w-full bg-transparent mt-2.5"
          style={item.is_completed ? { textDecoration: "line-through" } : {}}
        >
          {item?.title}
        </p>

        <div className="flex items-end gap-1">
          <button
            onClick={handleEdit}
            className="bg-transparent text-PaleForest border-none"
          >
            
            <Edit />
          </button>
          <button
            onClick={handleDelete} 
            className="bg-transparent text-PaleForest border-none"
          >
            
            <Bin />
          </button>
        </div>
      </>
      )}
    </li>
  );
}
