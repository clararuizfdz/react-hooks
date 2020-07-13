import React from "react";

export const MyComponent: React.FC = () => {
    const [myName, setMyName] = React.useState("Pepe");
    return (
        <>
            <h4>{myName}</h4>
            <input value={myName} onChange={e => setMyName(e.target.value)} />
        </>
    );
};