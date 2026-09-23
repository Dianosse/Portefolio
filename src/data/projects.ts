export const projects = [
    {
        slug: "Taskman",
        name: "Taskman",

        image: "/projects/taskman.png",

        stack: ["REST API", "JWT authentication", "PostgreSQL", "SPA", "Vue", "JavaScript"],

        fr: {
            short: "Plateforme de mise en relation entre vendeur et acheteur",
            description:
            "Taskman est une plateforme web de type marketplace permettant de mettre en relation des vendeurs et des acheteurs autour de services et d’annonces.\n" +
                "\n" +
                "Projet réalisé durant la première année du cycle ingénieur au CNAM\n" +
                "\n" +
                "Le projet repose sur une architecture séparant une API REST côté serveur et une interface web dynamique sous forme de SPA.\n" +
                "\n" +
                "Parmi les principales fonctionnalités développées :\n" +
                "\n" +
                "- création et gestion de comptes utilisateurs \n" +
                "- authentification sécurisée à l’aide de JWT \n" +
                "- publication, consultation et gestion d’annonces ou de services \n" +
                "- mise en relation entre vendeurs et acheteurs \n" +
                "- gestion des informations et des données utilisateurs \n" +
                "- communication entre le front-end et le back-end via une API REST \n" +
                "- stockage et gestion des données avec PostgreSQL \n" +
                "- protection des routes et fonctionnalités nécessitant une authentification.\n" +
                "\n" +
                "Ce projet m’a notamment permis de travailler sur la conception d’une API, la gestion d’une base de données relationnelle, l’authentification d’utilisateurs et l’organisation complète d’une application web full-stack.\n"
        },

        en: {
            short: "Marketplace platform connecting sellers and buyers",
            description:
                "Taskman is a marketplace web application designed to connect sellers and buyers through services and listings.\n" +
                "\n" +
                "The project was developed during the first year of my Engineering Degree at CNAM.\n" +
                "\n" +
                "The application is based on an architecture separating a REST API on the server side from a dynamic Single Page Application on the front-end.\n" +
                "\n" +
                "The main features developed include:\n" +
                "\n" +
                "- user account creation and management\n" +
                "- secure authentication using JWT\n" +
                "- creation, browsing and management of listings and services\n" +
                "- connection between sellers and buyers\n" +
                "- management of user information and data\n" +
                "- communication between the front-end and back-end through a REST API\n" +
                "- data storage and management with PostgreSQL\n" +
                "- protection of routes and features requiring authentication\n" +
                "\n" +
                "This project allowed me to work on API design, relational database management, user authentication and the overall architecture of a full-stack web application."
        },

        github: "https://github.com/Dianosse/Taskman"
    },

    {
        slug: "PikuPiku",
        name: "PikuPiku",

        image: "/projects/pikupiku.png",

        stack: ["Godot", "GDScript"],

        fr: {
            short: "Moteur de jeu de rythme développé sous Godot.",
            description:
                "PikuPiku est un jeu de rythme développé en équipe avec Godot, dans lequel le joueur doit synchroniser ses actions avec la musique en appuyant sur les bonnes touches au moment où les notes atteignent leur zone de validation.\n" +
                "\n" +
                "Le gameplay repose sur un système de quatre lignes de notes, chacune associée à une commande différente. Nous avons mis en place un système de détection du timing permettant d'évaluer la précision du joueur avec plusieurs niveaux de réussite : Perfect, Good, OK, Bad et Miss.\n" +
                "\n" +
                "Le projet intègre également un système de score évoluant en fonction de la précision des actions du joueur, ainsi qu'une gestion de l'apparition et du déplacement des notes en synchronisation avec la musique.\n" +
                "\n" +
                "Nous avons travaillé sur différents aspects du jeu, notamment :\n" +
                "\n" +
                "- la création du système de notes et de leur déplacement ;\n" +
                "- la gestion des entrées clavier du joueur ;\n" +
                "- la détection de la précision des actions selon le timing ;\n" +
                "- le calcul et l'affichage du score ;\n" +
                "- la synchronisation entre la musique et les éléments de gameplay ;\n" +
                "- la création et l'organisation des différentes scènes sous Godot ;\n" +
                "- la conception de l'interface permettant de transmettre clairement les résultats des actions au joueur.\n" +
                "\n" +
                "Ce projet réalisé en groupe durant notre troisième année de BUT Informatique nous a permis de découvrir plus en profondeur le développement d'un jeu avec Godot et GDScript, tout en travaillant sur des problématiques propres aux jeux de rythme telles que la précision du timing, la synchronisation musicale et la gestion dynamique des éléments de gameplay.\n"
        },

        en: {
            short: "Rhythm game engine developed with Godot.",
            description:
                "PikuPiku is a rhythm game developed as a team project using Godot. The player must synchronize their actions with the music by pressing the correct keys when notes reach their validation area.\n" +
                "\n" +
                "The gameplay is based on four note lanes, each associated with a different input. We implemented a timing detection system that evaluates the player's accuracy using several ratings: Perfect, Good, OK, Bad and Miss.\n" +
                "\n" +
                "The project also includes a scoring system based on the player's accuracy, as well as the management of note spawning and movement synchronized with the music.\n" +
                "\n" +
                "We worked on several aspects of the game, including:\n" +
                "\n" +
                "- creation and movement of notes\n" +
                "- management of player keyboard inputs\n" +
                "- timing-based accuracy detection\n" +
                "- score calculation and display\n" +
                "- synchronization between music and gameplay elements\n" +
                "- creation and organization of scenes in Godot\n" +
                "- design of the interface used to clearly communicate player feedback\n" +
                "\n" +
                "This team project, developed during the third year of our Computer Science degree, allowed us to explore game development with Godot and GDScript while working on rhythm-game-specific challenges such as timing accuracy, musical synchronization and dynamic gameplay management."
        },

        github: "https://github.com/orakless/PikuPiku"
    },

    {
        slug: "holyn",
        name: "Holy'n",

        image: "/projects/holyn.png",

        stack: [
            "Node.js",
            "Express",
            "PostgreSQL",
            "Sequelize"
        ],

        fr: {
            short:
                "Plateforme de paris et prédictions avec fonctionnalités sociales.",
            description:
                "Holy'n est une application web de paris et de prédictions développée en groupe durant la première année du cycle ingénieur au CNAM. Notre objectif était de créer une plateforme permettant aux utilisateurs de proposer des paris, de participer à ceux des autres et de suivre leurs performances.\n" +
                "\n" +
                "Nous avons développé plusieurs fonctionnalités autour des paris et de l’aspect communautaire de l’application :\n" +
                "\n" +
                "- Création et consultation de paris et de prédictions\n" +
                "- Participation à un pari en choisissant une réponse et en misant une partie de son solde\n" +
                "- Gestion d'un portefeuille avec les fonds disponibles et les sommes engagées dans les paris\n" +
                "- Calcul des cotes en fonction des différentes mises des utilisateurs\n" +
                "- Système de résolution des paris et redistribution des gains aux participants\n" +
                "- Proposition de nouveaux paris par les utilisateurs avec validation par les administrateurs\n" +
                "- Classement des meilleurs utilisateurs selon leurs performances\n" +
                "- Profils utilisateurs avec statistiques liées aux paris\n" +
                "- Système d'amis permettant de retrouver et consulter les profils d'autres utilisateurs\n" +
                "- Organisation des paris à l'aide de tags\n" +
                "- Interface d'administration permettant de gérer, accepter, refuser, clôturer et résoudre les paris\n" +
                "\n" +
                "Le projet regroupe le front-end et le back-end au sein d'une même application. Nous avons utilisé Node.js et Express pour le serveur, Sequelize avec PostgreSQL pour la gestion des données, ainsi que Mustache.js pour la génération des différentes pages de l'application.\n"
        },

        en: {
            short: "Betting and prediction platform with social features.",
            description:
                "Holy'n is a web-based betting and prediction platform developed as a team project during the first year of my Engineering Degree at CNAM. Our goal was to create a platform where users could submit predictions, participate in other users' bets and track their performance.\n" +
                "\n" +
                "We developed several features related to betting and the social aspect of the application:\n" +
                "\n" +
                "- creation and browsing of bets and predictions\n" +
                "- participation in bets by selecting an answer and wagering part of the user's balance\n" +
                "- wallet management with available and committed funds\n" +
                "- dynamic odds calculation based on user wagers\n" +
                "- bet resolution and redistribution of winnings\n" +
                "- submission of new bets by users with administrator approval\n" +
                "- leaderboard based on user performance\n" +
                "- user profiles with betting statistics\n" +
                "- friend system for finding and viewing other users' profiles\n" +
                "- organization of bets using tags\n" +
                "- administration interface for managing, accepting, rejecting, closing and resolving bets\n" +
                "\n" +
                "The front-end and back-end are included within the same application. We used Node.js and Express for the server, Sequelize with PostgreSQL for data management, and Mustache.js to generate the application's pages."
        },

        github: "https://github.com/Dianosse/Holy-n"
    },

    {
        slug: "ScanMed",
        name: "ScanMed",

        image: "/projects/scanmed.png",

        stack: ["Android Studio", "Java"],

        fr: {
            short: "Application pour signaler et consulter les médicaments en pénurie dans les pharmacies proches de chez eux.",
            description:
                "ScanMed est une application mobile Android développée en équipe durant notre seconde année de BUT Informatique. L’objectif de l'application est de permettre aux utilisateurs de signaler et de consulter les médicaments en pénurie dans les pharmacies proches de chez eux.\n" +
                "\n" +
                "L’application distingue plusieurs types d’utilisateurs, notamment les citoyens et les administrateurs, avec des fonctionnalités adaptées à chacun.\n" +
                "\n" +
                "Nous avons développé différentes fonctionnalités, notamment :\n" +
                "\n" +
                "- le signalement des pénuries de médicaments \n" +
                "- la consultation des pharmacies et de leurs informations \n" +
                "- la gestion des comptes utilisateurs \n" +
                "- un système d’authentification avec e-mail et clé API\n" +
                "- la communication entre l’application mobile et une API REST\n" +
                "- l’échange de données au format JSON \n" +
                "- la gestion de plusieurs langues et des préférences utilisateur \n" +
                "- la prise en compte de l’accessibilité et de la protection des données\n" +
                "\n" +
                "La partie mobile a été développée avec Android Studio, tandis que le back-end repose sur Spring Boot avec une base de données PostgreSQL. L’API est organisée avec une architecture comprenant des contrôleurs, des services et des repositories.\n" +
                "\n" +
                "Nous avons également travaillé avec une organisation inspirée de Scrum, en utilisant des sprints, des User Stories, un Product Backlog et Notion pour suivre l’avancement du projet.\n" +
                "\n" +
                "Ce projet réalisé en groupe nous a permis de travailler sur l’ensemble du cycle de développement d’une application, de la conception des maquettes jusqu’au développement du front-end, du back-end, de la base de données et des aspects liés à la sécurité."
        },

        en: {
            short: "Mobile application for reporting and checking medicine shortages in nearby pharmacies.",
            description:
                "ScanMed is an Android mobile application developed as a team project during the second year of our Computer Science degree. Its goal is to allow users to report and check medicine shortages in pharmacies near them.\n" +
                "\n" +
                "The application distinguishes between several types of users, including citizens and administrators, with different features depending on their role.\n" +
                "\n" +
                "We developed several features, including:\n" +
                "\n" +
                "- reporting medicine shortages\n" +
                "- browsing pharmacies and their information\n" +
                "- user account management\n" +
                "- authentication using email addresses and API keys\n" +
                "- communication between the mobile application and a REST API\n" +
                "- JSON data exchange\n" +
                "- multilingual support and user preference management\n" +
                "- accessibility and data protection considerations\n" +
                "\n" +
                "The mobile application was developed using Android Studio, while the back-end was built with Spring Boot and PostgreSQL. The API follows an architecture based on controllers, services and repositories.\n" +
                "\n" +
                "We also followed a Scrum-inspired organization using sprints, User Stories, a Product Backlog and Notion to track the progress of the project.\n" +
                "\n" +
                "This team project allowed us to work on the complete application development lifecycle, from interface mockups to front-end, back-end, database and security development."
        },

        github: "https://github.com/Dianosse/Taskman"
    },

    {
        slug: "Refonte",
        name: "Refonte de site",

        image: "/projects/refonte.webp",

        stack: ["HTML/CSS", "Tailwind", "JavaScript", "Figma"],

        fr: {
            short: "Refonte d'un site donné",
            description:
                "Durant notre deuxième année de BUT Informatique, nous avons eu l’occasion de repenser entièrement le site d’une communauté d’agglomération afin de proposer une interface plus moderne, claire et agréable à utiliser.\n" +
                "\n" +
                "Réalisé en groupe, ce projet nous a permis de travailler à la fois sur la structure du site, son apparence et son comportement à travers plusieurs technologies web.\n" +
                "\n" +
                "Nous avons utilisé HTML pour organiser le contenu des différentes pages, CSS pour la mise en forme, ainsi que JavaScript pour ajouter des interactions et des éléments dynamiques.\n" +
                "\n" +
                "Nous avons également utilisé Tailwind CSS afin de faciliter la création de l’interface, gérer plus rapidement le responsive et conserver une cohérence visuelle sur l’ensemble du site.\n" +
                "\n" +
                "Ce projet nous a permis de travailler sur la conception d’une interface web moderne, l’organisation des pages, l’adaptation aux différentes tailles d’écran et le développement collaboratif d’un site complet.\n"
        },

        en: {
            short: "Redesign of an existing website",
            description:
                "During the second year of our Computer Science degree, we had the opportunity to completely redesign the website of a local authority in order to provide a more modern, clear and user-friendly interface.\n" +
                "\n" +
                "Developed as a team project, it allowed us to work on the website's structure, visual design and behavior using several web technologies.\n" +
                "\n" +
                "We used HTML to structure the content of the different pages, CSS for styling, and JavaScript to add interactions and dynamic elements.\n" +
                "\n" +
                "We also used Tailwind CSS to speed up interface development, simplify responsive design and maintain visual consistency throughout the website.\n" +
                "\n" +
                "This project allowed us to work on modern web interface design, page organization, responsive layouts and collaborative development of a complete website."
        },

        github: "https://github.com/orakless/SAE-beauvaisis"
    },

    {
        slug: "MasterMind",
        name: "MasterMind",

        image: "/projects/mastermind.webp",

        stack: ["VB.NET"],

        fr: {
            short: "Reproduction du jeu Mastermind",
            description:
                "Le MasterMind est un célèbre jeu de réflexion dans lequel le joueur doit retrouver une combinaison secrète de couleurs en un nombre limité d’essais.\n" +
                "\n" +
                "Lors de notre première année de BUT Informatique, nous avons eu l’occasion de développer notre propre version du jeu en Visual Basic, en utilisant le framework .NET.\n" +
                "\n" +
                "Réalisé en groupe de quatre, ce projet nous a permis de mettre en place plusieurs fonctionnalités essentielles du jeu, comme la génération d’une combinaison secrète, la saisie des propositions du joueur, la vérification des couleurs bien ou mal placées ainsi que la gestion des différentes tentatives jusqu’à la victoire ou la défaite.\n"
        },

        en: {
            short: "Recreation of the Mastermind game",
            description:
                "Mastermind is a well-known logic game in which the player must discover a secret combination of colors within a limited number of attempts.\n" +
                "\n" +
                "During the first year of our Computer Science degree, we developed our own version of the game in Visual Basic using the .NET framework.\n" +
                "\n" +
                "Developed in a team of four, the project included several core game features such as generating a secret combination, handling player guesses, checking correctly and incorrectly positioned colors, and managing the different attempts until the player wins or loses."
        },

        github: "https://github.com/remi-lem/SAE-S2-01-MasterMind"
    },

    {
        slug: "Dijkstra",
        name: "Dijkstra",

        image: "/projects/dijkstra.png",

        stack: ["Java"],

        fr: {
            short: "Implémtation de graphes de 4 manières et mise en place de l'algorithme de Dijkstra",
            description:
                "Lors de notre première année de BUT Informatique, nous avons eu l’occasion de travailler en groupe sur l’implémentation et l’optimisation de l’algorithme de Dijkstra en Java.\n" +
                "\n" +
                "La première partie du projet consistait à représenter des graphes orientés et valués de plusieurs manières différentes. Nous avons ainsi développé quatre implémentations de graphes : avec une table de hachage d’adjacence, une liste d’adjacence, une liste d’arcs et une matrice d’adjacence.\n" +
                "\n" +
                "Une fois ces différentes structures mises en place, nous avons développé l’algorithme de Dijkstra, permettant de trouver les plus courts chemins depuis un sommet de départ vers les autres sommets du graphe.\n" +
                "\n" +
                "Une partie importante du projet concernait également les performances. Nous avons dû optimiser notre implémentation afin de pouvoir traiter des graphes contenant un nombre de sommets de plus en plus important et réussir un maximum de tests de performance.\n" +
                "\n" +
                "Nous avons également mis en place des tests unitaires afin de vérifier le bon fonctionnement des différentes représentations de graphes ainsi que de l’algorithme.\n" +
                "\n" +
                "Ce projet réalisé en groupe nous a permis de travailler sur les structures de données, les graphes, l’algorithmique, l’optimisation des performances et les tests en Java.\n"
        },

        en: {
            short: "Implementation of four graph representations and Dijkstra's algorithm",
            description:
                "During the first year of our Computer Science degree, we worked as a team on the implementation and optimization of Dijkstra's algorithm in Java.\n" +
                "\n" +
                "The first part of the project consisted of representing directed weighted graphs using several different data structures. We implemented four graph representations: an adjacency hash map, an adjacency list, an edge list and an adjacency matrix.\n" +
                "\n" +
                "Once these different structures were implemented, we developed Dijkstra's algorithm to calculate the shortest paths from a starting vertex to the other vertices of the graph.\n" +
                "\n" +
                "Performance was also an important part of the project. We had to optimize our implementation in order to process graphs containing an increasingly large number of vertices and pass as many performance tests as possible.\n" +
                "\n" +
                "We also implemented unit tests to verify the behavior of the different graph representations and the algorithm itself.\n" +
                "\n" +
                "This team project allowed us to work on data structures, graph theory, algorithms, performance optimization and unit testing in Java."
        },

        github: "https://github.com/Dianosse/SAE_DEV_MATH_PriodeD"
    }

];