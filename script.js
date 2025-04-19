const modelDiv = document.getElementById('model');

// Function to check screen width and apply observer accordingly
function initObserver() {
  const width = window.innerWidth;

  // Only activate IntersectionObserver if the screen width is outside 1000px to 1339px
  if (width < 1000 || width > 1339) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When in view and not already loaded
          if (!modelDiv.querySelector('spline-viewer')) {
            modelDiv.innerHTML = `
              <spline-viewer url="https://prod.spline.design/82srUI5BfSZ7QCVY/scene.splinecode" class="robot-3d"></spline-viewer>
            `;
          }
        } else {
          // When out of view, remove it to save performance
          const viewer = modelDiv.querySelector('spline-viewer');
          if (viewer) {
            viewer.remove();
          }
        }
      });
    }, {
      threshold: 0.2 // Load when 20% visible
    });

    observer.observe(modelDiv);
  } else {
    // If the screen width is between 1000px and 1339px, simply load the model without observer
    if (!modelDiv.querySelector('spline-viewer')) {
      modelDiv.innerHTML = `
        <spline-viewer url="https://prod.spline.design/82srUI5BfSZ7QCVY/scene.splinecode" class="robot-3d"></spline-viewer>
      `;
    }
  }
}

// Initialize observer on page load
document.addEventListener("DOMContentLoaded", function() {
  initObserver();
});

// Reinitialize observer on window resize (optional)
window.addEventListener('resize', function() {
  initObserver();
});

function d1(){
  var link = document.createElement('a');
  link.href = 'Assets/PyTuber.exe';
  link.download = 'PyTuber.exe';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}



  document.addEventListener("DOMContentLoaded", function () {
    const width = window.innerWidth;
    
    // Get all .content elements
    const contentElements = document.querySelectorAll('.content');
    
    // If the screen width is between 1000px and 1339px, disable AOS on .content
    if (width >= 1000 && width <= 1339) {
      contentElements.forEach(function(el) {
        // Remove AOS attributes to disable the animation
        el.removeAttribute('data-aos');
      });
    } else {
      // Add AOS back to the elements if the width is outside this range
      contentElements.forEach(function(el) {
        // Optionally reapply the AOS attribute if needed
        if (!el.hasAttribute('data-aos')) {
          el.setAttribute('data-aos', 'fade-up'); // Example of a default AOS animation
        }
      });
    }

    // Initialize AOS after the changes
    AOS.init();
  });
