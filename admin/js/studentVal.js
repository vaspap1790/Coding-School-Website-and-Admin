jQuery.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[A-Za-z ]+$/i.test(value);
}, "Letters and spaces only please");

$().ready(val("#addStudentForm"), val("#editStudentForm"));

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
            birthDate: "required",
            stream: "required",
            tuition: {
                required: true,
                number: true
            }
        },
        messages: {
            firstName: {
                required: "Please enter student's first name",
                maxlength: "First name must cosist of maximum 20 characters"
            },
            secondName: {
                required: "Please enter student's second name",
                maxlength: "second name must cosist of maximum 50 characters"
            },
            birthDate: "Please enter student's birth date",
            stream: "Please choose student's stream",
            tuition: {
                required: "Please enter student's tuition",
                number: "Tuition must be a number"
            }
        }
    })
}