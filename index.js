
//the below variable will be used to access the table element
let myTablte = document.getElementById('able1');

// declaring variable tHeading which takes in the element with id 'tableHeading'
let tHeading = document.getElementById('tableHeading');

//some styling done using JS to the Bootstrap table
tHeading.style.textAlign = "center";
tHeading.style.backgroundColor = "rgb(198, 198, 236)";

//though research I learned that the elements within a table row are treated as an array.
//therefore its best to use a loop when trying to style with JS. This also works if new 'th' tags are added.
let thElements = document.getElementsByTagName('th');
    for (let i = 0; i < thElements.length; i++){
        thElements[i].style.padding = '5px';
        thElements[i].style.fontSize = '25px';
        thElements[i].style.textAlign = 'center';
    }

//declaring myForm and assigning it the value of the element with id 'form1'
let myForm = document.getElementById('form1');
myForm.style.fontSize = "20px";


//addBtn is a variable being assigned the value to element with id 'addBtn' in this case the on button on the page.
let addBtn = document.getElementById('addBtn');
//adding an event listener so that when the button is clicked, the below function is ran.
addBtn.addEventListener('click', () => {
    //addRow variable is declared and assigned a value. Using the insertRow method in order to add a new row at the bottom of the table.
    let addRow = myTable.insertRow(-1);
    //the below insert a value into each cell (column) and assigns it the value of its respective input- this is taken from the form.
    addRow.insertCell(0).innerHTML = document.getElementById('firstName').value;
    addRow.insertCell(1).innerHTML = document.getElementById('lastName').value;
    addRow.insertCell(2).innerHTML = document.getElementById('department').value;
    clearForm();
});

//The below removes the last row from the table
let delBtn = document.getElementById('deleteBtn');
delBtn.addEventListener('click', () => {
    myTable.deleteRow(-1);
});

//Used to clear the form boxed after the add button is clicked. This is cleaner for the user.
function clearForm () {
    document.getElementById('form1').reset()
};