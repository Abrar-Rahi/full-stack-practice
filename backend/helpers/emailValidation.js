let emailValidation = (email)=>{
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    let check = !pattern.test(email)
    return check
}

module.exports = emailValidation