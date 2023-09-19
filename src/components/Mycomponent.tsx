import Title from "./Title";

//im using page instead of App as the default main page
const Mycomponent = ({title}) => {
    return(
        <>
        { <h1>My First Component</h1>}

        { <h1>It {title}</h1> }

        <Title title="it works:D"/>
        </>
    )
}

export default Mycomponent;