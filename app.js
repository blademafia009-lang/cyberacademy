// Course data from the provided JSON
const coursesData = [
  {
    "id": 1,
    "title": "Ethical Hacking Fundamentals",
    "description": "Master the art of ethical hacking with comprehensive training on penetration testing, vulnerability assessment, and security protocols.",
    "price": 199,
    "originalPrice": 299,
    "difficulty": "Beginner",
    "duration": "40 hours",
    "modules": 12,
    "rating": 4.8,
    "students": 2847,
    "instructor": "Dr. Sarah Chen",
    "image": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400",
    "category": "Ethical Hacking",
    "features": ["Hands-on Labs", "Real-world Scenarios", "CEH Prep", "24/7 Support"]
  },
  {
    "id": 2,
    "title": "Advanced Network Security",
    "description": "Dive deep into network security architecture, firewall configuration, and intrusion detection systems.",
    "price": 249,
    "originalPrice": 349,
    "difficulty": "Intermediate",
    "duration": "55 hours",
    "modules": 15,
    "rating": 4.9,
    "students": 1923,
    "instructor": "Mark Rodriguez",
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
    "category": "Network Security",
    "features": ["Network Labs", "Cisco Integration", "CISSP Prep", "Expert Mentoring"]
  },
  {
    "id": 3,
    "title": "Web Application Security",
    "description": "Learn to identify and mitigate OWASP Top 10 vulnerabilities in modern web applications.",
    "price": 179,
    "originalPrice": 249,
    "difficulty": "Intermediate",
    "duration": "35 hours",
    "modules": 10,
    "rating": 4.7,
    "students": 3156,
    "instructor": "Alex Thompson",
    "image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",
    "category": "Web Security",
    "features": ["OWASP Training", "Bug Bounty Prep", "Secure Coding", "Live Testing"]
  },
  {
    "id": 4,
    "title": "Digital Forensics Mastery",
    "description": "Comprehensive training in computer forensics, evidence collection, and incident response.",
    "price": 299,
    "originalPrice": 399,
    "difficulty": "Advanced",
    "duration": "65 hours",
    "modules": 18,
    "rating": 4.9,
    "students": 1456,
    "instructor": "Jennifer Walsh",
    "image": "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400",
    "category": "Digital Forensics",
    "features": ["Forensic Tools", "Case Studies", "Legal Aspects", "Certification Prep"]
  },
  {
    "id": 5,
    "title": "Cryptography & Data Protection",
    "description": "Master modern encryption techniques, PKI infrastructure, and data protection strategies.",
    "price": 219,
    "originalPrice": 299,
    "difficulty": "Intermediate",
    "duration": "45 hours",
    "modules": 13,
    "rating": 4.6,
    "students": 2103,
    "instructor": "Dr. Michael Kim",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
    "category": "Cryptography",
    "features": ["Crypto Labs", "Algorithm Analysis", "PKI Setup", "Compliance Training"]
  },
  {
    "id": 6,
    "title": "Malware Analysis & Reverse Engineering",
    "description": "Advanced techniques for analyzing malicious software and reverse engineering methodologies.",
    "price": 349,
    "originalPrice": 449,
    "difficulty": "Advanced",
    "duration": "70 hours",
    "modules": 20,
    "rating": 4.8,
    "students": 987,
    "instructor": "Robert Chen",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    "category": "Malware Analysis",
    "features": ["IDA Pro Training", "Dynamic Analysis", "Sandbox Setup", "Threat Hunting"]
  }
];

