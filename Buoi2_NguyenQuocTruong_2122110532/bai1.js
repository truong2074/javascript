
function XulyChoi(str)
{
    str= str.trim();
    str=str.replace(/\s+/g," ");
    str=str.toLowerCase();
    const arr=str.split(" ");
    for (let  i=0;i<arr.length;i++)
    {
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    str=arr.join(" ");
    return str;
}
let str="  xIn cHAo   ";
console.log(str.length);

str=XulyChoi(str);
console.log(str);
