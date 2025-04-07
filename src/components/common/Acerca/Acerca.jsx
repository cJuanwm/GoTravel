import "./Acerca.css";

export function Acerca() {
  return (
    <section className="container my-5">
      <section className="row">
        <section className="col-12 col-md-6">
          <img
            src="/public/Images/asesor.png"
            alt="imagen"
            className="img-fluid"
          />
        </section>
        <section className="col-12 col-md-6">
          <h2 className="title">GoTravel</h2>
          <p className="text">
            En GoTravel, tu comodidad y seguridad son nuestra prioridad.
            Ofrecemos reservas fáciles, pagos seguros y las mejores opciones de
            hospedaje para que disfrutes tu viaje sin preocupaciones. Confía en
            nosotros y haz de cada viaje una experiencia inolvidable
          </p>
        </section>
      </section>
    </section>
  );
}
