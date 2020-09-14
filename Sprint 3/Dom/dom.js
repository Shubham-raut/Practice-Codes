// // EXAMINE THE DOCUMENT OBJECT
// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// document.all[10].textContent="Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// Getelementbyid //
// console.log(document.getElementById("header-title"));
// var headerTitle=document.getElementById("header-title");
// var header=document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent="hello";
// headerTitle.innerText="goodby";
// console.log(headerTitle.innerText);     //keeps style, hidden is not shown
// console.log(headerTitle.textContent);   //dont keep style, hidden is shown
// headerTitle.innerHTML="<h3>Hello<h3>";
// header.style.borderBottom="solid 3px #000";


// // getelementsbyclassname //
// var items=document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent="Hello 2";
// items[1].style.fontWeight="Bold";
// items[1].style.backgroundColor="yellow";
// // itrms.style.backgroundColor="#777";  //gives error
// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor="#999";
// }


// // getelementsbytagname //
// var li=document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent="Hello 2";
// li[1].style.fontWeight="Bold";
// li[1].style.backgroundColor="yellow";
// // itrms.style.backgroundColor="#777";  //gives error
// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor="#999";
// }



// // queryselector //
// var header=document.querySelector("#main-header");
// header.style.borderBottom="solid 4px #111";

// var input=document.querySelector("input");
// input.value="hello world";

// var submit = document.querySelector('input[type="submit"]');
// submit.value="Send";

// var item = document.querySelector('.list-group-item');
// item.style.color="red";

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color="blue";

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color="lightgreen";



// // querySelectorall //
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[1].textContent="hell0";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");
// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="#eee";
//     even[i].style.backgroundColor="#aaa";
// }


//....................2.......................//


// traversing the dom //
// var itemList = document.querySelector("#items")
// parwnt node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#999";
// console.log(itemList.parentNode.parentNode.parentNode);

// parentELement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#999";
// console.log(itemList.parentElement.parentElement.parentElement);


// childNodes
// console.log(itemList.childNodes);


// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// // firstchild
// console.log(itemList.firstChild);

// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello 1";


// lastchild
// console.log(itemList.lastChild);

// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent="hello last";


// // nextSibling
// console.log(itemList.nextSibling);

// // //nextElementSibling
// console.log(itemList.nextElementSibling);
// itemList.nextElementSibling.textContent = "hello last";

// previousSibling //
// console.log(itemList.previousSibling);

// previousElementSibling //
// console.log(itemList.previousElementSibling);



//####### Adding Element #######//
// // create a div //
// var newDiv = document.createElement('div');

// // add class 
// newDiv.className = "HEllo";

// //add attr
// newDiv.setAttribute('title', 'Hello Div');

// // create a text node
// var newDivText = document.createTextNode('Hello World');

// // add text to div 
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// newDiv.style.color = "red";
// newDiv.style.backgroundColor = "yellow";
// newDiv.style.float = "right";

// container.insertBefore(newDiv, h1);


//..............3...............//
// Events //
// var buttonClick = () => {
//     console.log('Hi1');
// }

// var button = document.getElementById('button').addEventListener
//     ('click', buttonClick);
// var button=document.querySelector('#button').addEventListener
// ('click',buttonClick);

// function buttonClick(e){
//     // console.log('Hi2');
//     // document.getElementById('header-title').textContent='changed';
//     // document.querySelector('#main').style.backgroundColor='#ccc';
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output=document.getElementById('output');
//     // output.innerHTML='<h3>'+e.target.id+'</h3>';
//     // console.log(e.type);

//     // //position in browser
//     // console.log(e.clientX);
//     // console.log(e.clientY);
//     // //position in element
//     // console.log(e.offsetX);
//     // console.log(e.offsetY);

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftKey);

// }


var button = document.getElementById('button');
var box = document.getElementById('box');


button.addEventListener('click', runevent);
// button.addEventListener('dblclick',runevent);
// button.addEventListener('mousedown',runevent);
// button.addEventListener('mouseup',runevent);

// box.addEventListener('mouseenter',runevent);
// box.addEventListener('mouseleave',runevent);

// box.addEventListener('mouseover',runevent);
// box.addEventListener('mouseout',runevent);

// box.addEventListener('mousemove',runevent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var output = document.getElementById('output');
var select = document.querySelector('select');

// itemInput.addEventListener('keyup',runevent);
// itemInput.addEventListener('keydown',runevent);
// itemInput.addEventListener('keypress',runevent);

// itemInput.addEventListener('focus',runevent);
// itemInput.addEventListener('blur',runevent);

// itemInput.addEventListener('cut',runevent);
// itemInput.addEventListener('paste',runevent);

// itemInput.addEventListener('input',runevent);

// select.addEventListener('change',runevent);
// select.addEventListener('input',runevent);

form.addEventListener('submit', runevent);

function runevent(e) {
    e.preventDefault();
    // console.log(e.target.value);
    // box.innerHTML='<h3>'+e.target.value+'</h3>';
    console.log('EVENT TYPE: ' + e.type);
    // output='<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+'<h3>';
    // box.innerHTML=output;
    // document.body.style.backgroundColor='rgb('+e.offsetX+','+e.offsetY+',40)';

}