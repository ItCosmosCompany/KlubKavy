// Підключення з node_modules
import * as noUiSlider from "nouislider";

// Підключення стилів з scss/base/forms/range.scss
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
import "nouislider/dist/nouislider.css";

export function rangeInit() {
   const priceSlider = document.querySelector(".price__range");
   if (priceSlider) {
      let textFrom = priceSlider.getAttribute("data-from");
      let textTo = priceSlider.getAttribute("data-to");
      // noUiSlider.create(priceSlider, {
      // 	start: 0, // [0,200000]
      // 	connect: [true, false],
      // 	range: {
      // 		'min': [0],
      // 		'max': [200000]
      // 	}
      // });

      noUiSlider.create(priceSlider, {
         start: [500, 4000],
         connect: true,
         range: {
            min: [0],
            "10%": [500, 500],
            "50%": [4000, 1000],
            max: [10000],
         },
      });

      var snapValues = [
         document.getElementById("price-start"),
         document.getElementById("price-end"),
      ];

      priceSlider.noUiSlider.on("update", function (values, handle) {
         snapValues[handle].value = values[handle];
      });

      const priceStart = document.getElementById("price-start");
      const priceEnd = document.getElementById("price-end");
      priceStart.addEventListener("change", setPriceValues);
      priceEnd.addEventListener("change", setPriceValues);

      function setPriceValues() {
         let priceStartValue;
         let priceEndValue;
         if (priceStart.value != "") {
            priceStartValue = priceStart.value;
         }
         if (priceEnd.value != "") {
            priceEndValue = priceEnd.value;
         }
         priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
      }
   }
}
rangeInit();