import { useState, useEffect } from "react"
import { getDescription } from "../helpers/getDescription";

export const useFetchDescription = ( id, lg ) => {

    const [desc, setDesc] = useState({});

    useEffect( () =>{
        
        getDescription( id, lg )
            .then( description => {
                 
                setDesc({
                    description
                });
            })
            .catch( () => {
                setDesc({});
            })
        }, [ id, lg ]);

    return desc;
}