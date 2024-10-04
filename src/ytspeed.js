/*
Disclaimer:

The author of this bookmarklet is not responsible for any implications resulting from its use.
Users are advised to exercise caution and discretion while using this script. 
If you have questions regarding the legality of using this bookmarklet or if it may potentially break any laws, 
it is strongly recommended that you refrain from using it.

By using this bookmarklet/code, you acknowledge that you do so at your own risk.

Name: YouTube Speed Boost
Description: This script sets the playback speed of a YouTube video to 16x, allowing you to watch content faster.
*/

javascript:(function() {
    // Set the playback rate of the first video element on the page to 8x
    document.getElementsByTagName("video")[0].playbackRate = 8;
})();
