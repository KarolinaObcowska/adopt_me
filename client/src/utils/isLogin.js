export const isLogin = () => {
    const loggedInUser = localStorage.getItem('user')
    if(loggedInUser) {
        return true
    } else {
        return false
    }
}