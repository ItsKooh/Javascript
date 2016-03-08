/*
 *  객체지향 프로그래밍
 *	    1. 클래스, 생성자, 메서드
 *			3) 캡슐화 ( 정보은닉 ) - 클래스 기반(클로저), 함수객체를 리턴, Person의 프로토타입에 접근
 */


var Person = function ( arg ) {
    var name = arg ? arg : 'zzoon';

    var Func = function() {};
    Func.prototype = {
        getName : function () {
            return name;
        },
        setName : function ( arg ) {
            name = arg;
        }
    }

    return Func;
}();


Person.prototype.getAge = function () {
    return this.age;
};

Person.prototype.setAge = function ( arg ) {
    this.age = arg;
};



var person = new Person();

console.log ( person.getName() );
// name에 접근할 수 없음
console.log ( person.name );


// Person의 프로토타입에도 접근할 수 있음
console.log ( person.setAge(32) );
console.log ( person.getAge() );
console.log ( person.age );

console.dir ( person );