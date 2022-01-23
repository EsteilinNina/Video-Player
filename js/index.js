const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

//Declarar enventos a realizar
$play.addEventListener('click', handleplay)
$pause.addEventListener('click', handlepause)
$backward.addEventListener('click', handlebackward)
$forward.addEventListener('click', handleforward)

//Funcion para reproducir el video
function handleplay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log("diste play")


}

//Funcion para pausar el video
function handlepause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log("diste pause")
}
//Funcion para retroceder 
function handlebackward() {
    $video.currentTime -= 10
    console.log('Retroceder 10 segundos')

}
//Funcion para adelantar
function handleforward() {
    $video.currentTime += 10
    console.log('Adelantar 10 segundos')
}
const $progres = document.querySelector('#progres')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleUpdate)


function handleLoaded() {
    $progres.max = $video.duration
    console.log('a cargado', $video.duration)
}

function handleUpdate() {
    $progres.value = $video.currentTime
    console.log('tiempo Actual', $video.currentTime)
}

$progres.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progres.value
    console.log($progres.value)
}