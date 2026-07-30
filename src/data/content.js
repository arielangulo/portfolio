// Edita aquí tu información.
//
// `meta` = datos que NO cambian entre idiomas (nombre, contacto, foto).
// `content.es` / `content.en` = todo el texto visible, con la MISMA forma
// en los dos idiomas.
//
// Cada proyecto tiene:
//  - datos de card (resumen rápido, visible en /  )
//  - datos de case study (página completa en /projects/:slug)
//
// MOLDE de un proyecto nuevo — copiá esto (en `es` Y en `en`, mismo slug):
// {
//   slug: "nombre-del-proyecto",       // define la URL: /projects/nombre-del-proyecto
//   title: "...",
//   status: "..." | null,
//   summary: "Resumen de 2-4 líneas para la card.",
//   image: "/proyectos/archivo.jpg" | null,
//   imageFit: "contain" | "cover",     // default "contain" (logos), "cover" para screenshots
//   featured: true | false,            // ocupa 2 columnas en la grilla (opcional)
//   tech: ["React", "Node.js"],        // se buscan íconos en techIcons.js por nombre
//   links: { site: "https://..." | null, github: "https://..." | null },
//   caseStudy: {
//     objective: "¿Qué problema resolvía?",
//     architecture: "Descripción de la arquitectura (agregá diagramas después vía ProjectGallery).",
//     contribution: "Qué desarrollaste específicamente vos.",
//     challenges: [
//       { problem: "...", solution: "..." },
//     ],
//     results: "Qué logró el proyecto.",
//     lessons: "Qué aprendiste.",
//     gallery: ["/proyectos/captura1.jpg"], // opcional
//   },
// }

export const meta = {
  name: "Ariel Angulo",
  location: "Costa Rica",
  email: "tucorreo@ejemplo.com",
  linkedin: "https://linkedin.com/in/tu-usuario",
  github: "https://github.com/tu-usuario",
  cvUrl: "#",
  photo: "/profile.jpg",
};

