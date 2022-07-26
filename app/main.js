// import { ValuesController } from "./Controllers/ValuesController.js";

import { SnackController } from "./Controllers/SnackController.js"





  class App {
    // valuesController = new ValuesController();
    snackController = new SnackController();
}

window["app"] = new App();
