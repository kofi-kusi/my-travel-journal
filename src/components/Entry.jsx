export default function Entry(props) {
    return (
        <article className="entry">
            <div>
                <img className="place-img" 
                src={props.img.src} 
                alt={props.img.alt}
                />
            </div>
            <div className="details">
                <div className="top">
                    <div className="location">
                    <img className="marker-logo" src="src/assets/images/marker.png" alt="marker logo" />
                    <p className="details--location">
                        {props.country.toUpperCase()}
                    </p>
                    </div>
                    <a className="details--link" 
                    href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2>{ props.title }</h2>
                <p className="date">
                    {props.date}
                </p>
                <p>{ props.text }</p>
            </div>
            <hr></hr>
        </article>
    )
}