const Offer = ({ title, content }) => {
    return(
        <div className="offer-element">
            <h3 className="text-xl font-semibold mb-3 md:text-2xl">{title}</h3>
            <p className="text-sm pb-1">{content}</p>
        </div>
    )
}

export default Offer;