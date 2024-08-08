import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import * as gamesApi from '../../api/games-api';

import GameListItem from "./game-list-item/GameListItem";
import { useGetAllGames } from "../../hooks/useGames";


export default function HorseGameCatalog (){
    const [games] = useGetAllGames()
    return (
        <section id="catalog-page">
            <h1>Horse Games</h1>    
            {games.length > 0
            ?games.map(game=> <GameListItem key={game._id} {...game} />)
            :  <p className="no-articles">No games yet</p>
            }
        </section>
    )
}