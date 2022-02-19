"use strict";
//union type
let ordername;
let orderId;
let itemPrice;
//type guard
const setItemPrice = (price) => {
    if (typeof price === 'number')
        itemPrice = price;
    else
        itemPrice = 0;
};
//enum
var GenderType;
(function (GenderType) {
    GenderType["Female"] = "female";
    GenderType["Male"] = "male";
    GenderType["Neutral"] = "neutral";
})(GenderType || (GenderType = {}));
let member = {
    gender: GenderType.Male,
    subject: 'art',
    name: 'Kim',
    age: 11,
    1: 'A'
};
//함수정의. 반환값으로 단순한 object보다 interface로 선언하여 좀 더 구체적인 반환 타입 설정
function getStudent(studentId) {
    return { subject: 'math', gender: GenderType.Female, name: 'shin', age: 23 };
}
//함수의 매개변수로 interface 사용
function saveMember(m) {
}
saveMember({ subject: 'art', gender: GenderType.Male, name: 'shin', age: 23 });
//-------------------------------------------------
//아무것도 반환하지 않을 때 void
//선택적 parameter 
//default parameter
//arrow function
const logName = (name, message1 = 'message', message2) => console.log(name + '  :' + message1 + ' ' + message2);
logName('shin');
logName('lee', '2022');
logName('choo', '2000', 'initial');
//---------------------------------------------------
//class
class Student {
    //접근 제한자를 붙이면 자동으로 property가 생성되고 값이 전달됨    
    constructor(gender, _fullName, subject, age, complete) {
        this.gender = gender;
        this._fullName = _fullName;
        this.subject = subject;
        this.age = age;
        this.complete = complete;
    }
    // getter
    get fullName() {
        return this._fullName;
    }
    // setter
    set fullName(name) {
        this._fullName = name;
    }
    //this로 접근하므로 별도의 매개변수가 필요없음. 
    printDetails() {
        console.log(`
        이름은 ${this._fullName}, 
        과목은 ${this.subject} 
        성별은 ${this.gender} 
        과목이수 : ${this.complete}`);
    }
    printShort() {
        console.log(`이름: ${this._fullName}`);
    }
}
let member1 = new Student(GenderType.Female, '김수민', 'math', 23);
member1.printDetails();
let member2;
member2 = new Student(GenderType.Female, '하늬', 'art', 25);
//getter 와 setter를 통해 private 접근
member2.fullName = '김민';
console.log(member2.fullName);
//-----------------------------------------
//generic 
//array내부의 모든 타입에 대하여 동일한 함수 사용 가능
function getSize(arr) {
    return arr.length;
}
// <>안에 타입을 넣지 않아도 실제 인자의 타입으로 인지됨
console.log(getSize([1, 2, 3]));
console.log(getSize(['a', 'b', 'c']));
const m1 = {
    name: 'vbox',
    price: 2000,
    option: "delux"
};
const m2 = {
    name: 'vbox',
    price: 2000,
    option: {
        color: 'red',
        coupon: false
    }
};
const user1 = { name: '유구광', email: 'shin@yahoo.com' };
const car = { name: 'bmw', year: 2000 };
function showName(data) {
    return data.name;
}
console.log(showName(user1));
console.log(showName(car));
