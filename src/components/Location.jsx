import '../components/location.scss';
import texture from '../assets/img/texture3.jpg';
export const Location = () => {
  return (
    <section
      className='location-date-container'
      style={{ backgroundImage: `url(${texture})` }}
    >
      <h2>¿Dónde y Cuando?</h2>
      <p>Domingo 5 de Noviembre</p>
      <p>Desde las 13:30hs hasta las 18hs</p>
      <p> </p>

      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3285.636810087636!2d-58.47067783383789!3d-34.56275002383545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb67e1706cd25%3A0x827b573793797069!2sParroquia%20Nuestra%20Se%C3%B1ora%20de%20Lourdes!5e0!3m2!1ses!2sar!4v1682447061848!5m2!1ses!2sar'
        //width="600"
        className='map-iframe'
        //height="450"
        style={{
          marginTop: '20px',
          border: 0,
          width: '90%',
          height: '200px',
          borderRadius: '10px',
        }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </section>
  );
};
