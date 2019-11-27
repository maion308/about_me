const aboutMe = document.querySelector("#about-me");
const aboutMeContainer = document.querySelector("#about-container");
const projects = document.querySelector("#project-link");
const mainContent = document.querySelector("#main-content");
const imgContent = document.querySelector("#img-content");
const aboutLink = document.querySelector("#about-link");
const contactLink = document.querySelector("#contact-link");
const projectBox = document.querySelector("#project-content")
const contactContent = document.querySelector(".contact-container")

aboutMe.addEventListener("click", () => {
    aboutMeContainer.classList.toggle("hide")
})

projects.addEventListener("click", () => {
    if (mainContent.classList != "hide" || imgContent.classList != "hide" || contactLink.classList != "hide") {
        mainContent.setAttribute("class", "hide");
        mainContent.classList.remove("main-container");
        imgContent.setAttribute("class", "hide");
        imgContent.classList.remove("image-container");
        projectBox.classList.remove("hide");
        contactContent.setAttribute("class", "hide");
    }

})

aboutLink.addEventListener("click", () => {
    if(mainContent.classList == "hide" || contactContent.classList == "hide") {
        mainContent.setAttribute("class", "main-container");
        mainContent.classList.remove("hide");
        imgContent.setAttribute("class", "image-container");
        imgContent.classList.remove("hide");  
        projectBox.setAttribute("class", "hide")
    }
})

contactLink.addEventListener("click", () => {
    if (mainContent.classList != "hide" || imgContent.classList != "hide" || projects.classList != "hide") {
        mainContent.setAttribute("class", "hide");
        mainContent.classList.remove("main-container");
        imgContent.setAttribute("class", "hide");
        imgContent.classList.remove("image-container");
        projectBox.setAttribute("class", "hide")
        projectBox.classList.remove("project-container")
        contactContent.classList.remove("hide")
    }

})