/**
 * Created on: 14/12/15
 *     Author: Bobby Lin
 */

function executeSearch(keywords,website) {
    var path = "scripts/websites/" + website + ".js";
    load(keywords, path);
}

function load(keywords, path) {
    $.getScript(path, function () {
        search(keywords);
    });
}
