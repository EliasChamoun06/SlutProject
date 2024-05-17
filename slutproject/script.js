document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("toggleSwitch");
  const body = document.getElementById("menu-tacos");

  console.log(body);

  body.classList.add("light-mode");

  console.log(toggleSwitch);

  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      body.classList.replace("light-mode", "dark-mode");
    } else {
      body.classList.replace("dark-mode", "light-mode");
    }
  });
  console.log("hej");
});
// Dropdown button - Kontaka oss
document.addEventListener("DOMContentLoaded", function () {
  var dropdownButton = document.querySelector(".dropdown-button");
  var dropdownContent = document.querySelector(".dropdown-content");

  dropdownButton.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
  });

  window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropdown-button")) {
      if (dropdownContent.classList.contains("show")) {
        dropdownContent.classList.remove("show");
      }
    }
  });
});

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxpYXMwNiIsImEiOiJjbHdiMjdqMGkwaG5xMmpwYXZjZWdrMWd0In0.SGLTbgoucFssC4BF20ZP6Q";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [18.0686, 59.3293],
  zoom: 15,
});

const marker = new mapboxgl.Marker().setLngLat([18.0686, 59.3293]).addTo(map);

const popup = new mapboxgl.Popup({ offset: 25 })
  .setLngLat([18.0686, 59.3293])
  .setHTML("<h3>Stockholm city</h3><p>Står precis i Gustav adolfs torg</p>")
  .addTo(map);
