// Get references to the elements
const actionButton = document.getElementById('actionButton');
const toggleImage = document.getElementById('toggleImage');

// Add a click event listener to the button
actionButton.addEventListener('click', function() {
    // Toggle the 'large-image' class on the image element
    toggleImage.classList.toggle('large-image');

    // Change the button text based on the image's current size
    if (toggleImage.classList.contains('large-image')) {
        actionButton.textContent = 'Shrink Image';
    } else {
        actionButton.textContent = 'Enlarge Image';
    }
});
