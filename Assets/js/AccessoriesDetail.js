// Dữ liệu mẫu sản phẩm (có thể mở rộng hoặc lấy từ server)
const products = [
  {
    id: '1',
    title: 'Ghi đông Zed 22mm độ Tracker Bobber Classic',
    price: 300000,
    code: 'GD-BZ',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg',
    shortdesc: 'Phi 22mm. Bằng thép. Ghi đông - Tay lái moto, su gn 125, honda win, husky, rebel, daelim vs125, honda cg125, yamaha yb125, su gd110 độ bobber, chopper.',
    desc: 'Ghi đông Zed 22mm độ Tracker Bobber Classic phù hợp cho nhiều dòng xe độ như cafe racer, tracker, bobber, chopper. Chất liệu thép chắc chắn, bền bỉ, kiểu dáng mạnh mẽ, cá tính. Sản phẩm được nhiều biker lựa chọn để nâng cấp phong cách cho xế yêu.',
    features: [
      'Chất liệu: Thép cao cấp',
      'Đường kính: 22mm',
      'Phù hợp: Nhiều dòng xe độ classic, tracker, bobber, chopper',
      'Màu sắc: Xi mạ, Đen',
      'Dễ lắp đặt, bền bỉ',
    ],
    reviews: [],
    related: ['2', '3', '4', '5', '6', '7', '8', '9']
  },
  {
    id: '2',
    title: 'Ghi đông kiểu Honda CB-400 VTEC',
    price: 150000,
    code: 'GD-CB400',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg',
    shortdesc: 'Ghi đông - Tay lái kiểu zin CB-400 VTEC phi 22mm. Chiều dài khoảng 66-68cm. Màu xi mạ.',
    desc: 'Ghi đông kiểu Honda CB-400 VTEC mang lại cảm giác lái thoải mái, phù hợp cho các dòng xe classic, độ tracker, bobber.',
    features: [
      'Chất liệu: Thép xi mạ',
      'Đường kính: 22mm',
      'Chiều dài: 66-68cm',
      'Kiểu dáng zin CB-400 VTEC',
    ],
    reviews: [],
    related: ['1', '3', '4', '5', '6', '7', '8', '9']
  },
  {
    id: '3',
    title: 'Ghi đông kiểu Sport Honda CR650R phi 22mm',
    price: 250000,
    code: 'GD-CR650R',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg',
    shortdesc: 'Ghi đông kiểu Sport Honda CR650R phi 22mm. Chất liệu nhôm dày 4mm chắc chắn.',
    desc: 'Ghi đông kiểu Sport Honda CR650R phù hợp cho các dòng xe thể thao, classic, drag. Kiểu dáng mạnh mẽ, thể thao.',
    features: [
      'Chất liệu: Nhôm dày',
      'Đường kính: 22mm',
      'Kiểu dáng sport',
    ],
    reviews: [],
    related: ['1', '2', '4', '5', '6', '7', '8', '9']
  },
  {
    id: '4',
    title: 'Ghi đông Clip-on Cafe racer Drag nhôm CNC',
    price: 350000,
    code: 'GD-CLIPON',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg',
    shortdesc: 'Ghi đông Clip-on Cafe racer Drag nhôm CNC Phi 31-51mm. Dành cho xe độ cafe racer, drag.',
    desc: 'Ghi đông Clip-on Cafe racer Drag nhôm CNC mang lại cảm giác lái thể thao, phong cách classic retro. Dễ lắp đặt, phù hợp nhiều dòng xe.',
    features: [
      'Chất liệu: Nhôm CNC',
      'Đường kính: 31-51mm',
      'Kiểu dáng clip-on',
    ],
    reviews: [],
    related: ['1', '2', '3', '5', '6', '7', '8', '9']
  },
  {
    id: '5',
    title: 'Ghi đông Touring nhôm CNC',
    price: 320000,
    code: 'GD-TOUR',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg',
    shortdesc: 'Ghi đông Touring nhôm CNC, phù hợp xe adventure, touring.',
    desc: 'Ghi đông Touring nhôm CNC cho cảm giác lái thoải mái, chắc chắn, phù hợp các dòng xe adventure, touring.',
    features: ['Chất liệu: Nhôm CNC', 'Kiểu dáng touring', 'Dễ lắp đặt'],
    reviews: [],
    related: ['1', '2', '3', '4', '6', '7', '8', '9']
  },
  {
    id: '6',
    title: 'Ghi đông Drag Bar Classic',
    price: 180000,
    code: 'GD-DRAG',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg',
    shortdesc: 'Ghi đông Drag Bar Classic cho xe bobber, chopper.',
    desc: 'Ghi đông Drag Bar Classic, kiểu dáng đơn giản, mạnh mẽ, phù hợp xe bobber, chopper.',
    features: ['Chất liệu: Thép', 'Kiểu dáng drag bar', 'Dễ lắp đặt'],
    reviews: [],
    related: ['1', '2', '3', '4', '5', '7', '8', '9']
  },
  {
    id: '7',
    title: 'Ghi đông Cafe Racer nhôm CNC',
    price: 270000,
    code: 'GD-CAFE',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg',
    shortdesc: 'Ghi đông Cafe Racer nhôm CNC, phong cách retro.',
    desc: 'Ghi đông Cafe Racer nhôm CNC, kiểu dáng retro, phù hợp xe cafe racer.',
    features: ['Chất liệu: Nhôm CNC', 'Kiểu dáng cafe racer', 'Dễ lắp đặt'],
    reviews: [],
    related: ['1', '2', '3', '4', '5', '6', '8', '9']
  },
  {
    id: '8',
    title: 'Ghi đông Tracker nhôm CNC',
    price: 290000,
    code: 'GD-TRACKER',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg',
    shortdesc: 'Ghi đông Tracker nhôm CNC, phù hợp xe tracker.',
    desc: 'Ghi đông Tracker nhôm CNC, kiểu dáng thể thao, phù hợp xe tracker.',
    features: ['Chất liệu: Nhôm CNC', 'Kiểu dáng tracker', 'Dễ lắp đặt'],
    reviews: [],
    related: ['1', '2', '3', '4', '5', '6', '7', '9']
  },
  {
    id: '9',
    title: 'Ghi đông Bobber nhôm CNC',
    price: 310000,
    code: 'GD-BOBBER',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg',
    shortdesc: 'Ghi đông Bobber nhôm CNC, phong cách bobber.',
    desc: 'Ghi đông Bobber nhôm CNC, kiểu dáng bobber, phù hợp xe độ.',
    features: ['Chất liệu: Nhôm CNC', 'Kiểu dáng bobber', 'Dễ lắp đặt'],
    reviews: [],
    related: ['1', '2', '3', '4', '5', '6', '7', '8']
  }
];

