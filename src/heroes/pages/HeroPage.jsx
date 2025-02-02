import { Link, Navigate, useNavigate, useParams } from "react-router";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";


export const HeroPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById( id ), [id]);
    if (!hero) {
        return (<Navigate to={'/marvel'} />);
    }

    const onNavigateBack = () => {
        // let route = 'marvel';
        // if (hero.publisher === 'DC Comics') {
        //     route = 'dc';
        // }
        //navigate(`/${route}`, { replace: true })
        navigate(-1)
    }
    return (

        <div className="row mt-5">
            <div className="col-4 animate__animated animate__fadeInLeft">
                {/* <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail" /> */}
                <img src={`${process.env.PUBLIC_URL}/heroes/${id}.jpg`} alt={hero.superhero} className="img-thumbnail" />
            </div>
            <div className="col-8 animate__animated animate__fadeInDown">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li><b>Alter ego:</b>{hero.alter_ego}</li>
                    <li><b>Publisher:</b>{hero.publisher}</li>
                    <li><b>First Appearance:</b>{hero.first_appearance}</li>
                </ul>
                <h5 className="mt-3">Characters</h5>
                {hero.characters.split(',').map(char=>(<p key={char}>{char.split()}</p>))}
                <button
                    onClick={onNavigateBack}
                    className="btn btn-outline-primary">
                    Volver
                </button>
            </div>
        </div>
    );

}