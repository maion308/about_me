'use-strict'

const aboutMe           = document.querySelector("#about-me");
const aboutMeContainer  = document.querySelector("#about-container");
const projects          = document.querySelector("#project-link");
const mainContent       = document.querySelector("#main-content");
const imgContent        = document.querySelector("#img-content");
const aboutLink         = document.querySelector("#about-link");
const contactLink       = document.querySelector("#contact-link");
const projectBox        = document.querySelector("#project-content")
const contactContent    = document.querySelector(".contact-container")
const projectHeader     = document.querySelector(".projects-header")
const projectsHr        = document.querySelector("#projects-hr")
const triviaHeader      = document.querySelector(".games-header")
const gameDescription   = document.querySelector(".game-description")
const gameImgBox        = document.querySelector(".game-img-box")
const relate            = document.querySelector("#relate")
const relateDescription = document.querySelector("#relate-description")
const relateImg         = document.querySelector("#relate-images")
const recentProjects    = document.querySelector("#project-header")
const tomoe             = document.querySelector("#tomoe")
const tomoeDescription  = document.querySelector("#tomoe-description")
const tomoeImg          = document.querySelector("#tomoe-img-box")


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
        projectHeader.classList.remove("hide")
        recentProjects.setAttribute("class", "projects-header")
        projectsHr.classList.remove("hide")
        triviaHeader.classList.remove("hide")
        gameDescription.classList.remove("hide")
        gameImgBox.setAttribute("class", "game-images")
        gameImgBox.classList.remove("hide")
        relate.classList.remove("hide")
        relateDescription.classList.remove("hide")
        relateImg.setAttribute("class", "game-images")
        relateImg.classList.remove("hide")
        tomoe.classList.remove("hide")
        tomoeDescription.classList.remove("hide")
        tomoeImg.classList.remove("hide")
        tomoeImg.setAttributes("class","game-images")

    }
    
    

})

aboutLink.addEventListener("click", () => {
    if(mainContent.classList == "hide" || contactContent.classList !="hide") {
        mainContent.setAttribute("class", "main-container");
        mainContent.classList.remove("hide");
        imgContent.setAttribute("class", "image-container");
        imgContent.classList.remove("hide");  
        projectBox.setAttribute("class", "hide")
        contactContent.setAttribute("class", "hide")
        projectHeader.classList.remove("projects-header")
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