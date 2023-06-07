import location from "/images/location.png"

export default function Card(
    // Destructuring props
    {
        img,
        country:{name,place},
        date,
        details
    }
    ) {
    return (
        <section className="card">
            <img src={img} />
            <section className="card--details">
                <img src={location} alt="location icon" />
                <span className="country-name">{name}</span>
                <a href="#">View on Google Maps</a>
                <h2 className="place-name">{place}</h2>
                <h4 className="date">{date}</h4>
                <p>{details}</p>
            </section>
        </section>
    )
}