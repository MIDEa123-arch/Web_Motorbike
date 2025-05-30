function formatCurrency(amount) {
  return amount.toLocaleString("vi-VN") + "đ";
}

function parseCurrency(value) {
  return parseInt(value.replace(/[^\d]/g, ""));
}

function updateSTT() {
  const allTbody = document.querySelectorAll("tbody");
  allTbody.forEach((tbody, index) => {
    const sttCell = tbody.querySelector("th");
    if (sttCell) {
      sttCell.innerText = index + 1;
    }
  });
}

function updateSummary() {
  const rows = document.querySelectorAll("tbody");
  let totalQuantity = 0;
  let totalPrice = 0;

  rows.forEach((row) => {
    const quantityInput = row.querySelector('input[name="quantity"]');
    const quantity = parseInt(quantityInput?.value || "0");

    const thanhTienCell = row.querySelectorAll("th")[5];
    const thanhTien = parseCurrency(thanhTienCell?.innerText || "0");

    totalQuantity += quantity;
    totalPrice += thanhTien;
  });

  document.getElementById("amount").innerText = totalQuantity + " ";
  document.getElementById("total-price").innerText = formatCurrency(totalPrice);
}

// Gắn sự kiện khi thay đổi số lượng
document.querySelectorAll('input[name="quantity"]').forEach((input) => {
  input.addEventListener("change", function () {
    const row = input.closest("tr");
    const giaCell = row.querySelectorAll("th")[4];
    const gia = parseCurrency(giaCell.innerText);
    const thanhTienCell = row.querySelectorAll("th")[5];

    const quantity = parseInt(input.value || "0");
    const thanhTien = gia * quantity;
    thanhTienCell.innerText = formatCurrency(thanhTien);

    updateSummary();
  });
});

// Gắn sự kiện nút xóa
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    const row = button.closest("tbody");
    row.remove();
    updateSTT(); // Cập nhật lại STT
    updateSummary(); // Cập nhật lại tổng số lượng và giá
  });
});

// Gọi khi trang tải lần đầu
window.onload = () => {
  updateSTT();
  updateSummary();
};
