import { ProxyState } from "../AppState.js";
import {snackService} from "../Services/SnackService.js"



function _makeMoney() {
    snackService.makeMoney()
    console.log('cash')
    document.getElementById('money').innerText= ProxyState.money
}




export class SnackController{
    constructor() {
        console.log('snack controller loaded');
    }
}