const projectsEs = [
  {
    slug: "crix-portal",
    title: "CRIX.CR — Sitio institucional",
    status: "Próximo a publicarse",
    summary:
      "Sitio oficial de CRIX.CR, el punto de intercambio de tráfico de Costa Rica. Next.js + PostgreSQL, con despliegue automatizado mediante un runner self-hosted.",
    image: null,
    imageFit: "contain",
    featured: false,
    tech: ["Next.js", "PostgreSQL", "CI/CD"],
    links: { site: null, github: null },
    caseStudy: {
      objective:
        "NIC Costa Rica necesitaba un sitio institucional para CRIX.CR, el punto de intercambio de tráfico del país, que comunicara claramente qué es un IXP, quiénes participan y cómo unirse — un sitio orientado tanto a ISPs técnicos como a las organizaciones que evalúan sumarse.",
      architecture:
        "Aplicación Next.js con renderizado en servidor, base de datos PostgreSQL para el contenido dinámico (miembros, estadísticas de tráfico), y despliegue automatizado dentro de la red interna de NIC Costa Rica, detrás de un firewall FortiClient.",
      contribution:
        "Diseño y desarrollo completo del sitio: estructura de páginas, componentes de UI, modelo de datos en PostgreSQL, y el pipeline de CI/CD para el despliegue.",
      challenges: [
        {
          problem:
            "El servidor de despliegue está protegido por FortiClient, así que los runners de GitHub Actions alojados en la nube no tenían acceso directo a la red interna.",
          solution:
            "Configuré un runner self-hosted dentro de la red de NIC Costa Rica. Cada push a main dispara el workflow, que construye la aplicación y la despliega automáticamente en el servidor, sin exponer la red hacia afuera.",
        },
      ],
      results:
        "Pipeline de despliegue continuo funcionando de punta a punta: cada cambio en main llega a producción sin intervención manual. El sitio está en fase final antes de su publicación oficial.",
      lessons:
        "Configurar CI/CD en un entorno con restricciones de red reales (no solo en la nube) me enseñó a pensar la automatización considerando el contexto de infraestructura, no solo el código de la aplicación.",
      gallery: [],
    },
  },
  {
    slug: "cdn-analytics",
    title: "Análisis de tráfico CDN — NIC Costa Rica",
    status: "Piloto técnico",
    summary:
      "Pipeline para medir el consumo de tráfico de CDNs entre los miembros de NIC Costa Rica, usando Akvorado como motor de recolección.",
    image: null,
    imageFit: "cover",
    featured: false,
    tech: ["Akvorado", "Networking", "Scripting"],
    links: { site: null, github: null },
    caseStudy: {
      objective:
        "NIC Costa Rica quería entender cuánto tráfico de CDNs específicos (Google, Cloudflare, Akamai, etc.) circula entre sus miembros, como insumo para decisiones de peering.",
      architecture:
        "Akvorado como motor de recolección de flujos de red (NetFlow/sFlow), con scripts propios para clasificar el tráfico por CDN de origen y procesarlo en reportes agregados.",
      contribution:
        "Configuración completa de Akvorado, y desarrollo de los scripts de automatización para la recolección y el procesamiento de los datos de tráfico.",
      challenges: [
        {
          problem:
            "Clasificar tráfico por CDN de origen a partir de flujos de red crudos no es trivial: requiere mapear rangos de IP y ASN a proveedores conocidos.",
          solution:
            "Construí una capa de clasificación sobre los datos de Akvorado que cruza la información de flujo con bases de datos de ASN públicas.",
        },
      ],
      results:
        "El pipeline de recolección quedó validado como piloto técnico: la arquitectura funciona y los datos se recolectan correctamente. El proyecto no llegó a una fase de producción continua dentro del alcance de la pasantía.",
      lessons:
        "Trabajar con datos de red a esta escala me dio una base sólida en herramientas de observabilidad de tráfico y en cómo estructurar pipelines de datos de networking.",
      gallery: [],
    },
  },
  {
    slug: "montesuma",
    title: "Adiestramiento Montesuma — Sitio web",
    status: "Publicado",
    summary:
      "Sitio web para un negocio de adiestramiento canino en Costa Rica. Diseño limpio, enfocado en presentar servicios y facilitar el contacto.",
    image: null,
    imageFit: "contain",
    featured: false,
    tech: ["React", "Vite", "TailwindCSS"],
    links: { site: null, github: null },
    caseStudy: {
      objective:
        "Un negocio local de adiestramiento canino necesitaba presencia web para mostrar sus servicios y facilitar que clientes potenciales los contactaran.",
      architecture:
        "Sitio estático construido con React + Vite, estilizado con TailwindCSS, sin backend — formulario de contacto vía enlace directo.",
      contribution:
        "Diseño y desarrollo completo del sitio, de principio a fin.",
      challenges: [],
      results:
        "Sitio publicado y en uso activo por el negocio.",
      lessons:
        "Proyecto pequeño y de alcance acotado — buena práctica en llevar un sitio completo de diseño a publicación por mi cuenta.",
      gallery: [],
    },
  },
  {
    slug: "web-projects",
    title: "Proyectos web adicionales",
    status: null,
    summary:
      "Varios sitios web estáticos desarrollados de forma independiente, enfocados en diseño limpio y buenas prácticas de frontend.",
    image: null,
    imageFit: "contain",
    featured: false,
    tech: ["React", "Frontend"],
    links: { site: null, github: null },
    caseStudy: {
      objective: "Proyectos personales para practicar frontend fuera de un contexto laboral específico.",
      architecture: "Sitios estáticos, sin backend.",
      contribution: "Diseño y desarrollo independiente.",
      challenges: [],
      results: "Varios sitios completados y publicados.",
      lessons: "Base práctica en frontend antes de sumar cloud y networking al perfil.",
      gallery: [],
    },
  },
];

