const port = {
  tribute: {
    name: "A Tribute to John Irving",
    link: "https://bdmayhem.github.io/irving/",
    image: "assets/tribute.png",
  },
   quote: {
    name: "Movie Quote Machine",
    link: "https://bdmayhem.github.io/movie-quotes/",
    image: "assets/quote.png",
  },
  
  weather: {
    name: "Local Weather",
    link: "https://bdmayhem.github.io/weather/",
    image: "assets/weather.png",
  },
  wiki: {
    name: "Search Wikipedia",
    link: "https://bdmayhem.github.io/search-wiki/",
    image: "assets/wiki.png",
  },
  twitch: {
    name: "Twitch Monitor",
    link: "https://bdmayhem.github.io/twitch/",
    image: "assets/twitch.png",
  },
  calculator: {
    name: "Javascript Calculator",
    link: "https://bdmayhem.github.io/calculator/",
    image: "assets/calculator.png",
  },
  pomodoro: {
    name: "Pomodoro Clock",
    link: "https://bdmayhem.github.io/pomodoro/",
    image: "assets/pomodoro.png",
  },
  tictactoe: {
    name: "Tic-Tac-Toe",
    link: "https://bdmayhem.github.io/tictactoe/",
    image: "assets/tic.png",
  },
  simon: {
    name: "Simon Game",
    link: "https://bdmayhem.github.io/simon/",
    image: "assets/simon.png",
  },
  circles: {
    name: "Random, Useless Circles",
    link: "https://bdmayhem.github.io/circles/",
    image: "assets/circles.jpg"
  },
  ga: {
    name: "Green Apple Weddings",
    link: "http://greenappleweddings.com",
    image: "assets/ga.jpg"
  },
  dtc: {
    name: "Deep Town Calc",
    link: "https://bdmayhem.github.io/DeepTownCalc",
    image: "assets/dtc.png",
    description: "Vanilla JS SPA to calculate best choices for mobile game 'Deep Town'"
  },
  grandmasRecipes: {
    name: "Grandma's Recipes",
    link: "https://bdmayhem.github.io/GrandmasRecipes/",
    image: "assets/grandmasrecipes.png",
    description: "React-based SPA recipe book allowing users to create, read, update, and destroy searchable Local Storage data "
  }
};

$.each(port, function(key, value){
  let hasDescription = '';

  if(value.hasOwnProperty('description')) {
     hasDescription = `<div class="ui fluid description">${value.description}</div>`;
  };
  
  $(".stackable").prepend(`<div class="column"><figure><a href="${value.link}" target="_blank">${hasDescription}<img class="ui fluid image port-image" src="${value.image}" alt="${value.name}"<figcaption>${value.name}</figcaption></a></figure></div>`);

});

function getWidth() {
  const imageWidth = $(".port-image").width();
  $(".description").css("height", imageWidth)
}

setTimeout(() => getWidth(), 100);

$(window).resize(getWidth);
