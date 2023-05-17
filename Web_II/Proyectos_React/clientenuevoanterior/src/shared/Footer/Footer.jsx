import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <>
      {/* footer */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="first">
                <h4>Calendario</h4>
                <p> Conciertos</p>
                <p> Eventos Sociales</p>
                <p> Giras</p>
                <p> Rutas de Conciertos</p>
                <p> Festivales</p>
                <p> Donaciones</p>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="second">
                <h4> Navegar</h4>
                <ul>
                  <li>
                    <Link to="/">ChocQuibTown</Link>
                  </li>
                  <li>
                    <Link to="/resenas">Reseñas</Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/integrantes#arriba">
                      Integrantes
                    </Link>
                  </li>
                  <li>
                    <Link to="/tienda">Tienda</Link>
                  </li>
                  <li>
                    <Link to="/musica">Musica</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="third">
                <h4> Contacto</h4>
                <ul>
                  <li>GOYO (Gloria Emilse Martínez Perea</li>
                  <li />
                  <li>
                    <i className="far fa-envelope" />{" "}
                    gloriaemilse@chocquibtown.com.co
                  </li>
                  <li>
                    <i className="far fa-envelope" /> info@chocquibtown.com.co
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt" /> Colombia{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="line" />
          <p className="dllo_por">
            Desarrollado por: Julian Andres Correa Mejia
          </p>
        </div>
      </div>
    </>
  );
}
