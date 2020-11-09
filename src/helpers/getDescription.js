

export const getDescription = async( id, lg ) =>{

    if (id !== undefined ) {

        const url = `https://pokeapi.co/api/v2/pokemon-species/${ id }`;
        const resp = await fetch( url );
        const { flavor_text_entries } = await resp.json();
            
        for (let i = 0; i < flavor_text_entries.length; i++) {

            if (flavor_text_entries[i].language.name === lg) {
                const description = flavor_text_entries[i].flavor_text;
                return description;
            }
        }
        
    }
}