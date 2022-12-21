import ToDoListItem from "../ToDoListItem/ToDoListItem";

const ToDoList = ({ toDoitems, addToCompleted }) => {
  return (
    <>
      <h2> To Do Items: </h2>
      <ul>
        {toDoitems.map((item, index) => (
          <ToDoListItem
            key={item.key}
            content={item}
            func={addToCompleted}
            text={"Completed"}
          />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
