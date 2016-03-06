/*
 *  객체지향 프로그래밍
 *	    1. 클래스, 생성자, 메서드
 *			2) 상속 - 프로토타입 기반 ( 자식 오브젝트에 메서드 추가 - extend )
 */

/* 프로퍼티 복사 */
function extend ( obj, prop ) {
    if ( !prop ) { prop = obj };
    // 얕은 복사 ( Shallow Copy )
    for ( attr in prop ) { obj[attr] = prop[attr] };
    return obj;
}

/* 객체 상속 */
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
var added = {
    setAge : function ( age ) {
        this.age = age;
    },
    getAge : function () {
        return this.age;
    }
};

extend ( you, added );

console.log ( you.getAge() );

you.setAge ( 32 );
console.log ( you.getAge() );

console.dir ( you );



var me = create_object ( person );
console.dir ( me );