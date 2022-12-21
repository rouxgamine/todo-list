import ToDoListItem from "../ToDoListItem/ToDoListItem";

const CompletedList = ({ completedItems, remove }) => {
  return (
    <div>
      <h2>Completed</h2>
      <ul>
        {completedItems.map((item, index) => (
          <ToDoListItem
            key={item.key}
            content={item}
            func={remove}
            text={"Remove"}
          />
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;

