
/*
 *  subClass()
 *      - 객체지향 프로그래밍
 *      - 프로토타입 및 클래스 기반 상속 : 객체 상속
 *      - 객체 및 클래스에 대한 상속 구현체
 */

var subClass = function ( obj ) {
    var parent = this === window ? Function : this;

    var child = function () {
        var _parent = child.parent_constructor;

        if ( _parent && _parent !== Function  ) {
            if (_parent.hasOwnProperty('_init')) {
                _parent._init.apply(this, arguments);
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


var childObj =  {
    _init : function() {
        console.log ( 'child _init()' );
    },
    getName : function() {
        return this._name;
    },
    setName : function ( arg ) {
        this._name = arg;
    }
};

var parentObj = {
    _init : function() {
        console.log ( 'parent _init()' );
    },
    getName : function() {
        return this._name;
    },
    setName : function ( arg ) {
        this._name = arg;
    }
};



var Parent = subClass ( parentObj );
var parent = new Parent();
console.dir ( parent );
parent.setName ( 'zzoon' );
console.log ( parent.getName() );

var Child = Parent.subClass ( childObj );
var child = new Child();
console.dir ( child );
child.setName ( 'merry' );
console.log ( child.getName() );
