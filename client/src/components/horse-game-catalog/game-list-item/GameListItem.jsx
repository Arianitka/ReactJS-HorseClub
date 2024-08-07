export default function GameListItem({
    _id,
    title,
    category,
    imageUrl,
    

}){

    return (
        <div className="allHorses">
        <div className="allHorses-info">
            <img src={imageUrl}/>
            <h6>{category}</h6>
            <h2>{title}</h2>
            <Link to={`/games/{_id}/details`} className="details-button">Details</Link> 
        </div>

    </div>

    )
}