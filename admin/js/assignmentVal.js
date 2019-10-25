jQuery.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[A-Za-z ]+$/i.test(value);
}, "Letters and spaces only please");

$().ready(val("#addAssignmentForm"), val("#editAssignmentForm"));

function val(text) {
    $(text).validate({
        rules: {
            title: {
                required: true,
                maxlength: 50,
                lettersonly: true
            },
            description: "required",
            subDate: "required",
        },
        messages: {
            title: {
                required: "Please enter assignment's title",
                maxlength: "Title must cosist of maximum 50 characters"
            },
            description: "Please enter assignment's description",
            subDate: "Please enter assignment's subdate",
        }
    })
}