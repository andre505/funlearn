var view = require("ui/core/view");


function onNavigatingTo(args) {
    const page = args.object;
    const vm = new Observable();

    // in the following example the DatePicker properties are binded via Observableproperties
    const TODAY = new Date();
    vm.set("date", TODAY); // the binded date property accepts Date object
    vm.set("minDate", new Date(1995, 0, 29)); // the binded minDate property accepts Date object
    vm.set("maxDate", new Date(2045, 4, 12)); // the binded maxDate property accepts Date object

    page.bindingContext = vm;
}

function onDatePickerLoaded(args) {
    const datePicker = args.object;
    datePicker.on("dateChange", (args) => {
        console.dir(args);
    });
    datePicker.on("dayChange", (args) => {
        console.dir(args);
    });
    datePicker.on("monthChange", (args) => {
        console.dir(args);
    });
    datePicker.on("yearChange", (args) => {
        console.dir(args);
    });
}

function oncontinueTap(args){
    const button = args.object;
    const page = button.page;
    const navigationEntry = {
        moduleName: "home/home-page",
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
exports.onDatePickerLoaded = onDatePickerLoaded;
exports.oncontinueTap = oncontinueTap;

