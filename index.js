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