var count=1;
//Add Row Function
function addRow() {
    

        var table = document.getElementById("inputTable");
        var row = table.insertRow(table.length);
    


        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);   
      
        cell2.innerHTML=`<td><input type="text" class="form-control studentName"></td>`;
        cell3.innerHTML=`<td><input type="text" class="form-control subject"></td>`;
        cell4.innerHTML=`<td><input type="text" class="form-control studentMarks"></td>`;
    
        cell5.innerHTML=`<td><span><button class="btn  btn-success  btn-block">Pass</button></span><span style="padding:2%" ><button id="addRowBtn" class="btn btn-danger  btn-block">Fail</button></span><span style="padding:2%"><button class="btn  btn-danger btn-block" id=${count} onclick="removeRow(this)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg></button></span></td>`;
      console.log(count)
      addevents();   

}
//  Remove Row Function
function removeRow(id){
if (confirm("Really want to delete the record !!") == true) {
  id.parentElement.parentElement.parentElement.remove();
  temp=count;
  count--;
  alert("Record is successfully deleted")

  } else {
    alert("Record is not deleted")
  }
  generateReport();
}

//  Getting Data in Row form
function generateReport(){
  var studentName= Array.from(document.getElementsByClassName("studentName"));
  var subjectName = Array.from(document.getElementsByClassName("subject"));
  var studentMarks =Array.from(document.getElementsByClassName("studentMarks"));

  var arr = [];


  studentName.forEach((element,index)=> {
    var tempArr=[];
    tempArr.push(element.value)
    tempArr.push(subjectName[index].value)
    tempArr.push(studentMarks[index].value)
    arr.push(tempArr)
  });

  //   Calling createtable function to create Table
  createTable(arr)
    
}

//  Create the table for report
 function createTable(arr){

   var table = document.createElement('table');
   table.setAttribute("id","outputTable");
   table.classList.add('table');
   table.classList.add('table-striped');
   table.classList.add('table-bordered');
   table.classList.add('bg-color');
   table.classList.add('text');
   var thead =table.createTHead();
   
   var row = thead.insertRow();
   var cell0 =row.insertCell();
   var cell1 =row.insertCell();
   var cell2 =row.insertCell();
   var cell3 =row.insertCell();
   cell0.innerHTML='No.'
   cell1.innerHTML='Name'
   cell2.innerHTML='Subject'
   cell3.innerHTML='Marks'
    var serialNo=1;
   arr.forEach(element=>{
    if(element[0]!="" && element[1]!="" && element[2]!="")
    {
      var row = document.createElement('tr');
      var col0=document.createElement('td')
      col0.innerHTML=serialNo
      var col1= document.createElement('td');
      col1.innerHTML= element[0]
      var col2= document.createElement('td');
      col2.innerHTML= element[1]
      var col3= document.createElement('td');
      col3.innerHTML= element[2]
      row.appendChild(col0)
      row.appendChild(col1)
      row.appendChild(col2)
      row.appendChild(col3)
      table.appendChild(row)
      if(col3.innerHTML<33)
      {
        row.style.backgroundColor="red"
      }
      serialNo++;
    }
   })
   document.getElementById('report').innerHTML = table.outerHTML;
    
}


function addevents(){
  Array.from(document.getElementsByClassName('studentName')).forEach((element)=>{
        element.addEventListener('input',validname);
  });

  Array.from(document.getElementsByClassName('subject')).forEach((element)=>{
    element.addEventListener('input',validsubject);
  });

  Array.from(document.getElementsByClassName('studentMarks')).forEach((element)=>{
    element.addEventListener('input',validmarks);
  });
}

function validname(e){
  var regName =  /^[a-zA-Z]+( [a-zA-Z]+)+$/ ;
  var ele = e.target;
  var value = ele.value;
  
  if(  value=='' || value== null || !isNaN(value) ){
    alert('Invalid name given. OR Field Is Manadatory OR Your are Typing Number ');
    ele.style.backgroundColor = "red";
    ele.style.color = "white";
    
  }
  else{
    ele.style.backgroundColor = "white";
    ele.style.color = "black";
  }

}

function validsubject(e)
{
  var ele = e.target;
  var value = ele.value;

  if( value=='' || value== null || !isNaN(value)){
    alert("Enter Subject Name")
    ele.style.backgroundColor = "red";
    ele.style.color = "white";
  }
  else{
    ele.style.backgroundColor = "white";
    ele.style.color = "black";
  }
}

function validmarks(e){
  var ele = e.target;
  var value = ele.value;

  if(value == null || isNaN(value)  || value <0 || value>100 || value=='' )
  {
    alert('Only Number Are Accepted OR Number between 0 to 100 Or Mandatory Field');
    ele.style.backgroundColor = "red";
    ele.style.color = "white";
  }
  else{
    ele.style.backgroundColor = "white";
    ele.style.color = "black";
  }
}

function sortTable(n){
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchCount = 0;
  table = document.getElementById("outputTable");
  switching = true;
  dir = "asc";
  if(n==3)
  {
    while (switching) {
     
      switching = false;
      rows = table.rows;
    
     
      for (i = 1; i < (rows.length-1); i++) {
        
        shouldSwitch = false;
      
        x = rows[i].getElementsByTagName("TD")[3];
        y = rows[i + 1].getElementsByTagName("TD")[3];
     
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
      
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
       
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

  while (switching) {
  
    switching = false;
    rows = table.rows;
   
    for (i = 1; i < (rows.length - 1); i++) {
    
      shouldSwitch = false;
    
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
    
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
   
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
         
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
     
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    
      switchCount ++;
    } else {
   
      if (switchCount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}



function gettingList(){
  
  var selectItem = document.getElementById('sortingList').value;
  var  select =parseInt(selectItem);
  sortTable(select);
 
  
}




function search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("inputSearch");
  filter = input.value.toLowerCase();
  console.log(filter);
  table = document.getElementById("outputTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      txtValue3 = td3.textContent || td3.innerText;
      console.log(txtValue);
      if (txtValue.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }
      else if(txtValue2.toLowerCase().indexOf(filter) > -1){
        tr[i].style.display = "";
      } 
      else if(txtValue3.toLowerCase().indexOf(filter) > -1){
        tr[i].style.display = "";
      } 
      else {
        tr[i].style.display = "none";
      }
    }       
  }
}

addevents();

