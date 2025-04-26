// main.js

export const ssStickyHeader = function() {
    const hdr = document.querySelector('.nav-container');
    if (!hdr) return;

    const triggerHeight = 0;

    window.addEventListener('scroll', function () {
        let loc = window.scrollY;

        if (loc > triggerHeight) {
            hdr.classList.add('sticky');
        } else {
            hdr.classList.remove('sticky');
        }
    });
};

export const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  export const WhiteMode = () => {
    // Select the root element
    const root = document.documentElement;
  
    // Check if white mode is currently active
    const currentColorBody = root.style.getPropertyValue('--color-body').trim();
    const isWhiteMode = currentColorBody === 'var(--color-1-lighter)';
  
    // Toggle between --color-body and --color-1-lighter
    const toggleCSSVariable = (property, value) => {
      root.style.setProperty(property, value);
    };

    if (isWhiteMode) {
      // Revert to default mode
      toggleCSSVariable('--color-body', ''); // Reset to the default value defined in CSS
      toggleCSSVariable('--mobile-bar-color', ''); // Reset to the default value
      toggleCSSVariable('--color-1-dark', ''); // Reset to the default value
      toggleCSSVariable('--color-gray-1', ''); // Reset to the default value
      toggleCSSVariable('--color-2-darker', ''); // Reset to the default value
    } else {
      // Enable white mode
      toggleCSSVariable('--color-body', 'var(--color-1-lighter)');
      toggleCSSVariable('--mobile-bar-color', 'var(--color-1-lighter)');
      toggleCSSVariable('--color-1-dark', 'var(--color-1-lighter)');
      toggleCSSVariable('--color-gray-1', 'var(--color-black)');
      toggleCSSVariable('--color-2-darker', 'var(--color-info)');
    }
    
  }