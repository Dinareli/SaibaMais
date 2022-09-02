
import Logo from '../../img/logodock.png';
import './style.css';

function Container() {
  return (
    <div className="principal">
        <img src={Logo}/>
          <p id="text-part1">A única plataforma</p>
          <p id="text-part2">que oferece soluções para todo o ecossistema de pagamentos e banking.</p>
        <button>SAIBA MAIS</button>
    </div>  
  );
}

export default Container;