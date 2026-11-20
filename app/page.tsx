
const projects = [
  {
    number: "01",
    name: "VAT Dattes",
    type: "Projet de fin d'études · En équipe",
    description:
      "Plateforme e-commerce et logistique dédiée à la valorisation des dattes tunisiennes, avec gestion des utilisateurs, des produits, des commandes et du transport.",
    stack: ["React", "NestJS", "PostgreSQL", "Docker"],
    link: "https://github.com/KhaledZeineb/VAT_Dattes",
  },
  {
    number: "02",
    name: "Application immobilière",
    type: "Application mobile · En équipe",
    description:
      "Application mobile de consultation et de gestion d&apos;annonces immobilières, avec recherche, favoris et affichage des biens.",
    stack: ["Flutter", "Node.js", "PostgreSQL"],
    link: "https://github.com/KhaledZeineb/app_immobilier_flutter",
  },
  {
    number: "03",
    name: "SmartChef",
    type: "Projet personnel",
    description:
      "Application web qui aide à trouver des idées de recettes à partir des ingrédients disponibles, avec une fonctionnalité de génération assistée par IA.",
    stack: ["Symfony", "Twig", "Doctrine", "MySQL", "OpenAI API"],
    link: "https://github.com/KhaledZeineb/smartchef",
  },
  {
    number: "04",
    name: "University Management Platform",
    type: "Projet en équipe",
    description:
      "Plateforme de gestion universitaire organisée autour de fonctionnalités de gestion et d&apos;une architecture basée sur des microservices.",
    stack: ["React", "Microservices"],
    link: "https://github.com/KhaledZeineb/university-management-platform1",
  },
];

const skills = [
  "Symfony", "FastAPI", "Next.js", "React.js", "NestJS", "Node.js",
  "Flutter", "PostgreSQL", "MySQL", "Git", "Docker", "Angular", "Scrum",
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#accueil">ZK<span>.</span></a>
        <nav aria-label="Navigation principale">
          <a href="#apropos">À propos</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#experiences">Parcours</a>
          <a className="nav-contact" href="#contact">Me contacter ↗</a>
        </nav>
      </header>

      <section className="hero section" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> DISPONIBLE POUR DE NOUVELLES OPPORTUNITÉS</p>
          <h1>Bonjour, je suis<br /><span>Zeineb Khaled.</span></h1>
          <h2>Développeuse Full Stack <i>·</i> Master DevOps &amp; Cloud</h2>
          <p className="intro">
            Je conçois et développe des applications web et mobiles.
            J&apos;aime transformer des idées en solutions numériques utiles,
            de l&apos;interface utilisateur jusqu&apos;au backend et aux bases de données.
          </p>
          <div className="actions">
            <a className="button primary" href="#projets">Découvrir mes projets <span>↘</span></a>
            <a className="button secondary" href="https://github.com/KhaledZeineb" target="_blank" rel="noreferrer">Mon GitHub ↗</a>
          </div>
          <div className="hero-meta"><span>📍 Tunisie</span><span>Web &amp; Mobile</span><span>DevOps &amp; Cloud</span></div>
        </div>
        <div className="hero-card" aria-label="Monogramme ZK">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="monogram">ZK<span>.</span></div>
          <p>BUILD · LEARN · CREATE</p>
          <div className="float-tag tag-one">Frontend</div>
          <div className="float-tag tag-two">Backend</div>
          <div className="float-tag tag-three">Cloud</div>
        </div>
      </section>

      <section className="section about" id="apropos">
        <div className="section-heading"><p className="eyebrow">01 / À PROPOS</p><h2>Un peu plus <span>sur moi.</span></h2></div>
        <div className="about-content">
          <p className="about-lead">
            Diplômée en Développement des Systèmes Informatiques (DSI) de l’ISET Tozeur,
            je poursuis actuellement un Master en DevOps &amp; Cloud.
          </p>
          <p>
            Mon parcours m&apos;a permis de travailler sur des projets web et mobiles,
            individuellement et en équipe. Je m&apos;intéresse au développement Full Stack,
            à la conception d&apos;API, aux bases de données et aux pratiques modernes de
            déploiement logiciel.
          </p>
          <a className="text-link" href="mailto:khaledzeineb81@gmail.com">Échanger avec moi ↗</a>
        </div>
      </section>

      <section className="section skills" id="competences">
        <div className="section-heading"><p className="eyebrow">02 / SAVOIR-FAIRE</p><h2>Technologies &amp; <span>outils.</span></h2></div>
        <p className="section-intro">Les technologies que j&apos;ai utilisées dans mes projets et travaux pratiques.</p>
        <div className="skill-list">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div>
      </section>

      <section className="section projects" id="projets">
        <div className="section-heading"><p className="eyebrow">03 / SÉLECTION</p><h2>Quelques projets <span>réalisés.</span></h2></div>
        <p className="section-intro">Une sélection de projets académiques et personnels. Consultez les dépôts pour découvrir le code et les détails techniques.</p>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top"><span>{project.number} / PROJET</span><a href={project.link} target="_blank" rel="noreferrer" aria-label={`Voir ${project.name} sur GitHub`}>↗</a></div>
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">Voir sur GitHub ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experiences">
        <div className="section-heading"><p className="eyebrow">04 / PARCOURS</p><h2>Formation &amp; <span>expériences.</span></h2></div>
        <div className="timeline">
          <article><span className="timeline-date">EN COURS</span><div><h3>Master DevOps &amp; Cloud</h3><p>ISET Tozeur · Tunisie</p></div></article>
          <article><span className="timeline-date">2026</span><div><h3>Stage de projet de fin d&apos;études</h3><p>Host Desert Navigation · Tozeur</p><p className="timeline-detail">Participation au développement de VAT Dattes, une plateforme web et mobile dédiée au commerce et à la logistique des dattes tunisiennes.</p></div></article>
          <article><span className="timeline-date">2025</span><div><h3>Stage en développement logiciel</h3><p>ITQAN · Tozeur</p><p className="timeline-detail">Découverte et participation à des activités de développement logiciel dans un environnement professionnel.</p></div></article>
          <article><span className="timeline-date">2024</span><div><h3>Stage d&apos;initiation</h3><p>Banque de Tunisie · Tozeur</p><p className="timeline-detail">Découverte des opérations bancaires, accueil et orientation des clients.</p></div></article>
          <article><span className="timeline-date">DIPLÔME</span><div><h3>Licence en Développement des Systèmes Informatiques</h3><p>ISET Tozeur · Tunisie</p></div></article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="eyebrow">05 / CONTACT</p>
        <h2>Un projet en tête ?<br /><span>Parlons-en.</span></h2>
        <p>Je suis ouverte aux échanges, aux collaborations et aux nouvelles opportunités professionnelles.</p>
        <a className="button light" href="mailto:khaledzeineb81@gmail.com">khaledzeineb81@gmail.com ↗</a>
        <div className="contact-links">
          <a href="https://github.com/KhaledZeineb" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn — ajoute ton profil ↗</a>
        </div>
      </section>

      <footer><a className="brand" href="#accueil">ZK<span>.</span></a><p>© {new Date().getFullYear()} Zeineb Khaled · Réalisé avec Next.js</p><a href="#accueil">Retour en haut ↑</a></footer>
    </main>
  );
}
