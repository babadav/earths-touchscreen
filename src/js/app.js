
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();


var handPrint = document.querySelector('.hand-print');

handPrint.addEventListener('click', function(){
	handPrint.classList.toggle('active');
})



var roundToArbitraryNumbers = function(endValue) {
  var snapPositions = [
    // the visible notches are coded in CSS. these numbers are the actual numbers it uses for snapping
    0, 78, 125, 150, 195, 218, 250 ,287 ,341, 
  ]  
  var closestDistance = Infinity;
  var closestIndex = 0;
  snapPositions.forEach(function(p, i) {
    var distance = Math.abs(p - endValue);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = i;
    }
  })
  return snapPositions[closestIndex];
}


Draggable.create(".dragger", {
    type:"x",
    edgeResistance:0.65,
    bounds:".drag-area",
    throwProps:true,
    // liveSnap: true, // toggle this for different effect
    snap: {
        x: roundToArbitraryNumbers
    },
    onDragEnd: function() {

      console.log("dropped closest to ", roundToArbitraryNumbers(this.x))

   	   let container1Text = document.querySelector('.main-text-1')
	   let container1Image = document.querySelector('.image-1')
	   let ringDate1 = document.querySelector('.ring-title1')
	   let ringTitle1 = document.querySelector('.ring-date1')

	   let container2Text = document.querySelector('.main-text-2')
	   let container2Image = document.querySelector('.image-2')
	   let ringDate2 = document.querySelector('.ring-title2')
	   let ringTitle2 = document.querySelector('.ring-date2')


	   let container3Text = document.querySelector('.main-text-3')
	   let container3Image = document.querySelector('.image-3')
	   let ringDate3 = document.querySelector('.ring-title3')
	   let ringTitle3 = document.querySelector('.ring-date3')

	   let container4Text = document.querySelector('.main-text-4')
	   let container4Image = document.querySelector('.image-4')
	   let ringDate4 = document.querySelector('.ring-title4')
	   let ringTitle4 = document.querySelector('.ring-date4')

      if (roundToArbitraryNumbers(this.x) < 50 ){

      	TweenMax.to(container1Text , 2 , {autoAlpha: 1});
	    TweenMax.to(container1Image , 2 , {autoAlpha: 1});

	    TweenMax.to(container2Text , 2 , {autoAlpha: 0});
	    TweenMax.to(container2Image , 2 , {autoAlpha: 0});
	    TweenMax.to(container3Text , 2 , {autoAlpha: 0});
	    TweenMax.to(container3Image , 2 , {autoAlpha: 0});
	    TweenMax.to(container4Text , 2 , {autoAlpha: 0});
	    TweenMax.to(container4Image , 2 , {autoAlpha: 0});
      
      }

      if (roundToArbitraryNumbers(this.x) > 0 && roundToArbitraryNumbers(this.x) < 79 ) {
      	TweenMax.to(container1Text , 2 , {autoAlpha: 0});
	    TweenMax.to(container1Image , 2 , {autoAlpha: 0});
	    TweenMax.to(container3Text , 2 , {autoAlpha: 0});
	    TweenMax.to(container3Image , 2 , {autoAlpha: 0});
	    TweenMax.to(container4Text , 2 , {autoAlpha: 0});
	    TweenMax.to(container4Image , 2 , {autoAlpha: 0});

	    TweenMax.to(container2Text , 2 , {autoAlpha: 1});
	    TweenMax.to(container2Image , 2 , {autoAlpha: 1});
      }


      if (roundToArbitraryNumbers(this.x) > 79 && roundToArbitraryNumbers(this.x) < 125 ){
      	TweenMax.to(container2Text , 2 , {autoAlpha: 0});
	    TweenMax.to(container2Image , 2 , {autoAlpha: 0});
	    TweenMax.to(container1Text , 2 , {autoAlpha: 0});
	    TweenMax.to(container1Image , 2 , {autoAlpha: 0});
	    TweenMax.to(container4Text , 2 , {autoAlpha: 0});
	    TweenMax.to(container4Image , 2 , {autoAlpha: 0});

	    TweenMax.to(container3Text , 2 , {autoAlpha: 1});
	    TweenMax.to(container3Image , 2 , {autoAlpha: 1});

      }

      if (roundToArbitraryNumbers(this.x) > 125 && roundToArbitraryNumbers(this.x) < 150 ){
      	TweenMax.to(container2Text , 2 , {autoAlpha: 0});
	    TweenMax.to(container2Image , 2 , {autoAlpha: 0});
	    TweenMax.to(container1Text , 2 , {autoAlpha: 0});
	    TweenMax.to(container1Image , 2 , {autoAlpha: 0});
	    TweenMax.to(container3Text , 2 , {autoAlpha: 0});
	    TweenMax.to(container3Image , 2 , {autoAlpha: 0});

	    TweenMax.to(container4Text , 2 , {autoAlpha: 1});
	    TweenMax.to(container4Image , 2 , {autoAlpha: 1});

      }
    }
});
