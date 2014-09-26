(function () {

    function albumProvider () {

        var albums = [

            {
                name: 'madrid1309',
                title: 'Weekend in Madrid',
                date: '2013-09-01',
                description: 'My favourite trip',
                photos: [
                    {
                        filename: "250x250.gif",
                        date: "2013/09/05",
                        description: "I love this place, so much good food." },
                    {
                        filename: "250x250.gif",
                        date: "2013/09/06",
                        description: "The museo del prado we had a wonderful time here."
                    }
                ]
            },
            {
                name: 'iceland1404',
                title: 'Holiday in Iceland',
                date: '2014-04-15',
                description: 'This place is cold',
                photos: [
                    {
                        filename: "250x250.gif",
                        date: "2014/04/14",
                        description: "So cold and so much snow!" },
                    {
                        filename: "250x250.gif",
                        date: "2014/04/15",
                        description: "The northern lights are extremely clear here."
                    }
                ]
            },
            {
                name: 'thailand1210',
                title: 'Surfing in Thailand',
                date: '2012-10-01',
                description: 'So hot!',
                photos: [
                    {
                        filename: "250x250.gif",
                        date: "2012/10/01",
                        description: "Getting mah surf on!"
                    },
                    {
                        filename: "250x250.gif",
                        date: "2012/10/02",
                        description: "Thai food FTW!!!11!one!1"
                    }
                ]
            },
            {
                name: 'australia1207',
                title: 'Wedding in Australia',
                date: '2012-07-31',
                description: 'So many kangaroos and koalas!',
                photos: [
                    {
                        filename: "250x250.gif",
                        date: "2012/07/25",
                        description: "The wedding was lovely."
                    },
                    {
                        filename: "250x250.gif",
                        date: "2012/07/27",
                        description: "Great Ocean Road."
                    }
                ]
            }
        ];

        this.getAlbums = function () {
            return albums;
        };

        this.getAlbumByName = function (name) {
            for ( var i = 0; i < albums.length; i++) {
                if (name.toLowerCase() == albums[i].name.toLowerCase()) {
                    return albums[i];
                }
            }
            throw new Error("not_fount");
        };

        this.addAlbum = function (album_data) {

            if (!album_data.name) throw new Error("missing_name");

            for (var i = 0; i < albums.length; i++) {
                if (album_data.name.toLowerCase() == albums[i].name.toLowerCase()) {
                    throw new Error("duplicate_album_name");
                }
            }

            if (!album_data.title) throw new Error("missing_title");
            if (!album_data.description) throw new Error("missing_description");
            if (!album_data.date) throw new Error("missing_date");

            if (!is_valid_date(album_data.date)) throw new Error("bad_date");

            albums.push(album_data);
        }

    }

    photoApp.service('albumProvider', albumProvider);

    function is_valid_date (the_date) {
        if (the_date.match(/^[0-9]{2,4}[\-\/\. ,][0-9]{1,2}[\-\/\. ,][0-9]{1,2}$/)) {
            var d = new Date(the_date);
            return !isNaN(d.getTime());
        } else {
            return false;
        }
    }

})();




