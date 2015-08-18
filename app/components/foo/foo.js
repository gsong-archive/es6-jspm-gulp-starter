import './foo.css!';


class Foo {
  speak() {
    return 'It works!';
  }

  addElement(text) {
    let newDiv = document.createElement('div');
    let newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);
    newDiv.classList.add('foo');
    document.body.appendChild(newDiv);
  }
}

export default Foo;
