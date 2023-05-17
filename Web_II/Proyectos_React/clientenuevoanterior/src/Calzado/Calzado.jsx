import { Link } from "react-router-dom";
import { CarruselTienda } from "../CarruselTienda/CarruselTienda";
import "./Calzado.css";

export function Calzado() {
  let calzados = [
    {
      nombre: "Tenis Fila Blaco Dama",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fcalzado%2Ftenis_blancos_dama.jpg?alt=media&token=013a2541-fa65-47e5-85bd-a90dd967d28f",
      descripcion: "Excelente Diseño Originales Talla: 5 6 7 7.5 8",
      precio: "290.000",
      id: 1,
    },
    {
      nombre: "Tenis Puma Dama",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fcalzado%2Ftenis_dama_blanco.avif?alt=media&token=83bf9b2f-83fc-41bd-8f5e-dec1d3d6c4e7",
      descripcion: "Excelente Diseño Originales Talla: 5 6 6.5 7",
      precio: "220.000",
      id: 2,
    },
    {
      nombre: "Tenis Hombre Negros",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fcalzado%2Ftenis_negros.jpg?alt=media&token=f25532ab-5c29-484f-a9d6-ee4e05b297bf",
      descripcion: "Excelente Diseño Originales Talla: 7 7.5 8 8.5 9",
      precio: "320.000",
      id: 3,
    },
    {
      nombre: "Tenis Dama Negros",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fcalzado%2Ftenis_negros_dama.avif?alt=media&token=7a8b98a1-f2b8-4182-ad1b-8366ade61016",
      descripcion: "Excelente Diseño Originales Talla: 5 6 6.5 7",
      precio: "260.000",
      id: 4,
    },
    {
      nombre: "Tenis Hombre",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fcalzado%2Ftennis_blancos.jpg?alt=media&token=62db436e-d385-4c92-95ee-39a938e11c61",
      descripcion: "Excelente Diseño Originales Talla: 7 7.5 8 8.5 9",
      precio: "380.000",
      id: 5,
    },
    {
      nombre: "Tenis Hombre Puma Rojos",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fcalzado%2Ftennis_rojos.jpg?alt=media&token=5d2e66a7-9992-478c-9c6e-76c5a43326b7",
      descripcion: "Excelente Diseño Originales Talla: 7.5 8 8.5 9",
      precio: "420.000",
      id: 6,
    },
  ];

  return (
    <>
      <section>
        <CarruselTienda />
      </section>

      <section>
        <h2 className="titulo_calzado">Calzado</h2>
      </section>

      <section className="card_calzados">
        {calzados.map(function (calzado) {
          return (
            <div key={calzado.id}>
              <div className="card-calzado" style={{ width: "18rem" }}>
                <img src={calzado.foto} className="card-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{calzado.nombre}</h5>
                  <p className="card-text">{calzado.descripcion}</p>
                  <p className="card-text">{calzado.precio} COP</p>
                  <Link to="" className="btn btn-danger">
                    Comprar
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
