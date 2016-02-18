var pointsArray = document.getElementsByClassName('point');

//<<<<<<< HEAD
var revealPoint = function(point) {
         point.style.opacity = 1;
         point.style.transform = "scaleX(1) translateY(0)";
         point.style.msTransform = "scaleX(1) translateY(0)";
         point.style.WebkitTransform = "scaleX(1) translateY(0)";
     };

var animatePoints = function(points) {
  forEach(points, revealPoint);

};

window.onload = function() {

  if (window.innerHeight > 950) {
    animatePoints(pointsArray);
  }

  window.addEventListener("scroll", function(event) {
    if (pointsArray[0].getBoundingClientRect().top <= 500) {
      animatePoints(pointsArray);

    }
  });
}
/*/=======
     var points = document.getElementsByClassName('point');

     var revealPoint = function(index) {
         points[index].style.opacity = 1;
         points[index].style.transform = "scaleX(1) translateY(0)";
         points[index].style.msTransform = "scaleX(1) translateY(0)";
         points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
     }

     for (var i = 0; i < points.length; i++) {

     }
 };
>>>>>>> 00ae408e276d825e00293677fe147e928b6b28db
*/
