/*
Disclaimer:

The author of this bookmarklet is not responsible for any implications resulting from its use.
Users are advised to exercise caution and discretion while using this script.
If you have questions regarding the legality of using this bookmarklet or if it may potentially break any laws, 
it is strongly recommended that you refrain from using it.

By using this bookmarklet/code, you acknowledge that you do so at your own risk.

Name: Uncheck All Checkboxes for Data Collectors
Description: This script automatically unchecks all checkboxes typically used by data collection forms.
*/

javascript:(function() {
    // Function to uncheck all checkboxes
    const uncheckCheckboxes = () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    };

    // Click the "Manage Options" button if it exists
    const manageOptionsButton = document.querySelector('button.fc-button.fc-cta-manage-options.fc-secondary-button');
    if (manageOptionsButton) {
        manageOptionsButton.click();

        // Wait and then uncheck checkboxes
        setTimeout(() => {
            uncheckCheckboxes();

            // Click the "Next" button if it exists
            const nextButton = document.querySelector('button.fc-navigation-button.fc-manage-vendors');
            if (nextButton) {
                nextButton.click();

                // Wait and then uncheck checkboxes again
                setTimeout(() => {
                    uncheckCheckboxes();

                    // Click the "Confirm Choices" button if it exists
                    const confirmButton = document.querySelector('button.fc-button.fc-confirm-choices.fc-primary-button');
                    if (confirmButton) {
                        confirmButton.click();
                    }
                }, 500);
            }
        }, 500);
    }
})();
