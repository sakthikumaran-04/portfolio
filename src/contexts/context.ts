import { bluekartDesktop, bluekartMobile, css, dictionaryDesktop, dictionaryMobile, expressjs, git, html, javascript, mongodb, nextjs, nodejs, python, reactjs, rpsDesktop, rpsMobile, ticTacToeDesktop, ticTacToeMobile, typescript, ubuntu } from "../helpers/images";

export const skills = [
    {
        name:"HTML",
        image:html
    },
    {
        name:"CSS",
        image:css
    },
    {
        name:"Javascript",
        image:javascript
    },
    {
        name:"Typescript",
        image:typescript
    },
    {
        name:"React Js",
        image:reactjs
    },
    {
        name:"Next js",
        image:nextjs
    },
    {
        name:"Express Js",
        image:expressjs
    },
    {
        name:"MongoDB",
        image:mongodb
    },
    {
        name:"Node Js",
        image:nodejs
    },
    {
        name:"Git",
        image:git
    },
    {
        name:"Python",
        image:python
    },
    {
        name:"Ubuntu",
        image:ubuntu
    },
];

export const projects = [
    {
        title:"Bluekart",
        description:"BlueKart is an e-commerce web application that offers a seamless shopping experience with a focus on user-friendly design and efficient functionality. Built to streamline online shopping, it features product browsing, user accounts, and a smooth checkout process.",
        link:"https://bluekart.vercel.app",
        desktopImage:bluekartDesktop,
        mobileImage:bluekartMobile
    },
    {
        title:"Tic Tac Toe Game",
        description:"Tic Tac Toe is a two-player game with a clean, interactive interface that showcases smooth gameplay. It effectively implements core game logic and user interaction for an engaging experience.",
        link:"https://sakthi-tic-tac-toe.netlify.app",
        desktopImage:ticTacToeDesktop,
        mobileImage:ticTacToeMobile
    },
    {
        title:"Rock Paper Scissor Game",
        description:"Rock Paper Scissors is a simple game where players choose between rock, paper, or scissors, and the app determines the winner based on classic game rules. It features an intuitive interface and real-time feedback for an engaging user experience.",
        link:"https://sakthi-rps.netlify.app",
        desktopImage:rpsDesktop,
        mobileImage:rpsMobile
    },
    {
        title:"Dictionary",
        description:"Dictionary App allows users to search for word definitions, synonyms, and examples. It features a clean interface and provides quick, accurate results, making it a useful tool for expanding vocabulary.",
        link:"https://sakthi-dictionary.netlify.app",
        desktopImage:dictionaryDesktop,
        mobileImage:dictionaryMobile
    }
]