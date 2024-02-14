var customDropdownMenu = $('#customDropdown');
var customDropdownBtn = $('.custom-dropdown-btn');

    // Handle click on the button to toggle the dropdown
    customDropdownBtn.click(function() {
        customDropdownMenu.toggle();
      });
  
      // Handle click on dropdown items
      $('.custom-dropdown-menu a').click(function() {
        var selectedOption = $(this).data('option');
  

    // Make an AJAX request to fetch data from the server based on the selected option
    $.ajax({
      url: '/getdropdowndata',
      method: 'GET',
      data: { selectedOption: selectedOption },
      dataType: 'json',
      success: function(data) {
        $('#inputField1').val(data.field1);
        $('#inputField2').val(data.field2);

        // Update the button text with the selected option
        customDropdownBtn.text(selectedOption);

        // Close the dropdown menu after selection
        $('#customDropdown').hide();
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  });

  // Close the custom dropdown menu if the user clicks outside of it
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.custom-dropdown').length) {
      var customDropdownMenu = $('#customDropdown');
      customDropdownMenu.hide();
    }
  });