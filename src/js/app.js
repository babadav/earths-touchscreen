
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();


var handPrint = document.querySelector('.hand-print');

// handPrint.addEventListener('click', function(){
// 	handPrint.classList.toggle('active');
// })



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


Draggable.create(".history-dragger", {
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

     let container5Text = document.querySelector('.main-text-5')
     let container5Image = document.querySelector('.image-5')
     let ringDate5 = document.querySelector('.ring-title5')
     let ringTitle5 = document.querySelector('.ring-date5')

     let container6Text = document.querySelector('.main-text-6')
     let container6Image = document.querySelector('.image-6')
     let ringDate6 = document.querySelector('.ring-title6')
     let ringTitle6 = document.querySelector('.ring-date6')

     let container7Text = document.querySelector('.main-text-7')
     let container7Image = document.querySelector('.image-7')
     let ringDate7 = document.querySelector('.ring-title7')
     let ringTitle7 = document.querySelector('.ring-date7')

     let container8Text = document.querySelector('.main-text-8')
     let container8Image = document.querySelector('.image-8')
     let ringDate8 = document.querySelector('.ring-title8')
     let ringTitle8 = document.querySelector('.ring-date8')

     let container9Text = document.querySelector('.main-text-9')
     let container9Image = document.querySelector('.image-9')
     let ringDate9 = document.querySelector('.ring-title9')
     let ringTitle9 = document.querySelector('.ring-date9')


      if (roundToArbitraryNumbers(this.x) < 50 ){

	    TweenMax.to(container2Text , 2 , {opacity: 0, display: "none"});
	    TweenMax.to(container2Image , 2 , {opacity: 0, display: "none"});
	    TweenMax.to(ringDate2 , 2 , {opacity: 0, display: "none"});
	    TweenMax.to(ringTitle2 , 2 , {opacity: 0, display: "none"});

	    // TweenMax.to(container3Text , 2 , {opacity: 0, display: "none"});
	    // TweenMax.to(container3Image , 2 , {opacity: 0, display: "none"});
	    // TweenMax.to(ringDate3 , 2 , {opacity: 0, display: "none"});
	    // TweenMax.to(ringTitle3 , 2 , {opacity: 0, display: "none"});

	    // TweenMax.to(container4Text , 2 , {opacity: 0, display: "none"});
	    // TweenMax.to(container4Image , 2 , {opacity: 0, display: "none"});
	    // TweenMax.to(ringDate4 , 2 , {opacity: 0, display: "none"});
	    // TweenMax.to(ringTitle4 , 2 , {opacity: 0, display: "none"});

     //  TweenMax.to(container5Text , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(container5Image , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(ringDate5 , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(ringTitle5 , 2 , {opacity: 0, display: "none"});

     //  TweenMax.to(container6Text , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(container6Image , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(ringDate6 , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(ringTitle6 , 2 , {opacity: 0, display: "none"});

     //  TweenMax.to(container7Text , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(container7Image , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(ringDate7 , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(ringTitle7 , 2 , {opacity: 0, display: "none"});

     //  TweenMax.to(container8Text , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(container8Image , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(ringDate8 , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(ringTitle8 , 2 , {opacity: 0, display: "none"});

     //  TweenMax.to(container9Text , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(container9Image , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(ringDate9 , 2 , {opacity: 0, display: "none"});
     //  TweenMax.to(ringTitle9 , 2 , {opacity: 0, display: "none"});

     //  TweenMax.to(container1Text , 2 , {opacity: 1, display: "block"});
     //  TweenMax.to(container1Image , 2 , {opacity: 1, display: "block"});
     //  TweenMax.to(ringDate1 , 2 , {opacity: 1, display: "block"});
     //  TweenMax.to(ringTitle1 , 2 , {opacity: 1, display: "block"});
      
      }

      if (roundToArbitraryNumbers(this.x) > 0 && roundToArbitraryNumbers(this.x) < 79 ) {

      TweenMax.to(container3Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container3Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate3 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle3 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container4Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container4Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate4 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle4 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container5Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container5Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate5 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle5 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container6Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container6Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate6 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle6 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container7Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container7Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate7 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle7 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container8Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container8Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate8 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle8 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container9Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container9Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate9 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle9 , 2 , {opacity: 0, display: "none"});

	    TweenMax.to(container2Text , 2 , {opacity: 1, display: "block"});
	    TweenMax.to(container2Image , 2 , {opacity: 1, display: "block"});
	    TweenMax.to(ringDate2 , 2 , {opacity: 1, display: "block"});
	    TweenMax.to(ringTitle2 , 2 , {opacity: 1, display: "block"});
      }


      if (roundToArbitraryNumbers(this.x) > 79 && roundToArbitraryNumbers(this.x) < 126 ){
        TweenMax.to(container2Text , 2 , {opacity: 0, display: "none"});
        TweenMax.to(container2Image , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringDate2 , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringTitle2 , 2 , {opacity: 0, display: "none"});

        TweenMax.to(container4Text , 2 , {opacity: 0, display: "none"});
        TweenMax.to(container4Image , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringDate4 , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringTitle4 , 2 , {opacity: 0, display: "none"});

        TweenMax.to(container5Text , 2 , {opacity: 0, display: "none"});
        TweenMax.to(container5Image , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringDate5 , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringTitle5 , 2 , {opacity: 0, display: "none"});

        TweenMax.to(container6Text , 2 , {opacity: 0, display: "none"});
        TweenMax.to(container6Image , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringDate6 , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringTitle6 , 2 , {opacity: 0, display: "none"});

        TweenMax.to(container7Text , 2 , {opacity: 0, display: "none"});
        TweenMax.to(container7Image , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringDate7 , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringTitle7 , 2 , {opacity: 0, display: "none"});

        TweenMax.to(container8Text , 2 , {opacity: 0, display: "none"});
        TweenMax.to(container8Image , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringDate8 , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringTitle8 , 2 , {opacity: 0, display: "none"});

        TweenMax.to(container9Text , 2 , {opacity: 0, display: "none"});
        TweenMax.to(container9Image , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringDate9 , 2 , {opacity: 0, display: "none"});
        TweenMax.to(ringTitle9 , 2 , {opacity: 0, display: "none"});

        TweenMax.to(container3Text , 2 , {opacity: 1, display: "block"});
        TweenMax.to(container3Image , 2 , {opacity: 1, display: "block"});
        TweenMax.to(ringDate3 , 2 , {opacity: 1, display: "block"});
        TweenMax.to(ringTitle3 , 2 , {opacity: 1, display: "block"});
        

      }

      if (roundToArbitraryNumbers(this.x) > 127 && roundToArbitraryNumbers(this.x) < 151 ){
      	
	    TweenMax.to(container3Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container3Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate3 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle3 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container4Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container4Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate4 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle4 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container5Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container5Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate5 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle5 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container6Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container6Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate6 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle6 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container7Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container7Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate7 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle7 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container8Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container8Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate8 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle8 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container9Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container9Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate9 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle9 , 2 , {opacity: 0, display: "none"});

	    TweenMax.to(container4Text , 2 , {opacity: 1, display: "block"});
	    TweenMax.to(container4Image , 2 , {opacity: 1, display: "block"});
	    TweenMax.to(ringDate4 , 2 , {opacity: 1, display: "block"});
	    TweenMax.to(ringTitle4 , 2 , {opacity: 1, display: "block"});

	    console.log('fuck')

      }

      if (roundToArbitraryNumbers(this.x) > 151 && roundToArbitraryNumbers(this.x) < 195 ){
        
      TweenMax.to(container3Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container3Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate3 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle3 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container4Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container4Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate4 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle4 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container5Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container5Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate5 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle5 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container6Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container6Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate6 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle6 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container7Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container7Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate7 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle7 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container8Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container8Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate8 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle8 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container9Text , 2 , {opacity: 0, display: "none"});
      TweenMax.to(container9Image , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringDate9 , 2 , {opacity: 0, display: "none"});
      TweenMax.to(ringTitle9 , 2 , {opacity: 0, display: "none"});

      TweenMax.to(container4Text , 2 , {opacity: 1, display: "block"});
      TweenMax.to(container4Image , 2 , {opacity: 1, display: "block"});
      TweenMax.to(ringDate4 , 2 , {opacity: 1, display: "block"});
      TweenMax.to(ringTitle4 , 2 , {opacity: 1, display: "block"});

      console.log('fuck')

      }
    }
});


