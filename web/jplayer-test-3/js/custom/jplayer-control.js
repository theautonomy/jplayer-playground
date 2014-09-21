$(document).ready(function () {

    var myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_N",
        cssSelectorAncestor: "#jp_container_N"
    },

    [],

    {
        playlistOptions: {
            enableRemoveControls: true
        },
        swfPath: "../js",
        supplied: "webmv, ogv, m4v, oga, mp3",
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: true
    });

    $("#jp_container_song .mp3-track").click(function (e) {
        myPlaylist.add({
            title: $(this).text(),
            artist: $(this).attr("artist"),
            mp3: $(this).attr("song"),
            poster: $(this).attr("img")
        });
        myPlaylist.play(-1);

    });

    $("#jp_container_song .video-track").click(function (e) {
        myPlaylist.add({
            title: $(this).text(),
            artist: $(this).attr("artist"),
            m4v: $(this).attr("video"),
            poster: $(this).attr("img")
        });
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
        var songs = $("#jp_container_song .mp3-track");
        for (var i = 0; i < songs.length; i++) {
            var song = songs[i];
            myPlaylist.add({
                title: song.text,
                artist: $(song).attr("artist"),
                mp3: $(song).attr("song"),
                poster: $(song).attr("img")
            });
        }
        var videos = $("#jp_container_song .video-track");
        for (var i = 0; i < videos.length; i++) {
            var video = videos[i];
            myPlaylist.add({
                title: video.text,
                artist: $(video).attr("artist"),
                m4v: $(video).attr("video"),
                poster: $(video).attr("img")
            });
        }
 
        myPlaylist.play();
    }

    $("#clean_list").click(function () {
        myPlaylist.remove();

    });

});