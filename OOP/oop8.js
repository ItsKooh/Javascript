/*
 *  객체지향 프로그래밍
 *	    1. 클래스, 생성자, 메서드
 *			2) 상속 - 클래스 기반 ( 부모 생성자 호출 )
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
    // 자식과 부모가 종속적임. 독립적으로 나누기 위해서 중간에 더미객체를 두게 된다
    Person.apply ( this, arguments );
};


/* 인스턴스 생성 */
var you = new Person ( 'zzoon' );
console.dir ( you );

// 자식과 부모가 종속적임. 독립적으로 나누기 위해서 중간에 더미객체를 두게 된다
Student.prototype = you;

var me = new Student ( 'merry' );
console.log ( me.getName() );
console.dir ( me );


// 자식의 프로토타입에 메서드 추가 부모가 훼손됨
Student.prototype.getAge = function () {
    return this.age;
};

Student.prototype.setAge = function ( age ) {
    this.age = age;
};

console.dir ( me );
console.dir ( you );

