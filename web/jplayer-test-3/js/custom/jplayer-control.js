$(document).ready(function(){

	var myPlaylist = new jPlayerPlaylist(
	{
		jPlayer: "#jquery_jplayer_N",
		cssSelectorAncestor: "#jp_container_N"
	}, 
	
	[ 
	],
	
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

	// Audio mix playlist
	$("#playlist-setPlaylist-audio-mix").click(function() {
		myPlaylist.setPlaylist([
			{
				title:"Cro Magnon Man",
				artist:"The Stark Palace",
				mp3:"http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3",
				oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
				poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
			},
			{
				title:"Hidden",
				artist:"Miaow",
				free: true,
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-02-Hidden.mp3",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			}

		]);
		myPlaylist.play(-1);
	});

	// Miaow tracks
	$("#playlist-add-bubble").click(function() {
		myPlaylist.add({
			title:"Bubble",
			artist:"Miaow",
			free:true,
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		});
	});

	$("#playlist-add-tempered-song").click(function() {

		//myPlaylist.remove();

		myPlaylist.add({
			title:"Tempered Song",
			artist:"Miaow",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		}, true);
		//myPlaylist.play(-1);
		
		/*
		myPlaylist.setPlaylist([
		            			{
			title:"Tempered Song",
			artist:"Miaow",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-01-Tempered-song.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-01-Tempered-song.ogg",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		            			}
		            		]);

		//myPlaylist.play();
		//myPlaylist.shuffle();
		myPlaylist.play(-1);
		*/
	});

	$("#playlist-add-lentement").click(function() {
		myPlaylist.add({
			title:"Lentement",
			artist:"Miaow",
			mp3:"http://www.jplayer.org/audio/mp3/Miaow-03-Lentement.mp3",
			oga:"http://www.jplayer.org/audio/ogg/Miaow-03-Lentement.ogg",
			poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
		});
	});


	// The remove commands
	$("#playlist-remove").click(function() {
		myPlaylist.remove();
	});

	$("#playlist-remove--2").click(function() {
		myPlaylist.remove(-2);
	});
	$("#playlist-remove--1").click(function() {
		myPlaylist.remove(-1);
	});
	$("#playlist-remove-0").click(function() {
		myPlaylist.remove(0);
	});
	$("#playlist-remove-1").click(function() {
		myPlaylist.remove(1);
	});
	$("#playlist-remove-2").click(function() {
		myPlaylist.remove(2);
	});

	// The shuffle commands
	$("#playlist-shuffle").click(function() {
		myPlaylist.shuffle();
	});

	$("#playlist-shuffle-false").click(function() {
		myPlaylist.shuffle(false);
	});
	$("#playlist-shuffle-true").click(function() {
		myPlaylist.shuffle(true);
	});

	// The select commands
	$("#playlist-select--2").click(function() {
		myPlaylist.select(-2);
	});
	$("#playlist-select--1").click(function() {
		myPlaylist.select(-1);
	});
	$("#playlist-select-0").click(function() {
		myPlaylist.select(0);
	});
	$("#playlist-select-1").click(function() {
		myPlaylist.select(1);
	});
	$("#playlist-select-2").click(function() {
		myPlaylist.select(2);
	});

	// The next/previous commands
	$("#playlist-next").click(function() {
		myPlaylist.next();
	});
	$("#playlist-previous").click(function() {
		myPlaylist.previous();
	});

	// The play commands

	$("#playlist-play").click(function() {
		myPlaylist.play();
	});

	$("#playlist-play--2").click(function() {
		myPlaylist.play(-2);
	});
	$("#playlist-play--1").click(function() {
		myPlaylist.play(-1);
	});
	$("#playlist-play-0").click(function() {
		myPlaylist.play(0);
	});
	$("#playlist-play-1").click(function() {
		myPlaylist.play(1);
	});
	$("#playlist-play-2").click(function() {
		myPlaylist.play(2);
	});

	// The pause command
	$("#playlist-pause").click(function() {
		myPlaylist.pause();
	});

	// Changing the playlist options

	// Option: autoPlay
	$("#playlist-option-autoPlay-true").click(function() {
		myPlaylist.option("autoPlay", true);
	});
	$("#playlist-option-autoPlay-false").click(function() {
		myPlaylist.option("autoPlay", false);
	});

	// Option: enableRemoveControls
	$("#playlist-option-enableRemoveControls-true").click(function() {
		myPlaylist.option("enableRemoveControls", true);
	});
	$("#playlist-option-enableRemoveControls-false").click(function() {
		myPlaylist.option("enableRemoveControls", false);
	});

	// Option: displayTime
	$("#playlist-option-displayTime-0").click(function() {
		myPlaylist.option("displayTime", 0);
	});
	$("#playlist-option-displayTime-fast").click(function() {
		myPlaylist.option("displayTime", "fast");
	});
	$("#playlist-option-displayTime-slow").click(function() {
		myPlaylist.option("displayTime", "slow");
	});
	$("#playlist-option-displayTime-2000").click(function() {
		myPlaylist.option("displayTime", 2000);
	});

	// Option: addTime
	$("#playlist-option-addTime-0").click(function() {
		myPlaylist.option("addTime", 0);
	});
	$("#playlist-option-addTime-fast").click(function() {
		myPlaylist.option("addTime", "fast");
	});
	$("#playlist-option-addTime-slow").click(function() {
		myPlaylist.option("addTime", "slow");
	});
	$("#playlist-option-addTime-2000").click(function() {
		myPlaylist.option("addTime", 2000);
	});

	// Option: removeTime
	$("#playlist-option-removeTime-0").click(function() {
		myPlaylist.option("removeTime", 0);
	});
	$("#playlist-option-removeTime-fast").click(function() {
		myPlaylist.option("removeTime", "fast");
	});
	$("#playlist-option-removeTime-slow").click(function() {
		myPlaylist.option("removeTime", "slow");
	});
	$("#playlist-option-removeTime-2000").click(function() {
		myPlaylist.option("removeTime", 2000);
	});

	// Option: shuffleTime
	$("#playlist-option-shuffleTime-0").click(function() {
		myPlaylist.option("shuffleTime", 0);
	});
	$("#playlist-option-shuffleTime-fast").click(function() {
		myPlaylist.option("shuffleTime", "fast");
	});
	$("#playlist-option-shuffleTime-slow").click(function() {
		myPlaylist.option("shuffleTime", "slow");
	});
	$("#playlist-option-shuffleTime-2000").click(function() {
		myPlaylist.option("shuffleTime", 2000);
	});

	// Equivalent commands
	$("#playlist-equivalent-1-a").click(function() {
		myPlaylist.add({
			title:"Your Face",
			artist:"The Stark Palace",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
			oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg",
			poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
		}, true);
	});

	$("#playlist-equivalent-1-b").click(function() {
		myPlaylist.add({
			title:"Your Face",
			artist:"The Stark Palace",
			mp3:"http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
			oga:"http://www.jplayer.org/audio/ogg/TSP-05-Your_face.ogg",
			poster: "http://www.jplayer.org/audio/poster/The_Stark_Palace_640x360.png"
		});
		myPlaylist.play(-1);
	});

	// AVOID COMMANDS
	$("#playlist-avoid-1").click(function() {
		myPlaylist.remove(2); // Removes the 3rd item
		myPlaylist.remove(3); // Ignored unless removeTime=0: Where it removes the 4th item, which was originally the 5th item.
	});


	$("#jplayer_inspector_1").jPlayerInspector({jPlayer:$("#jquery_jplayer_N")});
	
	
	$("#jp_container_song .track").click(function(e) {
		/*
		var song = {
				title:"Bubble",
				artist:"Miaow",
				free:true,
				mp3:"http://www.jplayer.org/audio/mp3/Miaow-07-Bubble.mp3",
				oga:"http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
				poster: "http://www.jplayer.org/audio/poster/Miaow_640x360.png"
			};
			*/

		//alert ("test");
			//myPlaylist.setPlaylist([
			myPlaylist.add(
		            			{
			title:$(this).text() ,
			artist:$(this).attr("artist"),
  			mp3: $(this).attr("song"),
			poster: $(this).attr("img")
		            			}
		            	);
		            	//	]);
	
		//myPlaylist.play();
		myPlaylist.play(-1);
		
  	});
	
	
	   function searchTable(input)
	      {
	      var table = $('#song_list_table');
	      table.find('tr').each(function(index, row)
	      {
	      var cells = $(row).find('td');
	      
	      if(cells.length > 0)
	      {
	      var found = false;
	      cells.each(function(index, td)
	      {
	      	var regExp = new RegExp(input, 'i');
	      	
	      	//var ahref = jQuery.parseHTML(${td}.html());
	      
	      	if(regExp.test($(td).text()) || regExp.test($(td).html()))
	      	//if(regExp.test($(td).text()) || regExp.test(ahref.attr("author")))
	      	{
	      		found = true;
	      		return false;
	      	}
	      });
	      if(found == true)$(row).show();else $(row).hide();
	      }
	      });
	      }
	   
	   $('#song_search').keyup(function()
		       {
		       	searchTable($(this).val());
		       });
	   
	   $("#add_to_list").click(function() {
		   //alert("test");
		   myPlaylist.remove();
		   addToList();
		   myPlaylist.play();
		   
	   });
		      
	   function addToList() {
      	 
	        var songs =	 $("#jp_container_song .track");
	        
	        for (var i = 0; i < songs.length; i++) {
	        var song = songs[i];
	        
	        myPlaylist.add(
        			{
title:song.text,
artist:$(song).attr("artist"),
mp3:$(song).attr("song"),
poster: $(song).attr("img")
        			}
        	);
	        }
	                	 
	        /*
	   	    var table = $('#song_list_table');
	   	    var rows = table.find('tbody>tr>td>a');
	   	    
	   	    
	   	    for (var i = 0; i < rows.length; i++) {
	   	    	var test = rows[i].text;
	   	    	alert("test");
	   	    	//alert (rows[i].text() );
	   	    }
	   	    */
	   }	    
	   	    
	   /*
	   function addToList() {
   	    var table = $('#song_list_table');
   	    var rows = table.find('tbody>tr->td');

   	    for (var i = rows.length - 1; i > 0; i--) {
   	        var j = Math.floor(Math.random() * (i + 1));
   	        var temp = rows[i];
   	        rows.eq(i - 1).after(rows[j]);
   	        rows.eq(j - 1).after(temp);
   	    }
	   
   	}
   	*/
	   
});