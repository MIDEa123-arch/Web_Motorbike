document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Lấy giá trị từ form
      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const phone = contactForm.querySelector('input[type="tel"]').value;
      const subject = contactForm.querySelector("select").value;
      const message = contactForm.querySelector("textarea").value;

      // Kiểm tra các trường bắt buộc
      if (!name || !email || !phone || !subject || !message) {
        alert("Vui lòng điền đầy đủ thông tin bắt buộc (*)");
        return;
      }

      // Kiểm tra định dạng email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert(
          "Vui lòng nhập địa chỉ email hợp lệ (ví dụ: tennguoidung@gmail.com)"
        );
        return;
      }

      // Kiểm tra số điện thoại
      const phoneRegex = /^[0-9]{10,11}$/;
      if (!phoneRegex.test(phone.replace(/\D/g, ""))) {
        alert("Vui lòng nhập số điện thoại hợp lệ (10-11 số)");
        return;
      }

      // Tạo đối tượng dữ liệu form
      const formData = {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString(),
      };

      console.log("Đã gửi form:", formData);

      // Hiển thị thông báo thành công
      alert(
        "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất."
      );

      // Xóa form
      contactForm.reset();
    });
  }
});

// Xử lý điều hướng
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (
        this.parentElement.classList.contains("dropdown") ||
        this.parentElement.classList.contains("dropdown1")
      ) {
        return;
      }

      e.preventDefault();
      const href = this.getAttribute("href");
      if (href && href !== "#") {
        window.location.href = href;
      }
    });
  });

  // Xử lý menu thả xuống
  const dropdowns = document.querySelectorAll(".dropdown, .dropdown1");
  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector("a");
    const menu = dropdown.querySelector(".morenavbar");

    if (link && menu) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        menu.style.display = menu.style.display === "block" ? "none" : "block";
      });
    }
  });

  // Đóng menu khi click bên ngoài
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown") && !e.target.closest(".dropdown1")) {
      const menus = document.querySelectorAll(".morenavbar");
      menus.forEach((menu) => {
        menu.style.display = "none";
      });
    }
  });
});

// Xử lý liên kết mạng xã hội
document.addEventListener("DOMContentLoaded", function () {
  const socialLinks = document.querySelectorAll(".social-media a");
  socialLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const platform = this.textContent.trim().toLowerCase();
      const urls = {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        youtube: "https://youtube.com",
        x: "https://twitter.com",
      };

      if (urls[platform]) {
        window.open(urls[platform], "_blank");
      }
    });
  });
});

// Xử lý chuyển đổi ngôn ngữ
document.addEventListener("DOMContentLoaded", function () {
  const langBox = document.querySelector(".lang-box");
  if (langBox) {
    langBox.addEventListener("click", function () {
      const currentLang = document.documentElement.lang;
      const newLang = currentLang === "en" ? "vi" : "en";
      document.documentElement.lang = newLang;

      // Hiển thị thông báo chuyển đổi ngôn ngữ
      alert(
        `Đã chuyển sang ngôn ngữ: ${
          newLang === "vi" ? "Tiếng Việt" : "Tiếng Anh"
        }`
      );
    });
  }
});

