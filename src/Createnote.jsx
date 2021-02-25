import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



function Createnote(props) {
    const [state, setstate] = useState({
        title: "",
        content: "",

    });

    const getInput = (e) => {
        const { name, value } = e.target
        setstate((old) => {
            return {
                ...old,
                [name]: value,
            }
        })

    }
    const addEvent = () => {
        if (state.title === "" || state.content === "") return;
        props.passnote(state)

    }

    return (
        <>
            <div className="notes">
                <form>
                    <input name="title" type="text" placeholder="Title" onChange={getInput} value={state.title} />
                    <textarea name="content" rows="5" cols="50" placeholder="write a note..." autoComplete="off" onChange={getInput} value={state.content}></textarea>
                    <Button className="bttn" onClick={addEvent}><AddCircleOutlineIcon className="btn-sign" /></Button>

                </form>

            </div>

        </>
    )
}

export default Createnote;