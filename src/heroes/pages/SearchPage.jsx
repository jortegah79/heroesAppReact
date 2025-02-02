import React from "react";
import { HeroCard } from '../components/HeroCard'
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router";
import { GetHeroesBySearch } from "../helpers/getHeroesBySearch";
import queryString from "query-string";


export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search);
    const { searchText, onInputChange, onResetForm } = useForm({ searchText: q })

    const heroes = GetHeroesBySearch(q)
    const showNewTermSearch=q === '';
    const showNoHeroWithTerm=q !== "" && heroes.length == 0;


    const onSearchSubmit = (e) => {
        e.preventDefault();
        const term=searchText.trim();
        navigate(`?q=${term}`)
    }

    return (
        <>
            <h1 className="my-4">Search Page</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Searching...</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            name="searchText"
                            id="searchText"
                            placeholder="Search a hero"
                            className="form-control mb-2"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange} />
                        <button className="btn btn-outline-primary ">
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    <div className={`${showNewTermSearch ? 'd-block' : 'd-none'} alert alert-primary animate__animated animate__fadeIn`}>
                        Search a hero
                    </div>
                    <div className={`${showNoHeroWithTerm ? 'd-block' : ' d-none'} alert alert-danger d-flex align-items-baseline gap-1 animate__animated animate__fadeIn`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sign-stop-fill" viewBox="0 0 16 16">
                            <path d="M10.371 8.277v-.553c0-.827-.422-1.234-.987-1.234-.572 0-.99.407-.99 1.234v.553c0 .83.418 1.237.99 1.237.565 0 .987-.408.987-1.237m2.586-.24c.463 0 .735-.272.735-.744s-.272-.741-.735-.741h-.774v1.485z" />
                            <path d="M4.893 0a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146A.5.5 0 0 0 11.107 0zM3.16 10.08c-.931 0-1.447-.493-1.494-1.132h.653c.065.346.396.583.891.583.524 0 .83-.246.83-.62 0-.303-.203-.467-.637-.572l-.656-.164c-.61-.147-.978-.51-.978-1.078 0-.706.597-1.184 1.444-1.184.853 0 1.386.475 1.436 1.087h-.645c-.064-.32-.352-.542-.797-.542-.472 0-.77.246-.77.6 0 .261.196.437.553.522l.654.161c.673.164 1.06.487 1.06 1.11 0 .736-.574 1.228-1.544 1.228Zm3.427-3.51V10h-.665V6.57H4.753V6h3.006v.568H6.587Zm4.458 1.16v.544c0 1.131-.636 1.805-1.661 1.805-1.026 0-1.664-.674-1.664-1.805V7.73c0-1.136.638-1.807 1.664-1.807s1.66.674 1.66 1.807ZM11.52 6h1.535c.82 0 1.316.55 1.316 1.292 0 .747-.501 1.289-1.321 1.289h-.865V10h-.665V6.001Z" />
                        </svg>
                        No hero with <b className="mx-1">{q}</b>
                    </div>

                    {heroes.length > 0 &&
                        (<div className="d-flex flex-column  gap-3 mb-5 animate__animated animate__backInDown">
                            {heroes.map(hero => (<HeroCard key={hero.id} {...hero} />))}
                        </div>)
                    }
                </div>
            </div>
        </>
    );
}

