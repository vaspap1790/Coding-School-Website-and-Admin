jQuery.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[A-Za-z ]+$/i.test(value);
}, "Letters and spaces only please");

$().ready(val("#addTrainerForm"), val("#editTrainerForm"));

function val(text) {
    $(text).validate({
        rules: {
            firstName: {
                required: true,
                maxlength: 20,
                lettersonly: true
            },
            secondName: {
                required: true,
                maxlength: 50,
                lettersonly: true
            },
            subject: {
                required: true,
                maxlength: 50
            }
        },
        messages: {
            firstName: {
                required: "Please enter trainer's first name",
                maxlength: "First name must cosist of maximum 20 characters"
            },
            secondName: {
                required: "Please enter trainer's second name",
                maxlength: "second name must cosist of maximum 50 characters"
            },
            subject: {
                required: "Please enter trainer's subject",
                maxlength: "Trainer's subject must cosist of maximum 50 characters"
            }
        }
    })
}