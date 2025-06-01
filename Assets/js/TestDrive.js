$(function () {
  $("#ngaylaithu").datepicker({
    dateFormat: "dd-mm-yy",
    changeMonth: true,
    changeYear: true,
  });

  $("#calendar-icon").click(function () {
    $("#ngaylaithu").datepicker("show");
  });
});

const xeTheoLoai = {
  M: [
    { ten: "M 1000 R", img: "Assets/Motorbikes/M.jpg" },
    { ten: "M 1000 RR", img: "Assets/Motorbikes/M2.jpg" },
    { ten: "M 1000 XR", img: "Assets/Motorbikes/M 1000 XR.jpg" },
    { ten: "F 900 XR 2025", img: "Assets/Motorbikes/F 900 XR.jpg" },
  ],
  Heritage: [
    {
      ten: "HARLEY-DAVIDSON V-ROD",
      img: "Assets/Motorbikes/pngimg.com - motorcycle_PNG5349.png",
    },
    {
      ten: "HARLEY-DAVISON SOFTAIL CHOPPER",
      img: "Assets/Motorbikes/pinpng.com-motorcycle-png-523941.png",
    },
    {
      ten: "DUCATI SCRAMBLER CAFÉ RACER",
      img: "Assets/Motorbikes/pngegg.png",
    },
  ],
  Roadster: [
    {
      ten: "SUZUKI GLADIUS SFV650",
      img: "Assets/Motorbikes/pngimg.com - motorcycle_PNG3148 (2).png",
    },
    { ten: "BAJAJ PULSAR NS 160", img: "Assets/Motorbikes/Daco_4750882.png" },
  ],
  Sport: [
    {
      ten: "SUZUKI HAYABUSA",
      img: "Assets/Motorbikes/NicePng_motorcycle-png_80134.png",
    },
  ],
  Tour: [{ ten: "R 1250 RT", img: "Assets/Motorbikes/T.jpg" }],
  "Urban Mobility": [{ ten: "CE 04", img: "Assets/Motorbikes/U.jpg" }],
};

const selectLoaiXe = document.getElementById("selectLoaiXe");
const selectTenXe = document.getElementById("selectTenXe");
const imgXe = document.getElementById("imgXe");

selectLoaiXe.addEventListener("change", () => {
  const loai = selectLoaiXe.value;
  const danhSachXe = xeTheoLoai[loai];

  // Clear & show selectTenXe
  selectTenXe.innerHTML = "<option selected disabled>Tên xe(*)</option>";
  selectTenXe.style.display = "block";

  danhSachXe.forEach((xe) => {
    const option = document.createElement("option");
    option.value = xe.img;
    option.textContent = xe.ten;
    selectTenXe.appendChild(option);
  });

  imgXe.style.display = "none";
});

selectTenXe.addEventListener("change", () => {
  const imgSrc = selectTenXe.value;
  imgXe.src = imgSrc;
  imgXe.style.display = "block";
});
