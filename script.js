// Smooth scroll effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Button hover effects
const ctaButton = document.querySelector('.cta');
if (ctaButton) {
  ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.backgroundColor = '#218838';
    ctaButton.style.transform = 'scale(1.05)';
  });
  ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.backgroundColor = '#28a745';
    ctaButton.style.transform = 'scale(1)';
  });
}

// Image hover shadow effect
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
    img.style.transition = '0.3s';
  });
  img.addEventListener('mouseout', () => {
    img.style.boxShadow = 'none';
  });
});

// Floating WhatsApp CTA (Optional)
const floatBtn = document.createElement('a');
floatBtn.href = "https://wa.me/16475345097?text=Hello,%20I%20have%20a%20question%20about%20terms%20and%20conditions";
floatBtn.target = "_blank";
floatBtn.innerHTML = `<img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="Chat" title="Chat with Us" style="width:48px;height:48px;">`;
floatBtn.style.position = "fixed";
floatBtn.style.bottom = "20px";
floatBtn.style.right = "20px";
floatBtn.style.zIndex = "999";
document.body.appendChild(floatBtn);
document.addEventListener('DOMContentLoaded', () => {
    const cta = document.querySelector('.cta');
    if (cta) {
        cta.addEventListener('mouseenter', () => {
            cta.textContent = 'Claim Your Reward Now!';
        });
        cta.addEventListener('mouseleave', () => {
            cta.textContent = 'Get Your Bonus';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const cta = document.querySelector('.cta');
    if (cta) {
        cta.addEventListener('mouseenter', () => {
            cta.textContent = 'Claim Your Reward Now!';
        });
        cta.addEventListener('mouseleave', () => {
            cta.textContent = 'Get Your Bonus';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const cta = document.querySelector('.cta');
    if (cta) {
        cta.addEventListener('mouseenter', () => {
            cta.textContent = 'Claim Your Reward Now!';
        });
        cta.addEventListener('mouseleave', () => {
            cta.textContent = 'Get Your Bonus';
        });
    }
});
