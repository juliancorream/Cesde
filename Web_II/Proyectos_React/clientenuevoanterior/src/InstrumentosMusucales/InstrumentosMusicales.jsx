import { Link } from "react-router-dom";
import { CarruselTienda } from "../CarruselTienda/CarruselTienda";
import "./InstrumentosMusicales.css";

export function InstrumentosMusicales() {
  let instrumentos = [
    {
      nombre: "Microphonos",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Finstrumentos%2FMicrophone.webp?alt=media&token=71a86bde-9ebb-4941-acde-855a83c50bbf",
      descripcion: "Excelente Calidad, precio",
      precio: "650.000",
      id: 1,
    },
    {
      nombre: "Amplificador",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Finstrumentos%2Famplificador.webp?alt=media&token=d22c8725-0ebb-4668-a286-02d426935a72",
      descripcion: "Excelente Calidad, Precio, Garantia",
      precio: "1.050.000",
      id: 2,
    },
    {
      nombre: "Bajo Electrico",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Finstrumentos%2Fbajo.webp?alt=media&token=ba176315-3fad-443d-a746-6d81c7341ccc",
      descripcion: "Excelente Calidad, Precio, Garantia, Importado",
      precio: "1.800.000",
      id: 3,
    },
    {
      nombre: "Bateria Yamaha Ref:HGDFRT2530",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Finstrumentos%2Fbateria.jpg?alt=media&token=b2eac327-9a33-468f-8703-4eb26c36c529",
      descripcion: "Excelente Calidad, Precio, Garantia, Importado",
      precio: "4.500.000",
      id: 4,
    },
    {
      nombre: "Guitarra Acustica",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Finstrumentos%2Fguitarra%20acustica.jpg?alt=media&token=4a015f43-e68b-4ddd-a86a-c320eb80fbff",
      descripcion: "Excelente Calidad, Precio, Garantia, Sonido",
      precio: "390.000",
      id: 5,
    },
    {
      nombre: "Guitarra Electrica",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2FCategorias%2Finstrumentos%2Fguitarra_electrica.webp?alt=media&token=cfb385f7-44dd-4f30-8a00-c20e566af5c6",
      descripcion: "Excelente Calidad, Precio, Garantia, Sonido",
      precio: "2.900.000",
      id: 6,
    },
  ];
  return (
    <>
      <section>
        <CarruselTienda />
      </section>

      <section>
        <h2 className="titulo_instrumentosmusicales">Instrumentos Musicales</h2>
      </section>

      <section className="card_instrumentos">
        {instrumentos.map(function (instrumento) {
          return (
            <div key={instrumento.id}>
              <div className="card-instrumento" style={{ width: "18rem" }}>
                <img src={instrumento.foto} className="card-img" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{instrumento.nombre}</h5>
                  <p className="card-text">{instrumento.descripcion}</p>
                  <p className="card-text">{instrumento.precio} COP</p>
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
