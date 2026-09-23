class student { 
    
    constructor(name, rollNo, marks) { 
        this.name = name; 
        this.rollNo = rollNo; 
        this.marks = marks; 
    } 
 
    display() { 
        console.log(this.name); 
        console.log(this.rollNo); 
        console.log(this.marks); 
    } 
} 
 
let s1 = new student("Satyam", 175, 92); 
 
s1.display();

