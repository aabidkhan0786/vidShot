export default (user=JSON.parse(localStorage.getItem("LoggedUser")) || null,action) =>{
    switch (action.type) {
        case "AUTH":
           localStorage.setItem("LoggedUser", JSON.stringify({...action?.data}));
           return action.data
        case 'LOGOUT':
            localStorage.clear()
            return {user:null}
        case 'UPDATE_USER':
            const update_user = {
                ...user,
                user:action?.data
            }
            localStorage.setItem("LoggedUser", JSON.stringify(update_user));
            return update_user
        default:
            return user;
    }
}