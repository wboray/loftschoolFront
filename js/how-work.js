
    // YOUTUBE PLAYER
    var player = void 0;
    
    function youTubePlayer() {
        window.onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
            var $height = 370;
            if (window.matchMedia("(max-width: 768px)").matches) $height = 332;
            if (window.matchMedia("(max-width: 480px)").matches) $height = 220;
            player = new YT.Player("yt-player", {
                width: "100%",
                height: $height,
                videoId: "lIQxzE0Aw_g",
                playerVars: {
                    controls: 0,
                    disablekb: 0,
                    showinfo: 0,
                    rel: 0,
                    autoplay: 0,
                    modestbranding: 0,
                    wmode: "opaque"
                },
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange
                }
            });
        };
        
        function onPlayerReady(event) {
            var duration = player.getDuration();
            var interval = void 0;
            updateTimerDisplay();
            $(".player").removeClass("hidden");
            clearInterval(interval);
            interval = setInterval(function () {
                var completed = player.getCurrentTime();
                var percents = completed / duration * 100;
                changeButtonPosition(percents);
                updateTimerDisplay();
            }, 1000);
        }
        
        function onPlayerStateChange(event) {
            var playerButton = $(".player__start");
            switch (event.data) {
                case 1: 
                    $(".player__wrapper").addClass("active");
                    playerButton.addClass("paused");
                    break;
                case 2:
                    playerButton.removeClass("paused");
                    break;
            }
        }
        
        function changeButtonPosition(percents) {
            $(".player__playback-button").css({left: percents + "%"});
        }
        
        function updateTimerDisplay() {
            $(".player__duration-completed").text(formatTime(player.getCurrentTime()));
            $(".player__duration-estimate").text(formatTime(player.getDuration()));
        }
        
        function formatTime(time) {
            var roundTime = Math.round(time);
            var minutes = Math.floor(roundTime / 60);
            var seconds = roundTime - minutes * 60;
            var formatedSeconds = seconds < 10 ? "0" + seconds : seconds;
            return minutes + ":" + formatedSeconds;
        }
        
        $(".player__start").on("click", function (e) {
            var playerStatus = player.getPlayerState();
            // 0 - ended, 1 - played, 2 - paused ...    
            if (playerStatus !== 1) {
                player.playVideo();
            } else {
                player.pauseVideo();
            }
        });
        
        $(".player__playback").on("click", function (e) {
            e.preventDefault();
            var bar = $(e.currentTarget);
            var newButtonPosition = e.pageX - bar.offset().left;
            var clickedPercents = newButtonPosition / bar.width() * 100;
            var newPlayerTime = player.getDuration() / 100 * clickedPercents;
            changeButtonPosition(clickedPercents);
            player.seekTo(newPlayerTime);
        });
        
        $(".player__splash").on("click", function (e) {
            player.playVideo();
        });
        
        $(".player__volume-button").on("click", function () {
            var mute_toggle = $(this);
            if (player.isMuted()) {
                 player.unMute();
                 mute_toggle.removeClass("mute");
            } else {
                player.mute();
                mute_toggle.addClass("mute");
            }
        });
    }

    
    
    window.addEventListener('load', (event) => {
        var videoContainer = $("#yt-player");
        console.log(videoContainer);
        if ($(videoContainer).length > 0) youTubePlayer();
    })
    

