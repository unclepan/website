class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
  
    toString() {
        console.log('我是alert123');
        return '(' + this.x + ', ' + this.y + ')';
    }
}
var P = new Point('HELLO','WEBPACK');
P.toString();