// Масив ігор (10 ігор)
const products = [
    {
        id: 1,
        title: "FC 26",
        price: 2399,
        category: "Simulator",
        platform: "PC, PS5, Xbox",
        inStock: true,
        ageLimit: false,
        description: "Футбольний симулятор з найновішою графікою та геймплеєм. Реалістичні стадіони, гравці та атмосфера.",
        image: "https://cdn1.epicgames.com/offer/1d4d85b1051e41ee8f1a099e99d59f3f/EGS_EASPORTSFC26StandardEdition_EACANADA_S1_2560x1440-efabe29766334696db018632ea5ba492",
        requirements: {
            min: { cpu: "Intel i5-6600", gpu: "GTX 1050 Ti", ram: "8 GB" },
            rec: { cpu: "Intel i7-9700", gpu: "RTX 2060", ram: "16 GB" }
        }
    },
    {
        id: 2,
        title: "Grand Theft Auto V",
        price: 999,
        category: "Action-Adventure",
        platform: "PC, PS5, Xbox",
        inStock: true,
        ageLimit: true,
        description: "Відкритий світ Лос-Сантоса з трьома головними героями. Крадіжки, перегони, стрілянини.",
        image: "https://kor.ill.in.ua/m/610x385/1608900.jpg",
        requirements: {
            min: { cpu: "Intel Core 2 Quad", gpu: "9800 GT", ram: "4 GB" },
            rec: { cpu: "Intel i5-3470", gpu: "GTX 660", ram: "8 GB" }
        }
    },
    {
        id: 3,
        title: "Minecraft",
        price: 499,
        category: "sandbox",
        platform: "PC, Mobile, PS5, Xbox",
        inStock: true,
        ageLimit: false,
        description: "Створюйте та досліджуйте світи з кубиків. Виживання, творчість, пригоди.",
        image: "https://upload.wikimedia.org/wikipedia/uk/4/48/Minecraft_logo.png",
        requirements: {
            min: { cpu: "Intel i3-3210", gpu: "Intel HD 4000", ram: "4 GB" },
            rec: { cpu: "Intel i5-4690", gpu: "GeForce 700", ram: "8 GB" }
        }
    },
    {
        id: 4,
        title: "Cyberpunk 2077",
        price: 1299,
        category: "rpg",
        platform: "PC, PS5, Xbox",
        inStock: true,
        ageLimit: true,
        description: "Футуристичний RPG у місті Найт-Сіті. Кастомізація персонажа, глибокий сюжет.",
        image: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7",
        requirements: {
            min: { cpu: "Intel i5-3570", gpu: "GTX 780", ram: "8 GB" },
            rec: { cpu: "Intel i7-4790", gpu: "GTX 1060", ram: "12 GB" }
        }
    },
    {
        id: 5,
        title: "The Witcher 3",
        price: 899,
        category: "rpg",
        platform: "PC, PS5, Xbox, Switch",
        inStock: false,
        ageLimit: true,
        description: "Епічна пригода Геральта з Рівії. Полювання на чудовиськ, магія, вибір, що впливає на сюжет.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWX-GcT5YLKwi_jYlsTS9KsLJ-OOp-G6QvuA&s",
        requirements: {
            min: { cpu: "Intel i5-2500", gpu: "GTX 660", ram: "6 GB" },
            rec: { cpu: "Intel i7-3770", gpu: "GTX 770", ram: "8 GB" }
        }
    },
    {
        id: 6,
        title: "Hogwarts Legacy",
        price: 1599,
        category: "adventure",
        platform: "PC, PS5, Xbox",
        inStock: true,
        ageLimit: false,
        description: "Пригоди у школі чарівників Хогвартс. Вивчайте заклинання, літайте на мітлах.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2cohQ_b7vP7eUSrQ3pJnt1pTI18qd37oiQ&s",
        requirements: {
            min: { cpu: "Intel i5-6600", gpu: "GTX 960", ram: "16 GB" },
            rec: { cpu: "Intel i7-8700", gpu: "GTX 1080", ram: "16 GB" }
        }
    },
    {
        id: 7,
        title: "God of War Ragnarök",
        price: 1999,
        category: "action",
        platform: "PS5",
        inStock: true,
        ageLimit: true,
        description: "Продовження історії Кратоса та Атрея. Епічні битви, скандинавська міфологія.",
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/capsule_616x353.jpg?t=1750909504",
        requirements: {
            min: { cpu: "PS5", gpu: "PS5", ram: "16 GB" },
            rec: { cpu: "PS5", gpu: "PS5", ram: "16 GB" }
        }
    },
    {
        id: 8,
        title: "Among Us",
        price: 149,
        category: "party",
        platform: "PC, Mobile, Switch",
        inStock: true,
        ageLimit: false,
        description: "Командна гра про пошук зрадника на космічному кораблі. Блеф, обман, логіка.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQqLA6-eAXA-sxkAnbafTd7NB4DKaIsqiMrg&s",
        requirements: {
            min: { cpu: "Pentium 4", gpu: "Intel HD 3000", ram: "1 GB" },
            rec: { cpu: "Intel i3", gpu: "Intel HD 4000", ram: "2 GB" }
        }
    },
    {
        id: 9,
        title: "Red Dead Redemption 2",
        price: 1499,
        category: "adventure",
        platform: "PC, PS5, Xbox",
        inStock: false,
        ageLimit: true,
        description: "Життя ковбоя Артура Моргана на Дикому Заході. Реалістичний світ, моральний вибір.",
        image: "https://image.api.playstation.com/vulcan/img/rnd/202011/1215/WyHa1BM3ISDVqYSEUMB9VZJs.png",
        requirements: {
            min: { cpu: "Intel i5-2500", gpu: "GTX 770", ram: "8 GB" },
            rec: { cpu: "Intel i7-4770", gpu: "GTX 1060", ram: "12 GB" }
        }
    },
    {
        id: 10,
        title: "Resident Evil 4",
        price: 1399,
        category: "horror",
        platform: "PC, PS5, Xbox",
        inStock: true,
        ageLimit: true,
        description: "Хорор-екшен про Леона Кеннеді. Битва з зомбі та монстрами в європейському селі.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9mxuCJ468CBy2DXcvFsCHjurWxF_GrcJEEg&s",
        requirements: {
            min: { cpu: "Intel i5-7500", gpu: "GTX 1050 Ti", ram: "8 GB" },
            rec: { cpu: "Intel i7-8700", gpu: "GTX 1070", ram: "16 GB" }
        }
    }
];


