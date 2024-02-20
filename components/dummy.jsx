import mazaways from "../public/assets/images/mazaways.png"
import tepnews from "../public/assets/images/tepnews.png"
import sell from "../public/assets/images/sell.png"
import Image from "next/image"



export const navlink = [
    {
        title: "home",
        path: "/"
    },
    {
        title: "about",
        path: "/pages/about"
    },
    {
        title: "technologies",
        path: "/pages/technologies"
    },
    {
        title: "projects",
        path: "/pages/projects"
    }
]

export const stacks = [
    {
        title: "react js",
        rate: 70
    },
    {
        title: "javascript",
        rate: 50
    },
    {
        title: "tailwind css",
        rate: 70
    },
    {
        title: "bootstrap",
        rate: 70
    },
    {
        title: "html",
        rate: 90
    },
    {
        title: "css",
        rate: 60
    },
    {
        title: "git",
        rate: 60
    },
    {
        title: "github",
        rate: 60
    },
    {
        title: "vite",
        rate: 80
    },
    {
        title: "next js (client side)",
        rate: 70
    },
]

export const projects = [
    {
        title: "mazaways customer",
        description: "i redesigned the UI from the login page except for the sign up as was requested by me, also fixed the bugs in the code. Java was the backend code I communicated with.",
        link: "https://customer.mazawayz.com/",
        image: mazaways
    },
    {
        title: "tepnews",
        description: "i am solely tasked with building the frontend of the readers aspect of the application, i am using create react app as requested by the business, tailwind css for my css utilities, fetching data with axios and i am communicating with java on the backend. The project is still in progress",
        image: tepnews
    },
    {
        title: "sell4me",
        description: "this an affiliate marketing platform where customers can purchase from a merchant through and affiliate. I used vite in the development of the project and tailwind for the css, the project is still on-going",
        image: sell
    },
]