function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 18;
    var country = country || 'ARG'
    console.log(name, age, country);
}

newUser()
newUser('Juan', 17, 'COL');


function newAdmin(name = 'Juan', age = 17, country = 'CL') {
    console.log(name, age, country);
}

newAdmin()
newAdmin('Ana', 22, 'URG')