Draggable.create(".tree-height-dragger", {
    type:"x",
    edgeResistance:0.65,
    bounds:".tree-drag-area",
    throwProps:true,
    // liveSnap: true, // toggle this for different effect
    snap: {
        x: roundToArbitraryNumbers
    },

    onDragEnd: function() {
    	console.log("dropped closest to ", roundToArbitraryNumbers(this.x))
    	let airPlaneImg = document.querySelectorAll('.airplane-image')
    	let elephantImg = document.querySelectorAll('.elephant-image')
    	let airBaloonImg = document.querySelectorAll('.air-baloon-image')
    	let giraffeImg = document.querySelectorAll('.giraffe-image')


    	if (roundToArbitraryNumbers(this.x) < 50 ){
    		TweenMax.to(airPlaneImg , 2 , {opacity: 0, display: "none"});
    		TweenMax.to(airBaloonImg , 2 , {opacity: 0, display: "none"});
    		TweenMax.to(giraffeImg , 2 , {opacity: 0, display: "none"});


    		TweenMax.staggerTo(elephantImg, 2 , {opacity: 1, display: "block" , delay: 1}, .3)


    	}

    	if (roundToArbitraryNumbers(this.x) > 0 && roundToArbitraryNumbers(this.x) < 79 ) {
    		TweenMax.to(elephantImg , 2 , {opacity: 0, display: "none"});
    		TweenMax.to(giraffeImg , 2 , {opacity: 0, display: "none"});
    		TweenMax.to(airBaloonImg , 2 , {opacity: 0, display: "none"});

    		TweenMax.staggerTo(airPlaneImg, 2 , {opacity: 1, display: "block" , delay: 1}, .3)
    		console.log('work')

    	}

    	 if (roundToArbitraryNumbers(this.x) > 79 && roundToArbitraryNumbers(this.x) < 126 ){
	 		TweenMax.to(elephantImg , 2 , {opacity: 0, display: "none"});
    		TweenMax.to(airPlaneImg, 2 , {opacity: 0, display: "none"})
    		TweenMax.to(giraffeImg , 2 , {opacity: 0, display: "none"});

    		TweenMax.staggerTo(airBaloonImg, 2 , {opacity: 1, display: "block" , delay: 1}, .3)
    	 }

    	  if (roundToArbitraryNumbers(this.x) > 127 && roundToArbitraryNumbers(this.x) < 151 ){
          TweenMax.to(elephantImg , 2 , {opacity: 0, display: "none"});
          TweenMax.to(airPlaneImg, 2 , {opacity: 0, display: "none"})
          TweenMax.to(airBaloonImg, 2, {opacity: 0, display: "none"})
          TweenMax.staggerTo(giraffeImg, 2 , {opacity: 1, display: "block", delay: 1}, .3)

        }
    } 
});



