let userInput = document.getElementById("data");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
let Btn = document.getElementById("button");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date(); //current date

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = m2 - m1 + 12;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1; // current year current month ani day chaii aile ko ani bd ko date - gare rw bakii date nikare 
    }

    result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate(); // day is know as date in js 
}

Btn.addEventListener("click", () => {
    calculateAge();
});
