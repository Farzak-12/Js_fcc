const sounds = [
    {
        key: "Q",
        name: "Heater 1",
    },
    {
        key: "W",
        name: "Heater 2",
    },
    {
        key: "E",
        name: "Heater 3",
    },
    {
        key: "A",
        name: "Heater 4",
    },
    {
        key: "S",
        name: "Clap",
    },
    {
        key: "D",
        name: "Open-HHH",
    },
    {
        key: "Z",
        name: "Kick-n'-Hat",
    },
    {
        key: "X",
        name: "Kick",
    },
    {
        key: "C",
        name: "Closed-HHH",
    },
];

const padBank = document.getElementById("pad-bank");
const drumBtns = document.querySelectorAll(".drumpad");
const display = document.getElementById("display")

function playKey(key){
    const cleanKey = key.trim().toUpperCase();
    const keyDetails = sounds.find((sound) => sound.key === cleanKey);
    const audioFile = document.getElementById(cleanKey);
    audioFile.currentTime = 0;
    audioFile.play();
    display.textContent = keyDetails.name;
}

function isKeyValid(key){
    return sounds.some((sound) => sound.key === key.trim().toUpperCase());
}
drumBtns.forEach((btn) =>{
    btn.addEventListener(("click"), ()=>{
        const key = btn.textContent;
        if(isKeyValid(key))playKey(key); 
    })
})

document.addEventListener("keydown", (event) => {
    if(isKeyValid(event.key))playKey(event.key);
})