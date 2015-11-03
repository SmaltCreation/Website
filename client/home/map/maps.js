Template.homeMap.onRendered( function () {
    $('.map').click(function () {
        $('.map iframe').css("pointer-events", "auto");
    });
});
