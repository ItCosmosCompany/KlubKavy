// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

"use strict"

window.addEventListener("DOMContentLoaded", windowLoad);

function windowLoad() {
   const saveUserLang  = localStorage.getItem('user-lang')

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

   
   function chageLang(saveLang = false){
      //  перевірка яка мова стоїть
      let currentLang;
      if(document.documentElement.lang === 'uk'){
         currentLang = 'uk'
      }else if(document.documentElement.lang === 'en'){
         currentLang = 'en'
      }
      let newLang;

      // встановлення новї
      if(currentLang === 'uk'){
         newLang = 'en';
      }else if(currentLang === 'en'){
         newLang = 'uk';
      }
      document.documentElement.lang = newLang;

      // збереження нової мови в localStorage
      // saveUserLang ? localStorage.setItem('user-lang', newLang) : null;
      // console.log(saveUserLang);
      // console.log(newLang);
      if(saveUserLang === null){
         localStorage.setItem('user-lang', newLang);
      }else{
         localStorage.removeItem('user-lang')
         localStorage.setItem('user-lang', newLang);
      }
      console.log(localStorage.getItem('user-lang'));
      chageContante(newLang);
   }

   function chageContante(newLang){
      // оголошення полів тексту що мінятимуться
      const langIcon = document.querySelector('.services-header__lang');
      // const test = document.querySelector('.test');

      if(newLang === "uk"){
         langIcon.textContent = `uk`
         // test.textContent = ` Далеко-далеко за словесными горами в стране гласных и согласных живут
         // рыбные тексты. Правилами языком ipsum что дорогу! Грамматики, свою
         // маленькая коварный даже строчка пояс журчит выйти назад проектах подпоясал
         // собрал безорфографичный необходимыми?`
      }else{
         langIcon.textContent = `en`
         // test.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tenetur
         // iure fugiat doloribus perspiciatis, aperiam necessitatibus aut? Nam
         // odit voluptatibus, iure quos ratione ipsa modi accusamus illo, saepe
         // praesentium in?`
      }
   }
}