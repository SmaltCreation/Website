Template.layout.onRendered(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $(function() {
        $('.anchor').bind('click', function() {
            var goscroll = false;
            var the_hash = $(this).attr("href");
            var regex = new RegExp("/#(.*)","gi");
            var the_element = '';

            if(the_hash.match("/#(.+)")) {
                the_hash = the_hash.replace(regex,"$1");

                if($("#"+the_hash).length > 0) {
                    the_element = "#" + the_hash;
                    goscroll = true;
                }
                else if($("a[name=" + the_hash + "]").length > 0) {
                    the_element = "a[name=" + the_hash + "]";
                    goscroll = true;
                }

                if(goscroll) {
                    scrollTo($(the_element), 0, 200);
                    return false;
                }
            }
        });
    });

    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });
});
