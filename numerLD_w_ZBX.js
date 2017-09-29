// ==UserScript==
// @name         Numer LD w ZBX jako link
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Taki sam opis jak nazwa skrypty.
// @author       RShT
// @match        https://pit-zabbix.net.pp/zabbix.php?action=acknowledge.edit&*eventids[]*
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        none
// ==/UserScript==

$('.table-forms-separator td').ready(function() {
    $('.table-forms-separator td').each(function() {
        var html  = $(this).html();
        var regex = /5\d{6}/g;
        var matched_str = $(this).html().match(regex);
        var text  = html.replace(regex, "<a href=\'https://servicedesk.net.pp/SD_Operator.WebAccess/wd/search/search.rails?s=" + matched_str + "\' target=\'_blank\'>" + matched_str + "</a>");
        $(this).html(text);
    });
});