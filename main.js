// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Get theme toggle button
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = savedTheme;
    } else {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.className = prefersDarkMode ? 'dark-mode' : 'light-mode';
    }
    
    // Toggle theme on click
    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize typing animation
    initTypingAnimation();
    
    // Initialize neural network animation
    initNeuralNetworkAnimation();
    
    // Initialize skill progress animation
    initSkillProgressAnimation();
    
    // Initialize navigation active state
    initNavigation();
    
    // Force scroll to top on page load
    window.scrollTo(0, 0);
});

// Typing Animation
function initTypingAnimation() {
    const typedIntro = document.getElementById('typed-intro');
    const text = "echo 'Hello World! I am Venu Arvind Arangarajan'";
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            typedIntro.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, Math.random() * 50 + 50); // Random typing speed for realism
        }
    }
    
    typeText();
}

// Neural Network Animation
function initNeuralNetworkAnimation() {
    const networkContainer = document.querySelector('.neural-network-animation');
    if (!networkContainer) return;
    
    // Clear any existing content
    networkContainer.innerHTML = '';
    
    // Create layers with nodes
    const layer1 = document.createElement('div');
    layer1.className = 'nn-layer';
    layer1.id = 'layer1';
    
    const layer2 = document.createElement('div');
    layer2.className = 'nn-layer';
    layer2.id = 'layer2';
    
    const layer3 = document.createElement('div');
    layer3.className = 'nn-layer';
    layer3.id = 'layer3';
    
    // Add layers to container
    networkContainer.appendChild(layer1);
    networkContainer.appendChild(layer2);
    networkContainer.appendChild(layer3);
    
    // Create nodes for each layer
    createNodes(layer1, 4);
    createNodes(layer2, 6);
    createNodes(layer3, 3);
    
    // Create SVG for connections
    createConnectionsSVG(networkContainer, layer1, layer2, layer3);
}

function createNodes(layer, count) {
    for (let i = 0; i < count; i++) {
        const node = document.createElement('div');
        node.className = 'nn-node';
        node.style.width = '20px';
        node.style.height = '20px';
        node.style.borderRadius = '50%';
        node.style.backgroundColor = getRandomColor();
        node.style.margin = '20px';
        node.style.boxShadow = `0 0 10px ${getRandomColor()}`;
        node.style.position = 'relative';
        node.style.zIndex = '2';
        layer.appendChild(node);
        
        // Add animation
        node.style.animation = `pulse ${Math.random() * 2 + 1}s infinite`;
        node.style.animationDelay = `${Math.random() * 0.5}s`;
    }
}

function createConnectionsSVG(container, layer1, layer2, layer3) {
    // Create SVG element for connections
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.zIndex = '1';
    container.appendChild(svg);
    
    // Get all nodes
    const nodes1 = layer1.querySelectorAll('.nn-node');
    const nodes2 = layer2.querySelectorAll('.nn-node');
    const nodes3 = layer3.querySelectorAll('.nn-node');
    
    // Draw connections between layer 1 and 2
    setTimeout(() => {
        drawConnections(svg, nodes1, nodes2);
        // Draw connections between layer 2 and 3
        drawConnections(svg, nodes2, nodes3);
    }, 100); // Small delay to ensure nodes are positioned
}

function drawConnections(svg, nodesFrom, nodesTo) {
    for (let i = 0; i < nodesFrom.length; i++) {
        const fromNode = nodesFrom[i];
        const fromRect = fromNode.getBoundingClientRect();
        
        for (let j = 0; j < nodesTo.length; j++) {
            const toNode = nodesTo[j];
            const toRect = toNode.getBoundingClientRect();
            
            // Get container position for relative coordinates
            const containerRect = svg.parentElement.getBoundingClientRect();
            
            // Calculate positions relative to the container
            const x1 = (fromRect.left + fromRect.width/2) - containerRect.left;
            const y1 = (fromRect.top + fromRect.height/2) - containerRect.top;
            const x2 = (toRect.left + toRect.width/2) - containerRect.left;
            const y2 = (toRect.top + toRect.height/2) - containerRect.top;
            
            // Create line
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('stroke', 'rgba(66, 133, 244, 0.3)');
            line.setAttribute('stroke-width', '1');
            
            // Add animation for the line
            const animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
            animate.setAttribute('attributeName', 'stroke-opacity');
            animate.setAttribute('values', '0.2;0.6;0.2');
            animate.setAttribute('dur', `${Math.random() * 3 + 2}s`);
            animate.setAttribute('repeatCount', 'indefinite');
            line.appendChild(animate);
            
            svg.appendChild(line);
        }
    }
}

function getRandomColor() {
    const colors = [
        'var(--node-color-1)',
        'var(--node-color-2)',
        'var(--node-color-3)',
        'var(--node-color-4)'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Skill Progress Animation
function initSkillProgressAnimation() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Show skill progress when in viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.style.width; // Trigger animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        // Initially set width to 0
        const finalWidth = bar.style.width;
        bar.style.width = '0';
        
        // Set timeout to allow transition to work
        setTimeout(() => {
            bar.style.width = finalWidth;
        }, 100);
        
        observer.observe(bar);
    });
}

// Navigation Active State
function initNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    // Set first nav link as active by default
    navLinks[0].classList.add('active');
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        if (current !== '') {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
    });
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Update active link
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
}

// Data Visualization Effect for ML
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            const xPercent = Math.floor((x / rect.width) * 100);
            const yPercent = Math.floor((y / rect.height) * 100);
            card.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, var(--highlight), var(--card))`;
        } else {
            card.style.background = 'var(--card)';
        }
    });
});