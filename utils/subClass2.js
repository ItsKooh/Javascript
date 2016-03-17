
/*
 *  subClass()
 *      - 객체지향 프로그래밍
 *      - 프로토타입 및 클래스 기반 상속 : 함수 상속 ( 캡슐화 )
 *      - 객체 및 클래스에 대한 상속 구현체
 */

var subClass = function ( obj ) {
    var parent = this === window ? Function : this;

    var child = function () {
        var _parent = child.parent_constructor;

        if ( _parent && _parent !== Function ) {
            if ( _parent.hasOwnProperty('_init') ) {
                _parent._init.apply ( this, arguments );
            }
        }

        if ( child.hasOwnProperty('_init') ) {
            child._init.apply ( this, arguments );
        }
    };

    var F = function() {};
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.parent = parent.prototype;
    child.parent_constructor = parent;

    child.subClass = arguments.callee;

    for ( prop in obj ) {
        if ( obj.hasOwnProperty(prop) ) {
            child.prototype[prop] = obj[prop];
        }
    }

    return child;
};


var parentFunc = function () {
    var name;

    return {
        _init: function () {
            console.log('parent _init');
        },
        setName: function (arg) {
            name = arg;
        },
        getName: function () {
            return name;
        }
    };
};


var childFunc = function () {
    var name;

    return {
        _init: function () {
            console.log('parent _init');
        },
        setName: function (arg) {
            name = arg;
        },
        getName: function () {
            return name;
        }
    };
};


var Parent = subClass ( parentFunc() );
var teacher = new Parent();

console.dir ( teacher );
teacher.setName ( 'zzoon' );
console.log ( teacher.getName() );

var Student = Parent.subClass ( childFunc() );
var student = new Student();

console.dir ( student );
student.setName ( 'merry' );
console.log ( student.getName() );