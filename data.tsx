import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://youtube.com/@samporter32382?si=7gaDOnoJKskNSlRa",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/samporterbridges/",
    },
    {
        id: 3,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "https://x.com/gustavofrink5",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Software Engineer",
        subtitle: "Universidad Cooperativa de Colombia",
        description: "I am in my fifth semester of software engineering, ready to undertake a working life in this huge world that is software.",
        date: "Nov 2024 ",
    },
    {
        id: 2,
        title: "Writing my future",
        subtitle: "space for all my future titles",
        description: "this is going to be the space where I am going to put all my future degrees, jobs etc.",
        date: "Nov 2024",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 0,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 0,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 5,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Requirements",
        description: "Abstraction of all the necessary requirements for software development using agile methodologies such as Scrum. ",
    },
    {
        icon: <Pencil />,
        title: "Wev design",
        description: "Creative and professional design of intuitive and attractive web interfaces, focused on user experience.",
    },
    {
        icon: <Computer />,
        title: "Develop",
        description: "Design and development of custom web sites and Apis tailored to your needs.",
    },
    {
        icon: <Book />,
        title: "English",
        description: "good communication with native Americans with a level of English that is growing over time",
    },
    
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web",
        image: "/image-1.png",
        urlGithub: "https://github.com/samporter12/Portafolio_Samuel",
    },
    {
        id: 2,
        title: "Frontend Developer",
        image: "/image-2.png",
        urlGithub: "https://dev.azure.com/TecnoLogica/JustWork/_git/JustWorkAngular",
    },
    {
        id: 3,
        title: "Backend Developer",
        image: "/image-3.png",
        urlGithub: "https://dev.azure.com/TecnoLogica/_git/JustWork",
    },
   
];

