/*
 *  객체지향 프로그래밍
 *	    1. 클래스, 생성자, 메서드
 *			1) 클래스기반 클래스, 생성자, 메서드 - prototype 메서드
 */

function Person ( name ) {
    this.name = name;

    Person.prototype.getName = function() {
        return this.name;
    }

    Person.prototype.setName = function ( name ) {
        this.name = name;
    }
}

var you = new Person ( 'zzoon' );
console.log ( you.getName() );

var me = new Person ( 'merry' );
console.log ( me.getName() );

console.dir ( you );
console.dir ( me );