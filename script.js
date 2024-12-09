document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to my portfolio!");

    // Function to handle window resizing
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        
        if (windowWidth <= 768) {
            // If the screen width is less than or equal to 768px (mobile or tablet), modify the layout
            document.querySelector('header').style.backgroundColor = '#333';  // Example: Change background color
            document.querySelector('nav').style.display = 'none'; // Hide navigation on mobile

            // Optionally, you could show a hamburger menu or mobile version of the navigation
            console.log('Mobile view activated');
        } else {
            // For larger screens (desktop or larger tablets), reset styles
            document.querySelector('header').style.backgroundColor = '#000';  // Example: Reset background color
            document.querySelector('nav').style.display = 'block'; // Show navigation on desktop
        }
    };

    // Listen to the window resize event
    window.addEventListener("resize", handleResize);
    
    // Initial call to set styles when the page loads
    handleResize();
});
