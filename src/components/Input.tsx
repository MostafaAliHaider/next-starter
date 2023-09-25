"use client"



const Input = () => {
    function handleChange(){
        console.log("Change");
       
    }
    return <input type="text" onChange={handleChange} placeholder="Type something"/>
};
export default Input;