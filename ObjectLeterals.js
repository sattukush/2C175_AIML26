// let name = "satyam";
// let Roll = 175

// let Student = 
// {
//     name : name,
//     Roll : Roll
// }

// let student =
// {
//     name ,
//     Roll
// }

// console.log(student.name)
// console.log(student.Roll)

let name = "satyam";
let Roll = 175;

let student = {
    name,
    Roll,

    display() {
        console.log(this.name, this.Roll);
    }
};

student.display();