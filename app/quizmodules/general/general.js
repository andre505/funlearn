const app = require("tns-core-modules/application");

const GeneralViewModel = require("./general-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new GeneralViewModel();
}



function onDrawerButtonTap(args) {
    const sideDrawer = app.getRootView();
    sideDrawer.showDrawer();
}

exports.onNavigatingTo = onNavigatingTo;
exports.onDrawerButtonTap = onDrawerButtonTap;
