



const Card = (props) => {
    return (
        <div className="card-wrapper">
            <img src={props.imageUrl} alt={`Image of ${props.title}`} />
            <div className="card-body">
                <span><img  className="location-icon" src="location-icon.svg" alt="icon of a location pindrop"/></span>
                <span className="location">{props.location}</span>
                <span><a className="googleMaps" target="_blank" href={props.googleMapsUrl}>View on Google Maps</a></span>
                <h2>{props.title}</h2>
                <h3>{props.startDate} - {props.endDate}</h3>
                <p>{props.description}</p>
            </div>


        </div>
    )
}
export default Card