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
