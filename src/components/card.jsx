const Card = () => {
  return (
    <div className='card-container'>
      <div className='img-container'>
        <img
          className='img'
          src='https://source.unsplash.com/WLxQvbMyfas'
          alt=''
        />
      </div>
      <div className='info-container'>
        <div className='location-container'>
          <p className='location'>
            <img src='mark.png' /> JAPAN
          </p>
          <a
            className='google-link'
            href='https://goo.gl/maps/1DGM5WrWnATgkSNB8'
            target='_blank'
            rel='noopener noreferrer'
          >
            View on Google Maps
          </a>
        </div>
        <div className='title-container'>
          <h1 className='title'>Mount Fuji</h1>
        </div>
        <div className='dates-container'>
          <p className='dates'>12 Jan, 2021 - 24 Jan, 2021</p>
        </div>
        <div className='description-container'>
          <p className='description'>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
