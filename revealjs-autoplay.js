// reveal-video.js
Reveal.on('ready', handleVideo);
Reveal.on('slidechanged', handleVideo);

function handleVideo(event) {
  // Pause & reset all videos in the deck
  var videos = document.querySelectorAll('section video');
  videos.forEach(function(video) {
    video.pause();
    video.currentTime = 0;
  });

  // Play videos on the current slide
  var currentVideos = event.currentSlide.querySelectorAll('video');
  currentVideos.forEach(function(video) {
    video.play().catch(function(err) {
      console.warn('Could not autoplay video:', err);
    });
  });
}
