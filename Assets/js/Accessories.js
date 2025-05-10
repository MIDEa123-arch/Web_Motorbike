document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn .btn");
  const products = document.querySelectorAll(".col-md-3[data-type]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.getAttribute("data-type");

      // Ẩn tất cả sản phẩm
      products.forEach((product) => {
        product.style.display = "none";
      });

      // Hiển thị sản phẩm theo loại
      products.forEach((product) => {
        if (type === "All" || product.getAttribute("data-type") === type) {
          product.style.display = "block";
        }
      });

      // Xóa lớp 'active' khỏi tất cả các filter-btn
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      // Thêm lớp 'active' vào nút hiện tại
      button.classList.add("active");

      // Xóa lớp 'active' khỏi tất cả các filter-btn
      const filterBtnWrappers = document.querySelectorAll(".filter-btn");
      filterBtnWrappers.forEach((wrapper) => {
        wrapper.classList.remove("active");
      });

      // Thêm lớp 'active' vào phần tử filter-btn hiện tại
      const filterBtnWrapper = button.closest(".filter-btn");
      filterBtnWrapper.classList.add("active");
    });
  });
});
