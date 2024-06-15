function loadContent() {
    jQuery(document).ready(function ($) {
        $('.table-data').each(function () {
            var tr = $(this).find('tr:last-child');
            var tdCount = tr.find('td').length;
            var tdWidth = 100 / (tdCount + 1);
            $(this).find('tr td:not(td:first-of-type)').css('width', tdWidth + '%');
        });
    });
}

loadContent();
