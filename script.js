$(document).ready(function () {
/*
 * Handles the Form with Ajax - NickR
 */
    $('#reg-form').submit(function (e) {

        e.preventDefault(); // Prevent Default Submission

        $.ajax({
                url: 'submit.php',
                type: 'POST',
                data: $(this).serialize(), // it will serialize the form data
                dataType: 'html'
            })
            .done(function (data) {
                $('#form-content').fadeOut('slow', function () {
                    $('#form-content').fadeIn('slow').html(data);
                });
            })
            .fail(function () {
                alert('Ajax Submit Failed ...');
            });
    });

});