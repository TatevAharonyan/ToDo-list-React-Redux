import { useState } from "react";
import { store } from "./../index";

function TodoForm() {
    const [text, setText] = useState("");

    const changeInputText = e => {
        setText(e.target.value);
    }

    const formSubmit = e => {
        e.preventDefault();
        if (text !== "") {
            e.preventDefault();
            store.dispatch({ type: "ADD_TODO", payload: text })
            setText("")
        }
    }

    return (
        <form onSubmit={formSubmit} className="form" >
            <input
                typr="text" value={text}
                onChange={changeInputText}
            />
            <button type="submit"> Add </button>
        </form>
    )
}
export default TodoForm;