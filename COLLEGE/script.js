AOS.init();

// Toggle menu for mobile
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.onscroll = function () {
  document.getElementById("scrollTopBtn").style.display =
    window.scrollY > 200 ? "block" : "none";
};

// Count-up function
function animateCounter(id, target) {
  let count = 0;
  const speed = Math.ceil(target / 100); // adjust steps
  const interval = setInterval(() => {
    count += speed;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    document.getElementById(id).innerText = count + "+";
  }, 30); // interval speed in ms
}

// Start counters when page loads
window.onload = () => {
  animateCounter("students", 1200);
  animateCounter("faculty", 100); // example
  animateCounter("labs", 50); // example
};

// FAQ toggle
function toggleFAQ(el) {
  const answer = el.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}

// Newsletter subscription
function subscribeNewsletter(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  document.getElementById("subscription-msg").innerText =
    `Thank you for subscribing, ${email}!`;
  e.target.reset();
}
