import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import { useGetOneGames } from "../../hooks/useGames";
import { useNavigate} from "react-router-dom";
import gamesAPI from "../../api/games-api";

const initialValues = {
    title: '',
    category: '',
    rankLevel: '',
    imageUrl: '',
    summary: '',
};

export default function EditHorseGame (){
    const navigate = useNavigate();
    const { gameId} = useParams();

   


    const [game, setGame] = useGetOneGames(gameId);
    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(Object.assign(initialValues, game), async (values) => {
        const confirmation = confirm('Update horse?');

        if(confirmation){
            await gamesAPI.update(gameId, values)
              navigate(`/catalog`)
        }


    });


    return (
        <section id="edit-page" className="auth">
        <form id="edit" onSubmit={submitHandler}>
            <div className="container">
                
                <label htmlFor="leg-title">Horse Name</label>
                <input 
                onChange={changeHandler}
                type="text" 
                id="title"
                 name="title"
                  value={values.title}/>

                <label htmlFor="category">Category:</label>
                <input onChange={changeHandler} type="text" id="category" name="category" value={values.category}/>

                <label htmlFor="levels">Rank level:</label>
                <input onChange ={changeHandler} type="number" id="maxLevel" name="maxLevel" min="1" value={values.rankLevel}/>

                <label htmlFor="game-img">Image:</label>
                <input onChange ={changeHandler} type="text" id="imageUrl" name="imageUrl" value={values.imageUrl}/>

                <label htmlFor="summary">Summary:</label>
                <textarea onChange ={changeHandler}  name="summary" id="summary" value={values.summary}></textarea>
                <input className="btn submit" type="submit" value="Edit Horse"/>

            </div>
        </form>
    </section>

    )
}