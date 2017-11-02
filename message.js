alert(document.cookie);
function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end == -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return(setStr);
}

var smotrel = getCookie("smotrel");
if (smotrel != da) {
    alert("Здесь вы можете подробнее узнать о нашей компании и посмотреть актуальную дату внизу страницы");
}
document.cookie = "smotrel=da";
//alert(document.cookie);