

let employees =[];

validarpagina ()

function onSubmitform(){
    let formData = readForm();
    insertNewRecord(formData);
    resetForm();  
  
}

function readForm(){
    let formData = {};
    formData["empCode"] = document.getElementById("empCode").value;
    formData["fullName"] = document.getElementById("fullName").value;    
    formData["padMedico"] = document.getElementById("padMedico").value;
    return formData
    
}





function insertNewRecord(formData){
    let table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];  
    let newRow = table.insertRow();
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = formData.empCode;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = formData.fullName;

    
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = formData.padMedico;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = "<a  onClick=editForm(this)>editar</a> <a  onClick=deleteRecord(this)>borrar</a>"

    employees.push(formData);
    localStorage.setItem("employees",JSON.stringify(employees))


}

function resetForm(){
    document.getElementById("empCode").value = "";
    document.getElementById("fullName").value = "";    
    document.getElementById("padMedico").value = "";
}


function deleteRecord(a){
    let row = a.parentElement.parentElement
    if(confirm("Se borrara este elemnto")){
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    }
}


function editForm(a){
    let seleRow = a.parentElement.parentElement;
    document.getElementById("fullName").value = seleRow.cells[1].innerHTML;
    document.getElementById("empCode").value = seleRow.cells[0].innerHTML;
    document.getElementById("padMedico").value = seleRow.cells[2].innerHTML; 
    
}
function validarpagina (){

if(localStorage.getItem("employees") == null){

} else{
    employees = JSON.parse(localStorage.getItem("employees"));
    for(let index=0; index<employees.length; index++){
        let codigo = employees[index].empCode;
        let nombre = employees[index].fullName;
        let padecimiento = employees[index].padMedico;

        document.getElementById("tbody").innerHTML +=
        `<tr> 
        <td>${codigo}</td>
        <td>${nombre}</td>
        <td>${padecimiento}</td>
        <td><a  onClick=editForm(this)>editar</a> <a  onClick=deleteRecord(this)>borrar</a></td>
        </tr> `           
               
    }

}

}