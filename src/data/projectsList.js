import jewelryShopReact from "../assets/icons/shop-react.png";
import loginRegisterApp from "../assets/icons/login-register-app.PNG";
import movieApp from "../assets/icons/movie-app.PNG";
import memoryGame from "../assets/icons/memoryGame.PNG";
import reactwebVideo from "../assets/videos/reactweb.mp4";
import loginregisterVideo from "../assets/videos/loginRegisterApp.mp4";
import movieappVideo from "../assets/videos/movieApp.mp4";
import memoryGameVideo from "../assets/videos/memoryGame.mp4";

export const projects = [
  {
    title: `Jewelry shop - React`,
    id: 1,
    img: jewelryShopReact,
    demoUrl: `https://hopeful-lumiere-a6ae81.netlify.app/`,
    codeUrl: `https://github.com/JagodaBodnar/Jewelry-shop`,
    titleOverlay: `Tech stack:`,
    descOverlay: `React • React Router • React-spring • Styled-components • RWD • Contentful • EmailJS • Material-UI`,
    desc: false,
    video: reactwebVideo,
  },
  {
    title: `Jewelry shop - Redux`,
    id: 2,
    img: jewelryShopReact,
    demoUrl: `https://reverent-booth-2fd4f6.netlify.app/`,
    codeUrl: `https://github.com/JagodaBodnar/Jewelry_shop_redux`,
    titleOverlay: `Tech stack:`,
    descOverlay: `React • React Router • React-spring • Redux • Styled-components • RWD • Contentful • EmailJS `,
    desc: false,
    video: reactwebVideo,
  },
  {
    title: `Movie App`,
    id: 3,
    img: movieApp,
    demoUrl: `https://angry-lovelace-fdb20f.netlify.app/`,
    codeUrl: `https://github.com/JagodaBodnar/movie_app`,
    titleOverlay: `Tech stack:`,
    descOverlay: `React • Redux •  Firebase • axios • Styled-components • RWD  `,
    desc: false,
    video: movieappVideo,
  },
  {
    title: `Login & Register App`,
    id: 4,
    img: loginRegisterApp,
    demoUrl: `https://kind-wright-3c31ae.netlify.app/`,
    codeUrl: `https://github.com/JagodaBodnar/login_register_app`,
    titleOverlay: `Tech stack:`,
    descOverlay: `React • React Router • Redux • Firebase • Styled-components • RWD  `,
    desc: false,
    video: loginregisterVideo,
  },
  {
    title: `Memory Game`,
    id: 5,
    img: memoryGame,
    demoUrl: `https://focused-tesla-4d3819.netlify.app/`,
    codeUrl: `https://github.com/JagodaBodnar/memory_game`,
    titleOverlay: `Tech stack:`,
    descOverlay: `React • Styled-components • RWD `,
    desc: false,
    video: memoryGameVideo,
  },
];
