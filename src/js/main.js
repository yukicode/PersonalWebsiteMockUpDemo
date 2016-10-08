var bio = {
    name: "XUERU MCMULLAN",
    title: "FRONT-END WEB DEVELOPER",
    summary: "Front-End Web Developer specializing in JavaScript and JS frameworks. Experienced in building single-page web applications that are mobile and user-friendly.",
};

var projects = [
    {
        name: "Neighborhood Map",
        images: ["./images/neighborhood-map-01.jpg"],
        descrition: [
            "Neighborhood Map is a single-page, responsive web application that helps people location appartments in Seattle and nearby area. Users could search for apartments based on name or desired location. Apartments can be sorted by name or price range. The app provides detailed apartment informations including Google and Yelp reviews as well as apartments' contact information.",
            "The application uses Knockout and jQuery in the front-end; Node and Express in the back-end. Front-end and back-end communites through a restful API. Building process was automated using Gulp."
        ],
        link: 'https://github.com/yukicode/UDA-front-end-program',
        demoLink: '',
    },
    {
        name: "Arcade Game Frogger",
        images: ["./images/neighborhood-map-01.jpg"],
        description:[],
        link:'https://github.com/yukicode/UDA-front-end-program',
        demoLink: 'https://yukicode.github.io/UDA-front-end-program/',
    }
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
ko.applyBindings(viewModel);