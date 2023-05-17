import { Link } from "react-router-dom";
import "./Shop.css";
import { CarruselTienda } from "../CarruselTienda/CarruselTienda";

export function Shop() {
  let categorias = [
    {
      nombre: "Vestuario",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fvestuario.jpg?alt=media&token=37c65963-0d76-434a-b3d5-33f1a7bd05be",
      descripcion:
        "Encuentra los mejores outfits para Damas y Caballeros de la mejor Calidad, Comidad y Precio",
      link: "/vestuario",
      id: 1,
    },
    {
      nombre: "Instrumentos Musicales",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Finstrumentos_musicales.jpg?alt=media&token=62d61d6b-4749-4f08-9a48-046a473f7f43",
      descripcion:
        "Encuentra gran varidad de marcas, desempeño, referencias, con sonidos que Transportan  ",
      link: "/instrumentosmusicales",
      id: 2,
    },
    {
      nombre: "Calzado",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fcalzado.webp?alt=media&token=79f5a662-b334-40f7-bdc1-56744315d978",
      descripcion:
        "Encuentra gran varidad de marcas, estilos, colores, comodidad y calidad",
      link: "/calzado",
      id: 3,
    },
  ];

  return (
    <>
      <section>
        <CarruselTienda />
      </section>

      <section>
        <h2 className="titulo_tienda">Nuestos Productos</h2>
      </section>

      <section className="card_productos">
        {categorias.map(function (categoria) {
          return (
            <div key={categoria.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={categoria.foto} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{categoria.nombre}</h5>
                  <p className="card-text">{categoria.descripcion}</p>
                  <Link to={categoria.link} className="btn btn-primary">
                    Ver Mas...
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
