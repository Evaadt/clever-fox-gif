import './Home.css';
import TituloSecao from '../../shared/TituloSecao/TituloSecao.jsx';

function Home({ onGoToGroup }) {
  return (
    <div className="container-home">
      <header className="header">
        <div className="profile-button">
          <span className="dot"></span>
          <span className="profile-text">Name</span>
        </div>
        <button className="menu-button">☰</button>
      </header>

     <TituloSecao
  titulo="Início"
  icone={<HomeIcon style={{ marginRight: '6px', fontSize: 22 }} />}
/>
      <div className="game-day-card" onClick={onGoToGroup}></div> {/* Navega para grupo */}

      <div className="small-cards-row">
        <div className="card-mini"></div>
        <div className="card-mini"></div>
        <div className="card-mini"></div>
      </div>

      <TituloSecao titulo="Histórico" />
      <div className="historic-box"></div>

      <div className="bottom-boxes">
        <div className="box-left"></div>
        <div className="box-right-top"></div>
        <div className="box-right-bottom"></div>
      </div>
    </div>
  );
}

export default Home;
