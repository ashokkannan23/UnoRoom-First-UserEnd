$(function() {
       $.getJSON("../properties.json", function(data){
  
       $(function GetURLParameter(sParam)
    {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam)
            {
                return sParameterName[1];
            }
        }
		
		  var cityname = GetURLParameter('city');
				
		  var localityname = GetURLParameter('locality');
				
	      var roomtypename = GetURLParameter('room-type');
				
		 var wifiname = GetURLParameter('wifi');
				
		var gymname = GetURLParameter('gymyoga');
		
		var startdatename =  new Date(GetURLParameter('startdate'));
		var enddatename =  new Date(GetURLParameter('enddate'));
				
	
				console.log(cityname,localityname,roomtypename,wifiname,gymname,startdatename,enddatename);
		
		
		
    
    
	 
	 
	 var result= '';
		
		   for (var i in data.properties) {
			   if (( cityname == data.properties[i].city))
			   if (( localityname == data.properties[i].locality))
			   if (( roomtypename == data.properties[i].type)) 
			  if (( wifiname == data.properties[i].wifi) || (wifiname !== undefined))
			   if (( gymname == data.properties[i].gym) || (gymname !== undefined))
			  if (( startdatename >= new Date(data.properties[i].opendate) &&  enddatename <= new Date(data.properties[i].closedate)))
			   
			   
			   {
				   {
					   {
			 
			   
				     {
					   {
						   {
							   
							   result+= '<a href="' + data.properties[i].url + '"><div class="col-md-12" style="float:right;" id="right-content">'+
	 '<div class="row">'+
                '<div class="col-sm-4" style="padding-right:0px;padding-left:0px;margin:5px;"><img src="'+ data.properties[i].thumb +'" style="width:270px;margin-bottom:5px;"><ul id="small-image" style="padding-left:0px;">'+
    '<li ><a href="#"><img src="'+ data.properties[i].thumbnailone +'" width="65px"></a></li>'+
    '<li><a href="#"><img src="'+ data.properties[i].thumbnailtwo +'" width="65px"></a></li>'+
'<li><a href="#"><img src="'+ data.properties[i].thumbnailthree +'" width="65px"></a></li>'+
    '<li><a href="#"><img src="'+ data.properties[i].thumbnailfour +'" width="65px"></a></li>'+

'</ul></div>'+
                '<div class="col" style="padding-right:0px;padding-left:0px;font-family:Lato, sans-serif;margin:5px;margin-left:-30px;">'+
                    '<h5 style="font-weight:600;">'+ data.properties[i].name +'</h5>'+
                    '<h6 style="color:#aaaaaa;font-weight:600;">'+ data.properties[i].address +'</h6><div id="transporation-entertainment">'+
    '<div class="row">'+
        '<div class="col-sm-12">'+
            '<div class="show-content">Near by Transporation<span class="tooltiptext">'+ data.properties[i].transporation +'</span></div>'+
               '&nbsp;&nbsp;<div class="show-content">Near by Entertainment<span class="tooltiptext">'+ data.properties[i].entertainment +'</span></div>'+
            '</div>'+
       
    '</div>'+



'</div><div class="aminites">'+
 '<span style="font-size:12px;">'+ data.properties[i].amenities +'<a><i class="far fa-user"></i> 24-hour Security Desk</a><a><i class="fas fa-concierge-bell"></i> Cleaning Services</a></span><br/>'+
                           
'<span style="font-size:12px;">More Options: Free Cancellation | PowerBackup | Gym | Swimming Pool </span>'+

'</div></div>'+
                '<div  class="col-xl-2" style="background-color:#c4e1f7;">'+
                    '<p  class="text-right text-danger" style="font-family:Lato, sans-serif;font-weight:bold;margin-top:150px;margin-bottom:0px;font-size:14px;color:rgb(244,4,27);">Perday</p>'+
                    '<p class="text-right" style="font-family:Lato, sans-serif;font-weight:bold;font-size:30px;margin-top:0px;color:rgb(7,7,7);">¥ '+ data.properties[i].price +'<br></p>'+
                '</div>'+
            
			 
			 
			 '</div>'+
			 '</div>';
			
							   
			  
							   
				
				 
				 
				 
							   
			   } } } } } }
		   				   
		   
		   }   
						   
				
		   
				// console.log(result);
					
									
				
				// document.getElementById( "Placeholder" ).innerHTML = result;
				
				$("#result-content").html(result);
				// var count = i.length;
				// console.log(count);
				
				
		
		
	});	
	});
	});
	
	
 