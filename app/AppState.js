import { Snack } from "./Models/SnackModel.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"



class AppState extends EventEmitter {
  user = {}
  profile = {}
  /** @type {Value[]} */
  values = []
  money = 5
  snacks = [
  new Snack('Crunch', 2, 'a1'),
  new Snack('Snickers', 2, "a2"),
  new Snack('Kitkat', 2, 'a3'),
  new Snack('Coke', 3, "b1"),
  new Snack('Pepsi', 3, 'b2'),
  new Snack('RC',3,'b3')
  ]
}



export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})


