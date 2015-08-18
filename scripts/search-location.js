function SearchLocation() {
    this.launch = function() {
        var location = $('#location');

        var searchResults = $('#searchResults ul');
        var liked = $('#liked ul');

        $('#search').on('click', function(e) {
            $.ajax({
                url: 'http://locations-backend.herokuapp.com/locations?location=' + location.val(),
                //url: '/locations?location=' + location.val(),
                dataType: 'json',
                success: function(data) {
                    searchResults.html('');
                    $(data).each(function(index, loc) {
                        var compiled  = _.template("<li><span><%= name %></span></li>");
                        var item = $(compiled({name: loc.name}));
                        searchResults.append(item);
                    });
                },
                error: function(error) {
                    console.log(error);
                }
            });
        });
    };
}




