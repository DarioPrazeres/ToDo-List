import Task from "./print.js";
import MyDate from "./myDate.js";

const content = document.querySelector("section.content");
const listTask = document.querySelector("div.list");
const todayButton = document.querySelector("a#today");
const forms = document.querySelector('div.forms');


const myWayDate = new MyDate(); 
const hw = [];

hw[0] = new Task('Estudar Ruby', '2021-10-29');
hw[1] = new Task('Estudar Sistemas de Comunicação II', '2021-10-30');
hw[2] = new Task('Estudar PDS', '2021-10-29');
hw[2].setStatus(true);
let position = hw.length;
//forms
const inputName = document.querySelector("input#nameTask");
const inputDate = document.querySelector("input#dateTask");
const addTask = document.querySelector("button#add");

addTask.addEventListener("click", showData);

function showData() {
  if (inputName.value.length == 0 || inputDate.value.length == 0) {
    window.alert("[Error] You need to write something");
  }else{
    const toDo = new Task(inputName.value, inputDate.value);
    hw.push(toDo);
    console.log(hw.length);
    addListChild(hw[position].getName(), hw[position].getDate(), position);
    
    position++;
  }
}
function addListChild(name, date, pos){
  listTask.appendChild(putItOnList(item_0(pos), item_1(name), item_2(date)));
}
function item_0(pos) {
  const check = document.createElement("div");
  check.classList.add("check");
  check.onclick = function () {
    if (hw[pos].getStatus() === false) {
      hw[pos].setStatus(true);
      check.classList.add("check-done");
      hw.splice(pos, 1);   
      allTask();  
    } else {
      hw[pos].setStatus(false);
      check.innerHTML = "";
      check.classList.add("check");       
    }
  };
  return check;
}
function item_1(nameTask) {
  const name = document.createElement("h3");
  name.innerHTML = nameTask;
  return name;
}
function item_2(dateTask) {
  const date = document.createElement("h3");
  date.innerHTML = dateTask;
  return date;
}

function putItOnList(item0, item1, item2) {
  const task = document.createElement("div");
  task.classList.add("task");
  task.appendChild(item0);
  task.appendChild(item1);
  task.appendChild(item2);
  return task;
}

todayButton.onclick = function(){
  listTask.innerHTML = '';
  forms.style.display = 'none';
  console.log(myWayDate.date.getDate());
  for(let i = 0; i < hw.length; i++){
    console.log(i);
    if(myWayDate.date.getDate() == myWayDate.compareDay(hw[i].getDate())){
      console.log('position');
      console.log(i);
      console.log(i);
      if(hw[i].getStatus() == false){
        console.log(hw[i].getStatus());
        addListChild(hw[i].getName(), hw[i].getDate(), i);
      }
      
    }
  }
}
function allTask(){
  listTask.innerHTML = '';
  for(let i = 0; i < hw.length; i++){
    addListChild(hw[i].getName(), hw[i].getDate(), i);
  }
}
 allTask();