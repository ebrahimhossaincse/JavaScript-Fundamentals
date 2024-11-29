class Person {
    constructor(firstName, lastName, email, phoneNumber, id, role, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.id = id;
        this.role = role;
        this.password = password;
    }

    person_info(){
        console.log('Hi '+this.firstName +this.lastName+'. Your official email address is '+this.email+' and your password: '+this.password);
        console.log('Your new role is '+this.role+' and your id is '+this.id)
    }
}

class Employee extends Person {

}

let james = new Employee('Ebrahim', ' Hossain', 'ebrahim@gmail.com', '1886644261', '1125410', 'SQA', 'tester123')
console.log(james.person_info());