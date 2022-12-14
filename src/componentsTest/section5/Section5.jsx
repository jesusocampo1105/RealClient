import style from "../section5/section5.css";
import testimony1 from "../section5/testimony1.png";
import testimony2 from "../section5/testimony2.png";
import testimony3 from "../section5/testimony3.png";

export default function Section5() {
  return (
    <div className="section5">
      <h1>Lo que dicen nuestros clientes</h1>
      <section className="row">
        <article className="section5-images col-sm">
          <img src={testimony1} className="section5-image" />
        </article>

        <article className="section5-images col-sm">
          <img src={testimony2} className="section5-image" />
        </article>

        <article className="section5-images col-sm">
          <img src={testimony3} className="section5-image" />
        </article>
      </section>
    </div>
  );
}
