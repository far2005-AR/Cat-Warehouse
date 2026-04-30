// ========== GAME DATA WITH GIFs AND SCREENSHOTS ==========
const games = [
    {
        id: 1,
        title: "Night in the Woods",
        price: 19.99,
        rating: 4.8,
        category: "Adventure",
        platform: "PC",
        description: "NIGHT IN THE WOODS is an adventure game focused on exploration, story, and character, featuring dozens of characters to meet and lots to do across a lush, vibrant world.",
        image: "https://media1.tenor.com/m/QviF46wTgHIAAAAC/maeborowski-mae.gif", 
        gif: "https://media1.tenor.com/m/QviF46wTgHIAAAAC/maeborowski-mae.gif",
        screenshots: [
            "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/481510/header.jpg?t=1706292417",
            "https://finji.co/assets/images/nitwscreenshot1.jpg",
            "https://cdn.arstechnica.net/wp-content/uploads/2017/03/night-10.jpg",
            "https://cdn.mos.cms.futurecdn.net/MVAckFW2v4M8FWbvtZvuQd.png"
        ],
        thumbnails: [
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/481510/ss_f038268bdcef20dc090dca4e0ac8fbed4923c496.1920x1080.jpg?t=1706292417",
            "https://cdn.mos.cms.futurecdn.net/r3AeuJcYZxQJyzgcZF6F2U.jpg",
            "https://i.ytimg.com/vi/E-lK3INve9g/sddefault.jpg",
            "https://cdn.mos.cms.futurecdn.net/VaEEqjNcqRfqYknFg9yXse.jpg"
        ],
        releaseDate: "2017-02-21",
        recommended: true
    },
    {
        id: 2,
        title: "Death Stranding 2",
        price: 69.99,
        rating: 4.5,
        category: "Action",
        platform: "PlayStation",
        description: "Sam – with companions by his side – sets out on a new journey to save humanity from extinction. Join them as they traverse a world beset by otherworldly enemies, obstacles and a haunting question: should we have connected?",
        image: "https://media1.tenor.com/m/avsWK_1WRxIAAAAd/death-stranding-2-neil.gif",
        gif: "https://media1.tenor.com/m/avsWK_1WRxIAAAAd/death-stranding-2-neil.gif",
        screenshots: [
            "https://image.api.playstation.com/vulcan/ap/rnd/202511/2115/1296d5a398d07e92de46e35e0131931c536b02b3793a4c41.jpg",
            "https://www.nme.com/wp-content/uploads/2023/08/death-stranding-2-rewritten-after-pandemic-2.jpg",
            "https://news.northeastern.edu/wp-content/uploads/2025/06/Death-Stranding1400.jpg?w=1100",
            "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/06/death-stranding-2-higgs.jpg?w=1600&h=900&fit=crop"
        ],
        thumbnails: [
            "https://cdn.mos.cms.futurecdn.net/FN8BJYqowTe423mb3nZDzb.jpg",
            "https://clouddosage.com/wp-content/uploads/2025/06/Death-Stranding-2-On-The-Beach-review-gameplay-combat-1024x576.jpg",
            "https://static01.nyt.com/images/2025/07/09/multimedia/05cul-death-stranding-review-tbwq/05cul-death-stranding-review-tbwq-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
            "https://media.gq-magazine.co.uk/photos/67d020df9282393936c1c001/16:9/w_2560%2Cc_limit/ds%2520screenshot.jpg"
        ],
        releaseDate: "2025-01-01",
        recommended: true
    },
    {
        id: 3,
        title: "The Last of Us II",
        price: 49.99,
        rating: 4.9,
        category: "Action",
        platform: "PlayStation",
        description: "Five years after the events of The Last of Us, Ellie embarks on another journey through a post-apocalyptic America on a mission of vengeance against a mysterious militia.",
        image: "https://64.media.tumblr.com/82e87515e49f1e50e34a45c6c3454dad/552d7a6db8fc8666-3f/s500x750/34d6c36ca4ce0b9a26be168ae39a714312189687.gif",
        gif: "https://64.media.tumblr.com/82e87515e49f1e50e34a45c6c3454dad/552d7a6db8fc8666-3f/s500x750/34d6c36ca4ce0b9a26be168ae39a714312189687.gif",
        screenshots: [
            "https://cdn.wccftech.com/wp-content/uploads/2020/07/WCCFthelastofuspart229.jpg",
            "https://static0.colliderimages.com/wordpress/wp-content/uploads/2024/01/the-last-of-us-part-2-ii-remastered.jpeg?w=1200&h=675&fit=crop",
            "https://www.denofgeek.com/wp-content/uploads/2020/06/the-last-of-us-part-2-ellie-joel.jpg?resize=768%2C432",
            "https://www.denofgeek.com/wp-content/uploads/2020/06/the-last-of-us-2-joel.jpg?resize=768%2C432"
        ],
        thumbnails: [
            "https://images.immediate.co.uk/production/volatile/sites/3/2023/11/The-Last-of-Us-2-remastered-release-date-663bf74.jpg?quality=90&resize=980,654",
            "https://static01.nyt.com/images/2020/06/21/business/19lastofus-conversation-01/19lastofus-conversation-01-superJumbo-v2.jpg",
            "https://cdn.craft.cloud/22b11234-f633-4f7c-8ac2-099f2dba995c/assets/uploads/T2R-PC_AnnounceTrailer_Screenshot_Disclaimer_008.png",
            "https://assetsio.gnwcdn.com/the-last-of-us-part-2-screen-crop.jpg?width=570&quality=85&format=jpg&dpr=3&auto=webp"
        ],
        releaseDate: "2020-06-19",
        recommended: true
    },
    {
        id: 4,
        title: "PEAK",
        price: 24.99,
        rating: 4.2,
        category: "Indie",
        platform: "PC",
        description: "PEAK is a co-op climbing game where the slightest mistake can spell your doom. Either solo or as a group of lost nature scouts, your only hope of rescue from a mysterious island is to scale the mountain at its center. Do you have what it takes to reach the PEAK?",
        image: "https://substackcdn.com/image/fetch/$s_!FN6m!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc800f926-29fb-44be-a677-166302e7096e_600x170.gif",
        gif: "https://substackcdn.com/image/fetch/$s_!FN6m!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc800f926-29fb-44be-a677-166302e7096e_600x170.gif",
        screenshots: [
            "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/PEAK_cover_image.jpg/250px-PEAK_cover_image.jpg",
            "https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2025/06/twitch-co-op-game-of-2025-peak.jpg?w=1600&h=900&fit=crop",
            "https://substackcdn.com/image/fetch/$s_!EKAy!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feae33b14-85a7-4c7d-9f9f-455bc0fa94c8_1920x1080.jpeg",
            "https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt1927b5a72143b20a/685d30fae270b60bdd71c6b4/Peak_Header.png?width=1280&auto=webp&quality=80&format=jpg&disable=upscale"
        ],
        thumbnails: [
            "https://cdn.mos.cms.futurecdn.net/nyLRLrN3uNPjY9RDNm7nhE-1200-80.jpg",
            "https://static0.xdaimages.com/wordpress/wp-content/uploads/2025/07/peak-four-friends-heading-to-mountain.jpg?w=1600&h=900&fit=crop",
            "https://data.xxlgamer.com/galleries/2068/U2dQEXM7YzIUmH-full.jpg",
            "https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/07/peak.jpg?w=1600&h=1200&fit=crop"
        ],
        releaseDate: "2025-11-15",
        recommended: false
    },
    {
        id: 5,
        title: "Minecraft",
        price: 26.95,
        rating: 4.9,
        category: "Sandbox",
        platform: "PC",
        description: "Minecraft is a sandbox game where you can build, explore, and survive in a blocky, procedurally generated 3D world.",
        image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2EyazFydDUzOGV1OXhrN3lpbmMycW1sZDlyYWE4YmNzOWJpZ2E2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1oKQqphQDlpb2rHUpZ/giphy.gif",
        gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2EyazFydDUzOGV1OXhrN3lpbmMycW1sZDlyYWE4YmNzOWJpZ2E2eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1oKQqphQDlpb2rHUpZ/giphy.gif",
        screenshots: [
            "https://assetsio.gnwcdn.com/minecraft-live-image-crop.jpg?width=570&quality=85&format=jpg&dpr=3&auto=webp",
            "https://m.media-amazon.com/images/I/71rzlQ2XMOL.jpg",
            "https://assets-prd.ignimgs.com/2025/03/21/mc-2-1742564068582.jpg",
            "https://ukstories.microsoft.com/wp-content/uploads/2016/11/minecraft1-6-4-1920x1080-png2-1.png"
        ],
        thumbnails: [
            "https://play-lh.googleusercontent.com/Fb4tT__Eg2h2ZtvPJk8oA7osBLrTeo6JPBZfVnZjD0YXKiRjc8uZkPWtAm9NS-J6gA=w526-h296-rw",
            "https://i.ytimg.com/vi/Ua6C65IFQ_Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB88v_zUGFX1Os_KDWidgM1Uhl-eA",
            "https://gagadget.com/media/uploads/fgr.jpg",
            "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_500/store/software/switch/70010000000964/fe30a072a38e1c83abca8ad0987d40cb054da8bdb684d8b59562e07aaceb1e84"
        ],
        releaseDate: "2011-11-18",
        recommended: true
    },
    {
        id: 6,
        title: "Cyberpunk 2077",
        price: 59.99,
        rating: 4.3,
        category: "RPG",
        platform: "PC",
        description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the dark future of Night City — a dangerous megalopolis obsessed with power, glamor, and ceaseless body modification.",
        image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJ1N3F0YzRmc2Vod2N3NWdobjU5MXA5eDg0NTNlM2liazd5eDhyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fA7rLtaJDIWEzU57CT/giphy.gif",
        gif: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWJ1N3F0YzRmc2Vod2N3NWdobjU5MXA5eDg0NTNlM2liazd5eDhyOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fA7rLtaJDIWEzU57CT/giphy.gif",
        screenshots: [
            "https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg",
            "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/644eb087007768417a847e52c38eeaf34b57fd12/page_bg_raw.jpg?t=1769690377",
            "https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg",
            "https://store-images.s-microsoft.com/image/apps.34838.63407868131364914.bcaa868c-407e-42c2-baeb-48a3c9f29b54.1463028d-79fa-46e5-9fc2-63203992a4dc?q=90&w=480&h=270"
        ],
        thumbnails: [
            "https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/22150614/ss_ae4465fa8a44dd330dbeb7992ba196c2f32cabb1.jpg",
            "https://cdn.mos.cms.futurecdn.net/YvuKkPbZsS2EXzPbWtnvP.jpg",
            "https://www.digitaltrends.com/tachyon/2020/12/cyberpunk2077_lucky_number_13_rgb-en.jpg?resize=1200%2C630",
            "https://www.slantmagazine.com/wp-content/uploads/2023/09/cyberpunk2077phantomliberty.jpg"
        ],
        releaseDate: "2020-12-10",
        recommended: false
    },
    {
        id: 7,
        title: "Elden Ring",
        price: 59.99,
        rating: 4.9,
        category: "RPG",
        platform: "Xbox",
        description: "THE CRITICALLY ACCLAIMED FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        image: "https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyc255MXV2cWduOHFkZzNzZHE2OXE0NXFra3Bkbmc4OXZ2N3Q2ZndldSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8SNHEWM66EE9WF5xUi/giphy.gif",
        gif: "https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyc255MXV2cWduOHFkZzNzZHE2OXE0NXFra3Bkbmc4OXZ2N3Q2ZndldSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/8SNHEWM66EE9WF5xUi/giphy.gif",
        screenshots: [
            "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/YMUoJUYNX0xWk6eTKuZLr5Iw.jpg",
            "https://i.ytimg.com/vi/JldMvQMO_5U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBMWbB4SGddM540ALABGCJ-3fEcLw",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbI7NJ2-bk7qY4dNzt6I52_g6HRFMpjPJuYw&s",
            "https://pyxis.nymag.com/v1/imgs/f6b/579/d39cfcffd84a68af1a15581805439f53dd-elden-ring-new.rhorizontal.w700.jpg"
        ],
        thumbnails: [
            "https://cdn.thewirecutter.com/wp-content/media/2022/03/elden-ring-2048px-0003.jpg?auto=webp&quality=75&width=1024",
            "https://thegemsbok.com/wp-content/uploads/2022/04/Elden-Ring-screenshot-with-draconic-tree-sentinel.png",
            "https://cdn.arstechnica.net/wp-content/uploads/2024/02/Screenshot-2024-02-21-at-10.07.10%E2%80%AFAM.png",
            "https://cdn.mos.cms.futurecdn.net/PjhveTjTLLAvSuSeZsjGsJ-1200-80.jpg"
        ],
        releaseDate: "2022-02-25",
        recommended: false
    },
    {
        id: 8,
        title: "Baldur's Gate 3",
        price: 59.99,
        rating: 4.8,
        category: "RPG",
        platform: "PC",
        description: "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
        image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3hicjh0bnN3NHp2Mmc0amxvOWhvemxzcGlxOTI0dWNta3UzejB1diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ehy9ats5TsYTsVaJ62/giphy.gif",
        gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3hicjh0bnN3NHp2Mmc0amxvOWhvemxzcGlxOTI0dWNta3UzejB1diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ehy9ats5TsYTsVaJ62/giphy.gif",
        screenshots: [
            "https://image.api.playstation.com/vulcan/ap/rnd/202308/1519/95cce955dc59d04e2ea5ab624a823ace14e9c5f7e24dfb8f.png",
            "https://xboxwire.thesourcemediaassets.com/sites/2/2023/12/BG3-hero-1-361d41c69eea52943d1e.jpg",
            "https://cdn.mos.cms.futurecdn.net/DkoTzAAHUMeTBHDzocVS54.jpg",
            "https://cdn.mos.cms.futurecdn.net/GPeH7SniSHoowF54ZKeyNM.jpg"
        ],
        thumbnails: [
            "https://cdn.mos.cms.futurecdn.net/w7tibjAzF77LtWEP3Urp4.jpg",
            "https://images.gog-statics.com/3ed742bb69a110007643c0ca14e3a488c6dc66a3a432e839654320a5a7400953_product_card_v2_mobile_slider_639.jpg",
            "https://techcrunch.com/wp-content/uploads/2023/08/BG3_Underdark.png",
            "https://www.gamereactor.eu/media/94/baldursgate3_4079443b.jpg"
        ],
        releaseDate: "2023-08-03",
        recommended: false
    }
];

