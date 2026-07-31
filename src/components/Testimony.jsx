import '../styles/Testimony.css';
import emma from '../assets/img/emma.png';
import sarah from '../assets/img/sarah.png';
import shawn from '../assets/img/shawn.png';

const images = {
  emma,
  sarah,
  shawn
};

function Testimony(props) {
  return (
    <div className='testimonyContent'>
      <img 
        className='imageTestimony'
        src={images[props.image]}
        alt={`Foto de ${props.name}`}
         />

      <div className='containerTextTestimony'>
        <p className='nameTestimony'>
 <span className="nameBold">{props.name}</span> en {props.country}


        </p>
        <p className='chargeTestimony'>
		    {props.charge} en <span className="firmBold">{props.firm}</span>
        </p>
        <p className='testimonyText'>
			"{props.testimony}"
		</p>
      </div>
    </div>
    );
}

export default Testimony;