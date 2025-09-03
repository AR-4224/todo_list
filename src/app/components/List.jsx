function List({todos}){
    return(
        <ol className="todo_list">
            {todos && todos.length > 0 ? (
                todos?.map((item,index) => <ListItem key={index} item={item} />)
            ) : (
                <p>Let's add a task</p>
            )}
        </ol>
    );
}

export default List;

function ListItem({item}){
    return(
        <li id={item?.id} className="todo_item">
            <button className="todo_item_left">
                <svg>
                    <circle cx="12" cy="12" r="10" fillRule="nonzero" />
                </svg>
                <p>{item?.title}</p>
            </button>
            <div className="todo_item_right">
                <button>
                    <span className="visually-hidden">Edit</span>
                    <svg>
                        <path d="" />
                    </svg>
                </button>
                <button>
                    <span className="visually-hidden">Delete</span>
                    <svg>
                        <path d="" />
                    </svg>
                </button>
            </div>
        </li>
    );
}