export default function EditHorseGame (){
    return (
        <section id="edit-page" className="auth">
        <form id="edit">
            <div className="container">

                <h1>Edit Horse Game</h1>
                <label htmlFor="leg-title">Horse Game Name</label>
                <input type="text" id="title" name="title" value=""/>

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" value=""/>

                <label htmlFor="levels">Competition level:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" value=""/>

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" value=""/>

                <label htmlFor="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input className="btn submit" type="submit" value="Edit Game"/>

            </div>
        </form>
    </section>

    )
}