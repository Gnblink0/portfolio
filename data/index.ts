const projects = [
  {
    id: 1,
    name: "Tomatch",
    time: "Mar 2025 - Present",
    description: "Description of Project 1",
    image: "",
    codeLink: "",
    liveLink: "",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
];

const hobbies = [
  {
    id: 1,
    name: "Bouldering",
    emoji: "🧗",
  },
  {
    id: 2,
    name: "Hiking",
    emoji: "🥾",
  },
  {
    id: 3,
    name: "Music",
    emoji: "🎸",
  },
  {
    id: 4,
    name: "Gaming",
    emoji: "🎮",
  },
];

interface TechStack {
  id: string;
  name: string;
  slug?: string; // simpleicons slug
  darkmode?: boolean;
  svg?: string; // svg icon
  category: "language" | "web" | "backend&database" | "devops&tools";
  proficiency?: number; // 1-5 represent the proficiency of the tech stack
}

const techStacks: TechStack[] = [
  {
    id: "javascript",
    name: "JavaScript",
    slug: "javascript",
    category: "language",
  },
  {
    id: "typescript",
    name: "TypeScript",
    slug: "typescript",
    category: "language",
  },
  {
    id: "python",
    name: "Python",
    slug: "python",
    category: "language",
  },
  {
    id: "java",
    name: "Java",
    slug: "java",
    category: "language",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="java">
  <path fill="#4E7D9D" d="M4.44 22.324c9.472 1.553 17.265-.7 14.808-1.82 0 0 .671.559-.738.991-2.681.822-11.16 1.069-13.514.033-.846-.373.742-.89 1.24-.998.521-.114.819-.093.819-.093-.944-.671-6.089 1.317-2.615 1.887z"></path>
  <path fill="#4E7D9D" d="M20.75 21.726s-.299.775-3.532 1.391c-3.646.694-8.146.613-10.813.168 0-.001.547.457 3.355.639 4.273.277 10.835-.153 10.99-2.198zm-5.555-5.177c-2.746.535-4.332.517-6.341.308-1.552-.163-.536-.924-.536-.924-4.019 1.348 2.237 2.879 7.852 1.218-.596-.213-.975-.602-.975-.602zm1.863 1.035c-.02.056-.089.117-.089.118 5.946-1.581 3.76-5.573.917-4.562-.25.09-.381.297-.381.297s.158-.064.509-.138c1.438-.304 3.496 1.945-.956 4.285z"></path>
  <path fill="#F2941B" d="M9.243 7.627c-1.106 1.681.544 3.486 2.792 5.539-.877-2.004-3.851-3.759.001-6.836C16.84 2.494 14.374 0 14.374 0c.996 3.962-3.506 5.158-5.131 7.627z"></path>
  <path fill="#F2941B" d="M17.347 4.902c0-.001-8.123 2.051-4.243 6.573 1.145 1.333-.301 2.533-.301 2.533s2.906-1.518 1.571-3.418c-1.247-1.772-2.203-2.652 2.973-5.688z"></path>
  <path fill="#4E7D9D" d="M8.887 18.56c-3.648 1.031 2.219 3.162 6.865 1.149-.76-.3-1.306-.646-1.306-.646-2.071.398-3.032.429-4.913.211-1.553-.18-.646-.714-.646-.714zm7.105-3.89c.456-.315 1.086-.587 1.086-.587s-1.792.325-3.577.477c-2.184.185-4.529.221-5.705.062-2.786-.376 1.527-1.412 1.527-1.412s-1.675-.114-3.733.892c-2.437 1.191 6.024 1.733 10.402.568z"></path>
</svg>`,
  },
  {
    id: "bash",
    name: "Bash",
    slug: "gnubash",
    category: "language",
    darkmode: true,
  },
  {
    id: "react",
    name: "React",
    slug: "react",
    category: "web",
  },
  {
    id: "html",
    name: "HTML",
    slug: "html5",
    category: "web",
  },
  {
    id: "css",
    name: "CSS",
    slug: "css3",
    category: "web",
  },
  {
    id: "tailwind-css",
    name: "Tailwind CSS",
    slug: "tailwindcss",
    category: "web",
  },
  {
    id: "express",
    name: "Express",
    slug: "express",
    category: "web",
    darkmode: true,
  },
  {
    id: "vite",
    name: "Vite",
    slug: "vite",
    category: "web",
    darkmode: true,
    svg: `<svg viewBox="0 0 410 404" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" fill="url(#paint0_linear)"/>
<path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" fill="url(#paint1_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
<stop stop-color="#41D1FF"/>
<stop offset="1" stop-color="#BD34FE"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFEA83"/>
<stop offset="0.0833333" stop-color="#FFDD35"/>
<stop offset="1" stop-color="#FFA800"/>
</linearGradient>
</defs>
</svg>
`,
  },
  {
    id: "material-ui",
    name: "Material-UI",
    slug: "mui",
    category: "web",
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    category: "web",
    svg: `<svg viewBox="3.7 3.7 43.6 43.6" xmlns="http://www.w3.org/2000/svg">
      <path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" fill="#59529d"/>
      <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4"/>
      <path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" fill="#bb4b96"/>
    </svg>`,
  },
  {
    id: "nodejs",
    name: "Node.js",
    slug: "nodedotjs",
    category: "backend&database",
  },
  {
    id: "prisma",
    name: "Prisma",
    slug: "prisma",
    category: "backend&database",
    darkmode: true,
  },
  {
    id: "mongodb",
    name: "MongoDB",
    slug: "mongodb",
    category: "backend&database",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    slug: "postgresql",
    category: "backend&database",
  },
  {
    id: "firebase",
    name: "Firebase",
    slug: "firebase",
    category: "backend&database",
  },
  {
    id: "vercel",
    name: "Vercel",
    slug: "vercel",
    category: "devops&tools",
    darkmode: true,
  },
  {
    id: "git",
    name: "Git",
    slug: "git",
    category: "devops&tools",
  },
  {
    id: "github",
    name: "GitHub",
    slug: "github",
    category: "devops&tools",
    darkmode: true,
  },
  {
    id: "vscode",
    name: "VSCode",
    slug: "visualstudiocode",
    category: "devops&tools",
    svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.9119 99.3171C72.4869 99.9307 74.2828 99.8914 75.8725 99.1264L96.4608 89.2197C98.6242 88.1787 100 85.9892 100 83.5872V16.4133C100 14.0113 98.6243 11.8218 96.4609 10.7808L75.8725 0.873756C73.7862 -0.130129 71.3446 0.11576 69.5135 1.44695C69.252 1.63711 69.0028 1.84943 68.769 2.08341L29.3551 38.0415L12.1872 25.0096C10.589 23.7965 8.35363 23.8959 6.86933 25.2461L1.36303 30.2549C-0.452552 31.9064 -0.454633 34.7627 1.35853 36.417L16.2471 50.0001L1.35853 63.5832C-0.454633 65.2374 -0.452552 68.0938 1.36303 69.7453L6.86933 74.7541C8.35363 76.1043 10.589 76.2037 12.1872 74.9905L29.3551 61.9587L68.769 97.9167C69.3925 98.5406 70.1246 99.0104 70.9119 99.3171ZM75.0152 27.2989L45.1091 50.0001L75.0152 72.7012V27.2989Z" fill="white"/>
</mask>
<g mask="url(#mask0)">
<path d="M96.4614 10.7962L75.8569 0.875542C73.4719 -0.272773 70.6217 0.211611 68.75 2.08333L1.29858 63.5832C-0.515693 65.2373 -0.513607 68.0937 1.30308 69.7452L6.81272 74.754C8.29793 76.1042 10.5347 76.2036 12.1338 74.9905L93.3609 13.3699C96.086 11.3026 100 13.2462 100 16.6667V16.4275C100 14.0265 98.6246 11.8378 96.4614 10.7962Z" fill="#0065A9"/>
<g filter="url(#filter0_d)">
<path d="M96.4614 89.2038L75.8569 99.1245C73.4719 100.273 70.6217 99.7884 68.75 97.9167L1.29858 36.4169C-0.515693 34.7627 -0.513607 31.9063 1.30308 30.2548L6.81272 25.246C8.29793 23.8958 10.5347 23.7964 12.1338 25.0095L93.3609 86.6301C96.086 88.6974 100 86.7538 100 83.3334V83.5726C100 85.9735 98.6246 88.1622 96.4614 89.2038Z" fill="#007ACC"/>
</g>
<g filter="url(#filter1_d)">
<path d="M75.8578 99.1263C73.4721 100.274 70.6219 99.7885 68.75 97.9166C71.0564 100.223 75 98.5895 75 95.3278V4.67213C75 1.41039 71.0564 -0.223106 68.75 2.08329C70.6219 0.211402 73.4721 -0.273666 75.8578 0.873633L96.4587 10.7807C98.6234 11.8217 100 14.0112 100 16.4132V83.5871C100 85.9891 98.6234 88.1786 96.4586 89.2196L75.8578 99.1263Z" fill="#1F9CF0"/>
</g>
<g style="mix-blend-mode:overlay" opacity="0.25">
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.8511 99.3171C72.4261 99.9306 74.2221 99.8913 75.8117 99.1264L96.4 89.2197C98.5634 88.1787 99.9392 85.9892 99.9392 83.5871V16.4133C99.9392 14.0112 98.5635 11.8217 96.4001 10.7807L75.8117 0.873695C73.7255 -0.13019 71.2838 0.115699 69.4527 1.44688C69.1912 1.63705 68.942 1.84937 68.7082 2.08335L29.2943 38.0414L12.1264 25.0096C10.5283 23.7964 8.29285 23.8959 6.80855 25.246L1.30225 30.2548C-0.513334 31.9064 -0.515415 34.7627 1.29775 36.4169L16.1863 50L1.29775 63.5832C-0.515415 65.2374 -0.513334 68.0937 1.30225 69.7452L6.80855 74.754C8.29285 76.1042 10.5283 76.2036 12.1264 74.9905L29.2943 61.9586L68.7082 97.9167C69.3317 98.5405 70.0638 99.0104 70.8511 99.3171ZM74.9544 27.2989L45.0483 50L74.9544 72.7012V27.2989Z" fill="url(#paint0_linear)"/>
</g>
</g>
<defs>
<filter id="filter0_d" x="-8.39411" y="15.8291" width="116.727" height="92.2456" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="4.16667"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<filter id="filter1_d" x="60.4167" y="-8.07558" width="47.9167" height="116.151" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset/>
<feGaussianBlur stdDeviation="4.16667"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
<linearGradient id="paint0_linear" x1="49.9392" y1="0.257812" x2="49.9392" y2="99.7423" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`
  },
  {
    id: "figma",
    name: "Figma",
    slug: "figma",
    category: "devops&tools",
  },
];

const categoryDisplayNames: Record<TechStack["category"], string> = {
  language: "Programming Languages",
  web: "Web Development",
  "backend&database": "Backend & Database",
  "devops&tools": "DevOps & Tools",
};

export { projects, hobbies, techStacks, categoryDisplayNames, type TechStack };
