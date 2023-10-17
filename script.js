$(document).ready(function() {
    $("#myForm").submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        var name = $("#name").val();
        var email = $("#email").val();
        var description = $("textarea[name='Describe yorself in 3rd person:']").val();
        var selectedOption = $("#selectId").val();
        var favoritePlatform = $("input[name='name']:checked").val();
        var hobbies = [];
        $("input[name='Hiking']:checked").each(function() {
            hobbies.push($(this).val());
        });
        $("input[name='Running']:checked").each(function() {
            hobbies.push($(this).val());
        });
        $("input[name='Gym']:checked").each(function() {
            hobbies.push($(this).val());
        });
        $("input[name='Movies']:checked").each(function() {
            hobbies.push($(this).val());
        });
        $("input[name='Music']:checked").each(function() {
            hobbies.push($(this).val());
        });

        var agreement = $("input[name='I agree that I have been somewhat truthful. Maybe!!']:checked").val();

        // Validation logic
        if (name === "" || email === "" || description === "" || selectedOption === undefined || favoritePlatform === undefined || hobbies.length === 0 || agreement === undefined) {
            alert("Please fill out all fields.");
            return;
        }

        // If all fields are filled, you can submit the form using AJAX or any other method
        // For example: $("#myForm").submit();

        // Just for demonstration purposes, you can display the form data in the console
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Description: " + description);
        console.log("Selected Option: " + selectedOption);
        console.log("Favorite Platform: " + favoritePlatform);
        console.log("Hobbies: " + hobbies.join(", "));
        console.log("Agreement: " + agreement);
    });
});
