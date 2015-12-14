/**
 * Created on: 15/12/15
 *     Author: Bobby Lin
 */

function search(keywords) {
    var front = "https://singapore.kinokuniya.com/products?utf8=✓&is_searching=true&taxon=&keywords=";
    var url = front + keywords;
    var win = window.open(url, '_blank');
    win.focus();
}