// Xử lý cuộn mượt
document.addEventListener("DOMContentLoaded", function () {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const branches = document.querySelectorAll(".col-brand1");
  let expandedBranch = null; // Chi nhánh đang mở hiện tại

  branches.forEach((branch) => {
    const briefInform = branch.querySelector(".brief-inform");
    const detailAdd = branch.querySelector(".detail-add");
    const detailInformation = branch.querySelector(".detail-information");
    const arrowIcon = branch.querySelector(".arrow-icon");
    const businessButton = branch.querySelector(".business-button");
    const serviceButton = branch.querySelector(".service-button");
    const businessContent = branch.querySelector("#business-content");
    const serviceContent = branch.querySelector("#service-content");
    const filterButtons = branch.querySelectorAll(".inform-title button");

    // Trạng thái ban đầu
    detailInformation.style.display = "none";
    if (arrowIcon) arrowIcon.classList.add("rotate-down");
    branch.style.backgroundColor = "white";
    briefInform.style.borderBottom = "2px solid #ccc";
    if (businessButton) businessButton.style.fontWeight = "800";
    if (serviceButton) serviceButton.style.fontWeight = "normal";
    if (businessContent) businessContent.style.display = "none";
    if (serviceContent) serviceContent.style.display = "none";

    // Hàm thu gọn chi nhánh
    function collapseBranch(b) {
      const bDetailAdd = b.querySelector(".detail-add");
      const bDetailInformation = b.querySelector(".detail-information");
      const bArrowIcon = b.querySelector(".arrow-icon");
      const bBriefInform = b.querySelector(".brief-inform");

      bDetailAdd.style.display = "block";
      bDetailInformation.style.display = "none";
      if (bArrowIcon) {
        bArrowIcon.classList.remove("rotate-up");
        bArrowIcon.classList.add("rotate-down");
      }
      b.style.backgroundColor = "white";
      bBriefInform.style.borderBottom = "2px solid #ccc";
    }

    // Hàm mở rộng chi nhánh
    function expandBranch(b) {
      const bDetailAdd = b.querySelector(".detail-add");
      const bDetailInformation = b.querySelector(".detail-information");
      const bArrowIcon = b.querySelector(".arrow-icon");
      const bBriefInform = b.querySelector(".brief-inform");
      const bBusinessButton = b.querySelector(".business-button");
      const bServiceButton = b.querySelector(".service-button");
      const bBusinessContent = b.querySelector("#business-content");
      const bServiceContent = b.querySelector("#service-content");

      bDetailAdd.style.display = "none";
      bDetailInformation.style.display = "block";
      if (bArrowIcon) {
        bArrowIcon.classList.remove("rotate-down");
        bArrowIcon.classList.add("rotate-up");
      }
      b.style.backgroundColor = "#eaeaea";
      bBriefInform.style.borderBottom = "none";

      // Reset hiển thị tab
      if (bBusinessButton) bBusinessButton.style.fontWeight = "800";
      if (bServiceButton) bServiceButton.style.fontWeight = "normal";
      if (bBusinessContent) bBusinessContent.style.display = "flex";
      if (bServiceContent) bServiceContent.style.display = "none";
    }

    briefInform.addEventListener("click", function (e) {
      const activeBtn = e.target.closest(".active-button");
      if (activeBtn) {
        const mapUrl = activeBtn.dataset.map;

        // Nếu đang mở và nhấn để đóng
        if (expandedBranch === branch) {
          collapseBranch(branch);
          expandedBranch = null;
          changeMap(defaultMapUrl); // Quay về bản đồ mặc định
        } else {
          // Đóng chi nhánh khác nếu có
          if (expandedBranch && expandedBranch !== branch) {
            collapseBranch(expandedBranch);
          }

          expandBranch(branch);
          expandedBranch = branch;

          if (mapUrl) {
            changeMap(mapUrl); // Đổi sang bản đồ của chi nhánh
          }
        }
      }
    });

    // Sự kiện chuyển tab Kinh doanh/Dịch vụ
    filterButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const targetName = this.dataset.name;

        // Đảm bảo chi nhánh đã mở
        if (detailInformation.style.display === "none") {
          if (expandedBranch && expandedBranch !== branch) {
            collapseBranch(expandedBranch);
          }
          expandBranch(branch);
          expandedBranch = branch;
        }

        // Chuyển tab
        if (targetName === "business") {
          if (businessButton) businessButton.style.fontWeight = "800";
          if (serviceButton) serviceButton.style.fontWeight = "normal";
          if (businessContent) businessContent.style.display = "flex";
          if (serviceContent) serviceContent.style.display = "none";
        } else if (targetName === "service") {
          if (businessButton) businessButton.style.fontWeight = "normal";
          if (serviceButton) serviceButton.style.fontWeight = "800";
          if (businessContent) businessContent.style.display = "none";
          if (serviceContent) serviceContent.style.display = "flex";
        }
      });
    });
  });
});
// URL mặc định của bản đồ
const defaultMapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0418219923646!2d106.6260907!3d10.8061539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be27d8b4f4d%3A0x92dcba2950430867!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBUaHXDom4gVFAuIEjhu5MgQ2jDrSBNaW5oIChIVUlUKQ!5e0!3m2!1sen!2s!4v1714463241234!5m2!1sen!2s";

// Hàm thay đổi URL iframe
function changeMap(url) {
  document.getElementById("mapFrame").src = url;
}

document.addEventListener("DOMContentLoaded", function () {
  const branches = document.querySelectorAll(".col-brand1");
  let expandedBranch = null; // Chi nhánh đang mở hiện tại

  branches.forEach((branch) => {
    const briefInform = branch.querySelector(".brief-inform");
    const detailInformation = branch.querySelector(".detail-information");
    const arrowIcon = branch.querySelector(".arrow-icon");
    const filterButtons = branch.querySelectorAll(".inform-title button");

    // Trạng thái ban đầu
    detailInformation.style.display = "none";
    if (arrowIcon) arrowIcon.classList.add("rotate-down");
    branch.style.backgroundColor = "white";

    // Hàm thu gọn chi nhánh
    function collapseBranch(b) {
      const bDetailInformation = b.querySelector(".detail-information");
      const bArrowIcon = b.querySelector(".arrow-icon");

      bDetailInformation.style.display = "none";
      if (bArrowIcon) {
        bArrowIcon.classList.remove("rotate-up");
        bArrowIcon.classList.add("rotate-down");
      }
      b.style.backgroundColor = "white";
    }

    // Hàm mở rộng chi nhánh
    function expandBranch(b) {
      const bDetailInformation = b.querySelector(".detail-information");
      const bArrowIcon = b.querySelector(".arrow-icon");

      bDetailInformation.style.display = "block";
      if (bArrowIcon) {
        bArrowIcon.classList.remove("rotate-down");
        bArrowIcon.classList.add("rotate-up");
      }
      b.style.backgroundColor = "#eaeaea";
    }

    // Sự kiện click mở/thu chi nhánh
    briefInform.addEventListener("click", function (e) {
      const activeBtn = e.target.closest(".active-button");
      if (activeBtn) {
        const mapUrl = activeBtn.dataset.map;

        if (expandedBranch === branch) {
          collapseBranch(branch);
          expandedBranch = null;
          changeMap(defaultMapUrl); // Quay về bản đồ mặc định
        } else {
          // Đóng chi nhánh khác nếu có
          if (expandedBranch && expandedBranch !== branch) {
            collapseBranch(expandedBranch);
          }

          expandBranch(branch);
          expandedBranch = branch;

          if (mapUrl) {
            changeMap(mapUrl); // Đổi sang bản đồ của chi nhánh
          }
        }
      }
    });

    // Sự kiện chuyển tab Kinh doanh/Dịch vụ (nếu có)
    filterButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const targetName = this.dataset.name;

        // Đảm bảo chi nhánh đã mở
        if (detailInformation.style.display === "none") {
          if (expandedBranch && expandedBranch !== branch) {
            collapseBranch(expandedBranch);
          }
          expandBranch(branch);
          expandedBranch = branch;
        }
      });
    });
  });
});
