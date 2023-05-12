import LinkedList from "./linkedList.js";

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(4);

console.log(list.at(2));

list.pop();

console.log(list.contains(3)); // true
console.log(list.contains(5)); // false

console.log(list.find(4)); // 0
console.log(list.find(5)); // null

list.insertAt(5, 2);

list.removeAt(1);

const result = list.toString();
console.log(result);