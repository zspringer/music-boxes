//javascript here
var url = 'https://bcw.blob.core.windows.net/public/img/sounds/scale-0'

var boombox = document.getElementById('boombox')

function playTune(num){
  
  var tuneUrl = url
  console.log(tuneUrl)
  
    if(num < 10){
      tuneUrl += '0'
    }
  tuneUrl += num + '.mp3'
  
  boombox.src = tuneUrl
  boombox.play()
}
  
