import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useGetOneGames } from "../../hooks/useGames";
import { useForm} from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";
import { useGetAllComment, useCreateComment } from "../../hooks/useComments";



const initialValues = {
    comment: ''
};

export default function Details () {
    const {gameId} = useParams();
    const [comments, setComments] = useGetAllComment(gameId);
    const createComment = useCreateComment();
    const [game] = useGetOneGames(gameId);
    const { isAuthenticated } = useAuthContext();

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(initialValues,async ({comment}) => {
        try {
           const newComment = await createComment(gameId, comment);

           setComments(oldComments => [...oldComments, newComment]);
        } catch (err) {
            console.log(err.message)
        }

    });
   
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
                {comments.map(comment => (
                         <li key={comment._id}  className="comment">
                    <p>username: {comment.text}</p>
                    </li>  
                    
                  ))
        
                 }
                 </ul>
                 {comments.length === 0 && <p className="no-comment">No comments.</p>}
   
            </div>
            {/* <div className="buttons">
                <Link to={`/edit-game`} className="button">Edit</Link>
                <Link to={`/delete-game`} className="button">Delete</Link>
            </div> */}
        </div>
                {isAuthenticated && (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit = {submitHandler}>
                <textarea 
                name="comment" 
                placeholder="Comment......"
                onChange={changeHandler}
                value={values.comment}
                ></textarea>
                <input className="btn submit" type="submit" value="Add Comment"/>
            </form>
        </article>
                )};
    </section>

    )
}

