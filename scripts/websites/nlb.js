/**
 * Created on: 14/12/15
 *     Author: Bobby Lin
 */

function search(keywords) {
    var front = "http://catalogue.nlb.gov.sg/cgi-bin/spydus.exe/ENQ/EXPNOS/BIBENQ?ENTRY=";
    var end = "&ENTRY_NAME=BS&ENTRY_TYPE=K&SORTS=DTE.DATE1.DESC%5DHBT.SOVR";
    var url = front + keywords + end;
    var win = window.open(url, '_blank');
    win.focus();
}
