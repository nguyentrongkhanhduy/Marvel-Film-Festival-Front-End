// load header and footer
const loadHTML = (selector, file) => {
  fetch(file)
      .then(response => response.text())
      .then(data => document.querySelector(selector).innerHTML = data);
}

loadHTML('#header', 'header.html');
loadHTML('#footer', 'footer.html');

const IronMan = {
  name: "IRON MAN",
  img: "../img/iron_man_1.jpg",
  duration: "126 minutes",
  date: "August 30th",
  description:
    "2008's Iron Man tells the story of Tony Stark, a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man.",
  rating: "PG-13",
  director: "Jon Favreau",
  writer: "Mark Fergus, Hawk Ostby, Art Marcum, Matt Holloway",
  genre: "Sci-Fi Epic, Superhero, Action, Adventure, Sci-Fi",
};

const Avengers4 = {
  name: "AVENGERS: END GAME",
  img: "../img/end_game.jpg",
  duration: "181 minutes",
  date: "September 3th",
  description:
    'The grave course of events set in motion by Thanos that wiped out half the universe and fractured the Avengers ranks compels the remaining Avengers to take one final stand in Marvel Studios\' grand conclusion to twenty-two films, "Avengers: Endgame."',
  rating: "PG-13",
  director: "Anthony Russo, Joe Russo",
  writer: "Christopher Markus, Stephen McFeely",
  genre:
    "Space Sci-Fi, Superhero, Time Travel, Tragedy, Action, Adventure, Drama",
};

const Spiderman3 = {
  name: "SPIDERMAN: NO WAY HOME",
  img: "../img/no_way.jpg",
  duration: "148 minutes",
  date: "September 5th",
  description:
    "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
  rating: "PG-13",
  director: "Jon Watts",
  writer: "Stan Lee, Chris McKenna, Erik Sommers",
  genre: "Superhero, Supernatural Fantasy, Urban Adventure, Sci-Fi",
};

const DeadPool3 = {
  name: "DEADPOOL & WOLVERINE",
  img: "../img/deadpoolandwolverine.jpg",
  duration: "127 minutes",
  date: "September 6th",
  description:
    "Peter Parker's secret identity is revealed to the entire world. Desperate for help, Peter turns to Doctor Strange to make the world forget that he is Spider-Man. The spell goes horribly wrong and shatters the multiverse, bringing in monstrous villains that could destroy the world.",
  rating: "R-rated",
  director: "Shawn Levy",
  writer: "Ryan Reynolds, Rhett Reese, Paul Wernick, Zeb Wells, Shawn Levy",
  genre:
    "Buddy Comedy, Dark Comedy, Raunchy Comedy, Satire, Superhero, Action, Adventure, Sci-Fi",
};

const MovieList = [IronMan, Avengers4, Spiderman3, DeadPool3];

document.addEventListener("DOMContentLoaded", () => {
  const moviesContainer = document.querySelector("#movies-container");

  for (let movie of MovieList) {
    moviesContainer.innerHTML += `
    <div class="movie">
      <div class="movie-detail">
        <div class="first-column">
          <div>
            <h2>${movie.name}</h2>
            <p class="movie-date">${movie.date}</p>
          </div>
          <p class="movie-description">${movie.description}</p>
          <div class="other-detail">
            <div class="detail-item">
              <p class="detail-item-title">DIRECTED BY</p>
              <p class="detail-item-description">${movie.director}</p>
            </div>
            <div class="detail-item">
              <p class="detail-item-title">WRITTEN BY</p>
              <p class="detail-item-description">${movie.writer}</p>
            </div>
            <div class="detail-item">
              <p class="detail-item-title">RATING</p>
              <p class="detail-item-description">${movie.rating}</p>
            </div>
            <div class="detail-item">
              <p class="detail-item-title">RUN TIME</p>
              <p class="detail-item-description">${movie.duration}</p>
            </div>
            <div class="detail-item">
              <p class="detail-item-title">GENRE</p>
              <p class="detail-item-description">${movie.genre}</p>
            </div>
          </div>
        </div>
        <img class="movie-photo" src="${movie.img}"></img>
      </div>
    </div>
    `;
  }
});
