import { Link } from "react-router-dom";
import * as gamesApi from '../../api/games-api';
import { useEffect } from "react";


export default function HorseCatalog (){
    const [games, setGames] = useState([]);
    
    useEffect(() => {
        gamesApi.getAll()
        .then (result => setGames(result))
    }, []);
    return (
        <section id="catalog-page">
            <h1>All Horses</h1>
            <div className="allHorses">
                <div className="allHorses-info">
                    <img src="./src/images/gallery-1.jpg"/>
                    <h6>Sport</h6>
                    <h2>Fire</h2>
                    <Link to="/details" className="details-button">Details</Link> 
                </div>

            </div>
            <div className="allHorses">
                <div className="allHorses-info">
                    <img src="./src/images/gallery-2.jpg"/>
                    <h6>Sport</h6>
                    <h2>Lighitning</h2>
                    <Link to="/details" className="details-button">Details</Link>
                </div>

            </div>
            <div className="allHorses">
                <div className="allHorses-info">
                    <img src="./src/images/gallery-3.jpg"/>
                    <h6>Fun</h6>
                    <h2>Horhe</h2>
                    <Link to="/details" className="details-button">Details</Link>
                </div>
            </div>


            <h3 className="no-articles">No articles yet</h3>
        </section>
    )
}