const toggle = document.querySelector(".bars");
const showcase = document.querySelector(".showcase");
const watch = document.querySelector(".watch");
const trailers = document.getElementById("trailers");
const social = document.querySelector(".social");

toggle.addEventListener("click", () => {
  showcase.classList.toggle("active");
});

toggle.addEventListener("click", () => {
  social.classList.toggle("active");
});

watch.addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/watch?v=ndl1W4ltcmg";
});

trailers.addEventListener("click", () => {
  window.location.href = "https://www.youtube.com/watch?v=ndl1W4ltcmg";
});


const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=529d0d3eca2a523fd9db7d12d7f4b740&page=1'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const Search_API = 'https://api.themoviedb.org/3/search/movie?api_key=529d0d3eca2a523fd9db7d12d7f4b740&query="'

const search = document.getElementById('search')
const form = document.getElementById('form')

const main = document.getElementById('main')

getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies){
    main.innerHTML = ''

    movies.forEach((movie) => {
        const {title, poster_path, vote_average,overview} = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')


        movieEl.innerHTML = `
        
        <div class="card">
        <img src="${IMG_PATH + poster_path }" alt=""/>
        <div class="text">
          <h2>
            ${title}
          </h2>
          <small>${vote_average}</small>
        </div>
        <div class="overview">
          <h2>Overview</h2>
          ${overview}
        </div>

        `

        main.appendChild(movieEl)
    })
}

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ''){
        getMovies(Search_API + searchTerm)

        search.value = ''
    }else{
        window.location.reload()
    }
})



