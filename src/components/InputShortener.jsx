import { useState } from "react";

function InputShortener( {setDataInput} ) {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setDataInput(value);
        setValue("");
    }
    const Enter = (e) => {
        if (e.key === "Enter"){
            setDataInput(value);
            setValue("");
        }
    }

    return (
        <div className="inputContainer">
            <h1>URL Shortener!!!</h1>
            <input 
                type={"text"}
                placeholder="Paste in this section"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={Enter}
            />
            <button onClick={handleClick}>Click This</button>
        </div>
    )
}

export default InputShortener;