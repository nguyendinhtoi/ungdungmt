
function calculate( operatorButton ) {

    let so1 = document.getElementById("so1");
    let so2 = document.getElementById("so2");
    let phepTinh = operatorButton.value;


    let number1 = parseInt(so1.value);
    let number2 = parseInt(so2.value);

    let ketQua;

    if (phepTinh == '+') {
        ketQua = number1 + number2;
    } else if (phepTinh == '-') {
        ketQua = number1 - number2;
    } else if (phepTinh == '^') {
        ketQua = Math.pow(number1, number2);
    }
    alert("Kết quả là: " + ketQua);
}