const projectsEn = [
  {
    slug: "crix-portal",
    title: "CRIX.CR — Institutional site",
    status: "Launching soon",
    summary:
      "Official site for CRIX.CR, Costa Rica's traffic exchange point. Built with Next.js + PostgreSQL, with automated deployment through a self-hosted runner.",
    image: null,
    imageFit: "contain",
    featured: false,
    tech: ["Next.js", "PostgreSQL", "CI/CD"],
    links: { site: null, github: null },
    caseStudy: {
      objective:
        "NIC Costa Rica needed an institutional site for CRIX.CR, the country's traffic exchange point, that clearly communicates what an IXP is, who participates, and how to join — aimed at both technical ISPs and organizations evaluating membership.",
      architecture:
        "Server-rendered Next.js application, PostgreSQL for dynamic content (members, traffic stats), and automated deployment inside NIC Costa Rica's internal network, behind a FortiClient firewall.",
      contribution:
        "Full design and development of the site: page structure, UI components, the PostgreSQL data model, and the CI/CD deployment pipeline.",
      challenges: [
        {
          problem:
            "The deployment server sits behind FortiClient, so cloud-hosted GitHub Actions runners had no direct access to the internal network.",
          solution:
            "I set up a self-hosted runner inside NIC Costa Rica's network. Every push to main triggers the workflow, which builds the app and deploys it automatically on the server, without exposing the network outward.",
        },
      ],
      results:
        "End-to-end continuous deployment pipeline: every change to main reaches production with no manual steps. The site is in its final phase ahead of official launch.",
      lessons:
        "Setting up CI/CD in an environment with real network constraints (not just cloud) taught me to think about automation in terms of infrastructure context, not just application code.",
      gallery: [],
    },
  },
  {
    slug: "cdn-analytics",
    title: "CDN traffic analysis — NIC Costa Rica",
    status: "Technical pilot",
    summary:
      "A pipeline to measure CDN traffic consumption across NIC Costa Rica members, using Akvorado as the collection engine.",
    image: null,
    imageFit: "cover",
    featured: false,
    tech: ["Akvorado", "Networking", "Scripting"],
    links: { site: null, github: null },
    caseStudy: {
      objective:
        "NIC Costa Rica wanted to understand how much traffic from specific CDNs (Google, Cloudflare, Akamai, etc.) flows between its members, as input for peering decisions.",
      architecture:
        "Akvorado as the network flow collection engine (NetFlow/sFlow), with custom scripts to classify traffic by originating CDN and process it into aggregated reports.",
      contribution:
        "Full setup of Akvorado, and development of the automation scripts for collecting and processing traffic data.",
      challenges: [
        {
          problem:
            "Classifying traffic by originating CDN from raw network flows isn't trivial: it requires mapping IP ranges and ASNs to known providers.",
          solution:
            "I built a classification layer on top of Akvorado's data that cross-references flow information with public ASN databases.",
        },
      ],
      results:
        "The collection pipeline was validated as a technical pilot: the architecture works and data is collected correctly. The project didn't reach a continuous production phase within the internship's scope.",
      lessons:
        "Working with network data at this scale gave me a solid foundation in traffic observability tooling and in structuring networking data pipelines.",
      gallery: [],
    },
  },
  {
    slug: "montesuma",
    title: "Adiestramiento Montesuma — Website",
    status: "Published",
    summary:
      "Website for a dog training business in Costa Rica. Clean design, focused on presenting services and making contact easy.",
    image: null,
    imageFit: "contain",
    featured: false,
    tech: ["React", "Vite", "TailwindCSS"],
    links: { site: null, github: null },
    caseStudy: {
      objective:
        "A local dog training business needed a web presence to showcase its services and make it easy for potential clients to reach out.",
      architecture:
        "Static site built with React + Vite, styled with TailwindCSS, no backend — contact handled via a direct link.",
      contribution: "Full design and development of the site, start to finish.",
      challenges: [],
      results: "Site published and actively used by the business.",
      lessons:
        "Small, well-scoped project — good practice taking a full site from design to launch on my own.",
      gallery: [],
    },
  },
  {
    slug: "web-projects",
    title: "Additional web projects",
    status: null,
    summary:
      "Several independently built static websites, focused on clean design and solid frontend practices.",
    image: null,
    imageFit: "contain",
    featured: false,
    tech: ["React", "Frontend"],
    links: { site: null, github: null },
    caseStudy: {
      objective: "Personal projects to practice frontend outside a specific work context.",
      architecture: "Static sites, no backend.",
      contribution: "Independent design and development.",
      challenges: [],
      results: "Several sites completed and published.",
      lessons: "Practical frontend foundation before adding cloud and networking to the profile.",
      gallery: [],
    },
  },
];