let cart = [];
let totalPrice = 0;
const productsContainer = document.getElementById("products-container");
const resultsInfo = document.getElementById("results-info");
const cartInfo = document.getElementById("cart-info");
const miniCartCount = document.getElementById("mini-cart-count");


const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryFilter = document.getElementById("category-filter");
const priceFilter = document.getElementById("price-filter");
const minPriceInput = document.getElementById("min-price-input");
const resetFiltersBtn = document.getElementById("reset-filters");


const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const modalAddBtn = document.getElementById("modal-add-btn");
let currentModalGame = null;

// Елементи навігації
const navLinks = document.querySelectorAll('.nav-link');
const cartIcon = document.getElementById('cart-icon');
const logoHome = document.getElementById('logo-home');


function loadCart() {
    const saved = localStorage.getItem("gameCart");
    if (saved) {
        cart = JSON.parse(saved);
        updateCartInfo();
    }
}


function saveCart() {
    localStorage.setItem("gameCart", JSON.stringify(cart));
}


function updateCartInfo() {
    const itemCount = cart.length;
    totalPrice = cart.reduce((sum, id) => {
        const game = products.find(g => g.id === id);
        return sum + (game ? game.price : 0);
    }, 0);
    
   
    if (miniCartCount) {
        miniCartCount.textContent = itemCount;
        
        
        miniCartCount.classList.add("cart-pulse");
        setTimeout(() => {
            miniCartCount.classList.remove("cart-pulse");
        }, 500);
    }
    
   
    if (cartInfo) {
        cartInfo.innerHTML = `
            <span>Товарів у кошику: ${itemCount}</span>
            <button id="clear-cart-btn" class="btn btn-secondary">
                <i class="fas fa-trash"></i> Очистити кошик
            </button>
            <span>Сума: ${totalPrice} грн</span>
        `;
        
        
        const clearBtn = document.getElementById('clear-cart-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', clearCart);
        }
    }
}

