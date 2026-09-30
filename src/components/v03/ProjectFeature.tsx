import { Link } from "@tanstack/react-router";
import { V03Contact, V03Footer, V03Header } from "./V03Chrome";
import type { Project } from "./projects";

const HOME = "/reference-ora";

export function ProjectFeature({ project }: { project: Project }) {
  const { approach, highlight } = project;
  return (
    <div className="v03">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <V03Header home={HOME} light />

      <main id="main" className="pf">
        <div className="pf-wrap">
          <section className="pf-panel" aria-labelledby="pf-h">
            <div className="pf-photo">
              <img src={project.hero.src} alt={project.hero.alt} />
              <p className="pf-intro">{project.intro}</p>
              <p className="pf-num">{project.number}</p>
              <h1 className="pf-hl" id="pf-h">
                {project.headline[0]}
                <br />
                {project.headline[1]}
              </h1>
            </div>

            <div className="pf-card pf-main">
              <div className="pf-main-head">
                <a className="pf-more" href="#rooms">
                  See all rooms <span aria-hidden="true">↓</span>
                </a>
                <h2 className="pf-main-title">{approach.title}</h2>
                <div className="pf-row">
                  <p>{approach.lead}</p>
                  <p>{approach.body}</p>
                </div>
              </div>
              <div className="pf-imgs">
                {approach.photos.map((ph) => (
                  <img key={ph.src} src={ph.src} alt={ph.alt} />
                ))}
              </div>
            </div>

            <div className="pf-card pf-side">
              <div className="pf-side-head">
                <p className="pf-side-t">{highlight.title}</p>
                <p className="pf-side-s">{highlight.subtitle}</p>
              </div>
              <img src={highlight.photo.src} alt={highlight.photo.alt} />
            </div>
          </section>
        </div>

        <section id="rooms" className="pf-wrap pf-rooms" aria-labelledby="pf-rooms-h">
          <h2 id="pf-rooms-h" className="sr">
            {project.name} rooms
          </h2>
          {project.rooms.map((room) => (
            <figure key={room.caption} className={room.wide ? "pf-room pf-room-wide" : "pf-room"}>
              <img src={room.src} alt={room.alt} loading="lazy" />
              <figcaption>{room.caption}</figcaption>
            </figure>
          ))}
        </section>

        <div className="body-chalk" data-header="light">
          <V03Contact />
          <div className="wrap pf-back-wrap">
            <Link className="cap pf-back" to={HOME} hash="work">
              <span aria-hidden="true">←</span> All projects
            </Link>
          </div>
        </div>

        <V03Footer home={HOME} />
      </main>
    </div>
  );
}
