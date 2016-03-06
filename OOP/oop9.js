/*
 *  객체지향 프로그래밍
 *	    1. 클래스, 생성자, 메서드
 *			2) 상속 - 클래스 기반 ( 자식과 부모의 종속성 없애기 )
 */

/* 부모 객체 */
function Person ( name ) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

Person.prototype.setName = function ( name ) {
    this.name = name;
};


/* 자식 객체 */
function Student () {

};


/* 부모, 자식간 종속성 없애는 더미 객체 생성 */
function F () {};
F.prototype = Person.prototype;
Student.prototype =  new F();
Student.prototype.constructor = Student;
Student.super = Person.prototype;


var me = new Student();
me.setName ( 'zzoon' );
console.log ( me.getName() );
console.dir ( me );



