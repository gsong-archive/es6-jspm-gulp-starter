import Foo from './foo';

import '../../.build/styles/styles.css!';


let foo = new Foo();

let textNode = document.createTextNode(foo.speak());
document.body.appendChild(textNode);

foo.addElement("I'm foo!");
