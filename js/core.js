

export default function html([first, ...strings], ...value){
    return value.reduce(
        (acc,cur)=> acc.concat(cur, strings.shift()),
        [first]
    )
    .filter(x => x && x!== true || x === 0)// loại bỏ khả năng true ở biến isSuccess
    .join('') // loại bỏ dấu phấy ở giữa các<li>

}
export function CreateStore(reducer){
    let state = reducer();
    const roots = new Map()
    function render(){
        for(const[root,component] of roots){
            const output = component()
            root.innerHTML =output
        }
    }
    return {
        attach(component,root){
            roots.set(root,component)
            render()
        },
        conect(selector = state =>state){
            return component =>(props, ...args) => component(Object.assign({},props,selector(state), ...args))
        },
        ditpatch(action ,...args){
            state = reducer(state, action, args)
            render()
        }
    }
}