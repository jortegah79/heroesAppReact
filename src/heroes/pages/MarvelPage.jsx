import { HeroList } from "../components/HeroList";


export const MarvelPage=()=>{

    const publisher="Marvel Comics";

    return(
        <>
        <h1 className="my-4">{publisher}</h1>
        <HeroList publisher={publisher}/>
        </>
    );
}