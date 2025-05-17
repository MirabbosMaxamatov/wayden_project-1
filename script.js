// Testimonials Data
const testimonials = [
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d7d46d51d597e4dec63cd33e8481c4502c7c59b1?placeholderIfAbsent=true&apiKey=67bf65c60cff43c5b95c7eb6a835806e",
        name: "Jhon Smith",
        text: "Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing. Food Delivery is a thriving business"
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc02a7e51ad8414a5c5950472e26aea0ff950f2e?placeholderIfAbsent=true&apiKey=67bf65c60cff43c5b95c7eb6a835806e",
        name: "Jhon Smith",
        text: "Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing. Food Delivery is a thriving business"
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6deea7dd38c928d4720545970d44c61c56d65607?placeholderIfAbsent=true&apiKey=67bf65c60cff43c5b95c7eb6a835806e",
        name: "Jhon Smith",
        text: "Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing. Food Delivery is a thriving business"
    }
];

// News Data
const news = [
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/de8b5245a671234e1d67eb7726a1182d9b003f8e?placeholderIfAbsent=true&apiKey=67bf65c60cff43c5b95c7eb6a835806e",
        title: "Healthy Food",
        description: "Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing."
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/13b9807f596815a02a00d58a9a77f872cd8c1304?placeholderIfAbsent=true&apiKey=67bf65c60cff43c5b95c7eb6a835806e",
        title: "Healthy Food",
        description: "Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing."
    },
    {
        image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bdd9448abc089425230d083990af3c3ccd42ecb?placeholderIfAbsent=true&apiKey=67bf65c60cff43c5b95c7eb6a835806e",
        title: "Healthy Food",
        description: "Food Delivery is a thriving business and there are many opportunities for this Businesses as its Growing."
    }
];

// Render Testimonials
function renderTestimonials() {
    const container = document.getElementById('testimonials-container');
    container.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <img src="${testimonial.image}" alt="${testimonial.name}">
            <h3>${testimonial.name}</h3>
            <p>${testimonial.text}</p>
        </div>
    `).join('');
}

// Render News
function renderNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = news.map(item => `
        <div class="news-card">
            <img src="${item.image}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        </div>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderTestimonials();
    renderNews();

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add active state to navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
