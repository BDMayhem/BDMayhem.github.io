var port = {
  tribute: {
    name: "A Tribute to John Irving",
    link: "https://bdmayhem.github.io/irving/",
    image: "https://68.media.tumblr.com/78ea31ed9beabce7cf88ef2a0cf618c1/tumblr_inline_oorr7lJDyV1t011w4_540.png",
  },
   quote: {
    name: "Movie Quote Machine",
    link: "https://bdmayhem.github.io/movie-quotes/",
    image: "https://68.media.tumblr.com/24cd335e2621156db5dbb34d7b58321c/tumblr_inline_oorr84Vubk1t011w4_540.png",
  },
  weather: {
    name: "Local Weather",
    link: "https://bdmayhem.github.io/weather/",
    image: "https://68.media.tumblr.com/798abe14ebe45de3db13fe48c72d2059/tumblr_inline_oorr7pklf11t011w4_540.png",
  },
  wiki: {
    name: "Search Wikipedia",
    link: "https://bdmayhem.github.io/search-wiki/",
    image: "https://68.media.tumblr.com/d50818dff786611f78002912d5a0ea00/tumblr_inline_oorr7utpR81t011w4_540.png",
  },
  twitch: {
    name: "Twitch Monitor",
    link: "https://bdmayhem.github.io/twitch/",
    image: "https://68.media.tumblr.com/5fae274ab9b990573843d0c3a5e011e1/tumblr_inline_oorr7dtA0P1t011w4_540.png",
  },
  calculator: {
    name: "Javascript Calculator",
    link: "https://bdmayhem.github.io/calculator/",
    image: "https://68.media.tumblr.com/7d4ecbbe53249b50cb224adb924ca593/tumblr_inline_oorr7bQIJg1t011w4_540.png",
  },
  pomodoro: {
    name: "Pomodoro Clock",
    link: "https://bdmayhem.github.io/pomodoro/",
    image: "https://68.media.tumblr.com/79edaf1f008c5af9db23b6508251db77/tumblr_inline_oorr7bYyqE1t011w4_540.png",
  },
  tictactoe: {
    name: "Tic-Tac-Toe",
    link: "https://bdmayhem.github.io/tictactoe/",
    image: "https://68.media.tumblr.com/f9f4def8c2ae3556380d7d4236357ae6/tumblr_inline_oorrjhMfpo1t011w4_540.png",
  },
  simon: {
    name: "Simon Game",
    link: "https://bdmayhem.github.io/simon/",
    image: "https://68.media.tumblr.com/5e146e43eed26d1e1260919ba2576fd6/tumblr_ooqgim1bcj1wo45zvo1_540.png",
  },
}

$.each(port, function(key, value){
  $(".stackable").prepend(`<div class="column"><figure><a href="${value.link}" target="_blank"><img class="ui fluid image port-image" src="${value.image}" alt="${value.name}"<figcaption>${value.name}</figcaption></a></figure></div>`)
})