// ========== GLOBAL STATE ==========
let cart = [];
let wishlist = [];
let currentGame = null;
let filteredGames = [...games];
let currentSlide = 0;

// ========== LOAD ON PAGE START ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐆 Cat_Warehouse initialized...');
    loadFromLocalStorage();
    renderHomePage();
    renderGamesPage();
    updateAllBadges();
    setupEventListeners();
    showPage('home');
});

// ========== ALL EVENT LISTENERS ==========
function setupEventListeners() {
    // Navigation links
    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateNewsletter();
        });
    }

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateContactForm();
        });
    }

    // Search button
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            applyFilters();
        });
    }

    // Apply filters button
    const applyBtn = document.getElementById('apply-filters');
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            applyFilters();
        });
    }

    // Clear filters button
    const clearBtn = document.getElementById('clear-filters');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            clearFilters();
        });
    }

    // Grid view button
    const gridBtn = document.getElementById('grid-view');
    if (gridBtn) {
        gridBtn.addEventListener('click', function() {
            setGridView();
        });
    }
    
    // List view button
    const listBtn = document.getElementById('list-view');
    if (listBtn) {
        listBtn.addEventListener('click', function() {
            setListView();
        });
    }

    // Carousel controls
    const prevBtn = document.getElementById('carousel-prev');
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
        });
    }
    
    const nextBtn = document.getElementById('carousel-next');
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
        });
    }

    // Back to games button
    const backBtn = document.getElementById('back-to-games');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            showPage('games');
        });
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) {
                alert('🐆 your cart is empty!');
                return;
            }
            showPage('checkout');
        });
    }

    // Payment form
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validatePayment();
        });
    }
}

