import { ProxyState } from "../AppState.js";
import {snackService} from "../Services/SnackService.js"


function _drawSnacks() {
    let snacks = ProxyState.snacks
    console.log('drawing snacks', snacks)
    let template = ''
    snacks.forEach(s => template += s.Template)
    document.getElementById('snacks').innerHTML=template
}

_drawSnacks()


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