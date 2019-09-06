const observableModule = require("tns-core-modules/data/observable");
const dialogsModule = require("tns-core-modules/ui/dialogs");
const topmost = require("tns-core-modules/ui/frame").topmost;

function UserprofileViewModel() {
    const viewModel = observableModule.fromObject({
    });

    return viewModel;
}

module.exports = UserprofileViewModel;