// ========== PAGE NAVIGATION ==========
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Remove active from nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Add active to clicked nav link
    const activeLink = document.querySelector(`[data-page="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Special page renderings
    if (pageId === 'cart') renderCartPage();
    if (pageId === 'wishlist') renderWishlistPage();
    if (pageId === 'receipt') {
        setTimeout(setupPrintButton, 100);
    }
}

// ========== LOCAL STORAGE ==========
function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('cat_cart');
    const savedWishlist = localStorage.getItem('cat_wishlist');
    
    if (savedCart) cart = JSON.parse(savedCart);
    if (savedWishlist) wishlist = JSON.parse(savedWishlist);
}

function saveToLocalStorage() {
    localStorage.setItem('cat_cart', JSON.stringify(cart));
    localStorage.setItem('cat_wishlist', JSON.stringify(wishlist));
}

// ========== HOME PAGE ==========
function renderHomePage() {
    renderHeroCarousel();
    renderRecommendedGames();
}

function renderHeroCarousel() {
    const recommended = games.filter(game => game.recommended);
    const carousel = document.getElementById('hero-carousel');
    
    if (!carousel) return;
    
    carousel.innerHTML = recommended.map((game, index) => `
        <div class="carousel-slide" data-index="${index}" ${index !== 0 ? 'style="display:none;"' : ''}>
            <img src="${game.gif}" alt="${game.title}">
            <div class="carousel-content">
                <h2>${game.title}</h2>
                <p>⭐ ${game.rating}/5</p>
                <p class="price">$${game.price}</p>
                <button onclick="viewGameDetails(${game.id})">VIEW DETAILS</button>
            </div>
        </div>
    `).join('');
    
    currentSlide = 0;
    console.log('Carousel rendered with', recommended.length, 'slides'); 
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    
    // Force hide current slide 
    slides[currentSlide].style.setProperty('display', 'none', 'important');
    
    // Move to next slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Force show new slide
    slides[currentSlide].style.setProperty('display', 'flex', 'important');
    
    console.log('Next slide - new:', currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;
    
    slides[currentSlide].style.setProperty('display', 'none', 'important');
    
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    
    slides[currentSlide].style.setProperty('display', 'flex', 'important');
    
    console.log('Prev slide - new:', currentSlide);
}

function renderRecommendedGames() {
    const recommended = games.filter(game => game.recommended);
    const container = document.getElementById('recommended-games');
    
    if (!container) return;
    
    container.innerHTML = recommended.map(game => `
        <div class="game-card">
            <img src="${game.gif}" alt="${game.title}" onclick="viewGameDetails(${game.id})">
            <div class="game-info">
                <div class="game-title" onclick="viewGameDetails(${game.id})">${game.title}</div>
                <div class="game-price">$${game.price}</div>
                <div class="rating">⭐ ${game.rating}</div>
                <div class="card-actions">
                    <button onclick="event.stopPropagation(); addToCart(${game.id})">ADD TO CART</button>
                    <button onclick="event.stopPropagation(); addToWishlist(${game.id})" class="wishlist-btn">❤️</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ========== GAMES PAGE ==========
function renderGamesPage() {
    const container = document.getElementById('games-container');
    if (!container) return;
    
    container.innerHTML = filteredGames.map(game => `
        <div class="game-card">
            <img src="${game.gif}" alt="${game.title}" onclick="viewGameDetails(${game.id})">
            <div class="game-info">
                <div class="game-title" onclick="viewGameDetails(${game.id})">${game.title}</div>
                <div class="game-price">$${game.price}</div>
                <div class="rating">⭐ ${game.rating}</div>
                <div class="game-meta">${game.category} | ${game.platform}</div>
                <div class="card-actions">
                    <button onclick="event.stopPropagation(); addToCart(${game.id})">ADD TO CART</button>
                    <button onclick="event.stopPropagation(); addToWishlist(${game.id})" class="wishlist-btn">❤️</button>
                </div>
            </div>
        </div>
    `).join('');
}

function applyFilters() {
    let filtered = [...games];
    
    const searchTerm = document.getElementById('search-input')?.value.toLowerCase() || '';
    if (searchTerm) {
        filtered = filtered.filter(game => 
            game.title.toLowerCase().includes(searchTerm)
        );
    }
    
    const category = document.getElementById('category-filter')?.value || 'all';
    if (category !== 'all') {
        filtered = filtered.filter(game => game.category === category);
    }
    
    const platform = document.getElementById('platform-filter')?.value || 'all';
    if (platform !== 'all') {
        filtered = filtered.filter(game => game.platform === platform);
    }
    
    const priceRange = document.getElementById('price-filter')?.value || 'all';
    if (priceRange !== 'all') {
        switch(priceRange) {
            case '0-20':
                filtered = filtered.filter(game => game.price <= 20);
                break;
            case '20-40':
                filtered = filtered.filter(game => game.price > 20 && game.price <= 40);
                break;
            case '40-60':
                filtered = filtered.filter(game => game.price > 40 && game.price <= 60);
                break;
            case '60+':
                filtered = filtered.filter(game => game.price > 60);
                break;
        }
    }
    
    const sortBy = document.getElementById('sort-filter')?.value || 'default';
    switch(sortBy) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'name':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }
    
    filteredGames = filtered;
    renderGamesPage();
}

