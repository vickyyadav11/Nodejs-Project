const  register = function(username){
      console.log(`User ${username} has been registered`)
}
module.exports = register;


const login = function(username,login){
    console.log(`User ${username} has been loggin`)
}

module.exports = {
    register,
    login
}

