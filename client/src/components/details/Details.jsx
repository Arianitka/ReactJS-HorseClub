import { Link } from "react-router-dom";
import gamesAPI from "../../api/games-api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



export default function Details () {
    const [game, setGame] = useState({});
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('')
    const {gameId} = useParams();

    useEffect(() => {
        (async () => {
          const result = await gamesAPI.getOne(gameId);

          setGame(result);
        })();
    }, []);

    const submitComment = async (e) => {
        e.preventDefault();

        await commentsApi.create(gameId, username, comment);

        console.log(username);
        console.log(comment);
        console.log('Comment submitted');
    }
    return (
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">

            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">{game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>

            <p className="text">{game.summary}</p>

            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    
                    <li className="comment">
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li className="comment">
                        <p>Content: The best game.</p>
                    </li>
                </ul>

                <p className="no-comment">No comments.</p>
            </div>
            {/* <div className="buttons">
                <Link to={`/edit-game`} className="button">Edit</Link>
                <Link to={`/delete-game`} className="button">Delete</Link>
            </div> */}
        </div>

        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit = {submitComment}>
                <input 
                type="text"
                 placeholder="Pesho"
                  name="username"
                  onChange={() => setUsername(e.target.value)} 
                  value={username}
                  />
                <textarea 
                name="comment" 
                placeholder="Comment......"
                onChange={() => setComment(e.target.value)}
                value={comment}
                >

                </textarea>
                <input className="btn submit" type="submit" value="Add Comment"/>
            </form>
        </article>

    </section>

    )
}