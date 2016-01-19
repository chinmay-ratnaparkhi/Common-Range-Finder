results=[];
uniques= [];
solutions= [];
unique_solutions= [];

var analyze_arrays = function(){
		for(i=0; i< final_array4.length; i++){
			var a = final_array4[i].from;
			var b = final_array4[i].to;
			

			for(j= 0; j<final_array1.length; j++)
			{
				c= final_array1[j].from;
				d= final_array1[j].to;

					if(a==c && b==d)
					{
						
							for(k=0; k< final_array2.length; k++)
							{
								e= final_array2[k].from;
								f= final_array2[k].to;
									if(c== e && d == f){

										for(l=0; l< final_array3.length; l++)
										{
											g= final_array3[l].from;
											h= final_array3[l].to;	

												if(e== g && f == h)
												{
													var result = "i="+i+" j="+j+" k="+k+"l="+l;
													results.push(result);
													if(uniques[uniques.length-1] != i){
														uniques.push(i);
														solutions.push(final_array4[i]);
													}
												}

										}
									}
						
							}
					}

		}
	}
removeDuplicates();
printer();
}

var removeDuplicates = function(){
	for(i=0; i<solutions.length; i++){
		var a= solutions[i].from;
		var b= solutions[i].to;

		for(j=0; j<solutions.length; j++){
			if(i== j){

			}else{
				var c= solutions[j].from;
				var d= solutions[j].to;

				if(a==c && b== d){
					solutions[j].from = -1;
					solutions[j].to = -1;
				}
			}
			
		}
	}

	for(i=0; i<solutions.length; i++){
		if(solutions[i].to!=-1) unique_solutions.push(solutions[i]);
	}
}

var printer= function(){

	var buf = "<h1> Following are the ranges that are common in all 4 arrays.<br/><br/><table width=240><tr><td width='16%'></td><td width='42%'><strong>FROM</strong></td><td width='42%'><strong>TO</strong></td></tr>";
	for(x=0; x<unique_solutions.length; x++){
		buf += "<tr><td>"+(x+1)+"</td><td>"+unique_solutions[x].from + "</td><td>"+ unique_solutions[x].to + "</td></tr>";
	}
	buf+= "</table>";

	document.getElementById("display_board").innerHTML= buf;
}