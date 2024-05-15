document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    const num1 = document.getElementById("num1-in").value;
    const num2 = document.getElementById("num2-in").value;
    const num3 = document.getElementById("num3-in").value;

    const total = num1 * num2 * num3;

    document.getElementById("output").innerHTML = total;
}