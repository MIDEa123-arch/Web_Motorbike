// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Sidebar navigation
    const navLinks = document.querySelectorAll('.sidebar nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all links
            navLinks.forEach(l => l.parentElement.classList.remove('active'));
            // Add active class to clicked link
            this.parentElement.classList.add('active');
            
            // Get the target section
            const targetId = this.getAttribute('href').substring(1);
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
            // Show the selected section
            const showSection = document.getElementById(targetId + '-section');
            if (showSection) showSection.style.display = '';
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            // Có thể bổ sung tìm kiếm bảng ở đây nếu muốn
            console.log(`Searching for: ${searchTerm}`);
        });
    }

    // User dropdown
    const userDropdown = document.querySelector('.user');
    if (userDropdown) {
        userDropdown.addEventListener('click', function() {
            console.log('User dropdown clicked');
        });
    }

    // Notifications
    const notifications = document.querySelector('.notifications');
    if (notifications) {
        notifications.addEventListener('click', function() {
            console.log('Notifications clicked');
        });
    }

    // Table row actions
    const detailButtons = document.querySelectorAll('.btn-primary');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('tr');
            const orderId = row.querySelector('td:first-child').textContent;
            // Here you would typically show order details
            console.log(`Showing details for order ${orderId}`);
        });
    });

    // Status updates
    const statusElements = document.querySelectorAll('.status');
    statusElements.forEach(status => {
        status.addEventListener('click', function() {
            // Here you would typically show a status update modal
            console.log(`Updating status for ${this.textContent}`);
        });
    });

    // Responsive sidebar toggle
    const toggleSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        if (window.innerWidth <= 768) {
            sidebar.classList.add('collapsed');
            mainContent.style.marginLeft = '70px';
        } else {
            sidebar.classList.remove('collapsed');
            mainContent.style.marginLeft = '250px';
        }
    };

    // Initial check and add resize listener
    toggleSidebar();
    window.addEventListener('resize', toggleSidebar);

    // Add loading animation for content changes
    const showLoading = () => {
        const content = document.querySelector('.content');
        content.style.opacity = '0.5';
        // Add loading spinner
        const spinner = document.createElement('div');
        spinner.className = 'loading-spinner';
        content.appendChild(spinner);
    };

    const hideLoading = () => {
        const content = document.querySelector('.content');
        content.style.opacity = '1';
        // Remove loading spinner
        const spinner = document.querySelector('.loading-spinner');
        if (spinner) {
            spinner.remove();
        }
    };

    // Example of loading content
    const loadContent = async (section) => {
        showLoading();
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(`Loaded content for ${section}`);
        } catch (error) {
            console.error('Error loading content:', error);
        } finally {
            hideLoading();
        }
    };

    // Add CSS for loading spinner
    const style = document.createElement('style');
    style.textContent = `
        .loading-spinner {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid var(--accent-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // ========== DỮ LIỆU MẪU & CRUD ==========
    const products = [
        {id: 1, name: 'BMW S1000RR', price: 25000, brand: 'BMW'},
        {id: 2, name: 'Ducati Panigale V4', price: 30000, brand: 'Ducati'},
        {id: 3, name: 'Kawasaki Ninja H2', price: 28000, brand: 'Kawasaki'}
    ];
    const accessories = [
        {id: 1, name: 'Mũ bảo hiểm AGV', price: 500, type: 'Mũ bảo hiểm'},
        {id: 2, name: 'Găng tay Dainese', price: 150, type: 'Găng tay'}
    ];
    const orders = [
        {id: 12345, customer: 'Nguyễn Văn A', product: 'BMW S1000RR', price: 25000, status: 'Đang xử lý', address: 'Hà Nội', phone: '0123456789'},
        {id: 12346, customer: 'Trần Thị B', product: 'Ducati Panigale V4', price: 30000, status: 'Hoàn thành', address: 'TP.HCM', phone: '0987654321'},
        {id: 12347, customer: 'Lê Văn C', product: 'Kawasaki Ninja H2', price: 28000, status: 'Đang giao', address: 'Đà Nẵng', phone: '0111222333'}
    ];
    const users = [
        {id: 1, name: 'Admin', email: 'admin@motorbike.com', role: 'Admin'},
        {id: 2, name: 'Nguyễn Văn D', email: 'd@gmail.com', role: 'Khách hàng'}
    ];
    const contacts = [
        {id: 1, name: 'Nguyễn Văn E', email: 'e@gmail.com', content: 'Tôi muốn hỏi về sản phẩm.'},
        {id: 2, name: 'Trần Thị F', email: 'f@gmail.com', content: 'Tôi cần hỗ trợ đơn hàng.'}
    ];

    // ========== HÀM HIỂN THỊ BẢNG ==========
    function renderProducts() {
        const tbody = document.querySelector('#productsTable tbody');
        if (!tbody) return;
        tbody.innerHTML = products.map(p => `
            <tr>
                <td>${p.id}</td>
                <td>${p.name}</td>
                <td>$${p.price.toLocaleString()}</td>
                <td>${p.brand}</td>
                <td>
                    <button class="btn btn-sm btn-warning edit-product" data-id="${p.id}">Sửa</button>
                    <button class="btn btn-sm btn-danger delete-product" data-id="${p.id}">Xóa</button>
                </td>
            </tr>
        `).join('');
    }
    function renderAccessories() {
        const tbody = document.querySelector('#accessoriesTable tbody');
        if (!tbody) return;
        tbody.innerHTML = accessories.map(a => `
            <tr>
                <td>${a.id}</td>
                <td>${a.name}</td>
                <td>$${a.price.toLocaleString()}</td>
                <td>${a.type}</td>
                <td>
                    <button class="btn btn-sm btn-warning edit-accessory" data-id="${a.id}">Sửa</button>
                    <button class="btn btn-sm btn-danger delete-accessory" data-id="${a.id}">Xóa</button>
                </td>
            </tr>
        `).join('');
    }
    function renderOrders() {
        const tbody = document.querySelector('#ordersTable tbody');
        if (!tbody) return;
        tbody.innerHTML = orders.map(o => `
            <tr>
                <td>#${o.id}</td>
                <td>${o.customer}</td>
                <td>${o.product}</td>
                <td>$${o.price.toLocaleString()}</td>
                <td><span class="status ${o.status === 'Hoàn thành' ? 'completed' : o.status === 'Đang giao' ? 'processing' : 'pending'}">${o.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-info view-order" data-id="${o.id}">Chi tiết</button>
                    <button class="btn btn-sm btn-danger delete-order" data-id="${o.id}">Xóa</button>
                </td>
            </tr>
        `).join('');
    }
    function renderUsers() {
        const tbody = document.querySelector('#usersTable tbody');
        if (!tbody) return;
        tbody.innerHTML = users.map(u => `
            <tr>
                <td>${u.id}</td>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>${u.role}</td>
                <td>
                    <button class="btn btn-sm btn-warning edit-user" data-id="${u.id}">Sửa</button>
                    <button class="btn btn-sm btn-danger delete-user" data-id="${u.id}">Xóa</button>
                </td>
            </tr>
        `).join('');
    }
    function renderContacts() {
        const tbody = document.querySelector('#contactsTable tbody');
        if (!tbody) return;
        tbody.innerHTML = contacts.map(c => `
            <tr>
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.email}</td>
                <td>${c.content.slice(0, 20)}...</td>
                <td>
                    <button class="btn btn-sm btn-info view-contact" data-id="${c.id}">Chi tiết</button>
                    <button class="btn btn-sm btn-danger delete-contact" data-id="${c.id}">Xóa</button>
                </td>
            </tr>
        `).join('');
    }

    // ========== SỰ KIỆN CRUD ==========
    // Hiển thị dữ liệu mẫu khi chuyển tab
    const pTab = document.querySelector('[href="#products"]');
    if (pTab) pTab.addEventListener('click', renderProducts);
    const aTab = document.querySelector('[href="#accessories"]');
    if (aTab) aTab.addEventListener('click', renderAccessories);
    const oTab = document.querySelector('[href="#orders"]');
    if (oTab) oTab.addEventListener('click', renderOrders);
    const uTab = document.querySelector('[href="#users"]');
    if (uTab) uTab.addEventListener('click', renderUsers);
    const cTab = document.querySelector('[href="#contacts"]');
    if (cTab) cTab.addEventListener('click', renderContacts);

    // Sản phẩm
    const addProductBtn = document.getElementById('addProductBtn');
    if (addProductBtn) addProductBtn.onclick = function() {
        document.getElementById('productForm').reset();
        document.getElementById('productId').value = '';
        new bootstrap.Modal(document.getElementById('productModal')).show();
    };
    const productForm = document.getElementById('productForm');
    if (productForm) productForm.onsubmit = function(e) {
        e.preventDefault();
        const id = document.getElementById('productId').value;
        const name = document.getElementById('productName').value;
        const price = +document.getElementById('productPrice').value;
        const brand = document.getElementById('productBrand').value;
        if (id) {
            const p = products.find(p => p.id == id);
            p.name = name; p.price = price; p.brand = brand;
        } else {
            products.push({id: Date.now(), name, price, brand});
        }
        renderProducts();
        bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
    };
    const productsTable = document.querySelector('#productsTable');
    if (productsTable) productsTable.onclick = function(e) {
        if (e.target.classList.contains('edit-product')) {
            const id = e.target.dataset.id;
            const p = products.find(p => p.id == id);
            document.getElementById('productId').value = p.id;
            document.getElementById('productName').value = p.name;
            document.getElementById('productPrice').value = p.price;
            document.getElementById('productBrand').value = p.brand;
            new bootstrap.Modal(document.getElementById('productModal')).show();
        } else if (e.target.classList.contains('delete-product')) {
            const id = e.target.dataset.id;
            if (confirm('Xóa sản phẩm này?')) {
                const idx = products.findIndex(p => p.id == id);
                products.splice(idx, 1);
                renderProducts();
            }
        }
    };
    // Phụ kiện
    const addAccessoryBtn = document.getElementById('addAccessoryBtn');
    if (addAccessoryBtn) addAccessoryBtn.onclick = function() {
        document.getElementById('accessoryForm').reset();
        document.getElementById('accessoryId').value = '';
        new bootstrap.Modal(document.getElementById('accessoryModal')).show();
    };
    const accessoryForm = document.getElementById('accessoryForm');
    if (accessoryForm) accessoryForm.onsubmit = function(e) {
        e.preventDefault();
        const id = document.getElementById('accessoryId').value;
        const name = document.getElementById('accessoryName').value;
        const price = +document.getElementById('accessoryPrice').value;
        const type = document.getElementById('accessoryType').value;
        if (id) {
            const a = accessories.find(a => a.id == id);
            a.name = name; a.price = price; a.type = type;
        } else {
            accessories.push({id: Date.now(), name, price, type});
        }
        renderAccessories();
        bootstrap.Modal.getInstance(document.getElementById('accessoryModal')).hide();
    };
    const accessoriesTable = document.querySelector('#accessoriesTable');
    if (accessoriesTable) accessoriesTable.onclick = function(e) {
        if (e.target.classList.contains('edit-accessory')) {
            const id = e.target.dataset.id;
            const a = accessories.find(a => a.id == id);
            document.getElementById('accessoryId').value = a.id;
            document.getElementById('accessoryName').value = a.name;
            document.getElementById('accessoryPrice').value = a.price;
            document.getElementById('accessoryType').value = a.type;
            new bootstrap.Modal(document.getElementById('accessoryModal')).show();
        } else if (e.target.classList.contains('delete-accessory')) {
            const id = e.target.dataset.id;
            if (confirm('Xóa phụ kiện này?')) {
                const idx = accessories.findIndex(a => a.id == id);
                accessories.splice(idx, 1);
                renderAccessories();
            }
        }
    };
    // Đơn hàng
    const ordersTable = document.querySelector('#ordersTable');
    if (ordersTable) ordersTable.onclick = function(e) {
        if (e.target.classList.contains('view-order')) {
            const id = e.target.dataset.id;
            const o = orders.find(o => o.id == id);
            document.getElementById('orderDetailBody').innerHTML = `
                <p><b>ID:</b> #${o.id}</p>
                <p><b>Khách hàng:</b> ${o.customer}</p>
                <p><b>Sản phẩm:</b> ${o.product}</p>
                <p><b>Giá:</b> $${o.price.toLocaleString()}</p>
                <p><b>Trạng thái:</b> ${o.status}</p>
                <p><b>Địa chỉ:</b> ${o.address}</p>
                <p><b>SĐT:</b> ${o.phone}</p>
            `;
            new bootstrap.Modal(document.getElementById('orderDetailModal')).show();
        } else if (e.target.classList.contains('delete-order')) {
            const id = e.target.dataset.id;
            if (confirm('Xóa đơn hàng này?')) {
                const idx = orders.findIndex(o => o.id == id);
                orders.splice(idx, 1);
                renderOrders();
            }
        }
    };
    // Người dùng
    const addUserBtn = document.getElementById('addUserBtn');
    if (addUserBtn) addUserBtn.onclick = function() {
        document.getElementById('userForm').reset();
        document.getElementById('userId').value = '';
        new bootstrap.Modal(document.getElementById('userModal')).show();
    };
    const userForm = document.getElementById('userForm');
    if (userForm) userForm.onsubmit = function(e) {
        e.preventDefault();
        const id = document.getElementById('userId').value;
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const role = document.getElementById('userRole').value;
        if (id) {
            const u = users.find(u => u.id == id);
            u.name = name; u.email = email; u.role = role;
        } else {
            users.push({id: Date.now(), name, email, role});
        }
        renderUsers();
        bootstrap.Modal.getInstance(document.getElementById('userModal')).hide();
    };
    const usersTable = document.querySelector('#usersTable');
    if (usersTable) usersTable.onclick = function(e) {
        if (e.target.classList.contains('edit-user')) {
            const id = e.target.dataset.id;
            const u = users.find(u => u.id == id);
            document.getElementById('userId').value = u.id;
            document.getElementById('userName').value = u.name;
            document.getElementById('userEmail').value = u.email;
            document.getElementById('userRole').value = u.role;
            new bootstrap.Modal(document.getElementById('userModal')).show();
        } else if (e.target.classList.contains('delete-user')) {
            const id = e.target.dataset.id;
            if (confirm('Xóa người dùng này?')) {
                const idx = users.findIndex(u => u.id == id);
                users.splice(idx, 1);
                renderUsers();
            }
        }
    };
    // Liên hệ
    const contactsTable = document.querySelector('#contactsTable');
    if (contactsTable) contactsTable.onclick = function(e) {
        if (e.target.classList.contains('view-contact')) {
            const id = e.target.dataset.id;
            const c = contacts.find(c => c.id == id);
            document.getElementById('contactDetailBody').innerHTML = `
                <p><b>ID:</b> ${c.id}</p>
                <p><b>Tên:</b> ${c.name}</p>
                <p><b>Email:</b> ${c.email}</p>
                <p><b>Nội dung:</b> ${c.content}</p>
            `;
            new bootstrap.Modal(document.getElementById('contactDetailModal')).show();
        } else if (e.target.classList.contains('delete-contact')) {
            const id = e.target.dataset.id;
            if (confirm('Xóa liên hệ này?')) {
                const idx = contacts.findIndex(c => c.id == id);
                contacts.splice(idx, 1);
                renderContacts();
            }
        }
    };
    // Đổi mật khẩu mẫu
    const changePasswordForm = document.getElementById('changePasswordForm');
    if (changePasswordForm) changePasswordForm.onsubmit = function(e) {
        e.preventDefault();
        const oldP = document.getElementById('oldPassword').value;
        const newP = document.getElementById('newPassword').value;
        const confirmP = document.getElementById('confirmPassword').value;
        const msg = document.getElementById('changePasswordMsg');
        if (newP !== confirmP) {
            msg.innerHTML = '<span class="text-danger">Mật khẩu mới không khớp!</span>';
        } else if (oldP === newP) {
            msg.innerHTML = '<span class="text-danger">Mật khẩu mới phải khác mật khẩu cũ!</span>';
        } else {
            msg.innerHTML = '<span class="text-success">Đổi mật khẩu thành công (mô phỏng)!</span>';
            document.getElementById('changePasswordForm').reset();
        }
    };
    // Hiển thị dữ liệu mặc định khi load trang
    renderProducts();
    renderAccessories();
    renderOrders();
    renderUsers();
    renderContacts();

    // ========== TÌM KIẾM TRÊN BẢNG ĐANG HIỂN THỊ ==========
    function filterTable(keyword) {
        keyword = keyword.trim().toLowerCase();
        // Xác định section đang hiển thị
        const visibleSection = Array.from(document.querySelectorAll('.section')).find(sec => sec.style.display !== 'none');
        if (!visibleSection) return;
        const table = visibleSection.querySelector('table');
        if (!table) return;
        const tbody = table.querySelector('tbody');
        if (!tbody) return;
        // Lấy dữ liệu gốc
        let data = [];
        if (table.id === 'productsTable') data = products;
        else if (table.id === 'accessoriesTable') data = accessories;
        else if (table.id === 'ordersTable') data = orders;
        else if (table.id === 'usersTable') data = users;
        else if (table.id === 'contactsTable') data = contacts;
        // Lọc dữ liệu
        let filtered = data.filter(row => {
            return Object.values(row).some(val => String(val).toLowerCase().includes(keyword));
        });
        // Render lại bảng
        if (table.id === 'productsTable') {
            tbody.innerHTML = filtered.map(p => `
                <tr>
                    <td>${p.id}</td>
                    <td>${p.name}</td>
                    <td>$${p.price.toLocaleString()}</td>
                    <td>${p.brand}</td>
                    <td>
                        <button class="btn btn-sm btn-warning edit-product" data-id="${p.id}">Sửa</button>
                        <button class="btn btn-sm btn-danger delete-product" data-id="${p.id}">Xóa</button>
                    </td>
                </tr>
            `).join('');
        } else if (table.id === 'accessoriesTable') {
            tbody.innerHTML = filtered.map(a => `
                <tr>
                    <td>${a.id}</td>
                    <td>${a.name}</td>
                    <td>$${a.price.toLocaleString()}</td>
                    <td>${a.type}</td>
                    <td>
                        <button class="btn btn-sm btn-warning edit-accessory" data-id="${a.id}">Sửa</button>
                        <button class="btn btn-sm btn-danger delete-accessory" data-id="${a.id}">Xóa</button>
                    </td>
                </tr>
            `).join('');
        } else if (table.id === 'ordersTable') {
            tbody.innerHTML = filtered.map(o => `
                <tr>
                    <td>#${o.id}</td>
                    <td>${o.customer}</td>
                    <td>${o.product}</td>
                    <td>$${o.price.toLocaleString()}</td>
                    <td><span class="status ${o.status === 'Hoàn thành' ? 'completed' : o.status === 'Đang giao' ? 'processing' : 'pending'}">${o.status}</span></td>
                    <td>
                        <button class="btn btn-sm btn-info view-order" data-id="${o.id}">Chi tiết</button>
                        <button class="btn btn-sm btn-danger delete-order" data-id="${o.id}">Xóa</button>
                    </td>
                </tr>
            `).join('');
        } else if (table.id === 'usersTable') {
            tbody.innerHTML = filtered.map(u => `
                <tr>
                    <td>${u.id}</td>
                    <td>${u.name}</td>
                    <td>${u.email}</td>
                    <td>${u.role}</td>
                    <td>
                        <button class="btn btn-sm btn-warning edit-user" data-id="${u.id}">Sửa</button>
                        <button class="btn btn-sm btn-danger delete-user" data-id="${u.id}">Xóa</button>
                    </td>
                </tr>
            `).join('');
        } else if (table.id === 'contactsTable') {
            tbody.innerHTML = filtered.map(c => `
                <tr>
                    <td>${c.id}</td>
                    <td>${c.name}</td>
                    <td>${c.email}</td>
                    <td>${c.content.slice(0, 20)}...</td>
                    <td>
                        <button class="btn btn-sm btn-info view-contact" data-id="${c.id}">Chi tiết</button>
                        <button class="btn btn-sm btn-danger delete-contact" data-id="${c.id}">Xóa</button>
                    </td>
                </tr>
            `).join('');
        }
    }
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            filterTable(e.target.value);
        });
    }

    // ========== DROPDOWN ADMIN ==========
    // Thêm dropdown vào HTML nếu chưa có
    let userDropdownMenu = document.querySelector('.user-dropdown-menu');
    if (!userDropdownMenu) {
        userDropdownMenu = document.createElement('div');
        userDropdownMenu.className = 'user-dropdown-menu';
        userDropdownMenu.style.display = 'none';
        userDropdownMenu.style.position = 'absolute';
        userDropdownMenu.style.top = '60px';
        userDropdownMenu.style.right = '20px';
        userDropdownMenu.style.background = '#fff';
        userDropdownMenu.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        userDropdownMenu.style.borderRadius = '8px';
        userDropdownMenu.style.minWidth = '180px';
        userDropdownMenu.style.zIndex = '9999';
        userDropdownMenu.innerHTML = `
            <a href="#" class="dropdown-item" style="display:block;padding:10px 20px;color:#333;text-decoration:none;">Thông tin tài khoản</a>
            <a href="#" class="dropdown-item" style="display:block;padding:10px 20px;color:#333;text-decoration:none;">Đăng xuất</a>
        `;
        document.body.appendChild(userDropdownMenu);
    }
    const userBtn = document.querySelector('.user');
    if (userBtn) {
        userBtn.style.position = 'relative';
        userBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Lấy vị trí userBtn
            const rect = userBtn.getBoundingClientRect();
            userDropdownMenu.style.top = (rect.bottom + window.scrollY + 8) + 'px';
            userDropdownMenu.style.right = (window.innerWidth - rect.right + 20) + 'px';
            userDropdownMenu.style.display = userDropdownMenu.style.display === 'none' ? 'block' : 'none';
        });
        // Đóng dropdown khi click ra ngoài
        document.addEventListener('click', function() {
            userDropdownMenu.style.display = 'none';
        });
        // Ngăn dropdown đóng khi click vào menu
        userDropdownMenu.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        // Xử lý các mục trong dropdown
        userDropdownMenu.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                if (this.textContent.includes('Đăng xuất')) {
                    alert('Bạn đã đăng xuất (mô phỏng)!');
                } else if (this.textContent.includes('Thông tin tài khoản')) {
                    alert('Thông tin tài khoản: Admin (mô phỏng)');
                }
                userDropdownMenu.style.display = 'none';
            });
        });
    }

    // ========== DROPDOWN THÔNG BÁO ==========
    let notificationsDropdown = document.querySelector('.notifications-dropdown');
    if (!notificationsDropdown) {
        notificationsDropdown = document.createElement('div');
        notificationsDropdown.className = 'notifications-dropdown';
        notificationsDropdown.style.display = 'none';
        notificationsDropdown.style.position = 'absolute';
        notificationsDropdown.style.top = '60px';
        notificationsDropdown.style.right = '70px';
        notificationsDropdown.style.background = '#fff';
        notificationsDropdown.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
        notificationsDropdown.style.borderRadius = '8px';
        notificationsDropdown.style.minWidth = '300px';
        notificationsDropdown.style.zIndex = '9999';
        notificationsDropdown.innerHTML = `
            <div style="padding:10px 20px;font-weight:bold;border-bottom:1px solid #eee;">Thông báo</div>
            <div class="notifications-list">
                <div class="notification-item" style="padding:10px 20px;border-bottom:1px solid #eee;">Đơn hàng #12345 vừa được tạo.</div>
                <div class="notification-item" style="padding:10px 20px;border-bottom:1px solid #eee;">Khách hàng Trần Thị B vừa liên hệ hỗ trợ.</div>
                <div class="notification-item" style="padding:10px 20px;">Sản phẩm mới đã được thêm vào hệ thống.</div>
            </div>
            <button class="btn btn-link w-100 mark-read" style="border-top:1px solid #eee;">Đánh dấu tất cả là đã đọc</button>
        `;
        document.body.appendChild(notificationsDropdown);
    }
    const notificationsBtn = document.querySelector('.notifications');
    const notificationsBadge = notificationsBtn ? notificationsBtn.querySelector('.badge') : null;
    if (notificationsBtn) {
        notificationsBtn.style.position = 'relative';
        notificationsBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Lấy vị trí
            const rect = notificationsBtn.getBoundingClientRect();
            notificationsDropdown.style.top = (rect.bottom + window.scrollY + 8) + 'px';
            notificationsDropdown.style.right = (window.innerWidth - rect.right + 20) + 'px';
            notificationsDropdown.style.display = notificationsDropdown.style.display === 'none' ? 'block' : 'none';
        });
        // Đóng dropdown khi click ra ngoài
        document.addEventListener('click', function() {
            notificationsDropdown.style.display = 'none';
        });
        // Ngăn dropdown đóng khi click vào menu
        notificationsDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        // Đánh dấu đã đọc
        notificationsDropdown.querySelector('.mark-read').addEventListener('click', function() {
            notificationsDropdown.querySelector('.notifications-list').innerHTML = '<div style="padding:10px 20px;">Không có thông báo mới.</div>';
            if (notificationsBadge) notificationsBadge.textContent = '0';
        });
    }
}); 