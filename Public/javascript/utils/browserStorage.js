// Local Storage
const getItemLocalStorage = (key) => {
    const item = localStorage.getItem(key)
    return item
}

const getJsonObjLocalStorage = (key) => {
    const obj = localStorage.getItem(key)
    return obj && obj !== "undefined" ? JSON.parse(obj) : false
}

const setItemLocalStorage = (key, value) => {
    const val = typeof (value) === "object" ? JSON.stringify(value) : value
    localStorage.setItem(key, val)
}

const removeItemLocalStorage = (key) => {
    localStorage.removeItem(key)
}

const clearLocalStorage = () => {
    localStorage.clear()
}
