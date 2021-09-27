var button = document.querySelector(".contacts-button-map");
var map = document.querySelector(".modal-map");
var imgmap = document.querySelector(".modal-map img");
var mapclose = document.querySelector(".map-modal-close");

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    imgmap.classList.add("map-img-none");
    map.classList.add("modal-show");
});

mapclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
});

 window.addEventListener("keydown", function (evt) {
          if (evt.keyCode === 27) {
              if (map.classList.contains("modal-show")) {
                       evt.preventDefault();
                      map.classList.remove("modal-show");
              }
          }
 });