const testimonialsData = [
  {
    "name": "Jessica Miller",
    "role": "SOC Analyst",
    "company": "CyberTech Solutions",
    "comment": "The ethical hacking course transformed my career. The hands-on labs were incredible!",
    "rating": 5,
    "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  },
  {
    "name": "David Zhang",
    "role": "Security Engineer",
    "company": "Fortune 500 Corp",
    "comment": "Best cybersecurity training I've ever taken. The instructors are industry experts.",
    "rating": 5,
    "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
  },
  {
    "name": "Maria Santos",
    "role": "Penetration Tester",
    "company": "InfoSec Consulting",
    "comment": "Comprehensive curriculum with real-world applications. Highly recommended!",
    "rating": 5,
    "image": "https://images.unsplash.com/photo-1494790108755-2616b612b566?w=100"
  }
];

// Global state
let currentUser = null;
let currentPage = 'home';
let filteredCourses = [...coursesData];

// Matrix Rain Animation
class MatrixRain {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    this.matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    this.matrixArray = this.matrix.split("");
    
    this.font_size = 14;
    this.columns = this.canvas.width / this.font_size;
    this.drops = [];
    
    for(let x = 0; x < this.columns; x++) {
      this.drops[x] = 1;
    }
    
    this.animate();
  }
  
  animate() {
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.ctx.fillStyle = '#00ff41';
    this.ctx.font = this.font_size + 'px "Fira Code", monospace';
    
    for(let i = 0; i < this.drops.length; i++) {
      const text = this.matrixArray[Math.floor(Math.random() * this.matrixArray.length)];
      this.ctx.fillText(text, i * this.font_size, this.drops[i] * this.font_size);
      
      if(this.drops[i] * this.font_size > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
    
    requestAnimationFrame(() => this.animate());
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.columns = this.canvas.width / this.font_size;
    this.drops = [];
    for(let x = 0; x < this.columns; x++) {
      this.drops[x] = 1;
    }
  }
}

// Page Navigation
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  
  const targetPage = document.getElementById(pageId + 'Page');
  if (targetPage) {
    targetPage.classList.add('active');
    currentPage = pageId;
    
    // Populate courses when showing courses page
    if (pageId === 'courses') {
      populateCourses(coursesData, 'coursesCatalog');
    }
    
    // Update dashboard when showing dashboard
    if (pageId === 'dashboard') {
      updateDashboard();
    }
  }
}

// Typing Animation
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Counter Animation
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }
  
  updateCounter();
}

// Show notification
function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  const notificationText = document.getElementById('notificationText');
  
  if (notification && notificationText) {
    notificationText.textContent = message;
    notification.className = `notification show ${type}`;
    
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.classList.add('hidden');
      }, 300);
    }, 3000);
  }
}

// Loading functionality
function showLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.remove('hidden');
  }
}

function hideLoader() {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.classList.add('hidden');
  }
}

// Create course card HTML
function createCourseCard(course) {
  return `
    <div class="course-card" data-course-id="${course.id}">
      <img src="${course.image}" alt="${course.title}" class="course-image">
      <div class="course-content">
        <h3 class="course-title">${course.title}</h3>
        <p class="course-description">${course.description}</p>
        <div class="course-meta">
          <span class="course-difficulty">${course.difficulty}</span>
          <span class="course-duration">${course.duration}</span>
        </div>
        <div class="course-footer">
          <div class="course-pricing">
            <span class="course-price">$${course.price}</span>
            <span class="course-original-price">$${course.originalPrice}</span>
          </div>
          <button class="btn-neon course-enroll-btn" data-course-id="${course.id}">
            ${isEnrolled(course.id) ? 'View Course' : 'Enroll Now'}
          </button>
        </div>
      </div>
    </div>
  `;
}

// Create testimonial card HTML
function createTestimonialCard(testimonial) {
  return `
    <div class="testimonial-card">
      <div class="testimonial-content">
        <p>"${testimonial.comment}"</p>
      </div>
      <div class="testimonial-author">
        <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-avatar">
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.role} at ${testimonial.company}</p>
        </div>
      </div>
    </div>
  `;
}

// Populate courses
function populateCourses(courses = coursesData.slice(0, 3), containerId = 'coursesGrid') {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = courses.map(createCourseCard).join('');
  
  // Add event listeners for course cards
  container.querySelectorAll('.course-enroll-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const courseId = parseInt(e.target.dataset.courseId);
      handleCourseEnrollment(courseId);
    });
  });
  
  container.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('course-enroll-btn')) {
        const courseId = parseInt(card.dataset.courseId);
        showCourseDetail(courseId);
      }
    });
  });
}

// Populate testimonials
function populateTestimonials() {
  const container = document.getElementById('testimonialsCarousel');
  if (!container) return;
  
  container.innerHTML = testimonialsData.map(createTestimonialCard).join('');
}

// Authentication functions
function isLoggedIn() {
  return currentUser !== null;
}

function isEnrolled(courseId) {
  if (!isLoggedIn()) return false;
  return currentUser.enrolledCourses && currentUser.enrolledCourses.includes(courseId);
}

