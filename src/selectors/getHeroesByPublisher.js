import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
     
    const validPublisher =['DC Comics','Marvel Comics']
    if(!validPublisher.includes(publisher)){
        throw new Error(`The publisher '${publisher}' no valid`);
    }

    return heroes.filter(heroe => heroe.publisher === publisher);
};