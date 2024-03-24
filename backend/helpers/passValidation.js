const passValidation =(pass)=>{
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/
    let check = !pattern.test(pass)
    return check
}

module.exports = passValidation