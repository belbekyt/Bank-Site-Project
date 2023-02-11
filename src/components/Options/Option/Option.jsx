const Option = ({ photo, heading, text }) => {
    return (
        <div className='offers-card'>
            <img src={photo} alt="loan"/>
            <div className='p-5'>
                <h3 className='offers-card-text'>{heading}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Option;