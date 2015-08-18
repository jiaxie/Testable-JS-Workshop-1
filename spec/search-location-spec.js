$.fn.pressEnter = function () {
    var e = $.Event("keypress");
    e.keyCode = 13;
    $(this).trigger(e);
};

describe("Search Location", function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = 'spec/fixtures';
        loadFixtures('index.html');
    });

    describe("type for search", function() {
        it("search Melbourne", function() {
            var searchLocation = new SearchLocation();
            searchLocation.launch();

            spyOn($, 'ajax');
            $('#location').val("Melbourne").pressEnter();
            $('#search').click();

            expect($.ajax).toHaveBeenCalled();
            expect($.ajax.calls.mostRecent().args[0].url).toContain('Melbourne');
        });
    });
});
