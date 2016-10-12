var dependences = [
    'ui.router',
    "angular-owl-carousel",
    "ngSanitize"
];
angular.module("App", dependences);

angular.module("App").config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/home.html"
        })
        .state('portfolio', {
            url: "/portfolio/:name/:phase",
            templateUrl: "views/portfilio.html",
            controller: "PortfolioController"
        })
        .state('phaseone', {
            url: "/phaseone",
            templateUrl: "views/phase1.html",
            controller: "PhaseOneController"

        }).state('contact-us', {
        url: "/contact-us",
        templateUrl: "views/contact.html",
        controller: "ContactController"

    }).state('phasetow', {
        url: "/phasetow",
        templateUrl: "views/phase2.html",
        controller: "PhaseTowController"

    }).state('workshow', {
        url: "/workshop",
        templateUrl: "views/workshop.html",
        controller: "WorkshopController"

    });

});