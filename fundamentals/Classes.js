class Person{
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    info(){
        console.log('Hi '+ this.name +'!'+ 'Your email is: '+this.email+' and your password: '+this.password);
    }
}

const person1 = new Person('Ebrahim', 'ebrahim@gmail.com', 'Test123456');
person1.info();