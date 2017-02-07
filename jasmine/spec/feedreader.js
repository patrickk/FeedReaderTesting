
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


       //Loops through the allFeeds array to check for valid URL
        it('has URL defined and is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe(undefined);
            }
        });
        //Loops through allFeeds array to check for valid name
        it('has name defined and is not empty', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe(undefined);
            }
        });
    });

    //Test suite for menu's properties
    describe('The menu', function() {
        var menuIcon = document.querySelector("body"),
            $menuIconLink = $('.menu-icon-link');

        //Test to see menu should hide by default, determined by its class being toggled
        it('should hide by default', function() {
            expect(menuIcon.className).toEqual("menu-hidden");

        });

        //Test to see if menu shows when clicked
        it('should change visibility when clicked', function() {
            expect(menuIcon.className).toEqual("menu-hidden");
            $menuIconLink.on("click", function() {
                expect(menuIcon.className).not.toEqual("menu-hidden");
            });
        });

    });



    //Test suite for entries in feedreader
    describe('Initial Entries', function() {
        var $entryInFeed = $(".feed > .entry");
        //Runs before each test, invokes the loadFeed function utilizing the done function to mark
        //finished asynchronous process
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        //Test to see if .entry class in .feed class has at least one element
        it('has at least a single .entry element in the .feed container', function(done) {
            expect($entryInFeed).toBeDefined();
            done();
        });
    });
      //Test suite to show changed content when feed loaded
    describe('New Feed Selection', function() {
        //Feed's HTML content
        var $feed = $(".feed").html(),
            oldFeed,
            newFeed;

        //Call before each test, neessary for asynchronous processes
        beforeEach(function(done) {
          //Old Feed
            loadFeed(0, function() {
              oldFeed = $(".feed").html();
              //New Feed
            });
              loadFeed(1, function() {
                newFeed = $(".feed").html();
                done();
              });
            // });
        });

        //Test to see if content in feed changes when loaded
        it('content changes when new feed loaded by loadFeed function', function(done) {
            expect(oldFeed).not.toEqual(newFeed);
             done();
        });
    });

}());
