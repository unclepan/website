import img from '../../assets/img/login-bg.jpg';
import style from '../../common/style/style.less';
import style2 from '../../common/style/style2.css';
console.log(img,style,style2);
console.log('如果你看到这个Log，那么这个版本实际上是index下的index');
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
