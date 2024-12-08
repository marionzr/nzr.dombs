# DOMBS Bookmarklets Documentation

Welcome to the **DOMBS Bookmarklets Documentation**. This file contains all the bookmarklets included in the **DOMinator Bookmark Suite**. You can easily copy the code for each bookmarklet and add it as a new bookmark in your browser to enhance your web experience.

## How to Use This Documentation

For each bookmarklet, you will find:
- **Title**: The name of the bookmarklet.
- **Description**: A brief explanation of what the bookmarklet does.
- **Code**: The JavaScript code to be copied and saved as a bookmark.

To make things convenient both name and code are formatted for easy copying.

### Installation

First, make sure the bookmark bar is visible in your browser. It give a better user experience. Then follow the instructions bellow:

1. Find the bookmarklet you want to add as bookmark.
2. Copy the code, exactly as it is.
3. Open the a new bookmark panel.
4. In the name field, enter the name bookmarklet
5. Past the code in the URL field.

Feel free to explore and adapt the bookmarklets to your needs for even more productive automation!

## Bookmarklets List

### Today 📅

**Description**: This bookmarklet displays the current date and time in 24-hour format, along with the name of the week day and the current week number. It provides a quick overview of today's date details in an alert box.

**Name**:
```
Today 📅
```

**Code**:
```js
javascript:(function(){const now = new Date(); const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; const weekNumber = Math.ceil(((now - new Date(now.getFullYear(), 0, 1)) / 86400000 + new Date(now.getFullYear(), 0, 1).getDay() + 1) / 7); const dateTimeString = `Today is: ${days[now.getDay()]}, Week ${weekNumber}\nDate: ${now.toLocaleDateString('en-GB')} Time: ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`; alert(dateTimeString);})();
```
---

### YT Speed Boost 🚀

**Description**: This bookmarklet allows you to watch YT videos at an increased speed to 8x. Use it to fast-forward videos quickly and get through content more efficiently. You can modify the playbackRate with values from 0.1 to 15.9 and have different bookmarks for each value. Values equal or grater than 16x seem to have effect for a short time.
<div style="text-align: center;">
    <img src="../docs/resources/yt_speed.png" alt="YT Bookmarklet screenshot" style="border: 1px solid lightgray; padding: 10px;" />
</div>

**Name**:
```
YT 8x 🚀
```

**Code**:
```js
javascript:(function(){document.getElementsByTagName("video")[0].playbackRate = 8})();
```

---

### Do No Consent 🚫

**Description**: This bookmarklet automatically unchecks all checkboxes typically used by data collection forms on websites, improving your privacy without the need of any browser extension that may prevent you from using the site.

<div style="text-align: center; background-color: rgba(31, 31, 31, 0.5); padding: 10px;">
    <img src="../docs/resources/do_not_consent.png" alt="Request your consent to use your personal data" style="border: 1px solid lightgray; padding: 5px;" />
</div>

**Name**
```
Do No Consent 🚫
```

**Code**:
```js
javascript:(function() { const uncheckCheckboxes = () => { const checkboxes = document.querySelectorAll('input[type="checkbox"]'); checkboxes.forEach(checkbox => { checkbox.checked = false; }); }; const manageOptionsButton = document.querySelector('button.fc-button.fc-cta-manage-options.fc-secondary-button'); if (manageOptionsButton) { manageOptionsButton.click(); setTimeout(() => { uncheckCheckboxes(); const nextButton = document.querySelector('button.fc-navigation-button.fc-manage-vendors'); if (nextButton) { nextButton.click(); setTimeout(() => { uncheckCheckboxes(); const confirmButton = document.querySelector('button.fc-button.fc-confirm-choices.fc-primary-button'); if (confirmButton) { confirmButton.click(); } }, 500); } }, 500); } })();
```
