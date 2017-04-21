var port = {
  tribute: {
    name: "Tribute Page",
    link: "http://codepen.io/BDMayhem/full/MJZrwE",
    image: "",
  },
  portfolio: {
    name: "Portfolio",
    link: "http://codepen.io/BDMayhem/full/wgNWpL/",
    image: "",
  },
   quote: {
    name: "Movie Quote Machine",
    link: "http://codepen.io/BDMayhem/full/EWPwZO",
    image: "",
  },
  weather: {
    name: "Local Weather",
    link: "http://codepen.io/BDMayhem/full/evzXaa/",
    image: "",
  },
  wiki: {
    name: "Wikipedia Viewer",
    link: "http://codepen.io/BDMayhem/full/LWWKdm/",
    image: "",
  },
  twitch: {
    name: "Twitch Monitor",
    link: "http://codepen.io/BDMayhem/full/vxZYra",
    image: "",
  },
  calculator: {
    name: "Javascript Calculator",
    link: "http://codepen.io/BDMayhem/full/MpONJN/",
    image: "",
  },
  pomodoro: {
    name: "Pomodoro Clock",
    link: "http://codepen.io/BDMayhem/full/MpBOOw/",
    image: "",
  },
  tictactoe: {
    name: "Tic-Tac-Toe",
    link: "http://codepen.io/BDMayhem/full/BWGEGM",
    image: "",
  },
  simon: {
    name: "Simon Game",
    link: "https://bdmayhem.github.io/simon/",
    image: "https://68.media.tumblr.com/5e146e43eed26d1e1260919ba2576fd6/tumblr_ooqgim1bcj1wo45zvo1_1280.png",
  },
}

$.each(port, function(key, value){
  $(".stackable").prepend(`<div class="column"><figure><a href="${value.link}" target="_blank"><img class="ui fluid image port-image" src="${value.image}" alt="${value.name}"<figcaption>${value.name}</figcaption></a></figure></div>`)
})
