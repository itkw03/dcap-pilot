function openTab(evt, tabName) {
        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }

    // Set default open tab (e.g., CustomerDetails)
    document.getElementById("customer-details").style.display = "block";




function updateCalculations() {
        var units = document.getElementById('units').value;
        var pricePerUnit = 10000; // Assuming a fixed price per unit
        var totalPrice = units * pricePerUnit;

        var depositAmount = parseFloat(document.getElementById('deposit').value) || 0;
        var financingAmount = totalPrice - depositAmount;

        var tenure = parseInt(document.getElementById('tenure').value) || 0;
        var balanceOriPayable = (financingAmount * 0.10 * (tenure / 12)) + financingAmount;

        var monthlyInstalment = tenure ? Math.ceil(balanceOriPayable / tenure) : 0; // Round up and avoid division by zero

        // Update the Total Price
        document.getElementById('total-price').value = totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        
        // Update the Financing Amount
        document.getElementById('financing-amount').value = financingAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        // Update the Balance Ori Payable
        document.getElementById('balance-ori-payable').value = balanceOriPayable.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        // Update the Monthly Instalment
        document.getElementById('monthly-instalment').value = monthlyInstalment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    // Event listeners
    document.getElementById('units').addEventListener('change', updateCalculations);
    document.getElementById('deposit').addEventListener('input', updateCalculations);
    document.getElementById('tenure').addEventListener('change', updateCalculations);

    // Initialize with default values
    updateCalculations();


function updateFileName(inputId, displayId) {
    var input = document.getElementById(inputId);
    var display = document.getElementById(displayId);
    display.value = input.files && input.files.length > 0 ? input.files[0].name : 'Choose file';
}


function moveToNextTab() {
    var tabs = document.getElementsByClassName("tablinks");
    var currentTabIndex = -1;

    // Find the index of the currently active tab
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].classList.contains("active")) {
            currentTabIndex = i;
            break;
        }
    }

    // If an active tab is found and it's not the last one, move to the next tab
    if (currentTabIndex !== -1 && currentTabIndex < tabs.length - 1) {
        // Simulate a click on the next tab
        tabs[currentTabIndex + 1].click();
    }
}

// Add event listener to Next buttons
var nextButtons = document.querySelectorAll("#next_button");
nextButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        moveToNextTab();
    });
});