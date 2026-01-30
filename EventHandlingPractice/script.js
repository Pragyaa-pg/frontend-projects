const box = document.getElementById("box");

box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "orange";
});

box.addEventListener("mouseleave", () => {
    box.style.backgroundColor = "lightblue";
});

const student ={
    fullName: "pragya Gupta",
    marks: 100,
    printMarks: function(){
        console.log("marks= ",this.marks); // this means we are talking about student.marks
    },
};

const employee ={
    calcTax() {
        console.log("tax rate is 10%");
    },
};
