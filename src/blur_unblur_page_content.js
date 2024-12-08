/*
Disclaimer:

The author of this bookmarklet is not responsible for any implications resulting from its use.
Users are advised to exercise caution and discretion while using this script.
If you have questions regarding the legality of using this bookmarklet or if it may potentially break any laws, 
it is strongly recommended that you refrain from using it.

By using this bookmarklet/code, you acknowledge that you do so at your own risk.

Name: Blur/Unblur Page Content
Description: This script toggles a blur effect on the content of the page.
If the page is blurred, it removes the blur; if it is not blurred, it applies a 3px blur to the page.
*/

javascript:(function(){
    // Get the current filter style applied to the document
    let currentFilter = document.documentElement.style.filter;

    // Check if the page is already blurred with a 3px blur
    if(/^blur\((\d+(\.\d+)?)px\)$/.test(currentFilter) && currentFilter === 'blur(3px)'){
        // Remove the blur if it is already applied
        document.documentElement.style.filter = '';
    } else {
        // Apply a 3px blur if it is not already blurred
        document.documentElement.style.filter = 'blur(3px)';
    }
})();
