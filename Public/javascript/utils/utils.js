
const isAuth = () => {
    const token = localStorage.getItem('authToken')
    if (token) return true
    return false
}
