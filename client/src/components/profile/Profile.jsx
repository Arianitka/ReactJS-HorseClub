import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useGetAllGames } from '../../hooks/useGames';
import GameListItem from '../horse-game-catalog/game-list-item/GameListItem';


export default function Profile (){

const { email, userId} = useContext(AuthContext);

const [games] = useGetAllGames();
const myGames = games.filter(x=> x._ownerId === userId);

// console.log(myGames);


    return (
        <div className="profileContainer">
            <img className="profileImage"
                src='./src/images/istockphoto-1495088043-612x612.jpg'
                alt="Profile"
            />
            {/* <h1 style={styles.profileName}>{name}</h1> */}
            <p className="profileEmail"><h3>Email:{email}</h3></p>
            <p className="addedHorse"><strong></strong>
            <section id="catalog-page">
            <h1>Added Horse:</h1>    
            {myGames.length > 0
            ?myGames.map(game=> <GameListItem key={game._id} {...game} />)
            :  <p className="no-articles">No horses yet</p>
            }
        </section>
            </p>

           
        </div>
    );
};


const styles = {
    profileContainer: {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '300px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
    },
    profileImage: {
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        objectFit: 'cover',
    },
   
    profileEmail: {
        fontSize: '16px',
        color: '#666',
    },
    addedHorse: {
        fontSize: '16px',
        color: '#333',
        marginTop: '15px',
    },
};