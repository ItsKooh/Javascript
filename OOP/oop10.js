/*
 *  객체지향 프로그래밍
 *	    1. 클래스, 생성자, 메서드
 *			3) 캡슐화
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

