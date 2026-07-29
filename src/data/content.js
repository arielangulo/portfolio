// Edita aquí tu información.
//
// `meta` = datos que NO cambian entre idiomas (nombre, contacto, foto).
// `content.es` / `content.en` = todo el texto visible, con la MISMA forma
// en los dos idiomas. Para agregar un proyecto, copiá el objeto en `projects`
// dentro de `es` Y dentro de `en` (mismo orden, misma posición).

export const meta = {
  name: "Ariel Angulo",
  location: "Costa Rica",
  email: "arielangulomendez@gmail.com",
  linkedin: "https://www.linkedin.com/in/ariel-angulo-méndez-b407013a2/",
  github: "https://github.com/arielangulo",
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
        profile: "Perfil",
        experience: "Experiencia",
        projects: "Proyectos",
        skills: "Skills",
        contact: "Contacto",
        certifications: "Certificaciones",
      },
      projectLink: "Ver proyecto →",
      contact: {
        title: "¿Trabajamos juntos?",
        text: "Estoy buscando oportunidades en infraestructura cloud o desarrollo de software. Si tenés un proyecto o una posición abierta, escribime.",
      },
      footer: {
      },
    },
    profile: {
      role: "Estudiante de Ingeniería Informática · Aspirante a Cloud Engineer",
      tagline:
        "Construyo y automatizo infraestructura — de redes a la nube — con foco en AWS.",
    },
    about: {
      lede: "De redes a la nube: me interesa la infraestructura que sostiene todo lo demás.",
      paragraphs: [
        "Estoy terminando la carrera de Ingeniería Informática (el título se otorga al concluir la Licenciatura) con experiencia práctica en redes, automatización e infraestructura cloud. Me interesa el trabajo donde la infraestructura deja de ser manual: scripts, monitoreo y arquitecturas que se sostienen solas.",
        "Actualmente enfocado en certificarme como AWS Solutions Architect – Associate (SAA-C03), como parte de mi camino hacia Cloud Engineering.",
      ],
    },
    experience: [ 
      {
        role: "Pasante",
        org: "NIC Costa Rica",
        period: "2026 - 8 meses (enero-agosto)",
        description:
          "Pasantía técnica con exposición a redes, infraestructura y proyectos de análisis de datos de tráfico, incluyendo desarrollo del sitio institucional de CRIX.CR.",
        tags: ["Redes", "Infraestructura", "Automatización",],
      },
    ],
    projects: [
      {
        title: "CRIX.CR — Portal institucional",
        description:
          "Diseño y desarrollo del sitio web oficial de CRIX.CR, el punto de intercambio de tráfico de Costa Rica. Construido en Next.js con PostgreSQL como base de datos.",
        tags: ["Next.js", "PostgreSQL", "CI/CD", "Microsoft Entra ID"],
        highlight: null,
        status: "En producción",
        image: "projects/5.png",
      },
      
      {
        title: "Análisis de tráfico CDN — NIC Costa Rica",
        description:
          "Diseño e implementación de un pipeline para analizar el consumo de tráfico CDN utilizando Akvorado y ClickHouse. Automatización del procesamiento de datos mediante scripts y validación técnica de la arquitectura propuesta.",
        tags: ["Akvorado", "ClickHouse", "Docker", "Linux", "sFlow", ],
        highlight: null,
        link: null,
        status: "Piloto técnico",
        image: "/projects/akvorado.jpeg",
        imageFit: "cover",
      },
        {
        title: "Adiestramiento Montesuma - Sitio web",
        description: "Diseño y desarrollo del sitio web corporativo de Adiestramiento Montesuma con React y Vite. Incluye integración con Google Maps, WhatsApp y despliegue en Vercel con dominio personalizado.",
        tags: ["React","Vite","JavaScript"],
        highlight: null,
        link: "https://adiestramientomontesuma.com", // o null si no hay link público
        status: "Publicado", // o null si no aplica
        image: "/projects/Montesuma Logo.png", // poné el archivo en /public/proyectos, o null
      },
    ],
    skills: {
      groups: [
        {
          key: "cloud",
          label: "Cloud",
          items: ["AWS (SA-C03 en proceso de certificación)", "IAM", "EC2 / S3 básico", "Arquitectura cloud", "RDS", "VPC", "S3", "CloudFront", "Route 53", "Lambda"],
        },
        {
          key: "networking",
          label: "Networking",
          items: ["Redes TCP/IP", "VPC", "Subneteo", "Configuración de routers y switches", "Monitoreo de tráfico",],
        },
        {
          key: "dev",
          label: "Desarrollo",
          items: ["JavaScript", "React", "Python", "Scripting / Automatización", "Git", "Node.js", "TailwindCSS", "Next.js", "SQL / NoSQL",],
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
        profile: "Profile",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        certifications: "Certifications",
      },
      projectLink: "View project →",
      contact: {
        title: "Let's work together",
        text: "I'm looking for opportunities in cloud infrastructure and networking. If you have a project or an open role, reach out.",
      },
      footer: {
      },
    },
    profile: {
      role: "Computer Science Engineering Student · Aspiring Cloud Engineer",
      tagline:
        "I build and automate infrastructure — from networking to the cloud — with a focus on AWS.",
    },
    about: {
      lede: "From networking to the cloud: I care about the infrastructure that holds everything else up.",
      paragraphs: [
        "I'm finishing my degree in Computer Science Engineering (the title is granted upon completing the graduate-level Licenciatura) with hands-on experience in networking, automation, and cloud infrastructure. I'm drawn to work where infrastructure stops being manual: scripts, monitoring, and architectures that hold themselves up.",
        "Currently focused on earning the AWS Solutions Architect – Associate certification (SAA-C03), as part of my path toward Cloud Engineering.",
      ],
    },
    experience: [
      {
        role: "Intern",
        org: "NIC Costa Rica",
        period: "2026 - 8 months (January-August)",
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
        status: "In production",
        image: "/projects/5.png",
      },
      {
        title: "CDN traffic analysis — NIC Costa Rica",
        description:
          "Designed a pipeline to measure CDN traffic consumption across NIC Costa Rica members: set up Akvorado as the collection engine and built automation scripts for data processing. A technical pilot focused on validating the collection architecture.",
        tags: ["Akvorado", "Networking", "Automation", "Scripting"],
        highlight: null,
        link: null,
        status: "Technical pilot",
        image: "/projects/akvorado.jpeg",
        imageFit: "cover",

      },
        {
        title: "Adiestramiento Montesuma - Sitio web",
        description: "Designed and developed the complete website for Adiestramiento Montesuma, a Costa Rican dog training company with over 30 years of experience. Built a responsive React application with React Router, dedicated service pages, Google Maps integration, and deployed it on Vercel with a custom domain.",
        tags: ["React Vite","JavaScript","Git", "Vercel", "Landing Page", "WhatsApp / Facebook Integration", "CSS Responsive", "Node.js"],
        highlight: null,
        link: "https://adiestramientomontesuma.com", // o null si no hay link público
        status: "Published", // o null si no aplica
        image: "/projects/Montesuma Logo.png", // poné el archivo en /public/proyectos, o null
      },
    ],
    skills: {
      groups: [
        {
          key: "cloud",
          label: "Cloud",
          items: ["AWS (in progress)", "IAM", "EC2 / S3 basics", "Cloud architecture", "RDS", "VPC", "S3", "CloudFront", "Route 53", "Lambda"],
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
