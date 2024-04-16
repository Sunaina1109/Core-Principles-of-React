import { useState } from "react";
import { useFormik } from "formik";


export default function CommentForms({addComments}) {
  let [formdata, setFormData] = useState({
    username: "",
    comment: "",
    rating: 5,
  });

  // These handler functions must be inside the component function body.
  let dataHandler = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let SubmitHandle = (event) => {
    console.log(formdata);
    addComments(formdata);
     event.preventDefault();
    // console.log(formdata); // Example action: logging the form data to the console.
    // Reset the form data state here if necessary.
    setFormData({
      username: "",
      comment: "",
      rating: 5, // Assuming '5' is your default rating.
    });

  };

   // The return statement also must be inside the component function body.
  return (
    <>
      <h2>Give a Comment!</h2>
      <form onSubmit={SubmitHandle}>
        <input
          placeholder="write a username"
          type="text" // Changed from "username" to "text" since "username" is not a valid input type.
          name="username"
          value={formdata.username}
          onChange={dataHandler}
        />

        <br />
        <br />
        <textarea
          placeholder="write a comment"
          name="comment"
          value={formdata.comment} // Moved the value attribute inside the opening tag of the textarea.
          onChange={dataHandler}
        ></textarea>
        <br />
        <br />
        <input
          placeholder="rating"
          type="number"
          name="rating"
          min={1}
          max={5}
          value={formdata.rating}
          onChange={dataHandler}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
   </>
  );
};