// Очистити кошик
function clearCart() {
    if (cart.length > 0) {
        if (confirm("Ви впевнені, що хочете очистити кошик?")) {
            cart = [];
            saveCart();
            updateCartInfo();
            
            
            document.querySelectorAll('.add-to-card-btn').forEach(btn => {
                if (!btn.disabled) {
                    btn.textContent = 'Додати в кошик';
                    btn.style.background = '';
                }
            });
            
            
            if (currentModalGame) {
                modalAddBtn.textContent = 'Додати в кошик';
                modalAddBtn.style.background = '';
            }
            
            alert("Кошик очищено!");
        }
    } else {
        alert("Кошик вже порожній!");
    }
}

// Додати гру в кошик
function addToCart(gameId, button = null) {
    cart.push(gameId);
    saveCart();
    updateCartInfo();
    
    
    if (button) {
        button.textContent = 'Додано!';
        button.style.background = '#27ae60';
        setTimeout(() => {
            button.textContent = 'Додати в кошик';
            button.style.background = '';
        }, 1000);
    }
    
    
    if (currentModalGame && currentModalGame.id === gameId) {
        modalAddBtn.textContent = 'Додано!';
        modalAddBtn.style.background = '#27ae60';
        setTimeout(() => {
            if (currentModalGame.inStock) {
                modalAddBtn.textContent = 'Додати в кошик';
                modalAddBtn.style.background = '';
            }
        }, 1000);
    }
}

// Відобразити ігри
function renderGames(games) {
    productsContainer.innerHTML = "";
    
    if (games.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Ігор не знайдено</h3>
                <p>Спробуйте змінити параметри пошуку</p>
            </div>
        `;
        return;
    }
    
    games.forEach((game, index) => {
        const card = document.createElement("div");
        card.className = "product-card";
        
        card.innerHTML = `
            <div class="product-image" style="background-image: url('${game.image}')"></div>
            <div class="product-content">
                <h3>
                    ${game.title}
                    ${game.ageLimit ? '<span class="age-badge">18+</span>' : ''}
                </h3>
                <p class="product-category">${game.category}</p>
                <p class="product-description">${game.description}</p>
                <p class="product-price">${game.price} грн</p>
                <button class="add-to-card-btn" ${!game.inStock ? 'disabled' : ''}>
                    ${game.inStock ? 'Додати в кошик' : 'Немає в наявності'}
                </button>
            </div>
        `;
        
        
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-card-btn')) {
                openModal(game);
            }
        });
        
        // Кнопка додавання в кошик
        const btn = card.querySelector('.add-to-card-btn');
        if (game.inStock) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(game.id, btn);
            });
        }
        
        
        card.style.animationDelay = `${index * 0.1}s`;
        
        productsContainer.appendChild(card);
    });
    
    
    resultsInfo.textContent = `Знайдено ігор: ${games.length}`;
}

// Фільтрація ігор
function filterGames() {
    const searchText = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const maxPrice = priceFilter.value === "all" ? Infinity : parseInt(priceFilter.value);
    const minPrice = parseInt(minPriceInput.value) || 0;
    
    const filtered = products.filter(game => {
        const matchesSearch = searchText === "" || 
                             game.title.toLowerCase().includes(searchText) || 
                             game.description.toLowerCase().includes(searchText);
        const matchesCategory = category === "all" || game.category === category;
        const matchesMaxPrice = game.price <= maxPrice;
        const matchesMinPrice = game.price >= minPrice;
        
        return matchesSearch && matchesCategory && matchesMaxPrice && matchesMinPrice;
    });
    
    renderGames(filtered);
}


function openModal(game) {
    currentModalGame = game;
    
    
    document.getElementById('modal-image').style.backgroundImage = `url('${game.image}')`;
    document.getElementById('modal-title').textContent = game.title;
    document.getElementById('modal-category').textContent = game.category;
    document.getElementById('modal-price').textContent = game.price;
    document.getElementById('modal-platform').textContent = game.platform;
    document.getElementById('modal-age').textContent = game.ageLimit ? '18+' : 'Без обмежень';
    document.getElementById('modal-stock').textContent = game.inStock ? 'Є в наявності' : 'Немає в наявності';
    document.getElementById('modal-description').textContent = game.description;
    
    // Системні вимоги
    document.getElementById('modal-cpu-min').textContent = game.requirements.min.cpu;
    document.getElementById('modal-gpu-min').textContent = game.requirements.min.gpu;
    document.getElementById('modal-ram-min').textContent = game.requirements.min.ram;
    document.getElementById('modal-cpu-rec').textContent = game.requirements.rec.cpu;
    document.getElementById('modal-gpu-rec').textContent = game.requirements.rec.gpu;
    document.getElementById('modal-ram-rec').textContent = game.requirements.rec.ram;
    
   
    modalAddBtn.disabled = !game.inStock;
    modalAddBtn.textContent = game.inStock ? 'Додати в кошик' : 'Немає в наявності';
    modalAddBtn.style.background = '';
    
   
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}


function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    currentModalGame = null;
}

// Скинути фільтри
function resetFilters() {
    searchInput.value = '';
    categoryFilter.value = 'all';
    priceFilter.value = 'all';
    minPriceInput.value = '';
    filterGames();
}


function updateSaleTimers() {
    const timers = document.querySelectorAll('.timer');
    
    
    const endTimes = [
        new Date(Date.now() + 3 * 24 * 60 * 60 * 1000 + 12 * 60 * 60 * 1000 + 30 * 60 * 1000 + 15 * 1000), // 3 дні 12:30:15
        new Date(Date.now() + 1 * 24 * 60 * 60 * 1000 + 8 * 60 * 60 * 1000 + 45 * 60 * 1000 + 20 * 1000), // 1 день 08:45:20
        new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 16 * 60 * 60 * 1000 + 20 * 60 * 1000 + 10 * 1000)  // 2 дні 16:20:10
    ];
    
    timers.forEach((timer, index) => {
        const updateTimer = () => {
            const now = new Date();
            const timeLeft = endTimes[index] - now;
            
            if (timeLeft <= 0) {
                timer.textContent = 'Акція закінчилась!';
                timer.parentElement.parentElement.querySelector('.btn-primary').disabled = true;
                timer.parentElement.parentElement.querySelector('.btn-primary').textContent = 'Акція закінчилась';
                return;
            }
            
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            timer.textContent = `${days} днів ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        };
        
        updateTimer();
        setInterval(updateTimer, 1000);
    });
}


