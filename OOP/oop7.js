/*
 *  객체지향 프로그래밍
 *	    1. 클래스, 생성자, 메서드
 *			2) 상속 - 클래스 기반
 */


function Person ( name ) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

Person.prototype.setName = function ( name ) {
    this.name = name;
};


function Student () {

};


var you = new Person ( 'zzoon' );
console.dir ( you );

Student.prototype = you;

var me = new Student ( 'merry' );
console.log ( me.getName() );
console.dir ( me );
