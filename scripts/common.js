
/**
 * Created on: 14/12/15
 *     Author: Bobby Lin
 */

function initSearch() {
    var keywords = getKeywordsValue();
    var website = getWebsiteValue();
    console.log(website + " " + keywords);
    run(keywords, website);
    clearKeywordsValue();
}

function getKeywordsValue() {
    return document.getElementById('keywords').value;
}

function getWebsiteValue() {
    var e = document.getElementById('website');
    return e.options[e.selectedIndex].text.toLowerCase();
}

function clearKeywordsValue() {
    document.getElementById('keywords').value ='';
}

function run(keywords, website) {
    $.getScript("scripts/executeSearch.js", function () {
        executeSearch(keywords, website);
    });
}

