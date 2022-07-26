import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";
import { Pop } from "../Utils/Pop.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let cardsTemplate = ''
  values.forEach(v => cardsTemplate += v.CardTemplate)
  document.getElementById("app").innerHTML = /*html*/`
  
  `
}

//Public
export class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue() {
    valuesService.addValue()
  }

  async removeValue(id) {
    const yes = await Pop.confirm('Remove Value')
    if (yes) {
      valuesService.removeValue(id)
    }
  }

}
