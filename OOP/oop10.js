/*
 *  객체지향 프로그래밍
 *	    1. 클래스, 생성자, 메서드
 *			3) 캡슐화 ( 정보은닉 ) - 클래스 기반(클로저)
 */


var Person = function ( arg ) {
    var name = arg ? arg : 'zzoon';

    this.getName = function () {
        return name;
    }

    this.setName = function ( arg ) {
        name = arg;
    }
};


var person = new Person();

console.log ( person.getName() );
// name에 접근할 수 없음
console.log ( person.name );

console.dir ( person );