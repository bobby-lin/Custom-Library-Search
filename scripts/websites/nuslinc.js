/**
 * Created on: 14/12/15
 *     Author: Bobby Lin
 */

function search(keywords) {
    var front = "http://linc.nus.edu.sg/search/Y?SEARCH=";
    var end = "&searchscope=16&SORT=D&submit=Submit";
    var url = front + keywords + end;
    var win = window.open(url, '_blank');
    win.focus();
}
