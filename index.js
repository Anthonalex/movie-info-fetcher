const searchBtn = document.querySelector(".search-btn");
const input = document.querySelector(".search-input");
const movieBox = document.querySelector(".movie-box-container");
const titleParagraph = document.querySelector(".title-p");
const descParagraph = document.querySelector(".desc-paragraph");
const directorParagraph = document.querySelector(".director-p");
const producerParagraph = document.querySelector(".producer-p");
const releaseDateParagraph = document.querySelector(".releaseDate-p");

const searchState = {
  value: "",
  title: "",
  description: "",
  director: "",
  producer: "",
  releaseDate: "",
};

function boxUpdateInfo() {
  titleParagraph.textContent = searchState.title;
  descParagraph.textContent = searchState.description;
  directorParagraph.textContent = searchState.director;
  producerParagraph.textContent = searchState.producer;
  releaseDateParagraph.textContent = searchState.releaseDate;
}

function getMovie(data) {
  data.forEach((el) => {
    if (searchState.value === el.title) {
      searchState.title = el.title;
      searchState.description = el.description;
      searchState.director = el.director;
      searchState.producer = el.producer;
      searchState.releaseDate = el.release_date;
    }
  });
  boxUpdateInfo();
}

function renderMovie() {
  let url = "https://ghibliapi.herokuapp.com/films";

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((movies) => {
      getMovie(movies);
      movieBox.classList.add("active");
    })
    .catch((error) => {
      alert(`${error}`);
    });
}

searchBtn.addEventListener("click", () => {
  searchState.value = input.value;

  renderMovie();
});
