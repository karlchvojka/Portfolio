export default function Workplace({
  dates,
  desc,
  keywords,
  placementName,
  position,
}) {
  return (
    <article className="workPlace">
      <h3>{placementName}</h3>
      <section className="workexpHeader">
        <h4>{position}</h4>
        <p>{dates}</p>
      </section>
      <p className="keywords"><span>Noteable Keywords: </span>
        {keywords}
      </p>
      <p>{desc}</p>
    </article>
  )
}
