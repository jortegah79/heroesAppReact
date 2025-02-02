import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";


export const HeroList = ({ publisher }) => {

    const heroes =useMemo(()=> getHeroesByPublisher(publisher) ,[publisher]);
    return (
        <>
            <h3 className="mb-0">Hero List</h3>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
                {heroes.map(heroe =>  <HeroCard  key={heroe.id} {...heroe} />)
                }
            </div>
        </>

    );

}