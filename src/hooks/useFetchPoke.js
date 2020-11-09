import { useState, useEffect } from "react"
import { getPoke } from "../helpers/getPoke";

export const useFetchPoke = ( offset ) => {

    const [pokes, setPokes] = useState({
        poke: [],
    });

    useEffect( () =>{
        
        getPoke( offset )
            .then( results => {
                 
                setPokes({
                    poke: results,
                });

            })
    }, [ offset ])

    return pokes;
}
