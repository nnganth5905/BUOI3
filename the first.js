
let soNgauNhien = Math.floor(Math.random() * 10) + 1;

function kiemTraDoan() {
    const soNguoiDungDoan = parseInt(document.getElementById('guessInput').value);
    const hienThiKetQua = document.getElementById('ketQua');

    if (soNguoiDungDoan === soNgauNhien) {
        hienThiKetQua.textContent = "Chúc mừng!";
    } else {
        hienThiKetQua.textContent = "Sai rồi, hãy thử lại.";
    }
}