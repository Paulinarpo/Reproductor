// Song data
const songList = [
    {
        title: "Like a stone",
        file: "Audioslave-like a stone.mp3",
        cover: "1fondocancion"

    },
    {
        title: "A New Beginning",
        file: "anewbeginning.mp3",
        cover: "2.jpeg"
    },
    {
        title: "Creative Minds",
        file: "creativeminds.mp3",
        cover: "3.jpeg"
    },
]

    const song= document.getElementById("song")

    function loadlista(){
        songList.forEach(song => {
            const li= document.createElement("li")
            const link= document.createElement("a")
            link.textContent=song.title
            li.appendChild(link)
            songs.appendChild(li)
        })
    }
