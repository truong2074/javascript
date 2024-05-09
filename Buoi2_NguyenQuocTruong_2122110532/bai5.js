const arrNumber = [9,3,5,8,1,4,3,2];
const arrStr = ["Banana","Orange","Apple","Mango","Kiwi"];

arrNumber.push(10);
arrNumber.shift(10);

arrNumber.pop();
arrNumber.unshift();

arrStr.pop();
arrStr.unshift();

arrNumber.sort((a,b)=> a - b);
arrStr.sort();

const MangCon = arrNumber.slice(2,5)