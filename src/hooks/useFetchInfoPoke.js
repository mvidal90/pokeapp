import { useState, useEffect } from "react"
import { getInfoPoke } from "../helpers/getInfoPoke";

export const useFetchInfoPoke = ( url ) => {

    const [data, setData] = useState([]);

    useEffect( () =>{
        
        getInfoPoke( url )
            .then( data => {
                 
                setData({
                    id: data[0],
                    abilities: data[1],
                    types: data[2]
                });
            }
        )
    }, [ url ])

    return data;
}
