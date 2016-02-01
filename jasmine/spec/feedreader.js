/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
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


        /* Loop through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls defined', function() {
            allFeeds.forEach(function(feed) { // loop through each feed
                expect(feed.url).toBeDefined(); // url must be defined
                expect(feed.url).not.toBe(null); // url must not be null
                expect(feed.url.length).not.toBe(0); // length must not be 0 length string
            });
        });


        /* Loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined', function() {
            allFeeds.forEach(function(feed) { // loop through each feed
                expect(feed.name).toBeDefined(); // url must be defined
                expect(feed.name).not.toBe(null); // url must not be null
                expect(feed.name.length).not.toBe(0); // length must not be 0 length string
            });
        });



    });


    /* Ensures the menu element is
     * hidden by default by verifying that the menu-hidden class is applied to the body
     */
    describe('The menu', function() {

        it('to be hidden on page load', function() {
            // lets make sure the menu-hidden class is applied to the body when the page loads
            expect($('body').hasClass('menu-hidden')).toBe(true);

            // lets make sure the
            var transform = $('.slide-menu').css('transform');
            // split the matrix into values
            var values = transform.split('(')[1];
            values = values.split(')')[0];
            values = values.split(',');
            // the 4th value in the matrix is the X transform off the screen to the left, should be a negative number
            expect(values[4]).toBeLessThan(0);
        });

        /* Ensure the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('to unhidden/hide when menu icon clicked twice', function() {

            var menuIcon = $('.menu-icon-link');

            // click the menu button to display the menu
            menuIcon.trigger("click");
            // lets make sure the menu-hidden class is no longer on the body
            expect($('body').hasClass('menu-hidden')).toBeFalsy();


            // click the menu button to hide the menu
            menuIcon.trigger("click");
            // lets make sure the menu-hidden class is no longer on the body
            expect($('body').hasClass('menu-hidden')).toBeTruthy();

        });

    });

    /* Ensure when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * loadFeed() is asynchronous so this test will use
     * Jasmine's beforeEach and asynchronous done() function.
     */

    describe('Initial Entries', function() {
        it('should have at least 1 feeds', function() {
            expect(allFeeds.length).toBeGreaterThan(0);
        });


        beforeEach(function(done) {
            // load the 0th feed
            loadFeed(0, done);
        });

        it('should load at least one entry', function() {
            // verify that the .feed class has at least 1 .entry class within in
            expect($('.feed').find('.entry').length).toBeGreaterThan(0);

            // make sure the header is loaded with the feed name
            expect($('.header-title').html()).toBe(allFeeds[0].name);
        });



    });

    /* Ensure when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * This is accomplished by loading feed 0 followed by 1 and comparing the results
     */

    describe('New Feed Selection', function() {

        it('should have at least 2 feeds', function() {
            expect(allFeeds.length).toBeGreaterThan(1);
        });
        // we can only run the following tests if we have enough feeds


        var emptyHTML = $('.feed').html();
        var beforeHTML;
        var afterHTML;

        beforeEach(function(done) {
            // load the 0th feed
            loadFeed(0, function() {
                beforeHTML = $('.feed').html();
                done();
            });
        });


        beforeEach(function(done) {
            // load the 0th feed
            loadFeed(1, function() {
                afterHTML = $('.feed').html();
                done();
            });
        });

        it('should change the contents of the feed', function() {
            // before and after HTMLs must not be equal to an empty one
            expect(emptyHTML).not.toBe(beforeHTML);
            expect(emptyHTML).not.toBe(afterHTML);

            // verify that the .feed class changes before and after
            expect(afterHTML).not.toBe(beforeHTML);

        });




    });
}());