let addButton = document.getElementById('add');
let table = document.querySelector('table');
let deleteButton = document.getElementById("delete")
let searchInput = document.getElementById("search")


let nameInput = document.querySelector('#name');
let lastNameInput = document.querySelector('#lastName');
let ageInput = document.querySelector('#age');


// Add button 
addButton.addEventListener('click', () => {

    let name = nameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;

    let newTable = 
                        //Table template
    `<tr>
    
    <td>${name}</td>
    <td>${lastName}</td>        
    <td>${age}</td>

</tr>`;

table.innerHTML += newTable;
});

//Delete button
deleteButton.addEventListener('click', () => {
    let rows = table.querySelectorAll('tbody tr');
    if (rows.length > 1) {
        
        for (let i = rows.length -1; i > 0 ; i--){      //Removing Tbodys 

            rows[i].remove();
        }
    }
});

//Search bar
searchInput.addEventListener('input', () => {
    let searchValue = searchInput.value.toLowerCase();
    let rows = table.querySelectorAll('tbody tr');

    rows.forEach((row) => {
        let rowData = row.textContent.toLowerCase();
        if (rowData.includes(searchValue)) {    //Sync the searched data
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });
});


