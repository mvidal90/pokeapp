

export const getPoke = async( offset ) =>{

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${ offset }&limit=5`;

    const resp = await fetch( url );
    const { results } = await resp.json();

    return results;
}