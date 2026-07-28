// Edita aquí tu información.
//
// `meta` = datos que NO cambian entre idiomas (nombre, contacto, foto).
// `content.es` / `content.en` = todo el texto visible, con la MISMA forma
// en los dos idiomas. Para agregar un proyecto, copiá el objeto en `projects`
// dentro de `es` Y dentro de `en` (mismo orden, misma posición).

export const meta = {
  name: "Ariel Angulo",
  location: "Costa Rica",
  email: "tucorreo@ejemplo.com",
  linkedin: "https://linkedin.com/in/tu-usuario",
  github: "https://github.com/tu-usuario",
  cvUrl: "#", // reemplazá por el link a tu CV en PDF
  photo: "/profile.jpg",
};

// Molde de un proyecto — copiá este objeto (en los dos idiomas) para agregar uno nuevo:
// {
//   title: "Nombre del proyecto",
//   description: "Qué es y qué resolviste, en 2-3 líneas.",
//   tags: ["Tecnología 1", "Tecnología 2"],
//   highlight: "Un detalle técnico puntual que vale la pena resaltar, o null.",
//   link: "https://...", // o null si no hay link público
//   status: "Próximo a publicarse", // o null si no aplica
//   image: "/proyectos/nombre.jpg", // poné el archivo en /public/proyectos, o null
// }

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
      projectLink: "Ver proyecto →",
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
    projects: [
      {
        title: "CRIX.CR — Sitio institucional",
        description:
          "Diseño y desarrollo del sitio web oficial de CRIX.CR (próximo a publicarse), el punto de intercambio de tráfico de Costa Rica. Construido en Next.js con PostgreSQL como base de datos.",
        tags: ["Next.js", "PostgreSQL", "CI/CD"],
        highlight:
          "El servidor de despliegue está protegido por FortiClient, así que los runners de GitHub Actions alojados en la nube no tenían acceso directo. Configuré un runner self-hosted dentro de la red para que cada push a main dispare el build y despliegue automáticamente en el servidor.",
        link: null,
        status: "Próximo a publicarse",
        image: null,
      },
      {
        title: "Análisis de tráfico CDN — NIC Costa Rica",
        description:
          "Diseño de un pipeline para medir el consumo de tráfico de CDNs entre los miembros de NIC Costa Rica: configuración de Akvorado como motor de recolección y desarrollo de scripts de automatización para el procesamiento de datos. Piloto técnico enfocado en validar la arquitectura de recolección.",
        tags: ["Akvorado", "Networking", "Automatización", "Scripting"],
        highlight: null,
        link: null,
        status: "Piloto técnico",
        image: null,
      },
      {
        title: "Proyectos web adicionales",
        description:
          "Varios sitios web estáticos desarrollados de forma independiente — enfocados en diseño limpio y buenas prácticas de frontend.",
        tags: ["React", "Frontend"],
        highlight: null,
        link: null,
        status: null,
        image: null,
      },
    ],
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
      projectLink: "View project →",
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
    projects: [
      {
        title: "CRIX.CR — Institutional site",
        description:
          "Design and development of the official CRIX.CR website (launching soon), Costa Rica's traffic exchange point. Built with Next.js and PostgreSQL.",
        tags: ["Next.js", "PostgreSQL", "CI/CD"],
        highlight:
          "The deployment server sits behind FortiClient, so cloud-hosted GitHub Actions runners had no direct access. I set up a self-hosted runner inside the network so every push to main triggers an automatic build and deploy on the server.",
        link: null,
        status: "Launching soon",
        image: null,
      },
      {
        title: "CDN traffic analysis — NIC Costa Rica",
        description:
          "Designed a pipeline to measure CDN traffic consumption across NIC Costa Rica members: set up Akvorado as the collection engine and built automation scripts for data processing. A technical pilot focused on validating the collection architecture.",
        tags: ["Akvorado", "Networking", "Automation", "Scripting"],
        highlight: null,
        link: null,
        status: "Technical pilot",
        image: null,
      },
      {
        title: "Additional web projects",
        description:
          "Several independently built static websites — focused on clean design and solid frontend practices.",
        tags: ["React", "Frontend"],
        highlight: null,
        link: null,
        status: null,
        image: null,
      },
    ],
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
