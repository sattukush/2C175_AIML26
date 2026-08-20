let student = new Object();
student.name="Satyam Kushwaha";
student.id="3045";
student.city="Ghaziabad";
student.Learning=function() {
    console.log("LearningTech course");

}
console.log(student.name);
student.Learning();

let student={
    name:"Satyam Kushwaha",
    id: 3045,
    city="Ghaziabad",
    Learning:function(){
        console.log("Techsub");

    }

}   
function student(id,name,city){
    this.id=id;
    this.name=name;
    this.city=city;
}

let st1 = new student(101,"Satyam","ghazipur")
let st2 = new student (102,"Satyam","Ghaziabad");

console.log(st1)
console.log(st2)
    
