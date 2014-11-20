$(document).ready(function () {

    var myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_N",
        cssSelectorAncestor: "#jp_container_N"
    },

    [ ],

    {
        playlistOptions: {
            enableRemoveControls: true
        },
        swfPath: "../jPlayer-2.8.3/dist/jplayer",
        supplied: "webmv, ogv, m4v, oga, mp3",
        useStateClassSkin: true,
		autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: true
    });

    $("#jp_container_song .track").click(function (e) {
        var item = {};
        item["title"] = $(this).text(); 
        item["artist"] = $(this).attr("artist");
        item["poster"] = $(this).attr("poster");
        item[$(this).attr("format")] = $(this).attr("file");
        myPlaylist.add( item );
        myPlaylist.play(-1);

    });

    function searchTable(input) {
        var table = $('#song_list_table');
        table.find('tr').each(function (index, row) {
            var cells = $(row).find('td');

            if (cells.length > 0) {
                var found = false;
                cells.each(function (index, td) {
                    var regExp = new RegExp(input, 'i');

                    if (regExp.test($(td).text()) || regExp.test($(td).html())) {
                        found = true;
                        return false;
                    }
                });
                if (found == true) $(row).show();
                else $(row).hide();
            }
        });
    }

    $('#song_search').keyup(function () {
        searchTable($(this).val());
    });

    $("#add_to_list").click(function () {
        myPlaylist.remove();
        setTimeout(addToList, 700);

    });

    function addToList() {
        var songs = $("#jp_container_song .track");
        for (var i = 0; i < songs.length; i++) {
            var song = songs[i];
            var item = {};
            
            item["title"] = song.text;
            item["artist"] = $(song).attr("artist");
            item["poster"] = $(song).attr("poster");
            item[$(song).attr("format")] = $(song).attr("file");
            
            myPlaylist.add( item );
        }
 
        myPlaylist.play();
    }

    $("#clean_list").click(function () {
        myPlaylist.remove();

    });

});