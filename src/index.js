import Foo from './foo';


let foo = new Foo();

let textNode = document.createTextNode(foo.speak());
document.body.appendChild(textNode);
