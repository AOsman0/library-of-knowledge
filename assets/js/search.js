//TODO find a way to link home page to search page
const mainElement = document.getElementById("main");
const API_KEY = "AIzaSyAb1sWH5SP_pa3SpuWv9TXLKXk9X2NWwFE";
let title = "";
let author = "";
let image = "";
let publisher = "";
let description = "";

// function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();
  //get text input
  let search = document.getElementById("input-text").value;
  console.log(search);
  //validate
  if (search) {
    // build object with full name and results
    console.log("good search");

    //clear feedbackResults
  } else {
    alert("enter valid search");
  }
};

const onLoad = () => {
  //initialise feedback results
  initialiseLocalStorage();
  //   render search banner
  renderSearchBanner();
};
window.addEventListener("load", onLoad);
