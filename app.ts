//-----------------------------------------
//type alias
type stringNumber = string | number;

//union type
let ordername: string | number;

let orderId: stringNumber;
let itemPrice: number;

//type guard
const setItemPrice = (price: stringNumber): void => {
    if (typeof price === 'number')
        itemPrice = price;
    else
        itemPrice = 0;
}

//enum
enum GenderType {
    Female = 'female',
    Male = 'male',
    Neutral = 'neutral'
}
type Score = 'A' | 'B' | 'C' | 'D' | 'F'
//---------------------------------------
//interface
//method: 객체 내에서 정의된 함수
//js로 convert되지 않음.
interface Member {
    readonly id?: string; //읽기 전용
    gender: GenderType;
    name: string;
    //literal
    subject: 'math' | 'art' | 'social';
    age: number;
    complete?: boolean; //선택적 property 
    [grade: number]: Score;

    // addComment(comment: string): void; //메소드
    addComment?: (comment: string) => void; //메소드
}
let member: Member = {
    gender: GenderType.Male,
    subject: 'art',
    name: 'Kim',
    age: 11,
    1: 'A'
}

//함수정의. 반환값으로 단순한 object보다 interface로 선언하여 좀 더 구체적인 반환 타입 설정
function getStudent(studentId: string): Member {
    return { subject: 'math', gender: GenderType.Female, name: 'shin', age: 23 }
}
//함수의 매개변수로 interface 사용
function saveMember(m: Member) {
}

saveMember({ subject: 'art', gender: GenderType.Male, name: 'shin', age: 23 })


//-------------------------------------------------
//아무것도 반환하지 않을 때 void
//선택적 parameter 
//default parameter
//arrow function
const logName = (name: string, message1 = 'message', message2?: string): void =>
    console.log(name + '  :' + message1 + ' ' + message2);

logName('shin');
logName('lee', '2022');
logName('choo', '2000', 'initial');


//---------------------------------------------------
//class
class Student {
    //접근 제한자를 붙이면 자동으로 property가 생성되고 값이 전달됨    
    constructor(
        private gender: GenderType,
        private _fullName: string,
        private subject: 'math' | 'art' | 'social',
        private age: number,
        public complete?: boolean) {
    }
    // getter
    get fullName() {
        return this._fullName;
    }
    // setter
    set fullName(name: string) {
        this._fullName = name;
    }
    //this로 접근하므로 별도의 매개변수가 필요없음. 
    printDetails(): void {
        console.log(`
        이름은 ${this._fullName}, 
        과목은 ${this.subject} 
        성별은 ${this.gender} 
        과목이수 : ${this.complete}`)
    }
    printShort(): void {
        console.log(`이름: ${this._fullName}`);
    }
}

let member1: Student = new Student(GenderType.Female, '김수민', 'math', 23);
member1.printDetails();

let member2: Student;
member2 = new Student(GenderType.Female, '하늬', 'art', 25);
//getter 와 setter를 통해 private 접근
member2.fullName = '김민';
console.log(member2.fullName);

//-----------------------------------------
//generic 
//array내부의 모든 타입에 대하여 동일한 함수 사용 가능
function getSize<T>(arr: T[]): number {
    return arr.length;
}

// <>안에 타입을 넣지 않아도 실제 인자의 타입으로 인지됨
console.log(getSize<number>([1, 2, 3]));
console.log(getSize(['a', 'b', 'c']));

interface Mobile<T> {
    name: string;
    price: number;
    option: T;
}

const m1: Mobile<string> = {
    name: 'vbox',
    price: 2000,
    option: "delux"
}

const m2: Mobile<object> = {
    name: 'vbox',
    price: 2000,
    option: {
        color: 'red',
        coupon: false
    }
}

interface User {
    name: string;
    email: string;
}
interface Vehicle {
    name: string;
    year: number;
}

const user1: User = { name: '유구광', email: 'shin@yahoo.com' };
const car: Vehicle = { name: 'bmw', year: 2000 };
function showName<T extends { name: string }>(data: T): string {
    return data.name;
}

console.log(showName(user1));
console.log(showName(car));
