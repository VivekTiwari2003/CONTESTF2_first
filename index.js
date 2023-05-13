let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    arr.map((student) =>{
        if(student.marks>50){
         console.log(student);
        }
    })
  }
  
  function PrintStudentsbyForEach() {
    arr.forEach((student)=>{
        if(student.marks >50){
            console.log(student);
        }
    })
  }

  
  function addData() {
    //Write your code here, just console.log
    let newStudent = {id:4,name:"susan",age:"20",marks:45}
    arr.push(newStudent);
    console.log(newStudent);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    arr=arr.filter(function(student){
       if(student.marks>50){
           return student;
       }
    })
   console.log(arr);
  }

  
  function concatenateArray() {
    let newArr = [
      { id: 10, name: "Vivek", age: "22", marks: 94 },
      { id: 22, name: "Harsh", age: "21", marks: 54 },
      { id: 33, name: "vidya", age: "24", marks: 82 },
    ]
  
    let concantArray = [] 
  
    arr.forEach((emp) => {
      concantArray.push(emp)
    })
  
    newArr.forEach((emp) => {
      concantArray.push(emp);
    })
  
    console.log(concantArray)
  }