function setupSaleButtons() {
    const saleButtons = document.querySelectorAll('.sale-card .btn-primary');
    
    saleButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            
            const saleGameIds = [1, 2, 4]; // FC 26, GTA V, Cyberpunk 2077
            
            if (index < saleGameIds.length) {
                const gameId = saleGameIds[index];
                const game = products.find(g => g.id === gameId);
                
                if (game) {
                    addToCart(gameId);
                    
                    
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Додано в кошик';
                    this.style.background = '#27ae60';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.background = '';
                    }, 2000);
                }
            }
        });
    });
}


searchInput.addEventListener('input', filterGames);
searchBtn.addEventListener('click', filterGames);
categoryFilter.addEventListener('change', filterGames);
priceFilter.addEventListener('change', filterGames);
minPriceInput.addEventListener('input', filterGames);
resetFiltersBtn.addEventListener('click', resetFilters);


closeBtn.addEventListener('click', () => {
    closeModal();
});


modalAddBtn.addEventListener('click', () => {
    if (currentModalGame && currentModalGame.inStock) {
        addToCart(currentModalGame.id);
    }
});


modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});


navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href.startsWith('#')) {
            e.preventDefault();
            
            
            navLinks.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});


logoHome.addEventListener('click', function(e) {
    e.preventDefault();
    
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#home') {
            link.classList.add('active');
        }
    });
    
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


cartIcon.addEventListener('click', function() {
    if (cart.length === 0) {
        alert("🛒 Кошик порожній!\nДодайте товари з каталогу.");
    } else {
        const cartItems = cart.map(id => {
            const game = products.find(g => g.id === id);
            return game ? `• ${game.title} - ${game.price} грн` : '• Невідомий товар';
        }).join('\n');
        
        alert(`🛒 У вашому кошику ${cart.length} товарів\nЗагальна сума: ${totalPrice} грн\n\nТовари в кошику:\n${cartItems}`);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    console.log('Kroko Store сторінка завантажена');
    
    
    loadCart();
    
    
    filterGames();
    
    
    updateSaleTimers();
    
    
    setupSaleButtons();
    
    
    document.head.appendChild(style);
});


window.addEventListener('resize', function() {
    console.log(`Розмір вікна: ${window.innerWidth}x${window.innerHeight}`);
});


window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.98)';
        nav.style.boxShadow = '0 4px 25px rgba(0, 0, 0, 0.6)';
    } else {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    }
});