function login(email, password) {
  showLoader();
  
  setTimeout(() => {
    // Simulate login
    currentUser = {
      id: 1,
      email: email,
      name: email.split('@')[0],
      enrolledCourses: JSON.parse(localStorage.getItem('enrolledCourses') || '[]'),
      progress: JSON.parse(localStorage.getItem('courseProgress') || '{}')
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    hideLoader();
    showNotification('Login successful! Welcome back.');
    showPage('dashboard');
  }, 1500);
}

function signup(userData) {
  showLoader();
  
  setTimeout(() => {
    // Simulate signup
    currentUser = {
      id: Date.now(),
      ...userData,
      enrolledCourses: [],
      progress: {}
    };
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    hideLoader();
    showNotification('Account created successfully! Welcome to CyberAcademy.');
    showPage('dashboard');
  }, 2000);
}

function logout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  showNotification('Logged out successfully.');
  showPage('home');
}

// Course enrollment
function handleCourseEnrollment(courseId) {
  if (!isLoggedIn()) {
    showNotification('Please login to enroll in courses.', 'error');
    showPage('login');
    return;
  }
  
  if (isEnrolled(courseId)) {
    showCourseDetail(courseId);
    return;
  }
  
  // Simulate enrollment
  showLoader();
  
  setTimeout(() => {
    currentUser.enrolledCourses = currentUser.enrolledCourses || [];
    currentUser.progress = currentUser.progress || {};
    
    currentUser.enrolledCourses.push(courseId);
    currentUser.progress[courseId] = Math.floor(Math.random() * 100); // Random progress for demo
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('enrolledCourses', JSON.stringify(currentUser.enrolledCourses));
    localStorage.setItem('courseProgress', JSON.stringify(currentUser.progress));
    
    hideLoader();
    showNotification('Successfully enrolled in the course!');
    
    // Refresh course display
    if (currentPage === 'courses') {
      populateCourses(coursesData, 'coursesCatalog');
    } else {
      populateCourses();
    }
  }, 1500);
}

// Show course details
function showCourseDetail(courseId) {
  const course = coursesData.find(c => c.id === courseId);
  if (!course) return;
  
  const container = document.getElementById('courseDetailContent');
  container.innerHTML = `
    <div class="course-detail">
      <div class="course-detail-header">
        <button class="btn-outline-neon" onclick="goBack()">← Back</button>
        <h1 class="course-detail-title">${course.title}</h1>
      </div>
      <div class="course-detail-content">
        <div class="course-detail-main">
          <img src="${course.image}" alt="${course.title}" class="course-detail-image">
          <div class="course-detail-info">
            <p class="course-detail-description">${course.description}</p>
            <div class="course-detail-meta">
              <div class="course-meta-item">
                <strong>Difficulty:</strong> ${course.difficulty}
              </div>
              <div class="course-meta-item">
                <strong>Duration:</strong> ${course.duration}
              </div>
              <div class="course-meta-item">
                <strong>Modules:</strong> ${course.modules}
              </div>
              <div class="course-meta-item">
                <strong>Students:</strong> ${course.students.toLocaleString()}
              </div>
              <div class="course-meta-item">
                <strong>Rating:</strong> ⭐ ${course.rating}/5
              </div>
              <div class="course-meta-item">
                <strong>Instructor:</strong> ${course.instructor}
              </div>
            </div>
            <div class="course-features">
              <h3>What you'll learn:</h3>
              <ul>
                ${course.features.map(feature => `<li>${feature}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
        <div class="course-detail-sidebar">
          <div class="course-price-card">
            <div class="course-pricing">
              <span class="course-price">$${course.price}</span>
              <span class="course-original-price">$${course.originalPrice}</span>
            </div>
            <button class="btn-neon full-width" onclick="handleCourseEnrollment(${course.id})">
              ${isEnrolled(course.id) ? 'Continue Learning' : 'Enroll Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  
  showPage('courseDetail');
}

function goBack() {
  showPage(currentPage === 'courseDetail' ? 'courses' : 'home');
}

// Dashboard functions
function updateDashboard() {
  if (!isLoggedIn()) return;
  
  const userName = document.getElementById('userName');
  if (userName) {
    userName.textContent = currentUser.name || 'User';
  }
  
  const enrolledCount = document.getElementById('enrolledCount');
  const completedCount = document.getElementById('completedCount');
  const overallProgress = document.getElementById('overallProgress');
  
  const enrolledCoursesCount = currentUser.enrolledCourses ? currentUser.enrolledCourses.length : 0;
  
  if (enrolledCount) {
    animateCounter(enrolledCount, enrolledCoursesCount);
  }
  
  const completed = currentUser.progress ? Object.values(currentUser.progress).filter(p => p >= 100).length : 0;
  if (completedCount) {
    animateCounter(completedCount, completed);
  }
  
  const avgProgress = enrolledCoursesCount > 0 && currentUser.progress
    ? Math.round(Object.values(currentUser.progress).reduce((a, b) => a + b, 0) / enrolledCoursesCount)
    : 0;
    
  if (overallProgress) {
    animateCounter(overallProgress, avgProgress);
    setTimeout(() => {
      overallProgress.textContent = avgProgress + '%';
    }, 2000);
  }
  
  // Update enrolled courses
  const enrolledCoursesContainer = document.getElementById('enrolledCourses');
  if (enrolledCoursesContainer && currentUser.enrolledCourses && currentUser.enrolledCourses.length > 0) {
    const enrolledCourses = coursesData.filter(course => 
      currentUser.enrolledCourses.includes(course.id)
    );
    populateCourses(enrolledCourses, 'enrolledCourses');
  }
  
  // Update progress chart
  setTimeout(() => updateProgressChart(), 100);
}

// Progress Chart
function updateProgressChart() {
  const ctx = document.getElementById('progressChart');
  if (!ctx || !currentUser || !currentUser.enrolledCourses || currentUser.enrolledCourses.length === 0) return;
  
  const enrolledCourses = coursesData.filter(course => 
    currentUser.enrolledCourses.includes(course.id)
  );
  
  const data = {
    labels: enrolledCourses.map(course => course.title),
    datasets: [{
      label: 'Progress %',
      data: enrolledCourses.map(course => currentUser.progress[course.id] || 0),
      backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545'],
      borderColor: '#00ff41',
      borderWidth: 2
    }]
  };
  
  new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#ffffff'
          }
        }
      }
    }
  });
}

