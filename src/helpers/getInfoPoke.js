

export const getInfoPoke = async( url ) =>{

    const resp = await fetch( url );
    const { id, abilities, types } = await resp.json();
    
    let a = [ 0 ];
    let b = [ 0 ];
    
    const data =[
        id,
        abilities.map( () => {
            a = [ a, ...a ];
            return{
                name: abilities[a.length-2].ability.name
            }
            
        }),
        types.map( ()=> {
            b = [ b, ...b ];
            return{
                name: types[b.length-2].type.name
            }    
        }),
    ]

    return data;
}