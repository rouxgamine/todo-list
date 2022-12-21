const ToDoListItem = (props) => {
    return (
      <li onClick={() => props.func(props.content)}>
        {props.content.title}
        <button>{props.text}</button>
      </li>
    );
  };
  
export default ToDoListItem;
  