import marker from '../assets/images/marker.png'

export default function Entry(props) {
    return (
        <article className="entry">
            <div>
                <img className="place-img" 
                src={props.entry.img.src} 
                alt={props.entry.img.alt}
                />
            </div>
            <div className="details">
                <div className="top">
                    <div className="location">
                    <img className="marker-logo" src={marker}alt="marker logo" />
                    <p className="details--location">
                        {props.entry.country.toUpperCase()}
                    </p>
                    </div>
                    <a className="details--link" 
                    href={props.entry.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2>{ props.entry.title }</h2>
                <p className="date">
                    {props.entry.date}
                </p>
                <p>{ props.entry.text }</p>
            </div>
            <hr></hr>
        </article>
    )
}