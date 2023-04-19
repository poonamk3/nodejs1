
const checkRequired = (data) => Object.entries(data).filter(([name, value]) => !value).map(item => item[0])
const checkEmail = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
const checkPassword = (password) => /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(password)
const checkConfirmPassword = (password, confirmPassword) => password === confirmPassword

const checkValidation = (data) => {
    const errorMsgs = checkRequired(data)
    if (data.email && !checkEmail(data.email)) errorMsgs.push("inValidEmail")
    if (data.password && !checkPassword(data.password)) errorMsgs.push("inValidPassword")
    if (data.confirmPassword && !checkConfirmPassword(data.password, data.confirmPassword)) errorMsgs.push("inValidConfirmPassword")
    return errorMsgs
}

const toggleEye = (openClass, closeClass, input) => {
    const type = $(`.${input}`)[0].type
    if (type === 'password') $(`.${input}`)[0].type = 'text'
    else $(`.${input}`)[0].type = 'password'
    $(`.${openClass}`).show()
    $(`.${closeClass}`).hide()
}

