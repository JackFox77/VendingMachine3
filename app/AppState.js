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
  new Snack('Crunch', 2, 'a1',),
  new Snack('Snickers', 2, "a2"),
  new Snack('Kitkat', 2, 'a3'),
  new Snack('Coke', 3, "b1",'https://images.unsplash.com/photo-1629186235045-80d4147d90dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'),
  new Snack('Pepsi', 3, 'b2','https://images.unsplash.com/photo-1629186235045-80d4147d90dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'),
  new Snack('RC',3,'b3','https://images.unsplash.com/photo-1629186235045-80d4147d90dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')
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


