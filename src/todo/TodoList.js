import { store } from "./../index";


const TodoList = ({ text }) => {
    const todoList = store.getState();
    

    return (
        <div className="list" >

            {
                store.getState().map((todo) => {
                    return (
                        <div  key={todo.id}
                         className={todo.check ? "item_true" : "item_false"} >

                            <div className={todo.check ? "check_true" : "check_false"} 
                           
                            onClick = { () => store.dispatch({type: "CHECK_TODO", payload: todo.id})}
                            >

                            </div>
                                <del style={{ color: `${todo.check ? "#00ff21" : "transparent" }` }}>
                                    <p> {todo.text} </p>
                                </del>
                            <div className="delete_item" onClick={() => store.dispatch({ type: "REMOVE_TODO", payload: todo.id })}>
                                X
                            </div>

                        </div>

                    )
                })
            }

        </div>
    )
}

export default TodoList;