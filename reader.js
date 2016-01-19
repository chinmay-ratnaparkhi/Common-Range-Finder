$(document).ready(function(){
	final_array1 = [];
	final_array2 = [];
	final_array3 = [];
	final_array4 = [];
		$.get('array1.txt', function(d)
			{
		    	data = d;
		    	sample= data.split("$");
				for(i=0; i<sample.length/2; i++){
					x = {};
					x.from = sample[2*i];
					x.to = sample[2*i+1];
					final_array1[i]= x;
			}
		});	

		$.get('array2.txt', function(d)
			{
		    	data = d;
		    	sample= data.split("$");
		    	
				for(i=0; i<sample.length/2; i++){
					x = {};
					x.from = sample[2*i];
					x.to = sample[2*i+1];
					final_array2[i]= x;
			}
		});	
		
		$.get('array3.txt', function(d)
			{
		    	data = d;
		    	sample= data.split("$");
		    	
				for(i=0; i<sample.length/2; i++){
					x = {};
					x.from = sample[2*i];
					x.to = sample[2*i+1];
					final_array3[i]= x;
			}
		});	

		$.get('array4.txt', function(d)
			{
		    	data = d;
		    	sample= data.split("$");
		    	
				for(i=0; i<sample.length/2; i++){
					x = {};
					x.from = sample[2*i];
					x.to = sample[2*i+1];
					final_array4[i]= x;
			}
		});	
});