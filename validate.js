function ValidateEmail(that) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (that.value.match(validRegex)) {

        document.getElementById(that.name + "-error").innerHTML = '';

        return true;

    } else {

        document.getElementById(that.name + "-error").innerHTML = `${that.name} field invalid.`;

        that.focus();

        return false;

    }
}


function ValidatePhone(that) {
    let element = that;
    let phone = element.value;
    if (phone.length >= 10 && length <= 11) {
        if (phone[0] == '0') {
            document.getElementById(that.name + "-error").innerHTML = '';
            return true;
        }
    }
    element.focus()
    document.getElementById(that.name + "-error").innerHTML = `${that.name} field invalid.`;
    return false;
}