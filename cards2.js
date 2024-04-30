const CARDS_CONTAINER = document.getElementById("card-container");
const USER = {
    id: 1,
    userName: "Username",
    desc: "Sobre mí",
    age: 26,

    fav_music: {
        music: ["Rosalía","Rock","Pop"],
    },

};
const CARD = document.createElement("div");
const NAME_SECTION = document.createElement("h3");
const DECS_SECTION = document.createElement("p");
const AGE_SECTION = document.createElement("p");
const MUSIC_SECTION = document.createElement("div");

const musiclist = USER.fav_music.music.map(e => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});

console.log(musiclist);

NAME_SECTION.textContent = USER.userName;
DECS_SECTION.textContent = USER.desc;
AGE_SECTION.textContent = USER.age;

MUSIC_SECTION.append(...musiclist);

CARD.append(NAME_SECTION, DECS_SECTION, AGE_SECTION, MUSIC_SECTION);


CARDS_CONTAINER.appendChild(CARD);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const CARDS2_CONTAINER = document.getElementById("card2-container");
const PROFILE = {
    id: 1,
    userName: "Username",
    desc: "Sobre mí",
    age: 26,

    fav_movie: {
        movie: ["Perfect Blue","Jennifer´s body","Mean Girls"],
    },

};
const card2 = document.createElement("div");
const NAME_SECTION2 = document.createElement("h3"); 
const DECS_SECTION2 = document.createElement("p"); 
const AGE_SECTION2 = document.createElement("p"); 
const MOVIE_SECTION2 = document.createElement("div"); 

const movielist = PROFILE.fav_movie.movie.map(e => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});

console.log(movielist);

NAME_SECTION2.textContent = PROFILE.userName; 
DECS_SECTION2.textContent = PROFILE.desc; 
AGE_SECTION2.textContent = PROFILE.age; 

MOVIE_SECTION2.append(...movielist);

card2.append(NAME_SECTION2, DECS_SECTION2, AGE_SECTION2, MOVIE_SECTION2); 

CARDS2_CONTAINER.appendChild(card2); 