// Lấy id từ URL
function getProductId() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id') || '1';
}

function formatPrice(price) {
  return price.toLocaleString('vi-VN') + ' Đ';
}

document.addEventListener('DOMContentLoaded', function() {
  const id = getProductId();
  const product = products.find(p => p.id === id) || products[0];

  document.getElementById('product-title').textContent = product.title;
  document.getElementById('product-image').src = product.image;
  document.getElementById('product-price').textContent = formatPrice(product.price);
  document.getElementById('product-code').textContent = 'Mã SP: ' + product.code;
  document.getElementById('product-status').textContent = product.status;
  document.getElementById('product-shortdesc').textContent = product.shortdesc;
  document.getElementById('product-desc').textContent = product.desc;
  document.getElementById('product-features').innerHTML = product.features.map(f => `<li>${f}</li>`).join('');

  // Sản phẩm liên quan - render tất cả sản phẩm liên quan vào carousel
  const relatedBox = document.getElementById('related-carousel');
  relatedBox.innerHTML = product.related.map(rid => {
    const p = products.find(x => x.id === rid);
    return `<div class="related-card" onclick="window.location='AccessoriesDetail.html?id=${p.id}'">
      <img src="${p.image}" alt="${p.title}">
      <div>
        <div class="related-title">${p.title}</div>
        <div class="related-price">${formatPrice(p.price)}</div>
      </div>
    </div>`;
  }).join('');

  // Carousel arrow scroll
  const carousel = document.getElementById('related-carousel');
  document.getElementById('relatedPrev').onclick = () => {
    carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
  };
  document.getElementById('relatedNext').onclick = () => {
    carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
  };

  // Gallery Image Controls
  const mainImage = document.getElementById('product-image');
  const thumbnails = document.querySelectorAll('.thumbnail');
  const prevBtn = document.querySelector('.control-btn.prev');
  const nextBtn = document.querySelector('.control-btn.next');
  let currentImageIndex = 0;

  // Sample images array (replace with your actual images)
  const images = [
    'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg',
    'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg',
    'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg',
    'Assets/Motorbikes/2005-harley-davidson-softail-deluxe-side-view-011.jpg'
  ];

  // Set initial images
  mainImage.src = images[0];
  thumbnails.forEach((thumb, index) => {
    thumb.querySelector('img').src = images[index];
  });

  // Thumbnail click handler
  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
      currentImageIndex = index;
      updateMainImage();
      updateThumbnailActive();
    });
  });

  // Previous/Next button handlers
  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateMainImage();
    updateThumbnailActive();
  });

  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateMainImage();
    updateThumbnailActive();
  });

  function updateMainImage() {
    mainImage.src = images[currentImageIndex];
    mainImage.style.opacity = '0';
    setTimeout(() => {
      mainImage.style.opacity = '1';
    }, 50);
  }

  function updateThumbnailActive() {
    thumbnails.forEach((thumb, index) => {
      thumb.classList.toggle('active', index === currentImageIndex);
    });
  }

  // Quantity Selector
  const quantityInput = document.querySelector('.quantity-selector input');
  const minusBtn = document.querySelector('.qty-btn.minus');
  const plusBtn = document.querySelector('.qty-btn.plus');

  minusBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value > 1) {
      quantityInput.value = value - 1;
    }
  });

  plusBtn.addEventListener('click', () => {
    let value = parseInt(quantityInput.value);
    if (value < 99) {
      quantityInput.value = value + 1;
    }
  });

  quantityInput.addEventListener('change', () => {
    let value = parseInt(quantityInput.value);
    if (value < 1) quantityInput.value = 1;
    if (value > 99) quantityInput.value = 99;
  });

  // Color Selection
  const colorOptions = document.querySelectorAll('.color-option input[type="radio"]');
  colorOptions.forEach(option => {
    option.addEventListener('change', (e) => {
      const selectedColor = e.target.id;
      // Update product image based on color (if you have different images for different colors)
      // You can add your color-specific image logic here
    });
  });

  // Wishlist Button
  const wishlistBtn = document.querySelector('.btn-add-wishlist');
  wishlistBtn.addEventListener('click', () => {
    const icon = wishlistBtn.querySelector('i');
    if (icon.classList.contains('far')) {
      icon.classList.remove('far');
      icon.classList.add('fas');
      icon.style.color = '#e53935';
      showToast('Đã thêm vào danh sách yêu thích');
    } else {
      icon.classList.remove('fas');
      icon.classList.add('far');
      icon.style.color = '';
      showToast('Đã xóa khỏi danh sách yêu thích');
    }
  });

  // Buy Now Button
  const buyBtn = document.getElementById('buy-btn');
  buyBtn.addEventListener('click', () => {
    const quantity = quantityInput.value;
    const selectedColor = document.querySelector('.color-option input[type="radio"]:checked').id;
    // Add your buy now logic here
    showToast('Đang xử lý đơn hàng...');
  });

  // Tab Switching
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      
      // Update active states
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));
      
      button.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Toast Notification
  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 100);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }

  // Add CSS for toast
  const style = document.createElement('style');
  style.textContent = `
    .toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 12px 24px;
      border-radius: 4px;
      font-size: 14px;
      z-index: 1000;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.3s ease;
    }
    .toast.show {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  // Load product data (replace with your actual data loading logic)
  function loadProductData() {
    // Sample product data
    const productData = {
      title: 'Balo Moto Phượt Chính Hãng Taichi RS278 Chống Nước',
      price: '2.490.000đ',
      code: 'Mã sản phẩm: TAICHI-RS278',
      status: 'Còn hàng',
      description: 'Balo Moto Phượt Chính Hãng Taichi RS278 là sản phẩm cao cấp với khả năng chống nước tuyệt đối, thiết kế thông minh và bền bỉ.',
      features: [
        'Chất liệu: Polyester chống nước',
        'Dung tích: 30L',
        'Kích thước: 50 x 30 x 25 cm',
        'Trọng lượng: 1.2 kg',
        'Bảo hành: 12 tháng'
      ]
    };

    // Update DOM with product data
    document.getElementById('product-title').textContent = productData.title;
    document.getElementById('product-price').textContent = productData.price;
    document.getElementById('product-code').textContent = productData.code;
    document.getElementById('product-status').textContent = productData.status;
    document.getElementById('product-shortdesc').textContent = productData.description;
    document.getElementById('product-desc').innerHTML = `
      <p>${productData.description}</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        ${productData.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    `;
  }

  // Load initial product data
  loadProductData();
}); 