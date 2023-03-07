import imagen from "../../public/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return {
    title: "GuitarLa - Sobre Nosotros",
    description: "Venta de guitarras, blog de música",
  };
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />

        <div>
          <p>
            Suspendisse potenti. Sed id velit ut ligula congue ultrices. Ut
            euismod tristique enim, in porttitor tortor. Cras sit amet urna
            turpis. Nullam ut mollis nibh. Vivamus nisl nulla, varius vel
            feugiat eget, molestie congue ligula. Nam in dictum dolor, a
            ullamcorper odio. Nullam non ipsum eget est venenatis condimentum
            non ut arcu. Nam posuere ligula eu felis varius, ut porta ex
            sagittis. Praesent vel bibendum justo. Sed varius ante in justo
            scelerisque, nec commodo velit pretium. Donec convallis vel odio et
            pulvinar. Praesent lacus leo, condimentum et condimentum quis,
            dapibus sed diam.
          </p>

          <p>
            Sed varius nisl erat, at blandit leo lacinia eu. Aliquam tincidunt
            nibh at neque tempus, ac eleifend mi consectetur. Sed accumsan
            molestie leo, ut consequat neque facilisis sed. Vivamus luctus purus
            a nulla convallis, at imperdiet sem commodo. Nullam eu dapibus
            ligula, a tristique ipsum. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Suspendisse
            eleifend, mi vel rutrum mattis, magna metus cursus orci, vitae
            ullamcorper quam massa quis sem.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
