/*
Disclaimer:

The author of this bookmarklet is not responsible for any implications resulting from its use.
Users are advised to exercise caution and discretion while using this script.

Name: Toggle Fake 404 Page (Dark Mode)
Description: Overlays a fake "404 Page Not Found" message in dark mode. It can be toggled on and off.
*/

javascript:(function() {
    let div = document.getElementById('custom404Div');
    if (div) {
        div.remove(); // Remove the overlay if it already exists
    } else {
        div = document.createElement('div');
        div.id = 'custom404Div';
        div.style = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#121212;z-index:9999;' +
                    'display:flex;flex-direction:column;align-items:center;justify-content:center;' +
                    'font-family:Arial,sans-serif;color:#f1f1f1;text-align:center;';
        div.innerHTML = '<h1 style="font-size:120px;font-weight:bold;margin:0 0 20px;color:#f1f1f1;">404</h1>' +
                        '<p style="font-size:24px;margin:0 0 10px;color:#f1f1f1;">Page Not Found</p>' +
                        '<p style="font-size:16px;color:#bdbdbd;max-width:600px;margin:5px 0;">We can’t seem to find the page you’re looking for.<br>' +
                        'Please return to the previous page or visit our homepage for more information.</p>';
        document.body.appendChild(div); // Add the overlay to the document
    }
})();
