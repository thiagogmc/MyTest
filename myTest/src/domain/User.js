export default class User {
    constructor (nome='', username='', email='', password='', active='') {
        this.nome = nome;
        this.username = username;
        this.email = email;
        this.password = password;
        this.active = active;
    }

    accountStatus () {
        if (this.active == 0) {
            return "Não"
        }

        return "Sim";
    }
}