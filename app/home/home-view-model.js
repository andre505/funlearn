const observableModule = require("tns-core-modules/data/observable");
const SelectedPageService = require("../shared/selected-page-service");

function HomeViewModel() {
    SelectedPageService.getInstance().updateSelectedPage("Home");
    var quizzes =
    [ 
    { quizmodule: "General Knowledge", description: "On general topics", imageSrc: "~/images/list/books-unsplash.jpg",
        "questions": [
            {
                "question": "Which of the following is correct about Angular 2 Components?",
                "options": [
                    "AngularJS had a focus of Controllers but Angular 2 has changed the focus to having components over controllers.",
                    "Components help to build the applications into many modules.",
                    "This helps in better maintaining the application over a period of time.",
                    "All of the above."
                ],
                "correctAnswerIndex": 3
            }
        ]
    },
    { quizmodule: "Animals", description: "Know your Animals", imageSrc: "~/images/list/animal.jpg" },
    { quizmodule: "Shapes", description: "Learn about basic shapes", imageSrc: "~/images/list/rsz_shapes.jpg" },
    { quizmodule: "Colours", description: "What Color is it?", imageSrc: "~/images/list/colours-.jpg" },
    { quizmodule: "Nigeria", description: "Know your country", imageSrc: "~/images/list/ng5.jpg" }, 
    { quizmodule: "Geography", description: "World Geography and Currency", imageSrc: "~/images/list/globe3.jpg" },
    ]
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        quizlist : quizzes
    });

    return viewModel;
}

module.exports = HomeViewModel;
