// https://developer.mozilla.org/fr/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs

const testLink = document.getElementById("test");
console.log("Test lien", testLink);
var media = document.querySelector('video');
console.log("voir media", media);
media.removeAttribute('controls');
testLink.addEventListener('click', e => {
    e.preventDefault();
    console.log("Clic sur la carte!!!");
    console.log("target", e.target);
});