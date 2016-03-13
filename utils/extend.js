/*
 *  extend()
 *      - 객체지향 프로그래밍
 *      - 기존 객체에 새로운 객체의 프로퍼티 그대로 복사하기
 *	        Ex) jQuery Plugin에 내가 작성한 프로퍼티 및 메서드 추가할 때 사용
 */


/* Extend() 함수 표현식 */
var extend = function ( deep, target, options ) {

    for ( name in options ) {
        src  = target[name];
        copy = options[name];

        // target과 동일한 객체가 있으면 패스 : 무한루프 빠지는 것을 방지
        if ( target === copy ) {
            console.log ( '__KO__ target === copy' )
            continue;
        }

        if ( deep && copy && ((copy instanceof Array) || (copy instanceof Object)) ) {
            // 참조변수 일때 : Deep Copy

            if ( (copy instanceof Array) ) {
                // 배열 일때
                console.log ( '__KO__ 배열일때 src && (copy instanceof Array) : ' + (src && (copy instanceof Array)) );
                clone = src && (copy instanceof Array) ? src : [];

            } else {
                // 객체 일때
                console.log ( '__KO__ 객체 일때 src && (copy instanceof Object) : ' + (src && (copy instanceof Object)) );
                clone = src && (copy instanceof Object) ? src : {};

            }

            // 재귀호출 : 하위의 프로퍼티와 객체들까지 모두 복사하기 위함
            target[name] = extend ( deep, clone, copy );

        } else {
            // 일반변수 or 함수객체 일때 : Shallow Copy
            target[name] = copy;
        }
    }

    return target;
};


/* 객체 생성 */
var innerObj  = {
                  innProp1 : 111
                , innProp2 : '222'
                };

var targetObj = {
                  tarProp1 : 1
                , tarProp2 : '2'
                , tarProp3 : ['3', '4', '5']
                };

var sourceObj1 = {
                   srcProp1 : 11
                 , srcProp2 : '22'
                 , srcProp3 : ['33', '44', '55']
                 , srcProp4 : innerObj
                 , srcProp5 : function() {
                                  return this.srcProp3.toString();
                              }
                 };
var sourceObj2 = {
                   srcProp1 : 11
                 , srcProp2 : '22'
                 , srcProp3 : ['33', '44', '55']
                 , srcProp4 : innerObj
                 , srcProp5 : function() {
                                  return this.srcProp3.toString();
                              }
                 , srcProp6 : targetObj
                 , tarProp3 : ['3']
                 };

/* 전역 코드 */
//targetObj = extend ( true, targetObj, 1 );
//targetObj = extend ( true, targetObj, innerObj );
//targetObj = extend ( true, targetObj, sourceObj1 );
targetObj = extend ( true, targetObj, sourceObj2 );


console.dir ( targetObj );
