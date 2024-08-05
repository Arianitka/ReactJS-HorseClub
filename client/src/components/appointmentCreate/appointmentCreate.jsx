export default function AppointmentCreate(){
    return(
        <section id="create-page" class="auth">
        <form id="create">
            <div class="container">

                <h1>Create Appointment</h1>
                <label htmlFor="leg-title">Horse Name:</label>
                <input type="text" id="title" name="title" placeholder="Enter game title..."/>

                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" placeholder="Enter game category..."/>

                <label htmlFor="levels">Competition level:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1"/>

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

                <label htmlFor="summary">History:</label>
                <textarea name="summary" id="summary"></textarea>
                <input class="btn submit" type="submit" value="Create Game"/>
            </div>
        </form>
    </section>

    )
}