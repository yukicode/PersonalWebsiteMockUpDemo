var bio = {
    name: ko.observable("XUERU MCMULLAN"),
    title: ko.observable("FRONT-END WEB DEVELOPER"),

};

var viewModel = {
    bio : bio,
};

ko.applyBindings(viewModel);