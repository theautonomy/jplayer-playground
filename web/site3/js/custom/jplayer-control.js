$(document).ready(function() {
      	// Local copy of jQuery selectors, for performance.
      	var	my_jPlayer = $("#jquery_jplayer_1"),
      		my_trackName = $("#jp_container_1 .track-name"),
      		my_playState = $("#jp_container_1 .play-state"),
      		my_extraPlayInfo = $("#jp_container_1 .extra-play-info");
      
      	// Some options
      	var	opt_play_first = false,               // If true, will attempt to auto-play the default track on page loads. No effect on mobile devices, like iOS.
      		opt_auto_play = true,                 // If true, when a track is selected, it will auto-play.
      		opt_text_playing = "Now playing",     // Text when playing
      		opt_text_selected = "Track selected"; // Text when not playing
      
      	// A flag to capture the first track
      	var first_track = true;
      
      	// Change the time format
      	$.jPlayer.timeFormat.padMin = true;
      	$.jPlayer.timeFormat.padSec = true;
      	$.jPlayer.timeFormat.sepMin = ":";
      	$.jPlayer.timeFormat.sepSec = "";
      
      	// Initialize the play state text
      	my_playState.text(opt_text_selected);
      
      	// Instance jPlayer
      	my_jPlayer.jPlayer({
      		ready: function () {
      			$("#jp_container_song .track-default").click();
      		},

      		timeupdate: function(event) {
      			my_extraPlayInfo.text(parseInt(event.jPlayer.status.currentPercentAbsolute, 10) + "%");
      		},
      		
      		play: function(event) {
      			my_playState.text(opt_text_playing);
      		},
      		
      		pause: function(event) {
      			my_playState.text(opt_text_selected);
      		},
      		
      		ended: function(event) {
      			my_playState.text(opt_text_selected);
      		},
      		
      		swfPath: "js",
      		cssSelectorAncestor: "#jp_container_1",
      		supplied: "mp3",
      		wmode: "window"
      	});
      
      	// Create click handlers for the different tracks
      	$("#jp_container_song .track").click(function(e) {
      		my_trackName.text($(this).text() + ' by ' + $(this).attr("author"));
      		$("#jp_container_1 .jp-title").text($(this).text() + ' by ' + $(this).attr("author"));
      		var img_location = $(this).attr("img");
      		if (!img_location) {
      			img_location = "./img/princess.jpg";
      		} 
     		$("#jp_container_song img").attr('src', img_location).attr('width', '420px');
      		my_jPlayer.jPlayer("setMedia", {
      			mp3: $(this).attr("href")
      		});
      		if((opt_play_first && first_track) || (opt_auto_play && !first_track)) {
      			my_jPlayer.jPlayer("play");
      		}
      		first_track = false;
      		$(this).blur();
      		return false;
      	});
      
});