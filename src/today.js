/*
Disclaimer:

The author of this bookmarklet is not responsible for any implications resulting from its use.
Users are advised to exercise caution and discretion while using this script. If you have
questions regarding the legality of using this bookmarklet or if it may potentially break any laws,
it is strongly recommended that you refrain from using it.

By using this bookmarklet/code, you acknowledge that you do so at your own risk.

Name: Today
Description: This script displays an alert with the current date and time,
the name of the weekday, and the current week number in 24-hour format.
*/

javascript:(function() {
    // Get the current date and time
    const now = new Date();

    // Array containing the names of the days of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // Calculate the current week number
    // Formula: (Current day of the year + Day of the week of the first day of the year) / 7
    const weekNumber = Math.ceil(((now - new Date(now.getFullYear(), 0, 1)) / 86400000 + new Date(now.getFullYear(), 0, 1).getDay() + 1) / 7);

    // Create a formatted date and time string
    const dateTimeString = `Today is: ${days[now.getDay()]}, Week ${weekNumber}\n` +
                           `Date: ${now.toLocaleDateString('en-GB')} Time: ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

    // Display the date and time information in an alert box
    alert(dateTimeString);
})();
