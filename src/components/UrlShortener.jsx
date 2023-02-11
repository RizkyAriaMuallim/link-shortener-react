import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";


function UrlShortener({dataInput}) {
    const [newLink, setNewLink] = useState("");
    const [status, setStatus] = useState(false);
    const [copyStatus, setCopyStatus] = useState(false);

    const getDataAPI = async () => {
        try {
            const res = await fetch(
                `https://api.shrtco.de/v2/shorten?url=${dataInput}`
            )
            // API Feed-Back
            const value = await res.json();
            // Destruction from above
            const {result} = value;
            const {short_link} = result;
            // new link
            setNewLink(short_link);
        } catch (error){

        }
        
    }
    // Do get data just once
    useEffect(()=> {
        if(dataInput.length){
            setStatus(true);
            getDataAPI();
        }
    }, [dataInput])

    if(status){
        return (
            <>
                <h3>{`New link is : ${newLink}`}</h3>
                <CopyToClipboard text={newLink} onCopy={()=> setCopyStatus(true)}>
                    <button>{copyStatus ? "Copied!!!" : "Copy"}</button>
                </CopyToClipboard>
            </>
        )
    }else{
        return (
            <h3>Waiting data...</h3>

        )
    }

    return (
        <p></p>
    )
}

export default UrlShortener;