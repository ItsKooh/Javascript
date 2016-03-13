/*
 *  create()
 *      - 객체지향 프로그래밍
 *      - 프로토타입 기반 상속
 *      - 파라미터의 객체를 상속받는 새로운 객체 생성
 */

/* create 함수 표현식 */
var create = function ( obj ) {
    var F = function() {};
    F.prototype = obj;
    return new F();
};


/* 객체 생성 */
var person = {
               name : 'zzoon'
             , age  : 32
             };


var Person = function ( arg ) {
    var name = arg ? arg : 'zzoon';
    var age  = 0;
    var sex  = 'female';
};

/*
var Person = function ( arg ) {
    var name = arg ? arg : 'zzoon';
    var age  = 0;
    var sex  = 'female';

    var Func = function() {};
    Func.prototype = {
        getName : function() {
            return name;
        },
        getAge : function() {
            return age;
        }
    };
    return Func;
}();
*/


/* 전역코드 */
var targetObj1 = create ( person );
var targetObj2 = create ( Person );
//var targetObj2 = create ( new Person() );

console.dir ( targetObj1 );
console.dir ( targetObj2 );

console.log ( '__KO__ targetObj1.name : ' + targetObj1.name );
console.log ( '__KO__ targetObj1.age  : ' + targetObj1.age );

console.log ( '__KO__ targetObj2.age  : ' + targetObj2.age );
console.log ( '__KO__ targetObj2.age  : ' + targetObj2.age );

console.log ( '__KO__ targetObj2.getName() : ' + targetObj2.getName() );
console.log ( '__KO__ targetObj2.getAge()  : ' + targetObj2.getAge() );


