import { Link } from "react-router-dom";
import { CarruselTienda } from "../CarruselTienda/CarruselTienda";
import "./vestuario.css";

export function Vestuario() {
  let vestuarios = [
    {
      nombre: "Camiseta Negra",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fvestuario%2Fcamiseta_negra.jfif?alt=media&token=b50ead6b-ee0c-4576-9091-01638334a7e9",
      descripcion: "Excelente Calidad Tallas: S M L XL XXL XXXL",
      precio: "90.000",
      id: 1,
    },
    {
      nombre: "Chompa Negra",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fvestuario%2Fchompa_negra.jfif?alt=media&token=3d70525e-ef16-4a53-b796-301b9e411ba9",
      descripcion: "Excelente Calidad Tallas: XL XXL XXXL",
      precio: "180.000",
      id: 2,
    },
    {
      nombre: "Chompa Rosada",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fvestuario%2Fchompa_rosada.jfif?alt=media&token=3348a301-f839-4dfa-a92b-dd05ce01e43f",
      descripcion: "Excelente Calidad Tallas: L XL XXL",
      precio: "150.000",
      id: 3,
    },
    {
      nombre: "Conjunto Joger",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fvestuario%2Fconjunto_verde.webp?alt=media&token=63f873d4-7b7a-43a2-994a-69c6c26925f7",
      descripcion: "Excelente Conjunto Dama Joger Tallas: M L XL",
      precio: "250.000",
      id: 4,
    },
    {
      nombre: "Joger Beige",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fvestuario%2Fjoger_beige.avif?alt=media&token=28eb4e98-f6e5-417e-b163-e264b6fefdeb",
      descripcion: "Excelente Joger color Beige Tallas: L XL",
      precio: "190.000",
      id: 5,
    },
    {
      nombre: "Joger Vinotinto",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Fvestuario%2Fjoger_vinotinto.jpg?alt=media&token=7afe3320-3297-4018-987c-b64081002aae",
      descripcion: "Excelente Joger color Beige Tallas: L XL XXL",
      precio: "220.000",
      id: 6,
    },
  ];

  return (
    <>
      <section>
        <CarruselTienda />
      </section>

      <section>
        <h2 className="titulo_vestuario">Vestuario</h2>
      </section>

      <section className="card_vestuarios">
        {vestuarios.map(function (vestuario) {
          return (
            <div key={vestuario.id}>
              <div className="card-vestuario" style={{ width: "18rem" }}>
                <img src={vestuario.foto} className="card-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{vestuario.nombre}</h5>
                  <p className="card-text">{vestuario.descripcion}</p>
                  <p className="card-text">{vestuario.precio} COP</p>
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
