import { useForm } from "../../hooks/useForm"
import { useNavigate } from 'react-router-dom'
import { useCreateGame } from "../../hooks/useGames";

const initialValues = {
    title: '',
    category: '',
    racingRank:'',
    imageUrl:'',
    summary: '',
}

export default function HorseGameCreate(){

    const navigate = useNavigate();
    const createGame = useCreateGame();


    const createHandler = async(values) => {
        try {
            const { _id: gameId } = await createGame(values);

            navigate(`/games/${gameId}/details`)
        } catch (err) {
            console.log(err.message);

        }
       
    };
    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, createHandler);

    
    
    return(
        <section id="create-page" className="auth">
        <form id="create" onSubmit={submitHandler}>
            <div className="container">


                <label htmlFor="leg-title">Horse Name:</label>
                <input type="text" id="title" name="title"
                value={values.title}
                onChange={changeHandler}
                 placeholder="Enter horse title..."/>

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category"  value={values.category}
                onChange={changeHandler} placeholder="Enter horse category..."/>

                <label htmlFor="levels">Racing rank:</label>
                <input type="text" id="racingRank" name="racingRank" value={values.racingRank}
                onChange={changeHandler}  min="1" placeholder="1"/>

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl"  value={values.imageUrl}
                onChange={changeHandler} placeholder="Upload a photo..."/>

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary"  value={values.summary}
                onChange={changeHandler} id="summary"></textarea>
                <input className="btn submit" type="submit" value="Add Horse"/>
            </div>
        </form>
    </section>

    )
}