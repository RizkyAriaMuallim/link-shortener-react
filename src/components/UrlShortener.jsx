import { useState, useEffect } from "react";


function UrlShortener({dataInput}) {
    const [newLink, setNewLink] = useState("");

    const getDataAPI = async () => {
        try {
            const res = await fetch(
                `https://api.shrtco.de/v2/shorten?url=${dataInput}`
            )
            const value = await res.json();
            console.log(value);
            const {result} = value;
            const {short_link} = result;
            setNewLink(short_link);
        } catch (error){

        }
        
    }

    useEffect(()=> {
        if(dataInput.length){
            getDataAPI();
        }
    }, [dataInput])

    return (
        <h3>{newLink}</h3>
    )
}

export default UrlShortener;