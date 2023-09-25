"use client"

const Button = () => {
    
    const handleClick = () => {
        console.log("Clicked")
    }
    
    return(
        <div>

            <h1>hey22</h1>

           <button onClick={handleClick}>Click me</button>
       
        </div>
    ) 
    
}
export default Button;