// Search and filter functions
function searchCourses(query) {
  const filtered = coursesData.filter(course =>
    course.title.toLowerCase().includes(query.toLowerCase()) ||
    course.description.toLowerCase().includes(query.toLowerCase()) ||
    course.category.toLowerCase().includes(query.toLowerCase())
  );
  return filtered;
}

function filterCourses(difficulty, category) {
  let filtered = [...coursesData];
  
  if (difficulty) {
    filtered = filtered.filter(course => course.difficulty === difficulty);
  }
  
  if (category) {
    filtered = filtered.filter(course => course.category === category);
  }
  
  return filtered;
}

// Password strength checker
function checkPasswordStrength(password) {
  let strength = 0;
  let feedback = 'Weak';
  
  if (password.length >= 8) strength += 25;
  if (/[a-z]/.test(password)) strength += 25;
  if (/[A-Z]/.test(password)) strength += 25;
  if (/[0-9]/.test(password)) strength += 12.5;
  if (/[^A-Za-z0-9]/.test(password)) strength += 12.5;
  
  if (strength < 50) {
    feedback = 'Weak';
  } else if (strength < 75) {
    feedback = 'Medium';
  } else {
    feedback = 'Strong';
  }
  
  return { strength, feedback };
}

// Initialize the application
function init() {
  // Initialize Matrix Animation
  const matrixCanvas = document.getElementById('matrixCanvas');
  if (matrixCanvas) {
    const matrix = new MatrixRain(matrixCanvas);
    window.addEventListener('resize', () => {
      matrix.resize();
    });
  }

  // Check if user is logged in
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    try {
      currentUser = JSON.parse(storedUser);
    } catch (e) {
      localStorage.removeItem('currentUser');
    }
  }
  
  // Start typing animation
  const typingElement = document.getElementById('typingText');
  if (typingElement) {
    typeWriter(typingElement, 'BECOME A CYBER WARRIOR', 150);
  }
  
  // Animate stats counters
  setTimeout(() => {
    document.querySelectorAll('.stat-number').forEach(stat => {
      const target = parseInt(stat.dataset.count);
      if (!isNaN(target)) {
        animateCounter(stat, target);
      }
    });
  }, 2000);
  
  // Populate content
  populateCourses();
  populateTestimonials();
  
  // Event Listeners
  
  // Navigation
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => showPage('login'));
  }
  
  const signupBtn = document.getElementById('signupBtn');
  if (signupBtn) {
    signupBtn.addEventListener('click', () => showPage('signup'));
  }
  
  const heroStartBtn = document.getElementById('heroStartBtn');
  if (heroStartBtn) {
    heroStartBtn.addEventListener('click', () => showPage('signup'));
  }
  
  const heroExploreBtn = document.getElementById('heroExploreBtn');
  if (heroExploreBtn) {
    heroExploreBtn.addEventListener('click', () => showPage('courses'));
  }
  
  const viewAllCoursesBtn = document.getElementById('viewAllCoursesBtn');
  if (viewAllCoursesBtn) {
    viewAllCoursesBtn.addEventListener('click', () => showPage('courses'));
  }
  
  // Auth form switching
  const switchToSignup = document.getElementById('switchToSignup');
  if (switchToSignup) {
    switchToSignup.addEventListener('click', (e) => {
      e.preventDefault();
      showPage('signup');
    });
  }
  
  const switchToLogin = document.getElementById('switchToLogin');
  if (switchToLogin) {
    switchToLogin.addEventListener('click', (e) => {
      e.preventDefault();
      showPage('login');
    });
  }
  
  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
  
  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      if (email && password) {
        login(email, password);
      }
    });
  }
  
  // Signup form
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const firstName = document.getElementById('signupFirstName').value;
      const lastName = document.getElementById('signupLastName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const accountType = document.getElementById('accountType').value;
      const agreeTerms = document.getElementById('agreeTerms').checked;
      
      if (firstName && lastName && email && password && accountType && agreeTerms) {
        signup({
          name: `${firstName} ${lastName}`,
          email,
          password,
          accountType
        });
      }
    });
  }
  
  // Password strength checker
  const signupPassword = document.getElementById('signupPassword');
  if (signupPassword) {
    signupPassword.addEventListener('input', (e) => {
      const password = e.target.value;
      const result = checkPasswordStrength(password);
      const strengthFill = document.querySelector('.strength-fill');
      const strengthText = document.querySelector('.strength-text');
      
      if (strengthFill && strengthText) {
        strengthFill.style.width = result.strength + '%';
        strengthText.textContent = `Password strength: ${result.feedback}`;
      }
    });
  }
  
  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showNotification('Message sent successfully! We\'ll get back to you soon.');
      e.target.reset();
    });
  }
  
  // Course search and filters
  const courseSearch = document.getElementById('courseSearch');
  if (courseSearch) {
    courseSearch.addEventListener('input', (e) => {
      const query = e.target.value;
      const difficulty = document.getElementById('difficultyFilter')?.value || '';
      const category = document.getElementById('categoryFilter')?.value || '';
      
      let filtered = searchCourses(query);
      if (difficulty || category) {
        const filterResult = filterCourses(difficulty, category);
        filtered = filtered.filter(course =>
          filterResult.some(f => f.id === course.id)
        );
      }
      
      populateCourses(filtered, 'coursesCatalog');
    });
  }
  
  const difficultyFilter = document.getElementById('difficultyFilter');
  if (difficultyFilter) {
    difficultyFilter.addEventListener('change', (e) => {
      const difficulty = e.target.value;
      const category = document.getElementById('categoryFilter')?.value || '';
      const query = document.getElementById('courseSearch')?.value || '';
      
      let filtered = filterCourses(difficulty, category);
      if (query) {
        const searched = searchCourses(query);
        filtered = filtered.filter(course =>
          searched.some(s => s.id === course.id)
        );
      }
      
      populateCourses(filtered, 'coursesCatalog');
    });
  }
  
  const categoryFilter = document.getElementById('categoryFilter');
  if (categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
      const category = e.target.value;
      const difficulty = document.getElementById('difficultyFilter')?.value || '';
      const query = document.getElementById('courseSearch')?.value || '';
      
      let filtered = filterCourses(difficulty, category);
      if (query) {
        const searched = searchCourses(query);
        filtered = filtered.filter(course =>
          searched.some(s => s.id === course.id)
        );
      }
      
      populateCourses(filtered, 'coursesCatalog');
    });
  }
  
  // Smooth scroll for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  
  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
  
  // Hide loader initially
  hideLoader();
  
  // Show appropriate page
  if (currentUser && window.location.hash === '#dashboard') {
    showPage('dashboard');
  } else {
    showPage('home');
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Make functions available globally for onclick handlers
window.showPage = showPage;
window.handleCourseEnrollment = handleCourseEnrollment;
window.showCourseDetail = showCourseDetail;
window.goBack = goBack;