import "./Members.css";

export function Members() {
  let integrantes = [
    {
      nombre: "TOSTAO (Carlos Yahanny Valencia Ortiz)",
      rol: "Vocalista",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/tostao.jpg?alt=media&token=c407fed2-509a-4609-812e-5ba6cda8ff8c",
      nacimiento: "Quibdó, Chocó, el 5 de marzo de 1981",
      resena:
        "Esposo de Goyo, este joven percusionista ingresa al mundo musical a la corta edad de ocho años, su carrera se ha orientado hacia el ritmo y la percusión; en sus inicios, trabajó con varios proyectos musicales nacionales, como es el caso de Mensajeros, Iroko, Mojarra Eléctrica, Carbono, Buena Vibra Sound System y distintos ensambles de música jazz, como MJE Mojarra Jazz Ensamble e internacionales como Carlos Santana, Carlos Vives y Samo",
      id: 1,
    },
    {
      nombre: "GOYO (Gloria Emilse Martínez Perea)",
      rol: "Vocalista",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/goyo.webp?alt=media&token=553f2529-bbd8-47a7-a79c-e18a0f35a27b",
      nacimiento: "Condoto - Chocó, el 12 de julio de 1982",
      resena:
        "Cantante, MC y productora, cofundadora de Chocquibtown, y desde los ocho años comenzó a dar sus pasos en la música a través de la percusión, heredera de una familia musical donde su madre y tía le ayudaron a cultivar su melodiosa voz. Es el corazón de la banda, el alma y la belleza africana por excelencia, Trabajó en proyectos musicales nacionales como Iroko, Carbono, Mensajeros, Mojarra Eléctrica, Buena Vibra Sound System y otros de música jazz.",
      id: 2,
    },
    {
      nombre: "SLOW MIKE (Miguel Andrés Martínez Perea)",
      rol: "Productor",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosjacm.appspot.com/o/slow%20mike.jpg?alt=media&token=4c312f1d-2708-4bce-9013-b6b27bddd414",
      nacimiento: "Condoto - Chocó, el  30 de junio de 1986",
      resena:
        " Miguel Andrés Martínez Perea, más conocido como 'Slow Mike' Hermano de Goyo y genio de los beats, Slow cierra el circulo de creación de Chocquibtown con la producción y el manejo de los ritmos electrónicos en la banda, fanático de los video juegos y de la tecnología, es el más joven de los tres, un autodidacta que reforzó su talento de la mano de Richard Blair (Sidestepper) y muchos otros grandes productores",
      id: 3,
    },
  ];

  return (
    <>
      <section className="imagen"></section>
      {integrantes.map(function (integrante) {
        return (
          <div key={integrante.id}>
            <h2 className="titulo_artista">{integrante.nombre}</h2>
            <div className="pres_artista">
              <div className="imgartista">
                <img src={integrante.foto} alt="foto" className="img_artista" />
              </div>
              <div className="texto_artista">
                <h6 className="text_rol">Rol: {integrante.rol}</h6>
                <h6 className="text_nacimiento">
                  Nacimiento: {integrante.nacimiento}
                </h6>
                <p className="bio_artista">{integrante.resena}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
