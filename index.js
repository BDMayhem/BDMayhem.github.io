const port = [
  {
  //   name: "A Tribute to John Irving",
  //   link: "https://bdmayhem.github.io/irving/",
  //   image: "assets/tribute.png",
  // },{
    name: "Movie Quote Machine",
    link: "https://bdmayhem.github.io/movie-quotes/",
    image: "assets/quote.png",
  },{
  //   name: "Local Weather",
  //   link: "https://bdmayhem.github.io/weather/",
  //   image: "assets/weather.png",
  // },{
    name: "Search Wikipedia",
    link: "https://bdmayhem.github.io/search-wiki/",
    image: "assets/wiki.png",
  },{
    name: "Twitch Monitor",
    link: "https://bdmayhem.github.io/twitch/",
    image: "assets/twitch.png",
  // },{
  //   name: "Javascript Calculator",
  //   link: "https://bdmayhem.github.io/calculator/",
  //   image: "assets/calculator.png",
  },{
    name: "Pomodoro Clock",
    link: "https://bdmayhem.github.io/pomodoro/",
    image: "assets/pomodoro.png",
  // },{
  //   name: "Tic-Tac-Toe",
  //   link: "https://bdmayhem.github.io/tictactoe/",
  //   image: "assets/tic.png",
  },{
    name: "Simon Game",
    link: "https://bdmayhem.github.io/simon/",
    image: "assets/simon.png",
  },{
    name: "Random, Useless Circles",
    link: "https://bdmayhem.github.io/circles/",
    image: "assets/circles.jpg"
  },{
    name: "Green Apple Weddings",
    link: "http://greenappleweddings.com",
    image: "assets/ga.jpg",
    description: "HTML, MaterializeCSS, jQuery"
  },{
    name: "Deep Town Calc",
    link: "https://bdmayhem.github.io/DeepTownCalc",
    image: "assets/dtc.png",
    description: "HTML, CSS, Vanilla JS - Single Page App to calculate best choices for mobile game 'Deep Town'"
  },{
    name: "Grandma's Recipes",
    link: "https://bdmayhem.github.io/GrandmasRecipes/",
    image: "assets/grandmasrecipes.png",
    description: "React, LocalStorage, React-Bootstrap - Create, Read, Update, and Destroy local receipe data"
  }
];

const portItems = document.querySelector('.port-items');

port.reverse().forEach(element => {
  const portItem = document.createElement('div');
  portItem.classList.add('port-item');

  const itemLink = document.createElement('a');
  itemLink.href = element.link;
  portItem.appendChild(itemLink);

  const itemImage = document.createElement('img');
  itemImage.src = element.image;
  itemLink.appendChild(itemImage)

  const itemName = document.createElement('h3');
  itemName.appendChild(document.createTextNode(element.name));
  itemLink.appendChild(itemName);

  if (element.hasOwnProperty('description')) {
    const itemDesc = document.createElement('p');
    const desc = document.createTextNode(element.description);
    itemDesc.appendChild(desc);
    portItem.appendChild(itemDesc);
  }

  portItems.appendChild(portItem);
});
