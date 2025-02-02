import { heroes } from "../data/heroes"


export const GetHeroesBySearch = (term) => {

    term=term.toLocaleLowerCase().trim();
    if (!term) return [];
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(term) || hero.alter_ego.toLocaleLowerCase().includes(term));


}