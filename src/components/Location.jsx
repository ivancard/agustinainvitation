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
      <p>Camino Real Presbítero González y Montevideo</p>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.4667242982255!2d-58.59121482429929!3d-34.84449827286888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcdbbbc489c66f%3A0x1e5552c9253e8d54!2sLa%20domenica%20casa%20de%20campo!5e0!3m2!1ses-419!2sar!4v1697406116977!5m2!1ses-419!2sar" 
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
