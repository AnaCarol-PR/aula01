//Atividade 1 (TypeScript)
//Crie, em TypeScript, uma interface chamada UserProps, que conterá as propriedades firstName, lastName, username, email, password, cpf, contact e isAdmin. Após criar a interface, crie uma classe User implementando essa interface. Faça os métodos getter e setter de cada propriedade.

interface UserProps{
    firstName: string,
    lastName: string, 
    username: string, 
    email: string, 
    password: string, 
    cpf: string, 
    contact: string, 
    isAdmin: boolean,
}

class User implements UserProps{

    firstName!: string
    lastName!: string
    username!: string
    email!: string
    password!: string 
    cpf!: string
    contact!: string
    isAdmin!: boolean
    
    
    constructor( firstName: string,  lastName: string, username: string,  email: string,  password: string,  cpf: string,  contact: string,  isAdmin: boolean ) {

        this.firstName = firstName
        this.lastName = lastName
        this.username = username
        this.email = email
        this.password = password
        this.cpf = cpf
        this.contact = contact
        this.isAdmin = isAdmin
    }

    escrevendoPropriedades(){
        console.log (this.firstName)
        console.log (this.lastName)
        console.log (this.username)
        console.log (this.email)
        console.log (this.password)
        console.log (this.cpf)
        console.log (this.contact)
        console.log (this.isAdmin)
        
    }

       

    getFirstName(){
        return this.firstName
    }

    setFirstName(firstName: string){
        this.firstName = firstName
    }
    
    getLastName(){
        return this.lastName
    }

    setLastName(lastName: string){
        this.lastName = lastName
    }
    
    getusername(){
        return this.username
    }

    setusername(username: string){
        this.username = username
    }

    getemail(){
        return this.email
    }

    setemail(email: string){
        this.email = email
    }

    getpassword(){
        return this.password
    }

    setpassword(password: string){
        this.password = password
    }

    getcpf(){
        return this.cpf
    }

    setcpf(cpf: string){
        this.cpf = cpf
    }

    getcontact(){
        return this.contact
    }

    setcontact(contact: string){
        this.contact = contact
    }

    getisAdmin(){
        return this.isAdmin
    }

    // setisAdmin(isAdmin: string){
    //     this.isAdmin = isAdmin
    // }
}

let user = new User ('Ana', 'Caroline', 'anac_pereira', 'anac@email.com', '123456', '123.456.789-00', '(13)9999-9999', true)
//  User.setFirstName('Caroline')
 console.log(user.getFirstName())
 console.log(user.getLastName())
 console.log(user.getusername())
 console.log(user.getemail())
 console.log(user.getpassword())
 console.log(user.getcpf())
 console.log(user.getcontact())
 console.log(user.getisAdmin())