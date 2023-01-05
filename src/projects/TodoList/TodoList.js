import classes from './style.module.css';
import Form from './comp/Form';

export default  function TodoList() {

  return (
    <div className={classes.todoList__wrap}>
       <Form />
    </div>
  );
}
