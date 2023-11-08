export default (user=JSON.parse(localStorage.getItem("LoggedUser")) || null,action) =>{
    switch (action.type) {
        case "AUTH":
           localStorage.setItem("LoggedUser", JSON.stringify({...action?.data}));
           return action.data
        case 'LOGOUT':
            localStorage.clear()
            return {user:null}
        default:
            return user;
    }

}