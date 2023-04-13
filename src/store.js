import { reactive } from 'vue'

export const store = reactive({
    load: 0,
    HeaderList: [
        {
            name: "ABOUT",
            link: "#about",
        },
        {
            name: "EXPERIENCE",
            link: "#experience",
        },
        {
            name: "WORKS",
            link: "#works",
        },
        {
            name: "SKILLS",
            link: "#skills",
        },
        {
            name: "CONTACT",
            link: "#contact",
        }
    ],
    experiences: [
        {
            image:"../../assets/Boolean.jpg",
            title: "Boolean Careers",
            name: "Full Stack Web Developer Trainee",
            startDate: "Ottobre 2022",
            endDate: "Aprile 2023",
            description: "Corso intensivo della durata di 6 mesi nel quale ho avuto modo di programmare a partire da zero diversi progetti ispirati a famose Web App come Whatsapp Web, Netflix, Spotify Web, Deliveroo e altre.",
            technologies: [
                "HTML",
                "CSS (Sass)",
                "JavaScript (VueJS)",
                "PHP (Laravel)",
                "MySql",
            ]
        }
    ],
    works: [
        {
            name: "Boolflix",
            image: "../../assets/netflix.jpeg",
            description: "Riproduzione del famoso sito di streaming Netflix, creato utilizzando VueJS ed effettuando delle chiamate API ad un database chiamato 'The Movie DB'. l'utente può scegliere i film o le serie tv per categoria o per ricerca del nome.",
            code: "https://github.com/Leo9723/vite-boolflix",
            technologies: [
                "HTML",
                "CSS",
                "JS",
                "VUE",
            ],
        },
        {
            name: "Spotify",
            image: "/src/assets/spotify.png",
            description: "Riproduzione del famoso sito di streaming musicale, con parte responsive.",
            code: "https://github.com/Leo9723/html-css-spotifyweb",
            technologies: [
                "HTML",
                "CSS"
            ],
        },
        {
            name: "Whatsapp",
            image: "/src/assets/whatsapp.png",
            description: "Riproduzione di Whatsapp Web, famosa app per la messaggistica online, consente all'utente di inviare messaggi e ricevere risposte preimpostate, di eliminare messaggi e ricercare chat dinamicamente.",
            code: "https://github.com/Leo9723/vue-boolzapp",
            technologies: [
                "HTML",
                "CSS",
                "VUE",
            ],
        },
        {
            name: "Dropbox",
            image: "/src/assets/dropbox.png",
            description: "Riproduzione della parte FrontEnd della Homepage di Dropbox",
            code: "https://github.com/Leo9723/htmlcss-dropbox",
            technologies: [
                "HTML",
                "CSS",
            ],
        },
        {
            name: "Boolpress",
            image: "/src/assets/boolpress.png",
            description: "Progetto basato sull uso di Laravel, del pattern MVC e MySql. permette all'utente di registrarsi ed entrare nel suo profilo, modificarlo a suo piacimento aggiungendo, togliendo e modificando elementi.",
            code: "https://github.com/Leo9723/laravel-api",
            technologies: [
                "HTML",
                "CSS",
                "LARAVEL",
                "MYSQL",
            ],
        },
        {
            name: "Campo Minato",
            image: "/src/assets/boom.png",
            description: "Riproduzione del famoso gioco Campo Minato con l'uso di HTML, CSS e JavaScript.",
            code: "https://github.com/Leo9723/js-campominato-dom",
            technologies: [
                "HTML",
                "CSS",
                "JS",
            ],
        },
        {
            name: "Max Coatch",
            image: "/src/assets/max.png",
            description: "Riproduzione della parte FrontEnd della Homepage di Max Coatch",
            code: "https://github.com/Leo9723/proj-html-vuejs",
            technologies: [
                "HTML",
                "CSS",
                "JS",
                "VUE",
            ],
        },
        {
            name: "Discord",
            image: "/discord.png",
            description: "Riproduzione della parte FrontEnd della Homepage di Discord",
            code: "https://github.com/Leo9723/htmlcss-discord",
            technologies: [
                "HTML",
                "CSS",
            ],
        }
    ],
    skills: [
        {
            name: "HTML",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png"
        },
        {
            name: "CSS",
            image: "/src/assets/css.png"
        },
        {
            name: "JavaScript",
            image: "/src/assets/js.png"
        },
        {
            name: "Bootstrap",
            image: "/src/assets/bootstrap.webp"
        },
        {
            name: "VueJs",
            image: "/src/assets/vue.png"
        },
        {
            name: "Vue-Router",
            image: "/src/assets/router.png"
        },
        {
            name: "Axios",
            image: "/src/assets/axios.png"
        },
        {
            name: "Sass",
            image: "/src/assets/sass.png"
        },
        {
            name: "Vite",
            image: "/src/assets/vite.png"
        },
        {
            name: "PHP",
            image: "/src/assets/php.png"
        },
        {
            name: "PHPMyAdmin",
            image: "/src/assets/phpmyadmin.png"
        },
        {
            name: "Laravel",
            image: "/src/assets/laravel.png"
        },
        {
            name: "MySql",
            image: "/src/assets/mysql.png"
        }
    ]
})