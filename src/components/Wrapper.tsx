import React from "react";

const Wrapper = ({children}: any) => {
    return (
        <section className="flex flex-wrap border-4 border-indigo-200 border-t-indigo-500">
             {children}
             <h1 className="bg-red-300">hey</h1>
        </section>
    )
}

export default Wrapper;