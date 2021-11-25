import html from '/js/core.js'
import { conect } from '/js/store.js'
const conector = conect()
 function app({cars}){
     return ` 
     <ul>
     ${cars.map(car => `<li>${car}</li>`)}
     
     </ul>
     `
 }
 export default conector(app)