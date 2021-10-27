export function addUser(name,value){
    return{
        type:"ADD_USER",
        payload:{[name]:value},
    };
}
export function currentUser(name,value){
    return{
        type:"CURRENT_USER",
        payload:{[name]:value},
    };
}