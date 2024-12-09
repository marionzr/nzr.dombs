/*
Disclaimer:

The author of this bookmarklet is not responsible for any implications resulting from its use. 
Users are advised to exercise caution and discretion while using this script. 

Name: Toggle Grayscale Mode
Description: Toggles grayscale mode on the current webpage. Ideal for testing accessibility or simulating grayscale displays.
*/

javascript:(function() {
    if (document.documentElement.style.filter === "grayscale(100%)") {
        document.documentElement.style.filter = ""; // Disable grayscale
    } else {
        document.documentElement.style.filter = "grayscale(100%)"; // Enable grayscale
    }
})();
