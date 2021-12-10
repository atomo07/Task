var colors = ['#6f98a8','#2b8ead','#2f454e','#2b8ead','#2f454e','#bfbfbf','#bfbfbf','#6f98a8','#2f454e']
var array = [1,2,3,4,5,6,7,8,9]

changeNumberAndColor()

function changeNumberAndColor(){
    allElements = document.querySelectorAll('.grid-item')
    for(i = 0 ; i < 9 ; i++){
        allElements[i].innerText= array[i] 
        if(document.documentElement.scrollWidth > 450 ){
            allElements[i].style.backgroundColor = colors[array[i]-1];

        }
        else {
            allElements[i].style.backgroundColor = '#efefef';
            allElements[i].style.borderLeftColor = colors[array[i]-1];
        }   
    }
}

function shuffle() {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    changeNumberAndColor()
}

function sort(){
    array.sort()
    changeNumberAndColor()
}
window.onresize = function(event){  
    document.querySelectorAll('button')[1].click()
    array = array
}