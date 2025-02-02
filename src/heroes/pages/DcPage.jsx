import { HeroList } from "../components/HeroList";


export const DcPage=()=>{
 
    const publisher="DC Comics";

    return(
        <>
        <h1 className="my-4">{publisher}</h1>
        <HeroList publisher={publisher}/>
        </>
    );
}