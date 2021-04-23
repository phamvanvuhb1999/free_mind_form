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

    let phone = that.value;

    if (phone.length >= 10 && length <= 11) {

        if (phone[0] == '0') {
            document.getElementById(that.name + "-error").innerHTML = '';
            return true;
        }

    }

    that.focus()
    document.getElementById(that.name + "-error").innerHTML = `${that.name} field invalid.`;
    return false;
}


function ValidateCV(that) {
    let fullPath = that.value;
    let listSupportFile = that.accept;
    let filename = '';

    //get file input name
    if (fullPath) {

        let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        filename = fullPath.substring(startIndex);

        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }

        let fileExtention = getFileExtention(filename);
        if (listSupportFile.indexOf(fileExtention) >= 0) {
            document.getElementById(that.name + "-error").innerHTML = '';
            return true;
        }

    }

    document.getElementById(that.name + "-error").innerHTML = `${that.name} invalid of File type is not support.`;
    return false;
}

function getFileExtention(filename) {
    if (filename && filename.trim() != '') {
        let indexDot = filename.lastIndexOf('.');
        return filename.slice(indexDot);
    }
    return '';
}