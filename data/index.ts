export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const techStack = [
  {
    id: 1,
    title: "Languages",
    iconLists: [
      "/stack/javascript.svg",
      "/stack/typescript.svg",
      "/stack/sql.svg",
    ],
  },
  {
    id: 2,
    title: "Front-end",
    iconLists: [
      "/stack/html.svg",
      "/stack/css.svg",
      "/stack/tailwind.svg",
      "/stack/react.svg",
      "/stack/react-native.svg",
      "/stack/vite.svg",
      "/stack/next-js.svg",
      "/stack/expo-go.svg",
    ],
  },
  {
    id: 3,
    title: "Back-end",
    iconLists: ["/stack/psql.svg", "/stack/appwrite.svg"],
  },
  {
    id: 4,
    title: "Tools",
    iconLists: [
      "/stack/node.svg",
      "/stack/jest.svg",
      "/stack/figma.svg",
      "/stack/npm.svg",
      "/stack/vs-code.svg",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "News & Discussion Website",
    des: "An online social news forum where users can read, comment and vote on content",
    img: "/nc-news.svg",
    iconLists: [
      "/stack/javascript.svg",
      "/stack/sql.svg",
      "/stack/css.svg",
      "/stack/react.svg",
      "/stack/vite.svg",
      "/stack/psql.svg",
      "/stack/jest.svg",
    ],
    gitLink: "https://github.com/indymoorcroft/nc-news",
    webLink: "https://nc-news-im.netlify.app/",
  },
  {
    id: 2,
    title: "BreathAway - Pranayama App",
    des: "Simplifies breathwork practices by delivering protocols in accessible ways",
    img: "/breathaway.svg",
    iconLists: [
      "/stack/typescript.svg",
      "/stack/tailwind.svg",
      "/stack/react-native.svg",
      "/stack/appwrite.svg",
      "/stack/expo-go.svg",
    ],
    gitLink: "https://github.com/ilterr/BreathAway",
  },
  {
    id: 3,
    title: "Whack-a-Mole game",
    des: "A classic arcade game to develop concentration and coordination skills",
    img: "/games.svg",
    iconLists: ["/stack/javascript.svg", "/stack/html.svg", "/stack/css.svg"],
    gitLink: "https://github.com/indymoorcroft/games",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/link.svg",
  },
];