export const content = {
  es: {
    ui: {
      nav: {
        profile: "Perfil",
        experience: "Experiencia",
        projects: "Proyectos",
        skills: "Skills",
        contact: "Contacto",
        cv: "Ver CV",
      },
      hero: {
        eyebrowSuffix: "Disponible para roles cloud",
        viewProjects: "Ver proyectos",
        contactMe: "Contactarme",
      },
      sections: {
        profile: "01 · Perfil",
        experience: "02 · Experiencia",
        projects: "03 · Proyectos",
        skills: "04 · Skills",
        contact: "05 · Contacto",
        certifications: "Certificaciones",
      },
      project: {
        caseStudy: "Caso de estudio",
        site: "Sitio web",
        github: "GitHub",
        back: "← Volver a proyectos",
        objective: "Objetivo del proyecto",
        architecture: "Arquitectura",
        techStack: "Tecnologías",
        contribution: "Mi contribución",
        challenges: "Retos técnicos",
        results: "Resultados",
        gallery: "Galería",
        lessons: "Lecciones aprendidas",
        problem: "Problema",
        solution: "Solución",
        notFoundTitle: "Proyecto no encontrado",
        notFoundText: "No existe ningún proyecto con esa dirección.",
      },
      contact: {
        title: "¿Trabajamos juntos?",
        text: "Estoy buscando oportunidades en infraestructura cloud y networking. Si tenés un proyecto o una posición abierta, escribime.",
      },
      footer: {
        built: "hecho con react + vite",
      },
    },
    profile: {
      role: "Estudiante de Ingeniería en Sistemas · Aspirante a Cloud Engineer",
      tagline:
        "Construyo y automatizo infraestructura — de redes a la nube — con foco en AWS.",
    },
    about: {
      lede: "De redes a la nube: me interesa la infraestructura que sostiene todo lo demás.",
      paragraphs: [
        "Estoy terminando la carrera de Ingeniería en Sistemas (el título se otorga al concluir la Licenciatura) con experiencia práctica en redes, automatización e infraestructura cloud. Me interesa el trabajo donde la infraestructura deja de ser manual: scripts, monitoreo y arquitecturas que se sostienen solas.",
        "Actualmente enfocado en certificarme como AWS Solutions Architect – Associate (SAA-C03), como parte de mi camino hacia Cloud Engineering.",
      ],
    },
    experience: [
      {
        role: "Pasante",
        org: "NIC Costa Rica",
        period: "— · 2 meses restantes",
        description:
          "Pasantía técnica con exposición a redes, infraestructura y proyectos de análisis de datos de tráfico, incluyendo desarrollo del sitio institucional de CRIX.CR.",
        tags: ["Redes", "Infraestructura", "Automatización"],
      },
    ],
    projects: projectsEs,
    skills: {
      groups: [
        {
          key: "cloud",
          label: "Cloud",
          items: ["AWS (en certificación)", "IAM", "EC2 / S3 básico", "Arquitectura cloud"],
        },
        {
          key: "networking",
          label: "Networking",
          items: ["Redes TCP/IP", "Monitoreo de tráfico", "Akvorado", "CDNs"],
        },
        {
          key: "dev",
          label: "Desarrollo",
          items: ["JavaScript", "React", "Python", "Scripting / Automatización", "Git"],
        },
      ],
    },
    certifications: [
      {
        name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
        status: "En preparación",
      },
    ],
  },

  en: {
    ui: {
      nav: {
        profile: "Profile",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        cv: "Resume",
      },
      hero: {
        eyebrowSuffix: "Open to cloud roles",
        viewProjects: "View projects",
        contactMe: "Get in touch",
      },
      sections: {
        profile: "01 · Profile",
        experience: "02 · Experience",
        projects: "03 · Projects",
        skills: "04 · Skills",
        contact: "05 · Contact",
        certifications: "Certifications",
      },
      project: {
        caseStudy: "Case study",
        site: "Website",
        github: "GitHub",
        back: "← Back to projects",
        objective: "Project objective",
        architecture: "Architecture",
        techStack: "Tech stack",
        contribution: "My contribution",
        challenges: "Technical challenges",
        results: "Results",
        gallery: "Gallery",
        lessons: "Lessons learned",
        problem: "Problem",
        solution: "Solution",
        notFoundTitle: "Project not found",
        notFoundText: "There's no project at that address.",
      },
      contact: {
        title: "Let's work together",
        text: "I'm looking for opportunities in cloud infrastructure and networking. If you have a project or an open role, reach out.",
      },
      footer: {
        built: "built with react + vite",
      },
    },
    profile: {
      role: "Systems Engineering Student · Aspiring Cloud Engineer",
      tagline:
        "I build and automate infrastructure — from networking to the cloud — with a focus on AWS.",
    },
    about: {
      lede: "From networking to the cloud: I care about the infrastructure that holds everything else up.",
      paragraphs: [
        "I'm finishing my degree in Systems Engineering (the title is granted upon completing the graduate-level Licenciatura) with hands-on experience in networking, automation, and cloud infrastructure. I'm drawn to work where infrastructure stops being manual: scripts, monitoring, and architectures that hold themselves up.",
        "Currently focused on earning the AWS Solutions Architect – Associate certification (SAA-C03), as part of my path toward Cloud Engineering.",
      ],
    },
    experience: [
      {
        role: "Intern",
        org: "NIC Costa Rica",
        period: "— · 2 months left",
        description:
          "Technical internship with hands-on exposure to networking, infrastructure, and traffic data analysis projects, including development of the CRIX.CR institutional site.",
        tags: ["Networking", "Infrastructure", "Automation"],
      },
    ],
    projects: projectsEn,
    skills: {
      groups: [
        {
          key: "cloud",
          label: "Cloud",
          items: ["AWS (in progress)", "IAM", "EC2 / S3 basics", "Cloud architecture"],
        },
        {
          key: "networking",
          label: "Networking",
          items: ["TCP/IP networking", "Traffic monitoring", "Akvorado", "CDNs"],
        },
        {
          key: "dev",
          label: "Development",
          items: ["JavaScript", "React", "Python", "Scripting / Automation", "Git"],
        },
      ],
    },
    certifications: [
      {
        name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
        status: "In progress",
      },
    ],
  },
};
