/*
 *  객체지향 프로그래밍
 *	    1. 클래스, 생성자, 메서드
 *			2) 상속 - 프로토타입 기반 ( 자식 오브젝트에 메서드 추가 )
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

you.setAge = function ( age ) {
    this.age = age;
};

you.getAge = function ( age ) {
    return this.age;
}

console.log ( you.getAge() );

you.setAge ( 32 );
console.log ( you.getAge() );

console.dir ( you );