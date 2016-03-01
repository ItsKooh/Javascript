/*
 *  객체지향 프로그래밍
 *	    1. 클래스, 생성자, 메서드
 *			1) 클래스기반 클래스, 생성자, 메서드 - prototype 메서드(2)
 */

Function.prototype.method = function ( methodName, func ) {
    if ( !this.prototype[methodName] ) {
        this.prototype[methodName] = func;
    }
};

function Person ( name ) {
    this.name = name;
}

Person.method ( 'getName', function() {
   return this.name;
});

Person.method ( 'setName', function ( name ) {
    this.name = name;
});

var you = new Person ( 'zzoon' );
console.dir ( you );
console.log ( you.getName() );

var me = new Person ( 'merry' );
console.log ( me.getName() );
console.dir ( me );