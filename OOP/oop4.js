/*
 *  객체지향 프로그래밍
 *	    1. 클래스, 생성자, 메서드
 *			2) 상속 - 프로토타입 기반 ( 객체 리터럴 )
 */

function create_object ( obj ) {
    function F() {};
    F.prototype = obj;
    return new F();
}


var person  = {
    name : 'zzoon',
    getName : function() {
        return this.name;
    },
    setName : function ( name ) {
        this.name = name;
    }
};


var you = create_object ( person );
var me = Object.create ( person );

console.log ( you.getName() );

you.setName ( 'merry' );
console.log ( you.getName() );

console.dir ( you );
console.dir ( me );