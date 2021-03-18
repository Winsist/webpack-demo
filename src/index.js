//ES Module模块引入方式
// import Header from './header.js'
// import Content from './content.js'
// import Slider from './slider.js'
import love from './love.jpg'

console.log(love);

var root = document.getElementById('root');
var img = new Image();
img.src = love;
root.append(img)

// new Header();
// new Content();
// new Slider();


//CommonJs 模块引入规范
//var Header = require(./header.js);//引入
//module.exports = Header;//导出

