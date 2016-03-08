/*
 *  객체지향 프로그래밍
 *	    1. 클래스, 생성자, 메서드
 *			3) 캡슐화 ( 정보은닉 ) - 클래스 기반(클로저), 객체를 리턴, 참조변수 접근
 */


var ArrayObj = function ( arg ) {
    var array = [ '1', '2', '3'];

    return {
               getArray : function () {
                   return array;
               }
           }
};

// new를 사용하지 않음
var arrayObj = ArrayObj();

console.log ( arrayObj.getArray() );
// array 접근할 수 없음
console.log ( arrayObj.array );

// 참조변수의 shallow copy 이므로 값 변경 가능
arrayObj.getArray().push ( '4' );
console.log ( arrayObj.getArray() );

console.dir ( arrayObj );