function siteNavigation (){

let globalNav = document.querySelector('nav');

let allPages = document.querySelectorAll('.page-container');

let navContainer = document.querySelector('.nav-container');

let historySelector = document.querySelectorAll('.history-select');
let historyPage = document.querySelector('.history-page');

let heightSelector = document.querySelectorAll('.height-select');
let heightPage = document.querySelector('.height-container');

let deforestationSelector = document.querySelectorAll('.deforestation-select');
let deforestationPage = document.querySelector('.deforestation-page');

function navSelectors(){
  historySelector.forEach(function(selector){
    selector.addEventListener('click', function(){
      allPages.forEach(function(page){
        page.classList.remove('show-page')
      })

      heightPage.classList.remove('show-page')
      deforestationPage.classList.remove('show-page')
      historyPage.classList.add('show-page');
      TweenMax.to(navContainer , 2 , { opacity: 0, display: "none", left: '-100%'})
      TweenMax.to(globalNav, 2, {opacity: 1, display: "flex", delay: 1.85});
      TweenMax.fromTo(heightPage , 2 , { opacity: 0, display: "none", delay: 4 , left: 0 },{left: '-100%'})
      TweenMax.fromTo(deforestationPage , 2 , { opacity: 0, display: "none", delay: 4 , left: 0 },{left: '-100%'})
      TweenMax.to(historyPage , 0 , { opacity: 0, display: "none"})
      TweenMax.fromTo(historyPage , 2 , { opacity: 1, display: "block", delay: 4 , left: '-100%' },{left: 0, top: '0'})

    })

  })

  deforestationSelector.forEach(function(selector){
    console.log('hit')
    selector.addEventListener('click', function(){
      allPages.forEach(function(page){
        page.classList.remove('show-page')
      })
      deforestationPage.classList.add('show-page');
      heightPage.classList.remove('show-page')
      historyPage.classList.remove('show-page')
      TweenMax.to(navContainer , 2 , { opacity: 0, display: "none", left: '-100%'})
      TweenMax.to(globalNav, 2, {opacity: 1, display: "flex", delay: 1.85});
      deforestationPage.classList.add('show-page');
      TweenMax.to(deforestationPage , 0 , { opacity: 0, display: "none"})
      TweenMax.fromTo(heightPage , 2 , { opacity: 0, display: "none", delay: 4 , left: 0 },{left: '-100%'})
      TweenMax.fromTo(historyPage , 2 , { opacity: 0, display: "none", delay: 4 , left: 0 },{left: '-100%'})
      TweenMax.fromTo(deforestationPage , 2 , { opacity: 1, display: "block", delay: 4 , left: '-100%' },{left: 0})
    })

  })

  heightSelector.forEach(function(selector){
    selector.addEventListener('click', function(){
      console.log("clicked height selector")
      allPages.forEach(function(page){
        page.classList.remove('show-page')
      })
      deforestationPage.classList.remove('show-page')
      heightPage.classList.add('show-page');
      TweenMax.to(navContainer , 2 , { opacity: 0, display: "none", left: '-100%'})
      TweenMax.to(globalNav, 2, {opacity: 1, display: "flex", delay: 1.85});
      heightPage.classList.add('show-page');
      TweenMax.fromTo(deforestationPage , 2 , { opacity: 0, display: "none", delay: 4 , left: 0 },{left: '-100%'})
      TweenMax.fromTo(historyPage , 2 , { opacity: 0, display: "none", delay: 4 , left: 0 },{left: '-100%'})
      TweenMax.fromTo(heightPage , 2 , { opacity: 0, display: "none", delay: 4 , left: '-100%' },{opacity: 1, display: "block", left: 0})
    })

  })
}
navSelectors();
}
siteNavigation()






