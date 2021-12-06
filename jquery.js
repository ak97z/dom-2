window.$ = window.jQuery = function (selectorOrArray) {
  // let elements;
  // if (typeof x1 === "string") {
  //   elements = document.querySelectorAll(x1);
  // } else if (x1 instanceof Array) {
  //   elements = x1;
  // }
    let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  } 
  return{
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
      }
      return this;
    }, 

      find(selector) {
      let array = [];
      for (let i = 0; i < elements.length; i++) {
        array = array.concat(
          Array.from(elements[i].querySelectorAll(selector))
        );
      }
      array.oldApi = this;
      return jQuery(array);
    },
each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i);
      }
      return this;
    },
    parent() {
      const array = [];
      this.each(function (x) {
        if (array.indexOf(x.parentNode) === -1) {
          array.push(x.parentNode);
        }
      });
      return jQuery(array);
    },
    children() {
      const array = [];
      this.each(function (x) {
        array.push(...x.children);
      });
      return jQuery(array);
    },

    print() {
      console.log(elements);
    }, 

     oldApi: selectorOrArray.oldApi,
    end() {
      return this.oldApi;
    }, 
 };
};
