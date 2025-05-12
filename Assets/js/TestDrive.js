// Dữ liệu xe mẫu (có thể mở rộng, có thể thêm ảnh nếu muốn)
const vehicles = [
    { name: 'SPEED 400', price: '169.900.000đ', group: 'MODERN CLASSICS', image: 'Assets/Motorbikes/bmw-m1000rr-2023-gia-xe-motosaigon-32.jpg', desc: 'Xe côn tay hiện đại, động cơ mạnh mẽ, phù hợp đi phố và touring.' },
    { name: 'SCRAMBLER 400 X', price: '189.900.000đ', group: 'MODERN CLASSICS', image: 'Assets/Motorbikes/ducati-scrambler-cafe-racer.jpg', desc: 'Kiểu dáng scrambler cá tính, đa dụng, phù hợp nhiều địa hình.' },
    { name: 'SCRAMBLER 1200', price: '499.000.000đ', group: 'MODERN CLASSICS', image: 'Assets/Motorbikes/2monster937-16414437812071895796418.jpg', desc: 'Scrambler cao cấp, động cơ lớn, trang bị hiện đại.' },
    { name: 'BONNEVILLE T100', price: '415.900.000đ', group: 'MODERN CLASSICS', image: 'Assets/Motorbikes/Anh1.jpg', desc: 'Classic Anh Quốc, động cơ êm ái, phong cách retro.' },
    { name: 'BONNEVILLE T120', price: '579.000.000đ', group: 'MODERN CLASSICS', image: 'Assets/Motorbikes/Anh2.jpg', desc: 'Classic cao cấp, động cơ mạnh, nhiều công nghệ mới.' },
    { name: 'BONNEVILLE BOBBER', price: '625.000.000đ', group: 'MODERN CLASSICS', image: 'Assets/Motorbikes/Anh3.jpg', desc: 'Bobber độc đáo, yên solo, phong cách cá tính.' },
    { name: 'TRIDENT 660', price: '275.000.000đ', group: 'ROADSTER', image: 'Assets/Motorbikes/2011-gladius-sfv650-suzuki-wallpaper-preview.jpg', desc: 'Roadster trẻ trung, động cơ 3 xy-lanh, linh hoạt.' },
    { name: 'STREET TRIPLE 765 R', price: '364.900.000đ', group: 'ROADSTER', image: 'Assets/Motorbikes/21_sv650_desktop.jpg', desc: 'Streetfighter thể thao, động cơ mạnh, nhiều option.' },
    { name: 'SPEED TRIPLE 1200 RS', price: '579.000.000đ', group: 'ROADSTER', image: 'Assets/Motorbikes/2959jpg.jpg', desc: 'Roadster cao cấp, động cơ lớn, trang bị đỉnh cao.' },
    { name: 'DAYTONA 660', price: '279.900.000đ', group: 'SPORT', image: 'Assets/Motorbikes/GSX1300RRQM3_CJH_diagonal-1500x975.jpg', desc: 'Sportbike mới, động cơ mạnh, thiết kế khí động học.' },
    { name: 'ROCKET 3 GT', price: '899.000.000đ', group: 'ROCKET 3', image: 'Assets/Motorbikes/harley-davidson-v-rod-2.jpg', desc: 'Cruiser động cơ lớn nhất thế giới, mạnh mẽ, sang trọng.' },
    { name: 'ROCKET 3 R', price: '869.000.000đ', group: 'ROCKET 3', image: 'Assets/Motorbikes/harley-davidson-v-rod-dm-1.jpg', desc: 'Cruiser hiệu suất cao, thiết kế cơ bắp.' },
    { name: 'TIGER SPORT 660', price: '299.900.000đ', group: 'ADVENTURE', image: 'Assets/Motorbikes/Frame 22.png', desc: 'Adventure đa dụng, động cơ 3 xy-lanh, phù hợp touring.' },
    { name: 'TIGER 1200 GT PRO', price: '619.000.000đ', group: 'ADVENTURE', image: 'Assets/Motorbikes/928c5cf501c0d49e8dd1.jpg', desc: 'Adventure cao cấp, nhiều công nghệ, touring đường dài.' },
    { name: 'TIGER 850 SPORT', price: '369.000.000đ', group: 'ADVENTURE', image: 'Assets/Motorbikes/Anh4.jpg', desc: 'Adventure tầm trung, linh hoạt, tiết kiệm.' },
    { name: 'TIGER 1200 RALLY EXPLORER', price: '679.000.000đ', group: 'ADVENTURE', image: 'Assets/Motorbikes/Anh5.jpg', desc: 'Adventure offroad, trang bị cao cấp, touring việt dã.' },
    { name: 'TIGER 900', price: '425.000.000đ', group: 'ADVENTURE', image: 'Assets/Motorbikes/3656.jpg', desc: 'Adventure nhỏ gọn, động cơ mạnh, đa năng.' },
  ];
  
  const vehicleGroups = [
    { value: 'MODERN CLASSICS', label: 'Modern Classics' },
    { value: 'ROADSTER', label: 'Roadster' },
    { value: 'SPORT', label: 'Sport' },
    { value: 'ROCKET 3', label: 'Rocket 3' },
    { value: 'ADVENTURE', label: 'Adventure' },
  ];
  
  const dealers = [
    { value: 'Q7', label: ' Dealership Q7 TP.HCM' },
    { value: 'Q2', label: 'Dealership Q2 TP.HCM' },
    { value: 'HN', label: ' Hanoi Dealership' },
  ];
  
  let selectedGroup = vehicleGroups[0].value;
  let selectedVehicle = null;
  
  function renderVehicleGroupDropdown() {
    const groupSelect = document.getElementById('vehicle-group');
    groupSelect.innerHTML = '';
    vehicleGroups.forEach(g => {
      const opt = document.createElement('option');
      opt.value = g.value;
      opt.textContent = g.label;
      groupSelect.appendChild(opt);
    });
    groupSelect.value = selectedGroup;
  }
  
  function renderVehicleVersionDropdown() {
    const versionSelect = document.getElementById('vehicle-version');
    versionSelect.innerHTML = '';
    const filtered = vehicles.filter(v => v.group === selectedGroup);
    filtered.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v.name;
      opt.textContent = v.name;
      versionSelect.appendChild(opt);
    });
    // Nếu có xe, chọn xe đầu tiên mặc định
    if (filtered.length > 0) {
      versionSelect.value = filtered[0].name;
      selectedVehicle = filtered[0];
    } else {
      selectedVehicle = null;
    }
  }
  
  function renderDealerRadios() {
    const group = document.getElementById('dealer-radio-group');
    group.innerHTML = '';
    dealers.forEach((d, idx) => {
      const div = document.createElement('div');
      div.className = 'dealer-radio';
      div.innerHTML = `<input type="radio" name="dealer" id="dealer-${d.value}" value="${d.value}" ${idx===0?'checked':''}><label for="dealer-${d.value}">${d.label}</label>`;
      group.appendChild(div);
    });
  }
  
  function renderVehiclePreview() {
    const preview = document.getElementById('vehicle-preview');
    if (!selectedVehicle) {
      preview.innerHTML = '<div style="color:#888;">Vui lòng chọn loại xe và phiên bản để xem thông tin.</div>';
      return;
    }
    preview.innerHTML = `
      <img class="preview-logo" src="Assets/Motorbikes/logos 1.png" alt="logo">
      <img class="preview-img" src="${selectedVehicle.image}" alt="${selectedVehicle.name}">
      <div class="preview-name">${selectedVehicle.name}</div>
      <div class="preview-price">Giá từ: ${selectedVehicle.price}</div>
      <div class="preview-desc">${selectedVehicle.desc}</div>
    `;
  }
  
  function showToast(message) {
    let toast = document.createElement('div');
    toast.className = 'testdrive-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => { toast.classList.add('show'); }, 50);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => { document.body.removeChild(toast); }, 300);
    }, 3000);
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    renderVehicleGroupDropdown();
    renderVehicleVersionDropdown();
    renderDealerRadios();
    renderVehiclePreview();
  
    document.getElementById('vehicle-group').addEventListener('change', function() {
      selectedGroup = this.value;
      renderVehicleVersionDropdown();
      renderVehiclePreview();
    });
  
    document.getElementById('vehicle-version').addEventListener('change', function() {
      const val = this.value;
      selectedVehicle = vehicles.find(v => v.name === val && v.group === selectedGroup);
      renderVehiclePreview();
    });
  
    document.getElementById('testdrive-form').onsubmit = function(e) {
      e.preventDefault();
      const btn = this.querySelector('.testdrive-btn');
      if (!selectedVehicle) {
        showToast('Vui lòng chọn loại xe muốn lái thử!');
        return;
      }
      if (!this.checkValidity()) {
        this.reportValidity();
        return;
      }
      // Loading effect
      btn.classList.add('loading');
      btn.innerHTML = '<span class="spinner"></span>Đang xử lý...';
      setTimeout(() => {
        showToast('Đăng ký lái thử thành công!\nChúng tôi sẽ liên hệ bạn sớm nhất.');
        this.reset();
        // Reset preview về xe đầu tiên của nhóm đầu tiên
        selectedGroup = vehicleGroups[0].value;
        renderVehicleGroupDropdown();
        renderVehicleVersionDropdown();
        renderVehiclePreview();
        renderDealerRadios();
        btn.classList.remove('loading');
        btn.innerHTML = 'Đăng ký lái thử';
      }, 1200);
    };
  }); 