const containerElement = document.getElementById("container");

for (let i = 1; i <= 1000; i++) {    
    
    if (i % 3 == 0 && i % 5 != 0) {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='box-green'>" + "Fizz" + "</div>";
    }

    else if (i % 5 == 0 && i % 3 != 0) {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='box-orange'>" + "Buzz" + "</div>";
    } 
    
    else if ((i % 3 == 0) && i % 5 == 0 ) {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='box-red'>" + "FizzBuzz" + "</div>";
    } 

    else {
        containerElement.innerHTML = containerElement.innerHTML + "<div class='box'>" + i + "</div>";
    }

}