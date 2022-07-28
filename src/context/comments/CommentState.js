import { useState } from "react";
import CommentContext from "./commentContext";

const CommentState = (props) => {
    const host = "http://localhost:4000";

    const commentInitial = []

    const [comments, setComments] = useState(commentInitial);

    const submitComment = async (fullName, email, phone, feedback) => {
        const response = await fetch(`${host}/api/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fullName, email, phone, feedback })
        });
        const comment = await response.json();
        setComments(comments.concat(comment))
    }

    return (
        <CommentContext.Provider value={{ comments, setComments, submitComment }}>
            {/* <NoteContext.Provider value={{state, update}}> */}
            {props.children}
        </CommentContext.Provider>
    )

}

export default CommentState;