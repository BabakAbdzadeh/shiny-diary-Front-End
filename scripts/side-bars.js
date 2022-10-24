const logo = document.querySelector('.fa-twitter');
const navBar = document.querySelector('.sidebar');
const tweetBTN = document.querySelector('.sidebar-tweet');
const feed = document.querySelector('.feed');
const widgetsBar = document.querySelector('.widgets');
const searchBar = document.querySelector('.widgets-input');
const searchInput = document.querySelector('.search-input')

logo.addEventListener('click', ()=>{
  navBar.classList.toggle('active');
  logo.classList.toggle('active');
  tweetBTN.classList.toggle('active');
  feed.classList.toggle('active');
  widgetsBar.classList.toggle('active');

});



searchBar.addEventListener('mouseover', ()=>{
  searchBar.classList.toggle('active');
  searchInput.style.transition = "1s";
  searchInput.style.backgroundColor = "#1c39BB";
});

searchBar.addEventListener('mouseout', ()=>{
  searchBar.classList.toggle('active');
  searchInput.style.backgroundColor = "#0067A5";
    searchInput.style.transition = "1s";
});
