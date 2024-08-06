export default function HorseCatalog (){

    return (
        <section id="catalog-page">
            <h1>All Horses</h1>
            <div className="allHorses">
                <div className="allHorses-info">
                    <img src="./src/images/gallery-1.jpg"/>
                    <h6>Sport</h6>
                    <h2>Fire</h2>
                    <a href="#" className="details-button">Details</a> 
                </div>

            </div>
            <div className="allHorses">
                <div className="allHorses-info">
                    <img src="./src/images/gallery-2.jpg"/>
                    <h6>Sport</h6>
                    <h2>Lighitning</h2>
                    <a href="#" className="details-button">Details</a>
                </div>

            </div>
            <div className="allHorses">
                <div className="allHorses-info">
                    <img src="./src/images/gallery-3.jpg"/>
                    <h6>Fun</h6>
                    <h2>Horhe</h2>
                    <a href="#" className="details-button">Details</a>
                </div>
            </div>


            <h3 className="no-articles">No articles yet</h3>
        </section>
    )
}