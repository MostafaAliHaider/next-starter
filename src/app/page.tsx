import Button from "@/components/Button";
import Food from "@/components/Food";
import Input from "@/components/Input";
import Mycomponent from "@/components/Mycomponent";
import Wrapper from "@/components/Wrapper";


import React from "react";



const food:string[] =['Pizza', 'Hamburger', 'Coke'];

const Page = () => {
   
    return(
    <div>
        {/* Task 1 */}
        {/* <Mycomponent/> */}
        {/* Task 2 and 4*/}
        <Wrapper>
        <Mycomponent title=" It Works"/>
        </Wrapper>

        {/* Task 6 */}
        {/* <ul>
            {food.map(foods=>{
                return <li key={foods}>{foods}
                    
                </li>
            })}
        </ul> */}

        {/* Task 7 */}
        <Food food={food}/>

        {/* Task 8 */}
        <Button />

        <Input />
        
       
    </div>
    
    )
}

export default Page;