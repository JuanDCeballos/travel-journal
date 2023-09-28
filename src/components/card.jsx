const Card = (props) => {
  return (
    <div className='card-container'>
      <div className='img-container'>
        <img className='img' src={props.imageUrl} alt={props.location} />
      </div>
      <div className='info-container'>
        <div className='location-container'>
          <p className='location'>
            <img src='mark.png' />
            {props.location}
          </p>
          <a
            className='google-link'
            href={props.googleMapsUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            View on Google Maps
          </a>
        </div>
        <div className='title-container'>
          <h1 className='title'>{props.title}</h1>
        </div>
        <div className='dates-container'>
          <p className='dates'>{`${props.startDate} - ${props.endDate}`}</p>
        </div>
        <div className='description-container'>
          <p className='description'>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
