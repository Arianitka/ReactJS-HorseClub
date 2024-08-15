import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetOneGames } from "../../hooks/useGames";
import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";
import { useGetAllComment, useCreateComment } from "../../hooks/useComments";
import gamesAPI from "../../api/games-api";


const initialValues = {
    comment: ''
};

export default function Details() {
    const navigate = useNavigate()
    const { gameId } = useParams();
    const [comments, dispatch] = useGetAllComment(gameId);
    const createComment = useCreateComment();
    const { email, userId } = useAuthContext();
    const [game] = useGetOneGames(gameId);
    const { isAuthenticated } = useAuthContext();

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(gameId, comment);

            //    setComments(oldComments => [...oldComments, newComment]);
            dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, user: { email } } });

        } catch (err) {
            console.log(err.message)
        }

    });

    const gameDeleteHandler = async () => {
        const confirmation = confirm('Delete horse?');

        if (!confirmation) {
            return;
        }

        try {
            await gamesAPI.remove(gameId);

            navigate('/catalog')
        } catch (err) {
            console.log(err.message)
        }

    }

    const isOwner = userId === game._ownerId;

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <div>
                        <img className="game-img" src={game.imageUrl} />
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h1><strong>Name:</strong> {game.title}</h1>
                        <span className="levels" style={{width: "60px"}}><strong>Level:</strong> {game.racingRank}</span>
                        <p className="type"><strong>Category:</strong> {game.category}</p>
                    </div>

                </div>

                <p className="text"><strong>Description:</strong> {game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment._id} className="comment">
                                <p>{comment.user.email}: {comment.text}</p>
                            </li>

                        ))

                        }
                    </ul>
                    {comments.length === 0 && <p className="no-comment">No comments.</p>}

                </div>
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/games/${gameId}/edit-horse`} className="button">Edit</Link>
                        <Link to={``} onClick={gameDeleteHandler} className="button">Delete</Link>
                    </div>
                )}

            </div>
            {isAuthenticated && (
                <article className="create-comment">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={submitHandler}>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            onChange={changeHandler}
                            value={values.comment}
                        ></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            )};
        </section>

    )
}

