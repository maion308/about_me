const aboutMe = document.querySelector("#about-me");
const aboutMeContainer = document.querySelector("#about-container");
const projects = document.querySelector("#project-link");
const mainContent = document.querySelector("#main-content");
const imgContent = document.querySelector("#img-content");
const aboutLink = document.querySelector("#about-link");

aboutMe.addEventListener("click", () => {
    aboutMeContainer.classList.toggle("hide")
})

projects.addEventListener("click", () => {
    if (mainContent.classList != "hide") {
        mainContent.setAttribute("class", "hide");
        mainContent.classList.remove("main-container");
        imgContent.setAttribute("class", "hide");
        imgContent.classList.remove("image-container");
    }

})

aboutLink.addEventListener("click", (e) => {
    if(mainContent.classList == "hide") {
        mainContent.setAttribute("class", "main-container");
        mainContent.classList.remove("hide");
        imgContent.setAttribute("class", "image-container");
        imgContent.classList.remove("hide");  
    }
})
