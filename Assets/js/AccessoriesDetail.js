// Dữ liệu mẫu sản phẩm (có thể mở rộng hoặc lấy từ server)
const products = [
  {
    id: '1',
    title: 'Ghi đông Zed 22mm độ Tracker Bobber Classic',
    price: 300000,
    code: 'GD-BZ',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/ghidong-zed.jpg',
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
    related: ['2', '3', '4']
  },
  {
    id: '2',
    title: 'Ghi đông kiểu Honda CB-400 VTEC',
    price: 150000,
    code: 'GD-CB400',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/ghidong-cb400.jpg',
    shortdesc: 'Ghi đông - Tay lái kiểu zin CB-400 VTEC phi 22mm. Chiều dài khoảng 66-68cm. Màu xi mạ.',
    desc: 'Ghi đông kiểu Honda CB-400 VTEC mang lại cảm giác lái thoải mái, phù hợp cho các dòng xe classic, độ tracker, bobber.',
    features: [
      'Chất liệu: Thép xi mạ',
      'Đường kính: 22mm',
      'Chiều dài: 66-68cm',
      'Kiểu dáng zin CB-400 VTEC',
    ],
    reviews: [],
    related: ['1', '3', '4']
  },
  {
    id: '3',
    title: 'Ghi đông kiểu Sport Honda CR650R phi 22mm',
    price: 250000,
    code: 'GD-CR650R',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/ghidong-cr650r.jpg',
    shortdesc: 'Ghi đông kiểu Sport Honda CR650R phi 22mm. Chất liệu nhôm dày 4mm chắc chắn.',
    desc: 'Ghi đông kiểu Sport Honda CR650R phù hợp cho các dòng xe thể thao, classic, drag. Kiểu dáng mạnh mẽ, thể thao.',
    features: [
      'Chất liệu: Nhôm dày',
      'Đường kính: 22mm',
      'Kiểu dáng sport',
    ],
    reviews: [],
    related: ['1', '2', '4']
  },
  {
    id: '4',
    title: 'Ghi đông Clip-on Cafe racer Drag nhôm CNC',
    price: 350000,
    code: 'GD-CLIPON',
    status: 'Còn hàng',
    image: 'Assets/Motorbikes/ghidong-clipon.jpg',
    shortdesc: 'Ghi đông Clip-on Cafe racer Drag nhôm CNC Phi 31-51mm. Dành cho xe độ cafe racer, drag.',
    desc: 'Ghi đông Clip-on Cafe racer Drag nhôm CNC mang lại cảm giác lái thể thao, phong cách classic retro. Dễ lắp đặt, phù hợp nhiều dòng xe.',
    features: [
      'Chất liệu: Nhôm CNC',
      'Đường kính: 31-51mm',
      'Kiểu dáng clip-on',
    ],
    reviews: [],
    related: ['1', '2', '3']
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

  // Sản phẩm liên quan
  const relatedBox = document.getElementById('related-products');
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

  // Nút mua hàng
  document.getElementById('buy-btn').onclick = function() {
    alert('Chức năng mua hàng đang phát triển!');
  };
}); 