
 // Create floating icons for background
        const background = document.getElementById('background');
        const icons = ['<i class="fab fa-html5"></i>', '<i class="fab fa-css3-alt"></i>', '<i class="fab fa-js-square"></i>', 
                      '<i class="fab fa-react"></i>', '<i class="fab fa-node-js"></i>', '<i class="fab fa-python"></i>',
                      '<i class="fas fa-database"></i>', '<i class="fab fa-git-alt"></i>', '<i class="fab fa-github"></i>',
                      '<i class="fab fa-npm"></i>', '<i class="fab fa-aws"></i>', '<i class="fab fa-docker"></i>'];
        
        for (let i = 0; i < 30; i++) {
            const icon = document.createElement('div');
            icon.className = 'floating-icon';
            icon.innerHTML = icons[Math.floor(Math.random() * icons.length)];
            icon.style.left = `${Math.random() * 100}%`;
            icon.style.top = `${Math.random() * 100}%`;
            icon.style.animationDelay = `${Math.random() * 15}s`;
            icon.style.fontSize = `${Math.random() * 2 + 1.5}rem`;
            background.appendChild(icon);
        }

        // Section animation on scroll
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        sections.forEach(section => {
            observer.observe(section);
        });

        // Mobile menu toggle
        const menuBtn = document.querySelector('.menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    navLinks.classList.remove('active');
                }
            });
        });

        // Dark/Light mode toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        });

        // Check for saved theme preference or respect OS preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }


         // Animation for timeline items
        document.addEventListener('DOMContentLoaded', function() {
            const timelineItems = document.querySelectorAll('.timeline-item');
            
            // Function to check if element is in viewport
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            
            // Function to handle scroll event
            function handleScroll() {
                timelineItems.forEach(item => {
                    if (isInViewport(item)) {
                        item.classList.add('visible');
                    }
                });
            }
            
            // Initial check
            handleScroll();
            
            // Add scroll event listener
            window.addEventListener('scroll', handleScroll);
        });

// skill section
        (function(){
  const skills = document.querySelectorAll('.skill');

  if (!('IntersectionObserver' in window)) {
    // fallback: animate immediately
    animateAll();
  } else {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skill = entry.target;
          animateSkill(skill);
          obs.unobserve(skill);
        }
      });
    }, { threshold: 0.3 });

    skills.forEach(s => observer.observe(s));
  }

  function animateAll(){
    document.querySelectorAll('.skill').forEach(s => animateSkill(s));
  }

  function animateSkill(skillEl){
    const fill = skillEl.querySelector('.skill-fill');
    const percentEl = skillEl.querySelector('.skill-percent');
    const target = parseInt(fill.getAttribute('data-percent'), 10) || 0;
    const duration = 1200; // ms for the fill animation
    const start = performance.now();

    // animate width using requestAnimationFrame for smoothness
    function frame(now){
      const time = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - time, 3);
      const current = Math.round(eased * target);
      fill.style.width = current + '%';
      if (percentEl) percentEl.textContent = current + '%';

      if (time < 1){
        requestAnimationFrame(frame);
      } else {
        // add filled class to trigger shine
        fill.classList.add('filled');
      }
    }
    requestAnimationFrame(frame);
  }
})();






 // Count-up animation when cards enter viewport (runs once)
  (function(){
    const nums = document.querySelectorAll('.stat-number');
    if (!nums.length) return;

    function animate(el, target, duration=1200){
      const start = 0;
      const step = (timestamp, startTime) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * (target - start) + start);
        el.textContent = current;
        if (progress < 1) {
          requestAnimationFrame(ts => step(ts, startTime));
        } else {
          el.textContent = target; // ensure exact final value
        }
      };
      requestAnimationFrame(step);
    }

    // IntersectionObserver to trigger animation when visible
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10) || 0;
          animate(el, target, 1200);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.4 });

    nums.forEach(n => io.observe(n));
  })();


  // alert message -footer

  function showNumAlert() {
    alert("My whatsup number is +91 6383254476");
  }

  function showInstaAlert() {
    alert("My instagram ID is hematj2002");
  }