import { useState } from "react"

export default function Forms(){
     
    let [formdata, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });
     let handleChange= (event)=>{
       setFormData((curData)=>{
        return {...curData, [event.target.name]:event.target.value}
       });
     };

   let handleSubmit=(event)=>{
      event.preventDefault();
      setFormData({
        fullName: "",
        username: "",
        password: "",
      })
   }
// with the help of state we can handle the form excution and change the internal form method
    return(
        <div>
            <form on onSubmit={handleSubmit}>
             <label htmlFor="fullName">Full Name</label>
            <input 
            placeholder="enter your name" 
            type="text" 
            value={formdata.fullName} 
            onChange={handleChange} 
            id="fullName"
            name="fullName"/>
            
            <br></br>

            <label htmlFor="username">Username</label>
            <input 
            placeholder="enter username" 
            type="username" 
            value={formdata.username} 
            onChange={handleChange} 
            id="username"
            name="username"/>

            <br></br>

            <label htmlFor="password">Password</label>
            <input 
            placeholder="Enter Password" 
            type="password" 
            value={formdata.password} 
            onChange={handleChange} 
            id="password"
            name="password"/>
            <br></br>
            <button >summit</button>
            </form>
        </div>
    )
}