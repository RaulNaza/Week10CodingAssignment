//Styling using Javascript. Adding this to make small changes to the Bootstrap CSS styling.

let myTable = document.getElementById('table1');
myTable.border = "1";
myTable.style.fontSize = "25px";

let tHeading = document.getElementById('tableHeading');
tHeading.style.textAlign = "center";
tHeading.style.backgroundColor = "rgb(198, 198, 236)";

let thElements = document.getElementsByTagName('th');
    for (let i = 0; i < thElements.length; i++){
        thElements[i].style.padding = '5px';
        thElements[i].style.textAlign = 'center';
    }

let tdElements = document.getElementsByTagName('td');
    for (let i = 0; i < tdElements.length; i++){
        tdElements[i].style.padding = '5px';
    }

let tData = document.getElementById('data');
tData.style.fontSize = '18px';


let myForm = document.getElementById('form1');
myForm.style.fontSize = "20px";

//Giving functionality to the buttons.

let id = 0;

//Add button to add a row.

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', () => {
    let row = myTable.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('firstName').value;
    row.insertCell(1).innerHTML = document.getElementById('lastName').value;
    row.insertCell(2).innerHTML = document.getElementById('department').value;
});


