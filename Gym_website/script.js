document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll("a.nav-link").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Contact Form Submission Alert
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your message has been sent successfully!");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById("testimonialCarousel"), {
        interval: 5000, 
        pause: "hover" 
    });
});
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); 


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const plan = document.getElementById("plan").value;
    const message = document.getElementById("message").value;


    alert(`Thank you, ${name}! You have successfully signed up for the ${plan}. We will contact you at ${email} or ${phone} shortly.`);

    
    document.getElementById("signupForm").reset();
});
