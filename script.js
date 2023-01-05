// Get all elements with class name 'carousel-img' as an array
const carousel = document.getElementsByClassName('carousel-img');
// Get all elements with class name 'thumb-img' as an array
const thumbnail = document.getElementsByClassName('thumb-img');
// Current image is at index 0 (first element in the array)
let imgIndex = 0;

const nextImage = () => {
	// Remove 'selected' class from current image
	carousel[imgIndex].classList.remove('selected');
	// Remove 'highlighted' class from current image
	thumbnail[imgIndex].classList.remove('highlight');

	// Increment imgIndex to display next image
	imgIndex++;

	// If imgIndex exceeds number of available images, set it back to first image
	if(imgIndex > carousel.length - 1){
		imgIndex = 0;
	}

	// Add 'selected' class to new image to display
	carousel[imgIndex].classList.add('selected');
	// Add 'highlighted' class to new image to display
	thumbnail[imgIndex].classList.add('highlight');
}

// Run nextImage function every 5000ms (= 5s). Change second argument to change speed of image transition.
setInterval(nextImage, 1500);



// Edit the string to get your desired countdown change 'December 31, 2022' to your own date
const desiredDate = new Date('December 09, 2023');
// Get the time to use in a later calculation
const datesTime = desiredDate.getTime();
// Assigning the interval to a variable to clear and reset on a second to second
const countdownInterval = setInterval(function() {
  // Get today's date and time
  const currentTime = new Date().getTime();
  // Find the distance between now and the count down date
  let timeDiff = datesTime - currentTime;
  // Calculating the different units of time
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  // Remove days' time from timediff
  // Continue this pattern for hours, minutes, and seconds
  timeDiff -= days * 1000 * 60 * 60 * 24;
  const hours = Math.floor(timeDiff / (1000 * 60 * 60));
  timeDiff -= hours * 1000 * 60 * 60;
  const minutes = Math.floor(timeDiff / (1000 * 60));
  timeDiff -= minutes * 1000 * 60;
  const seconds = Math.floor(timeDiff / 1000);
  // Grab the 'counter' element
  let counter = document.getElementById('counter');
  counter.innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
  // If the count down is finished, write some text
  if (timeDiff < 0) {
    clearInterval(countdownInterval);
    counter.innerHTML = 'Countdown\'s up!';
  }
// Every 1000 milliseconds the counter text renews
}, 1000);
