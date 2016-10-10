var bio = {
    name: "XUERU MCMULLAN",
    title: "FRONT-END WEB DEVELOPER",
    summary: "Front-End Web Developer specializing in JavaScript and JS frameworks. Experienced in building single-page web applications that are mobile and user-friendly.",
};

var projects = [
    {
        name: "Neighborhood Map",
        idattr: "neighborhood-map",
        id: "#neighborhood-map",
        images: [{ src: "./images/neighborhood-map-01.jpg" },{ src: "./images/neighborhood-map-02.jpg" },{ src: "./images/neighborhood-map-03.jpg" },],
        projectDescrition: "Neighborhood Map is a single-page, responsive web application that helps people location appartments in Seattle and nearby area. Users could search for apartments based on name or desired location. Apartments can be sorted by name or price range. The app provides detailed apartment informations including Google and Yelp reviews.",
        techniqueDescription: "The application uses Knockout and jQuery in the front-end; Node and Express in the back-end. Front-end and back-end communites through a restful API. Building process was automated using Gulp.",
        link: 'https://github.com/yukicode/UDA-front-end-program',
        demoLink: '',
    },
    {
        name: "Arcade Game Frogger",
        idattr: "arcade-game-frogger",
        id: "#arcade-game-frogger",
        images: [{ src: "./images/arcade-game-frogger-01.jpg" }, { src: "./images/arcade-game-frogger-02.jpg" }, { src: "./images/arcade-game-frogger-03.jpg" }],
        projectDescrition: "The classic arcade game frogger, with various charactors and interesting game mechanisms. Come and join in the journey and complete the queen's request!",
        link: 'https://github.com/yukicode/UDA-front-end-program',
        demoLink: 'https://yukicode.github.io/UDA-front-end-program/',
    },
    {
        name: "glTF Loader",
        idattr: "gltf-loader",
        id: "#gltf-loader",
        images: [{ src: "./images/gltf-web.png" }],
        projectDescrition: "C# loader for the open source project glTF. The loader loads glTF models into an in-momory structure for manipulation and rendering. It expanded the usage of the JavaScript based project into C# and all .net languages.",
        link: "https://github.com/KhronosGroup/glTF/tree/master/loaders/CSharp",
        demoLink: '',
    },
    {
        name: "Factorio Mod Extension",
        idattr: "factorio-mod-extension",
        id: "#factorio-mod-extension",
        images: [{ src: "./images/factorio-mod-extension-01.jpg" }],
        projectDescrition: "An extension to the exisiting Factorio mod. It adds extra items and utilities to the game. It also adds the new items to the technique tree.",
        link: "https://github.com/MattMcMullan/BeltUtils",
        demoLink: "",
    },
];

var languages = [
    {
        name: "JavaScript",
        courses: 4,
        projects: 5,
    },
    {
        name: "C#",
        courses: 1,
        projects: 2,
    },
    {
        name: "C++",
        courses: 1,
        projects: 0,
    },
    {
        name: "HTML/CSS",
        courses: 5,
        projects: 5,
    },
    {
        name: "SASS",
        courses: 3,
        projects: 1,
    }
];

var frameworks = [
    {
        name: "jQuery",
        courses: 2,
        projects: 3,
    },
    {
        name: "Knockout.js",
        courses: 1,
        projects: 2,
    },
    {
        name: "AngularJS",
        courses: 3,
        projects: 0,
    },
    {
        name: "Node.js",
        courses: 0,
        projects: 4,
    },
    {
        name: "Gulp",
        courses: 1,
        projects: 3,
    },
    {
        name: "Jasmine",
        courses: 2,
        projects: 1,
    },
];

var contacts = {
    github: "https://github.com/yukicode",
    linkedIn: "https://www.linkedin.com/in/xueru-mcmullan-89993326",
    email: "mailto:yolandaapply@gmail.com",
};

var viewModel = {
    bio: bio,
    projects: projects,
    contacts: contacts,
};
ko.bindingHandlers.disableEmpty = {
    init: function (element, valueAccessor, allBindings) {
        var value = ko.unwrap(valueAccessor());
        if (!value) {
            $(element).addClass("disabled");
        }
    }
};
ko.bindingHandlers.checkActive = {
    init: function (element, valueAccessor, allBindings) {
        var value = ko.unwrap(valueAccessor());
        if (value === 0) {
            $(element).addClass("active");
        }
    }
};
ko.applyBindings(viewModel);