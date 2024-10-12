// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
/*document.querySelector('form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (!email || !message) {
        alert('Please fill out all fields.');
        e.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});

// Project Filtering
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (project.getAttribute('data-category') === category || category === 'all') {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}
*/

// Dark/Light Mode Toggle
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    document.querySelectorAll('.links_to_proj').forEach(link => {
        link.classList.toggle('dark_links_to_proj');
    });
    document.querySelectorAll('.project-description').forEach(desc => {
        desc.classList.toggle('dark_project-description');
    })
});

// Back-to-Top Button
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.addEventListener('click', () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
});

/*

// Countdown Timer
const countdownDate = new Date("June 1, 2025 00:00:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// Modal Logic for Projects
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Hover Box Effect
document.querySelector('.hover-box').addEventListener('mouseover', () => {
    document.querySelector('.hover-box').style.transform = 'scale(1.2)';
});

document.querySelector('.hover-box').addEventListener('mouseout', () => {
    document.querySelector('.hover-box').style.transform = 'scale(1)';
});

*/

// Create the lightbox container dynamically
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightboxImg.classList.add('lightbox-content');
lightbox.appendChild(lightboxImg);

const closeLightbox = document.createElement('span');
closeLightbox.classList.add('lightbox-close');
closeLightbox.innerHTML = '&times;';
lightbox.appendChild(closeLightbox);

// Event listener to open lightbox
document.querySelectorAll('.lightbox-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        lightbox.style.display = 'flex';
        lightboxImg.src = link.href;
    });
});

// Event listener to close lightbox
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        lightbox.style.display = 'none';
    }
});

