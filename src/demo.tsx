import React from "react";


export const MyComponent: React.FC = () => {
    const [username, setUserName] = React.useState("");

    React.useEffect(() => {
        setUserName("John");
    }, []);
    
    return (
        <>
            <h4>{username}</h4>
            <input value={username} onChange={e => setUserName(e.target.value)} />            
        </>
    );
};