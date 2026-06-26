document.addEventListener("DOMContentLoaded", function() {
    
    // Fungsi 1: Bila klik gambar banner bunga
    const bannerImage = document.querySelector(".hero-banner-box img");
    if (bannerImage) {
        bannerImage.addEventListener("click", function() {
            alert("Sabar weh, page koleksi bunga belum siap! Nanti kita link-kan ke page bouquet. ❤️");
        });
    }

    // Fungsi 2: Bila klik ikon beg/cart
    const cartIcon = document.querySelector(".header-icons button:nth-child(2)");
    if (cartIcon) {
        cartIcon.addEventListener("click", function() {
            alert("Beg anda masih kosong. Jom shopping bunga dulu!");
        });
    }
});

// Fungsi klik untuk 3 produk baru

// --- JAVASCRIPT UNTUK REPAIR IMAGE SLIDER ---
const wrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalSlides = slides.length;
const slideInterval = 4000; // Masa tukar gambar automatik (4000ms = 4 saat)

// Fungsi untuk gerakkan slide berdasarkan index
function updateSliderPosition() {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Fungsi ke gambar seterusnya
function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Balik semula ke gambar pertama bila dah habis
    }
    updateSliderPosition();
}

// Fungsi ke gambar sebelum
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Lompat ke gambar terakhir
    }
    updateSliderPosition();
}

// Pasang fungsi klik pada butang manual
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}

// Jalankan fungsi auto-slide setiap 4 saat automatik
setInterval(nextSlide, slideInterval);

// --- JAVASCRIPT AUTO-FILL NAMA BUNGA DALAM BORANG PESANAN ---
document.addEventListener("DOMContentLoaded", function() {
    const orderLinks = document.querySelectorAll(".order-link");
    const flowerInput = document.getElementById("selected-flower");

    orderLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            // 1. Ambil nama bunga daripada attribute data-name yang kita set kat HTML tadi
            const flowerName = this.getAttribute("data-name");
            
            // 2. Sumbat nama bunga tu masuk dalam kotak input borang
            if (flowerInput) {
                flowerInput.value = flowerName;
            }
        });
    });
});