function clearFilters() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';
    
    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) categoryFilter.value = 'all';
    
    const platformFilter = document.getElementById('platform-filter');
    if (platformFilter) platformFilter.value = 'all';
    
    const priceFilter = document.getElementById('price-filter');
    if (priceFilter) priceFilter.value = 'all';
    
    const sortFilter = document.getElementById('sort-filter');
    if (sortFilter) sortFilter.value = 'default';
    
    filteredGames = [...games];
    renderGamesPage();
}

function setGridView() {
    const container = document.getElementById('games-container');
    if (container) {
        container.classList.remove('list-view');
        container.classList.add('grid-view');
    }
    
    const gridBtn = document.getElementById('grid-view');
    const listBtn = document.getElementById('list-view');
    if (gridBtn) gridBtn.classList.add('active');
    if (listBtn) listBtn.classList.remove('active');
}

function setListView() {
    const container = document.getElementById('games-container');
    if (container) {
        container.classList.remove('grid-view');
        container.classList.add('list-view');
    }
    
    const gridBtn = document.getElementById('grid-view');
    const listBtn = document.getElementById('list-view');
    if (gridBtn) gridBtn.classList.remove('active');
    if (listBtn) listBtn.classList.add('active');
}

// ========== GAME DETAIL PAGE ==========

