// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import * as flsFunctions from "../files/functions.js";


"use strict"

window.addEventListener("DOMContentLoaded", windowLoad);

function windowLoad() {
   const saveUserLang  = localStorage.getItem('user-lang')

   function menuInit() {
      if (document.querySelector(".icon-menu")) {
         document.addEventListener("click", function (e) {
            if (e.target.closest('.icon-menu')) {
               // bodyLockToggle();
               flsFunctions.bodyLockToggle()
               document.documentElement.classList.toggle("menu-open");
            }
         });
      };
   }
   menuInit()

   if(isMobile.any()){
      document.querySelector('body').classList.add("touch");
   }

   const mainBlock = document.querySelectorAll('.menu-header__link')[1];
   const about = document.querySelectorAll('.menu-header__link')[2];

   if(document.querySelector('body').hasAttribute('data-active')){
   }else{
      mainBlock.classList.remove("menu-header__link_active")
      about.classList.add("menu-header__link_active")
   }
   

   // *перевірка нявності уже вибраної мови
   if(saveUserLang === "uk" || saveUserLang === "en"){
      var userLang = saveUserLang;
   }else{
      var userLang = navigator.language;
   }
   document.documentElement.lang = userLang.substring(0, 2)
   chageContante(document.documentElement.lang)

   const langButton = document.querySelector('.services-header__lang');
   if(langButton){
      langButton.addEventListener("click", function (e) {
         chageLang(true);
      });
   }

   
   // function chageLang(saveLang = false){
   //    //  перевірка яка мова стоїть
   //    let currentLang;
   //    if(document.documentElement.lang === 'uk'){
   //       currentLang = 'uk'
   //    }else if(document.documentElement.lang === 'en'){
   //       currentLang = 'en'
   //    }
   //    let newLang;

   //    // встановлення новї
   //    if(currentLang === 'uk'){
   //       newLang = 'en';
   //    }else if(currentLang === 'en'){
   //       newLang = 'uk';
   //    }
   //    document.documentElement.lang = newLang;

   //    // збереження нової мови в localStorage
   //    // saveUserLang ? localStorage.setItem('user-lang', newLang) : null;
   //    // console.log(saveUserLang);
   //    // console.log(newLang);
   //    if(saveUserLang === null){
   //       localStorage.setItem('user-lang', newLang);
   //    }else{
   //       localStorage.removeItem('user-lang')
   //       localStorage.setItem('user-lang', newLang);
   //    }
   //    console.log(localStorage.getItem('user-lang'));
   //    chageContante(newLang);
   // }

   function chageContante(newLang){
      // оголошення полів тексту що мінятимуться
      // const langIcon = document.querySelector('.services-header__lang');
      // // const test = document.querySelector('.test');
      // const welcomT = document.querySelector('.welcom__title');
      // const welcomSub = document.querySelector('.welcom__sub-title');
      // const ChooseB = document.querySelector('.welcom__button');
      // const mainBlock = document.querySelectorAll('.menu-header__link')[1];
      // const about = document.querySelectorAll('.menu-header__link')[2];

      

      if(newLang === "uk"){
         // langIcon.textContent = `uk`;
         // welcomT.textContent = `Насолоджуйтесь Ранковою Кавою`
         // welcomSub.textContent = `Кава заварюється шляхом обсмажування зелених зерен кави на гарячому вугіллі у жаровні.`
         // ChooseB.textContent = `обрати каву`
         // mainBlock.textContent = `Головна`
         // about.textContent = `Про нас`
         // test.textContent = ` Далеко-далеко за словесными горами в стране гласных и согласных живут
         // рыбные тексты. Правилами языком ipsum что дорогу! Грамматики, свою
         // маленькая коварный даже строчка пояс журчит выйти назад проектах подпоясал
         // собрал безорфографичный необходимыми?`
      }else{
         // langIcon.textContent = `en`
         // welcomT.textContent = `Enjoy Morning Coffee`
         // welcomSub.textContent = `Coffee is brewed by roasting green coffee beans over hot coals in a roaster.`
         // ChooseB.textContent = `choose coffee`
         // mainBlock.textContent = `Home`
         // about.textContent = `About us`
         // test.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur
         // iure fugiat doloribus perspiciatis, aperiam necessitatibus aut? Nam
         // odit voluptatibus, iure quos ratione ipsa modi accusamus illo, saepe
         // praesentium in?`
      }
   }
}


if(isMobile.any()){
   document.querySelector('body').classList.add("touch");
}

const showMoreBtn = document.querySelector('.block__more');
const contentMore = document.querySelector('.tabs__content');


let clicked = false;

showMoreBtn.addEventListener('click', () => {
 if (!clicked) {
   // add classes
   showMoreBtn.classList.add('showmore-active');
   contentMore.classList.add('content-active');
   clicked = true;
 } else {
   // remove classes
   showMoreBtn.classList.remove('showmore-active');
   contentMore.classList.remove('content-active');
   clicked = false;
 }
});