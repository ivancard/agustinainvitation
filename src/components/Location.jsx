import '../components/location.scss';
import texture from '../assets/img/texture3.jpg';
export const Location = () => {
  return (
    <section
      className='location-date-container'
      style={{ backgroundImage: `url(${texture})` }}
    >
      <h2>¿Dónde y Cuando?</h2>
      <p>Domingo 18 de Noviembre</p>
      <p>Al mediodía</p>
      <p> </p>

      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.0058464518074!2d-58.352952223860726!3d-34.80579476819906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32ca045ce1c6d%3A0xd23bfd5de8c7caf5!2sRicardo%20Rojas%203669%2C%20B1849HLU%20Claypole%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1746990537862!5m2!1ses!2sar"
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
