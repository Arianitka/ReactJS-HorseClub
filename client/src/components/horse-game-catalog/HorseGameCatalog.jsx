import { Link } from "react-router-dom";
import * as gamesApi from '../../api/games-api';
import { useEffect } from "react";
import GameListItem from "./game-list-item/GameListItem";


export default function HorseCatalog (){
    const [games, setGames] = useState([]);

    useEffect(() => {
        gamesApi.getAll()
        .then (result => setGames(result))
    }, []);
    return (
        <section id="catalog-page">
            <h1>All Horses</h1>
            
            {games.map(game=> <GameListItem key={game._id} {...game} />)}
            <GameListItem />

            <h3 className="no-articles">No articles yet</h3>
        </section>
    )
}