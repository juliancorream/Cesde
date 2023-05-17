import { Link } from "react-router-dom";
import "./CarruselTienda.css";

export function CarruselTienda() {
  return (
    <>
      <section>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2Fbanner%2Fbbaner_tiendavirtual_1.webp?alt=media&token=6d604126-0b28-4190-8615-cf77b07914cf"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2Fbanner%2Fbbaner_tiendavirtual_2.webp?alt=media&token=b876530f-bd26-4001-bd93-3c635e686b54"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2Fbanner%2Fbbaner_tiendavirtual_3.webp?alt=media&token=da7036d9-cdb8-4293-9536-a62673fbdceb"
                className="d-block w-100"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tienda%2Fbanner%2Fbbaner_tiendavirtual_4.webp?alt=media&token=6ea479b3-ab85-43ac-8be0-d61e5f72f49f"
                className="d-block w-100"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
