/*
Disclaimer:

The author of this bookmarklet is not responsible for any implications resulting from its use.
Users are advised to exercise caution and discretion while using this script.
If you have questions regarding the legality of using this bookmarklet or if it may potentially break any laws,
it is strongly recommended that you refrain from using it.

By using this bookmarklet/code, you acknowledge that you do so at your own risk.

Name: Delete LinkedIn Notifications
Description: This script automatically deletes LinkedIn notification cards one by one.
It finds notifications that are not deleted and triggers the "Delete notification" action from the settings menu.
*/

javascript:(function(){
    let lastDeletedItemIndex = -1;

    // Function to delete LinkedIn notifications
    function deleteLinkedInNotifications() {
        function processNextCard() {
            // Select all notification cards on the page
            const notificationCards = Array.from(document.querySelectorAll('div[data-finite-scroll-hotkey-item]'));

            // Find the next notification card that is not deleted
            const nextCard = notificationCards.find(card => {
                const cardIndex = parseInt(card.getAttribute('data-finite-scroll-hotkey-item'), 10);
                const cardText = card.textContent.includes('Notification deleted.');
                return cardIndex > lastDeletedItemIndex && !cardText;
            });

            if (!nextCard) {
                console.log("No more active notifications to delete.");
                return;
            }

            // Get the index and settings button of the next card
            const cardIndex = parseInt(nextCard.getAttribute('data-finite-scroll-hotkey-item'), 10);
            const settingsButton = nextCard.querySelector('button[aria-label="Settings menu"]');

            if (settingsButton) {
                settingsButton.click();
                setTimeout(function() {
                    const deleteTextElement = Array.from(document.querySelectorAll('.nt-card-settings-dropdown-item__headline'))
                        .find(el => el.textContent.trim() === 'Delete notification');

                    if (deleteTextElement) {
                        const deleteButton = deleteTextElement.closest('button.nt-card-settings-dropdown-item__button');

                        if (deleteButton) {
                            deleteButton.click();
                            console.log(`Notification with index ${cardIndex} deleted.`);
                            lastDeletedItemIndex = cardIndex;
                            setTimeout(processNextCard, 500);
                        } else {
                            console.error("Delete button not found.");
                        }
                    } else {
                        console.error("'Delete notification' option not found.");
                    }
                }, 300);
            } else {
                console.error("Settings button not found in the notification card.");
            }
        }

        // Start the process of deleting notifications
        processNextCard();
    }

    // Call the function to delete notifications
    deleteLinkedInNotifications();
})();
