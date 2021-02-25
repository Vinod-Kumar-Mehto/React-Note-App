import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';



function Note(props) {

    const delItem = () => {
        props.passfun(props.id)
    }

    return (
        <>
            <div className="Notes">
                <div>
                    <h1>{props.title}</h1>
                    <br />
                    <p>{props.content}</p>
                    <DeleteIcon className="delete" onClick={delItem} />
                </div>



            </div>

        </>
    )
}

export default Note;
