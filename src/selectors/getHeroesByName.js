import { heroes } from "../data/heroes";

export const getHeroesByName = (query='') => {

    if(query === ''){
       return [];
    }
    query = query.toLocaleLowerCase();
     
    return heroes.filter(heroe => heroe.superhero.toLocaleLowerCase().includes(query));
};