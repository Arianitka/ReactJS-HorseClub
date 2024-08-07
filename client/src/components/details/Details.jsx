import { Link } from "react-router-dom"


export default function Details () {
    return (
        <section id="horse-details">
        <h1>Horse Details</h1>
        <div className="info-section">

            <div className="horse-header">
                <img className="horse-img" src="" />
                <h1>Lightning</h1>
                <span className="levels">Competition level: 4</span>
                <p className="type">Sport, Fun, Therapy</p>
            </div>

            <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem provident cupiditate iste molestiae explicabo a? Nam itaque eum ab maiores exercitationem ratione ullam harum, aut deleniti totam incidunt libero vel!
            </p>

            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    
                    <li className="comment">
                        <p>Content: I rate this one quite highly.</p>
                    </li>
                    <li className="comment">
                        <p>Content: The best horse.</p>
                    </li>
                </ul>

                <p className="no-comment">No comments.</p>
            </div>
            <div className="buttons">
                <Link to={`/edit-game`} className="button">Edit</Link>
                <Link to={`/delete-game`} className="button">Delete</Link>
            </div>
        </div>

        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form">
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment"/>
            </form>
        </article>

    </section>

    )
}