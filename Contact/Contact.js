document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Lấy giá trị từ form
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const phone = contactForm.querySelector('input[type="tel"]').value;
            const subject = contactForm.querySelector('select').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Kiểm tra các trường bắt buộc
            if (!name || !email || !phone || !subject || !message) {
                alert('Vui lòng điền đầy đủ thông tin bắt buộc (*)');
                return;
            }
            
            // Kiểm tra định dạng email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Vui lòng nhập địa chỉ email hợp lệ (ví dụ: tennguoidung@gmail.com)');
                return;
            }
            
            // Kiểm tra số điện thoại
            const phoneRegex = /^[0-9]{10,11}$/;
            if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
                alert('Vui lòng nhập số điện thoại hợp lệ (10-11 số)');
                return;
            }
            
            // Tạo đối tượng dữ liệu form
            const formData = {
                name,
                email,
                phone,
                subject,
                message,
                timestamp: new Date().toISOString()
            };
            
            console.log('Đã gửi form:', formData);
            
            // Hiển thị thông báo thành công
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
            
            // Xóa form
            contactForm.reset();
        });
    }
});

// Xử lý điều hướng
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.parentElement.classList.contains('dropdown') || 
                this.parentElement.classList.contains('dropdown1')) {
                return;
            }
            
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                window.location.href = href;
            }
        });
    });
    
    // Xử lý menu thả xuống
    const dropdowns = document.querySelectorAll('.dropdown, .dropdown1');
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        const menu = dropdown.querySelector('.morenavbar');
        
        if (link && menu) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
            });
        }
    });
    
    // Đóng menu khi click bên ngoài
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown1')) {
            const menus = document.querySelectorAll('.morenavbar');
            menus.forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
});

// Xử lý liên kết mạng xã hội
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-media a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.textContent.trim().toLowerCase();
            const urls = {
                'facebook': 'https://facebook.com',
                'instagram': 'https://instagram.com',
                'youtube': 'https://youtube.com',
                'x': 'https://twitter.com'
            };
            
            if (urls[platform]) {
                window.open(urls[platform], '_blank');
            }
        });
    });
});

// Xử lý chuyển đổi ngôn ngữ
document.addEventListener('DOMContentLoaded', function() {
    const langBox = document.querySelector('.lang-box');
    if (langBox) {
        langBox.addEventListener('click', function() {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'en' ? 'vi' : 'en';
            document.documentElement.lang = newLang;
            
            // Hiển thị thông báo chuyển đổi ngôn ngữ
            alert(`Đã chuyển sang ngôn ngữ: ${newLang === 'vi' ? 'Tiếng Việt' : 'Tiếng Anh'}`);
        });
    }
});

// Xử lý cuộn mượt
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}); 