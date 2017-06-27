$(document).ready(function(){

   
   $('#button').click(function() {
       
       $('.grid').empty();
	   var gridNums=getGridSize();
       makeGrid(gridNums[0],gridNums[1]);
       changeColor();
	});
  
 
});

    function makeGrid(x,y) {

    	var height = (400/y)-4;
    	var width = (400/x)-4;

		for(var i=0;i!==y;i++) {

	        for(var j=0;j!==x;j++) {

	        	$('.grid').append('<div class="block"></div>');
	        }

	        $('div').append('<br>');

		}
		$('.block').height(height);
    	$('.block').width(width);
	}

	function getGridSize() {

	   	var x = parseInt($('#x').val());
	   	var y = parseInt($('#y').val());
	   	return [x, y];
	   
	}

	function changeColor() {
		$('.block').on('mouseover', function() {
	   	$(this).css('background-color','blue');
	   	console.log('test');  
	   	 });
	}
