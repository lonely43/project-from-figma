const chooser = document.getElementById("chooser")

const value1 = document.getElementById("monthly")
const value2 = document.getElementById("annualy")

chooser.addEventListener("click", () => {
   console.log("click")
   value1.classList.toggle("activeChoose")
   value2.classList.toggle("activeChoose")
})

const question = document.querySelectorAll(".question")

question.forEach(el => {
   el.addEventListener("click", () => {
      el.firstElementChild.lastElementChild.classList.toggle("transformArrow")
      console.log(el.firstElementChild.lastElementChild.classList)
      el.lastElementChild.classList.toggle("showText")
   })
})

const changeLang = document.getElementById("changeLang")
const content = document.getElementById("changeLangContent")
const arrow = document.getElementById("arrowChangeLang")

changeLang.addEventListener("click", () => {
   content.classList.toggle("showLang")
   arrow.classList.toggle("rotate180")
})

const burgerMenu = document.getElementById("burgerMenu")
const burgerContent = document.getElementById("btnsForBurgerMenu")
burgerMenu.addEventListener("click", () => {
   burgerContent.classList.toggle("showBurgerMenu")
})