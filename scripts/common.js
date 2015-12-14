/**
 * Created on: 14/12/15
 *     Author: Bobby Lin
 */

function executeSearch() {
    var keywords = getKeywordsValue();
    var website = getWebsiteValue();
    console.log(website + " " + keywords);
    clearKeywordsValue();
}

function getKeywordsValue() {
    return document.getElementById('keywords').value;
}

function getWebsiteValue() {
    var e = document.getElementById('website');
    return e.options[e.selectedIndex].text;
}

function clearKeywordsValue() {
    document.getElementById('keywords').value ='';
}
