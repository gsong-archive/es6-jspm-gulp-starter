import Foo from '../components/foo/foo';

import 'font-awesome/css/font-awesome.css!';
import '../styles/styles.css!';


let foo = new Foo();

let textNode = document.createTextNode(foo.speak());
document.body.appendChild(textNode);

foo.addElement("I'm foo!");
