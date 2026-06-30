const songs=[

{

title:"Song One",

artist:"Artist One",

src:"songs/song1.mp3"

},

{

title:"Song Two",

artist:"Artist Two",

src:"songs/song2.mp3"

},

{

title:"Song Three",

artist:"Artist Three",

src:"songs/song3.mp3"

}

];

let index=0;

const audio=document.getElementById("audio");

const title=document.getElementById("title");

const artist=document.getElementById("artist");

const progress=document.getElementById("progress");

const volume=document.getElementById("volume");

const playlist=document.getElementById("playlist");

const current=document.getElementById("current");

const duration=document.getElementById("duration");

function loadSong(){

audio.src=songs[index].src;

title.innerText=songs[index].title;

artist.innerText=songs[index].artist;

}

loadSong();

function playPause(){

if(audio.paused){

audio.play();

}else{

audio.pause();

}

}

function nextSong(){

index++;

if(index>=songs.length)

index=0;

loadSong();

audio.play();

}

function prevSong(){

index--;

if(index<0)

index=songs.length-1;

loadSong();

audio.play();

}

audio.addEventListener("timeupdate",()=>{

progress.value=(audio.currentTime/audio.duration)*100;

current.innerHTML=format(audio.currentTime);

duration.innerHTML=format(audio.duration);

});

progress.addEventListener("input",()=>{

audio.currentTime=(progress.value/100)*audio.duration;

});

volume.addEventListener("input",()=>{

audio.volume=volume.value;

});

audio.addEventListener("ended",()=>{

nextSong();

});

function format(time){

if(isNaN(time))

return "0:00";

let min=Math.floor(time/60);

let sec=Math.floor(time%60);

if(sec<10)

sec="0"+sec;

return min+":"+sec;

}

songs.forEach((song,i)=>{

let li=document.createElement("li");

li.innerHTML=song.title+" - "+song.artist;

li.onclick=()=>{

index=i;

loadSong();

audio.play();

};

playlist.appendChild(li);

});