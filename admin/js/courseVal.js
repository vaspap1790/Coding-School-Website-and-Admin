jQuery.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[A-Za-z ]+$/i.test(value);
}, "Letters and spaces only please");

$().ready(val("#addCourseForm"), val("#editCourseForm"));

function val(text) {
    $(text).validate({
        rules: {
            title: {
                required: true,
                maxlength: 50,
                lettersonly: true
            },
            stream: "required",
            type: "required",
            startDate: "required",
            endDate: "required"
        },
        messages: {
            title: {
                required: "Please enter course's title",
                maxlength: "Title must cosist of maximum 50 characters"
            },
            stream: "Please choose course's stream",
            type: "Please choose course's type",
            startDate: "Please enter course's start date",
            endDate: "Please enter course's end date"
        }
    })
}