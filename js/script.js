document.addEventListener("DOMContentLoaded", function() {
    
    
    const bannerImage = document.querySelector(".hero-banner-box img");
    if (bannerImage) {
        bannerImage.addEventListener("click", function() {
            alert("Sabar weh, page koleksi bunga belum siap! Nanti kita link-kan ke page bouquet. ❤️");
        });
    }

    
    const cartIcon = document.querySelector(".header-icons button:nth-child(2)");
    if (cartIcon) {
        cartIcon.addEventListener("click", function() {
            
        });
    }
});



const wrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalSlides = slides.length;
const slideInterval = 4000; 


function updateSliderPosition() {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}


function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateSliderPosition();
}


function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; 
    }
    updateSliderPosition();
}


if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}


setInterval(nextSlide, slideInterval);


document.addEventListener("DOMContentLoaded", function() {
    const orderLinks = document.querySelectorAll(".order-link");
    const flowerInput = document.getElementById("selected-flower");

    orderLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            
            const flowerName = this.getAttribute("data-name");
            
            
            if (flowerInput) {
                flowerInput.value = flowerName;
            }
        });
    });
});


// Fungsi untuk buka pop-up borang
function openCart() {
    document.getElementById("cartModal").style.display = "block";
}

// Fungsi untuk tutup pop-up borang
function closeCart() {
    document.getElementById("cartModal").style.display = "none";
}

// Tutup borang kalau customer klik kawasan luar kotak pink
window.onclick = function(event) {
    var modal = document.getElementById("cartModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Fungsi bila tekan Submit
function submitOrder(event) {
    event.preventDefault(); // Elak page dari auto-refresh
    alert("Thank you! Your order request has been submitted successfully. 🌸");
    closeCart(); // Auto tutup form balik
    document.getElementById("orderForm").reset(); // Clear isi borang
}

// --- FUNGSI REGISTER MODAL ---
function openRegister() {
    document.getElementById("registerModal").style.display = "block";
}
function closeRegister() {
    document.getElementById("registerModal").style.display = "none";
}
function submitRegister(event) {
    event.preventDefault();
    alert("Welcome to the family! Your Aura Membership account has been created. ✨🌸");
    closeRegister();
}

// --- FUNGSI LOGIN MODAL ---
function openLogin() {
    document.getElementById("loginModal").style.display = "block";
}
function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}
function submitLogin(event) {
    event.preventDefault();
    alert("Login successful! Welcome back to Aura De Flore. 💕");
    closeLogin();
}

// --- UPDATE FUNGSI TUTUP BILA KLIK LUAR KOTAK ---
window.onclick = function(event) {
    var cartM = document.getElementById("cartModal");
    var regM = document.getElementById("registerModal");
    var logM = document.getElementById("loginModal");
    
    if (event.target == cartM) { cartM.style.display = "none"; }
    if (event.target == regM) { regM.style.display = "none"; }
    if (event.target == logM) { logM.style.display = "none"; }
};