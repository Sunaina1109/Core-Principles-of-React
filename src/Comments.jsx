import { useState } from "react"
import "./Comments.css"
import CommentForms from "./CommentForms";

export default function Comments(){
    let [comments, setComments]= useState([{
        username: "@suanina",
        comment: "she is live in porto portugal and very hard working! Now she is learnig web devlopment:)",
        rating: 5,
    }])

    let addComments= (comment)=>{
        setComments((currComment) => [...currComment, comment]);
    };
 return(
    <>
        <div>
            <h3>All Comment!</h3>
            {comments.map((comment, idx)=>(
            <div className="comment" key={idx}>
            <span>{comment.username} </span> <br/> 
            <span>{comment.comment}</span> <br/> 
            <span>rating={comment.rating}</span>  
            </div>
            ))} 
        </div>
        <hr></hr>
        <CommentForms addComments={addComments}/>  
        <hr></hr>

    </>
    
 )
};