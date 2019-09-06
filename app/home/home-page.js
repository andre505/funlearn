const app = require("tns-core-modules/application");

const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

function onItemTap(args){
    const button = args.object;
    const page = button.page;
    const navigationEntry = {
        moduleName: "quizmodules/general/general",
        animated: true,
        transition: {
            name: "fade",
            duration: 380,
            curve: "easeIn"            
        },                    
    };
    page.frame.navigate(navigationEntry);
    //page.frame.navigate("home/home-page");
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
exports.onItemTap = onItemTap;