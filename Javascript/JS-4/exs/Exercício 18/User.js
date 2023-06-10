class User {
    constructor(fullname, email, rm) {
        this.fullname = fullname
        this.email = email
        this.rm = rm
    }
    login(email, rm) {
        return this.rm == rm && this.email == email
    }
}

const namesStudents = [{
    //     name: 'ciclano',
    //     rm: 12648
    // },

}
]

document.getElementById('btn').addEventListener('click', (ev) => {
    ev.preventDefault()
    let name = document.getElementById('fullNameStudent').value
    let rm = document.getElementById('RmStudent').value
    if (name !== '' && rm !== '') {
        namesStudents.push(new User(name, '@gmail.com', rm))
        console.log(namesStudents)
    }
    else {
        alert('informe os dados certos')
    }

})