// Sample reviews
const reviews = [
    { user: "night&owl", rating: 5, comment: "played this at 3am and cried. 11/10." },
    { user: "grumpy_cat", rating: 4, comment: "actually fantastic. reallyyy didn't want to admit it." },
    { user: "warehouseRat45", rating: 5, comment: "lives up to the hype. trust." },
    { user: "sunbeamz", rating: 5, comment: "perfect for my bout of lazy sunday gaming (aka hibernation)" }
];

function viewGameDetails(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    currentGame = game;
    const container = document.getElementById('game-detail-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="detail-wrapper" style="background: var(--container-teal); padding: 2rem; border: 2px solid var(--pop-peach);">
            <h1 style="color: var(--bg-sand);">${game.title}</h1>
            
            <div style="display: flex; gap: 2rem; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 300px;">
                    <img src="${game.gif}" alt="${game.title}" style="width: 100%; border: 2px solid var(--pop-peach);">
                    
                    <h3 style="color: var(--bg-sand); margin: 1rem 0;">THUMBNAILS</h3>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        ${game.thumbnails.map((thumb, i) => `
                            <img src="${thumb}" alt="thumb ${i+1}" style="width: 80px; height: 80px; object-fit: cover; border: 1px solid var(--pop-peach); cursor: pointer;" onclick="this.src='${game.screenshots[i]}'">
                        `).join('')}
                    </div>
                </div>
                
                <div style="flex: 1; min-width: 300px;">
                    <h3 style="color: var(--bg-sand);">DESCRIPTION</h3>
                    <p style="color: var(--bg-sand);">${game.description}</p>
                    
                    <h3 style="color: var(--bg-sand); margin-top: 1.5rem;">SPECS</h3>
                    <div style="background: var(--brown-dark); padding: 1rem; border-left: 4px solid var(--pop-peach);">
                        <p style="color: var(--bg-sand);"><span style="color: var(--pop-peach);">category:</span> ${game.category}</p>
                        <p style="color: var(--bg-sand);"><span style="color: var(--pop-peach);">platform:</span> ${game.platform}</p>
                        <p style="color: var(--bg-sand);"><span style="color: var(--pop-peach);">released:</span> ${formatDate(game.releaseDate)}</p>
                        <p style="color: var(--bg-sand);"><span style="color: var(--pop-peach);">rating:</span> ⭐ ${game.rating}/5</p>
                        <p style="color: var(--bg-sand);"><span style="color: var(--pop-peach);">price:</span> <span style="color: var(--pop-peach); font-weight: bold;">$${game.price}</span></p>
                    </div>
                </div>
            </div>
            
            <h3 style="color: var(--bg-sand); margin: 2rem 0 1rem;">SCREENSHOTS</h3>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
                ${game.screenshots.map((shot, i) => `
                    <img src="${shot}" alt="screenshot ${i+1}" style="width: 200px; height: 120px; object-fit: cover; border: 1px solid var(--pop-peach);">
                `).join('')}
            </div>
            
            <h3 style="color: var(--bg-sand); margin-bottom: 1rem;">REVIEWS</h3>
            <div style="margin-bottom: 2rem;">
                ${reviews.map(review => `
                    <div style="background: var(--brown-dark); padding: 1rem; margin-bottom: 0.5rem; border-left: 4px solid var(--pop-peach);">
                        <strong style="color: var(--pop-peach);">${review.user}</strong> <span style="color: var(--bg-sand);">⭐ ${review.rating}/5</span>
                        <p style="color: var(--bg-sand); margin-top: 0.5rem;">"${review.comment}"</p>
                    </div>
                `).join('')}
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button onclick="addToCart(${game.id})" style="background: transparent; border: 2px solid var(--pop-peach); color: var(--bg-sand); padding: 1rem 2rem; cursor: pointer;">ADD TO CART</button>
                <button onclick="addToWishlist(${game.id})" style="background: var(--pop-peach); border: none; color: var(--brown-deep); padding: 1rem 2rem; cursor: pointer;">❤️ ADD TO WISHLIST</button>
            </div>
        </div>
    `;
    
    showPage('game-detail');
}

// ========== CART FUNCTIONS ==========
function addToCart(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    const existingItem = cart.find(item => item.id === gameId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: game.id,
            title: game.title,
            price: game.price,
            gif: game.gif,
            quantity: 1
        });
    }
    
    saveToLocalStorage();
    updateAllBadges();
    renderCartPage();
    showNotification(`${game.title} added to cart`);
}

function removeFromCart(gameId) {
    cart = cart.filter(item => item.id !== gameId);
    saveToLocalStorage();
    updateAllBadges();
    renderCartPage();
}

function updateQuantity(gameId, change) {
    const item = cart.find(item => item.id === gameId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(gameId);
        } else {
            saveToLocalStorage();
            updateAllBadges();
            renderCartPage();
        }
    }
}

function renderCartPage() {
    const container = document.getElementById('cart-items');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>your cart is empty.</p><p>🐆 go grab some games</p></div>';
        document.getElementById('cart-subtotal').textContent = '0.00';
        document.getElementById('cart-tax').textContent = '0.00';
        document.getElementById('cart-total').textContent = '0.00';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.gif}" alt="${item.title}" 
                 style="width: 100px; height: 100px; object-fit: cover; border: 2px solid var(--pop-peach);"
                 onerror="this.src='https://placehold.co/100x100/4e736d/c3b9a0?text=🎮'">
            <div class="cart-item-info">
                <h3>${item.title}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <p>subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id})" class="remove-btn">REMOVE</button>
            </div>
        </div>
    `).join('');
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.13;
    const total = subtotal + tax;
    
    document.getElementById('cart-subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('cart-tax').textContent = tax.toFixed(2);
    document.getElementById('cart-total').textContent = total.toFixed(2);
}

// ========== WISHLIST FUNCTIONS ==========
function addToWishlist(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    if (!wishlist.find(item => item.id === gameId)) {
        wishlist.push({
            id: game.id,
            title: game.title,
            price: game.price,
            gif: game.gif
        });
        
        saveToLocalStorage();
        updateAllBadges();
        renderWishlistPage();
        showNotification(`${game.title} added to wishlist`);
    }
}

function removeFromWishlist(gameId) {
    wishlist = wishlist.filter(item => item.id !== gameId);
    saveToLocalStorage();
    updateAllBadges();
    renderWishlistPage();
}

function moveToCart(gameId) {
    addToCart(gameId);
    removeFromWishlist(gameId);
}

function renderWishlistPage() {
    const container = document.getElementById('wishlist-items');
    if (!container) return;
    
    if (wishlist.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>your wishlist is empty.</p><p>🐆 find something you like</p></div>';
        return;
    }
    
    container.innerHTML = wishlist.map(item => `
        <div class="wishlist-item">
            <img src="${item.gif}" alt="${item.title}"
                 style="width: 100px; height: 100px; object-fit: cover; border: 2px solid var(--pop-peach);"
                 onerror="this.src='https://placehold.co/100x100/4e736d/c3b9a0?text=🎮'">
            <div class="wishlist-item-info">
                <h3>${item.title}</h3>
                <p class="price">$${item.price.toFixed(2)}</p>
                <div class="wishlist-actions">
                    <button onclick="moveToCart(${item.id})">ADD TO CART</button>
                    <button onclick="removeFromWishlist(${item.id})" class="remove-btn">REMOVE</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ========== BADGE UPDATES ==========
function updateAllBadges() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const wishlistCount = wishlist.length;
    
    const cartBadge = document.getElementById('cart-badge');
    const wishlistBadge = document.getElementById('wishlist-badge');
    
    if (cartBadge) cartBadge.textContent = cartCount;
    if (wishlistBadge) wishlistBadge.textContent = wishlistCount;
}

// ========== FORM VALIDATION ==========
function validateNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    const errorDiv = document.getElementById('newsletter-error');
    
    if (!email) {
        errorDiv.textContent = 'email required';
        return false;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        errorDiv.textContent = 'valid email required';
        return false;
    }
    
    errorDiv.textContent = '';
    alert('🐆 subscribed! check your email');
    document.getElementById('newsletter-form').reset();
    return true;
}

function validateContactForm() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    const errorDiv = document.getElementById('contact-error');
    
    if (!name || !email || !message) {
        errorDiv.textContent = 'all fields required';
        return false;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        errorDiv.textContent = 'valid email required';
        return false;
    }
    
    errorDiv.textContent = '';
    alert('🐆 message sent! we\'ll get back to you');
    document.getElementById('contact-form').reset();
    return true;
}

// ========== CHECKOUT ==========
function validatePayment() {
    const email = document.getElementById('payment-email').value;
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCVV = document.getElementById('card-cvv').value;
    const errorDiv = document.getElementById('payment-error');
    
    if (!email || !email.includes('@') || !email.includes('.')) {
        errorDiv.textContent = 'valid email required';
        return false;
    }
    
    if (!cardNumber || cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        errorDiv.textContent = 'card must be 16 digits';
        return false;
    }
    
    if (!cardExpiry || !/^\d{2}\/\d{2}$/.test(cardExpiry)) {
        errorDiv.textContent = 'use MM/YY format';
        return false;
    }
    
    if (!cardCVV || !/^\d{3,4}$/.test(cardCVV)) {
        errorDiv.textContent = 'CVV must be 3-4 digits';
        return false;
    }
    
    errorDiv.textContent = '';
    
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.classList.remove('hidden');
    
    setTimeout(() => {
        if (spinner) spinner.classList.add('hidden');
        processOrder(email);
    }, 2000);
    
    return true;
}

function processOrder(email) {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 9000 + 1000);
    const orderNumber = `CAT-${year}${month}${day}-${random}`;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.13;
    const total = subtotal + tax;
    
    const receiptData = {
        orderNumber: orderNumber,
        orderDate: `${day}/${month}/${year}`,
        email: email,
        items: [...cart],
        subtotal: subtotal,
        tax: tax,
        total: total
    };
    
    renderReceipt(receiptData);
    
    cart = [];
    saveToLocalStorage();
    updateAllBadges();
    
    showPage('receipt');
}

// ========== RECEIPT PAGE & PRINT FUNCTION ==========
function renderReceipt(data) {
    console.log('🎫 RENDER RECEIPT START');
    
    const body = document.body;
    
    // Save navbar
    const navbar = document.querySelector('.navbar').outerHTML;
    
    body.innerHTML = navbar + `
        <div style="margin-top: 100px; padding: 40px; background: #c3b9a0; min-height: 100vh;">
            <div style="max-width: 800px; margin: 0 auto; background: #4e736d; border: 3px solid #e5a985; padding: 40px;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="font-size: 80px; margin-bottom: 10px;">🐱</div>
                    <h1 style="font-family: 'Laquer', cursive; font-size: 48px; color: #c3b9a0; margin: 0 0 10px 0;">Cat_Warehouse</h1>
                    <p style="color: #c3b9a0; font-size: 18px; letter-spacing: 4px;">// ORDER CONFIRMED</p>
                </div>
                
                <div style="background: #494238; padding: 30px; margin: 30px 0; border-left: 5px solid #e5a985;">
                    <p style="color: #c3b9a0; font-size: 18px; margin: 10px 0;">
                        <span style="color: #e5a985; display: inline-block; width: 120px;">Order #:</span> ${data.orderNumber}
                    </p>
                    <p style="color: #c3b9a0; font-size: 18px; margin: 10px 0;">
                        <span style="color: #e5a985; display: inline-block; width: 120px;">Date:</span> ${data.orderDate}
                    </p>
                    <p style="color: #c3b9a0; font-size: 18px; margin: 10px 0;">
                        <span style="color: #e5a985; display: inline-block; width: 120px;">Email:</span> ${data.email}
                    </p>
                </div>
                
                <h2 style="color: #c3b9a0; font-size: 28px; margin: 30px 0 20px;">ITEMS</h2>
                
                ${data.items.map(item => `
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px; border-bottom: 2px dashed #c3b9a0;">
                        <span style="color: #c3b9a0; font-size: 18px;">${item.title} x${item.quantity}</span>
                        <span style="color: #e5a985; font-size: 20px; font-weight: bold;">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
                
                <div style="margin-top: 40px; padding: 30px; background: #494238;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                        <span style="color: #c3b9a0; font-size: 20px;">Subtotal:</span>
                        <span style="color: #c3b9a0; font-size: 20px;">$${data.subtotal.toFixed(2)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                        <span style="color: #c3b9a0; font-size: 20px;">Tax (13%):</span>
                        <span style="color: #c3b9a0; font-size: 20px;">$${data.tax.toFixed(2)}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 20px; padding-top: 20px; border-top: 3px solid #e5a985;">
                        <span style="color: #c3b9a0; font-size: 28px; font-weight: bold;">TOTAL:</span>
                        <span style="color: #e5a985; font-size: 32px; font-weight: bold;">$${data.total.toFixed(2)}</span>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 50px;">
                    <p style="color: #c3b9a0; font-size: 20px; margin-bottom: 10px;">thank you for shopping at Cat_Warehouse :)</p>
                    <p style="color: #c3b9a0; font-size: 24px;">🐆 grungy games for nightowls</p>
                </div>
                
                <div style="display: flex; gap: 20px; justify-content: center; margin-top: 40px;">
                    <button onclick="window.print()" style="padding: 15px 30px; background: transparent; border: 2px solid #e5a985; color: #c3b9a0; font-size: 18px; cursor: pointer;">🖨️ PRINT</button>
                    <button onclick="location.reload()" style="padding: 15px 30px; background: #e5a985; border: none; color: #2a1b14; font-size: 18px; cursor: pointer;">← HOME</button>
                </div>
            </div>
        </div>
    `;
    
    console.log('✅ PAGE COMPLETELY REPLACED WITH RECEIPT');
}

function setupPrintButton() {
    const printBtn = document.getElementById('print-receipt-btn');
    
    if (printBtn) {
        const newPrintBtn = printBtn.cloneNode(true);
        printBtn.parentNode.replaceChild(newPrintBtn, printBtn);
        
        newPrintBtn.addEventListener('click', function(e) {
            e.preventDefault();
            printReceipt();
        });
    }
    
    const continueBtn = document.getElementById('continue-shopping-btn');
    if (continueBtn) {
        const newContinueBtn = continueBtn.cloneNode(true);
        continueBtn.parentNode.replaceChild(newContinueBtn, continueBtn);
        
        newContinueBtn.addEventListener('click', function() {
            showPage('home');
        });
    }
}

function printReceipt() {
    const data = window.currentReceiptData;
    if (!data) {
        alert('🐆 no receipt to print');
        return;
    }
    
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    
    if (!printWindow) {
        alert('🐆 please allow pop-ups to print');
        return;
    }
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Cat_Warehouse - ${data.orderNumber}</title>
            <link href="https://fonts.googleapis.com/css2?family=Laquer&display=swap" rel="stylesheet">
            <style>
                @font-face {
                    font-family: 'Mont';
                    src: url('fonts/Mont-HeavyDEMO.woff2') format('woff2');
                    font-weight: 800;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'TT Fors';
                    src: url('fonts/TT Fors Trial Regular.woff2') format('woff2');
                    font-weight: normal;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'TT Fors';
                    src: url('fonts/TT Fors Trial Bold.woff2') format('woff2');
                    font-weight: bold;
                    font-style: normal;
                }
                
                :root {
                    --bg-sand: #c3b9a0;
                    --container-teal: #4e736d;
                    --pop-peach: #e5a985;
                    --brown-dark: #494238;
                    --brown-deep: #2a1b14;
                }
                
                * { margin: 0; padding: 0; box-sizing: border-box; }
                
                body {
                    font-family: 'TT Fors', monospace;
                    background: var(--bg-sand);
                    color: var(--brown-deep);
                    padding: 40px 20px;
                    display: flex;
                    justify-content: center;
                }
                
                .receipt {
                    max-width: 700px;
                    width: 100%;
                    background: var(--container-teal);
                    padding: 40px;
                    border: 3px solid var(--pop-peach);
                    box-shadow: 10px 10px 0 rgba(42, 27, 20, 0.1);
                }
                
                .cheetah { 
                    width: 60px; 
                    height: auto;
                }
                
                h2 {
                    font-family: 'Laquer', cursive;
                    font-size: 32px;
                    color: var(--bg-sand);
                    margin: 10px 0;
                    letter-spacing: 2px;
                }
                
                h1, h3, .order-badge {
                    font-family: 'Mont', sans-serif;
                    letter-spacing: 2px;
                    text-transform: uppercase;
                    font-weight: 800;
                    color: var(--bg-sand);
                }
                
                .info-box {
                    background: var(--brown-dark);
                    padding: 20px;
                    margin: 20px 0;
                    border-left: 4px solid var(--pop-peach);
                }
                
                .info-box p {
                    margin: 8px 0;
                    font-size: 14px;
                    color: var(--bg-sand);
                }
                
                .info-box span {
                    color: var(--pop-peach);
                    display: inline-block;
                    width: 100px;
                }
                
                .item {
                    display: flex;
                    justify-content: space-between;
                    padding: 12px;
                    border-bottom: 1px dashed var(--bg-sand);
                    font-size: 14px;
                    color: var(--bg-sand);
                }
                
                .totals {
                    margin-top: 30px;
                    padding: 20px;
                    background: var(--brown-dark);
                }
                
                .total-row {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                    font-size: 16px;
                    color: var(--bg-sand);
                }
                
                .grand-total {
                    font-size: 22px;
                    font-weight: bold;
                    margin-top: 15px;
                    padding-top: 15px;
                    border-top: 2px solid var(--pop-peach);
                    color: var(--pop-peach);
                }
                
                .price { 
                    color: var(--pop-peach); 
                    font-weight: bold;
                }
                
                .footer {
                    text-align: center;
                    margin-top: 40px;
                    padding-top: 20px;
                    border-top: 1px solid var(--bg-sand);
                    color: var(--bg-sand);
                    opacity: 0.8;
                    font-size: 12px;
                }
                
                @media print {
                    body { background: white; }
                    .receipt { background: white; color: black; border: 2px solid black; box-shadow: none; }
                    .info-box { background: #f5f5f5; border-left: 4px solid black; }
                    .totals { background: #f5f5f5; }
                    .grand-total { color: black; border-top: 2px solid black; }
                    h2, .info-box span, h3, .total-row, .item { color: black; }
                }
            </style>
        </head>
        <body>
            <div class="receipt">
                <div style="text-align: center;">
                    <img src="images/cheetahlogo.png" alt="Cheetah sketch" class="cheetah" style="width: 60px;">
                    <h2>Cat_Warehouse</h2>
                    <div class="order-badge" style="color: var(--bg-sand);">// ORDER CONFIRMED</div>
                </div>
                
                <div class="info-box">
                    <p><span>order #</span> ${data.orderNumber}</p>
                    <p><span>date</span> ${data.orderDate}</p>
                    <p><span>email</span> ${data.email}</p>
                </div>
                
                <h3>ORDER ITEMS</h3>
                ${data.items.map(item => `
                    <div class="item">
                        <span>${item.title} <span style="color: var(--bg-sand); opacity: 0.7;">x${item.quantity}</span></span>
                        <span class="price">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
                
                <div class="totals">
                    <div class="total-row">
                        <span>subtotal</span>
                        <span>$${data.subtotal.toFixed(2)}</span>
                    </div>
                    <div class="total-row">
                        <span>tax (13%)</span>
                        <span>$${data.tax.toFixed(2)}</span>
                    </div>
                    <div class="total-row grand-total">
                        <span>TOTAL</span>
                        <span class="price">$${data.total.toFixed(2)}</span>
                    </div>
                </div>
                
                <div class="footer">
                    <p style="margin-bottom: 5px;">thank you for shopping at Cat_Warehouse</p>
                    <p>🐆 grungy games for nightowls</p>
                </div>
            </div>
            
            <script>
                window.onload = function() {
                    setTimeout(function() { window.print(); }, 100);
                    setTimeout(function() { window.close(); }, 500);
                };
            <\/script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
}

// ========== UTILITY FUNCTIONS ==========
function formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
}

function showNotification(message) {
    alert(`🐆 ${message}`);
}

