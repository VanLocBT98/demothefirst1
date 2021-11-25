import { CreateStore } from "/js/core.js";
import reducer from "/js/reducer.js";
const {attach,conect,ditpatch} = CreateStore(reducer)

window.ditpatch = ditpatch

export {
    attach,
    conect
}