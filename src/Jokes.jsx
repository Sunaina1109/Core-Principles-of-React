import { useState, useEffect } from "react";

export default function Jokes() {
    const [joke, setJoke] = useState({ setup: "", punchline: "" });
    const URL = "https://official-joke-api.appspot.com/jokes/programming/random";

    const getJoke = async () => {
        try {
            const res = await fetch(URL);
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            const jsonRes = await res.json();
            // Since the response is an array, take the first element
            if (jsonRes.length > 0) {
                setJoke({ setup: jsonRes[0].setup, punchline: jsonRes[0].punchline });
            } else {
                console.log("No jokes received");
            }
        } catch (error) {
            console.error("Failed to fetch joke:", error);
        }
    };

    useEffect(() => {
        getJoke(); // Fetch initial joke when component mounts
    }, []);

    return (
        <div>
            <h1>Jokes!</h1>
            <h3>{joke.setup}</h3>
            <h3>{joke.punchline}</h3>
            <button onClick={getJoke}>New Joke</button>
        </div>
    );
}
