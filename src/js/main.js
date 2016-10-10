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
        images: [{src: "./images/neighborhood-map-01.jpg"},],
        projectDescrition: "Neighborhood Map is a single-page, responsive web application that helps people location appartments in Seattle and nearby area. Users could search for apartments based on name or desired location. Apartments can be sorted by name or price range. The app provides detailed apartment informations including Google and Yelp reviews.",
        techniqueDescription: "The application uses Knockout and jQuery in the front-end; Node and Express in the back-end. Front-end and back-end communites through a restful API. Building process was automated using Gulp.",
        link: 'https://github.com/yukicode/UDA-front-end-program',
        demoLink: '',
    },
    {
        name: "Arcade Game Frogger",
        idattr: "arcade-game-frogger",
        id: "#arcade-game-frogger",
        images: [{src: "./images/arcade-game-frogger-01.jpg"}, {src: "./images/arcade-game-frogger-02.jpg"}, {src: "./images/arcade-game-frogger-03.jpg"}],
        projectDescrition: "The classic arcade game frogger, with various charactors and interesting game mechanisms. Come and join in the journey and complete the queen's request!",
        link:'https://github.com/yukicode/UDA-front-end-program',
        demoLink: 'https://yukicode.github.io/UDA-front-end-program/',
    },
    {
        name: "glTF Loader",
        idattr: "gltf-loader",
        id: "#gltf-loader",
        images: [{src: "./images/gltf-web.png"}],
        projectDescrition: "C# loader for the open source project glTF. The loader loads glTF models into an in-momory structure for manipulation and rendering. It expanded the usage of the JavaScript based project into C# and all .net languages.",
        link: "https://github.com/KhronosGroup/glTF/tree/master/loaders/CSharp",
        demoLink: '',
    },
    {
        name: "Factorio Mod Extension",
        idattr: "factorio-mod-extension",
        id: "#factorio-mod-extension",
        images:[{src: "./images/factorio-mod-extension-01.jpg"}],
        projectDescrition: "An extension of a game mod that adds extra items and utilities to the game.",
        link: "https://github.com/MattMcMullan/BeltUtils",
        demoLink: "",
    },
];

var viewModel = {
    bio : bio,
    projects: projects,
};
ko.bindingHandlers.disableEmpty = {
    init: function(element, valueAccessor, allBindings) {
        var value = ko.unwrap(valueAccessor());
        if(!value){
            $(element).addClass("disabled");
        }
    }
};
ko.bindingHandlers.checkActive = {
    init: function(element, valueAccessor, allBindings) {
        var value = ko.unwrap(valueAccessor());
        if (value === 0){
            $(element).addClass("active");
        }
    }
};
ko.applyBindings(viewModel);