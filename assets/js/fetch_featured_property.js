
// FETCH FEATURED PROPERTY

$(document).ready(function () {
	$.getJSON("http://192.168.1.211:3000/ui/dashboard/featuredproperty", function (results) {

		var featureitem = '';
		

		var NOofFeature = results.length;

		console.log(NOofFeature);

		var amenitiesUiMap = {

			"AirConditioning": {
				"img": "<i class=\"fas fa-snowflake\"></i>",
				"name": "Air Conditioning"
			},
			"AirportTransfer": {
				"img": "<i class=\"fa fa-plane\" aria-hidden=\"true\"></i>",
				"name": "Airport Transfer"
			},
			"Balcony": {
				"img": "<i class=\"fas fa-dungeon\"></i>",
				"name": "Balcony"
			},
			"Bathtub": {
				"img": "<i class=\"fa fa-bath\" aria-hidden=\"true\"></i>",
				"name": "Bathtub"
			},
			"BusinessFriendly": {
				"img": "<i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i>",
				"name": "Business Friendly"
			},
			"CarPark": {
				"img": "<i class=\"fa fa-car\" aria-hidden=\"true\"></i>",
				"name": "Car Park"
			},
			"CoffeeMaker": {
				"img": "<i class=\"fa fa-coffee\" aria-hidden=\"true\"></i>",
				"name": "Coffee Maker"
			},
			"DisableFriendly": {
				"img": "<i class=\"fas fa-wheelchair\"></i>",
				"name": "Disable Friendly"
			},
			"FrontDesk": {
				"img": "<i class=\"fa fa-desktop\" aria-hidden=\"true\"></i>",
				"name": "Front Desk"
			},
			"FullyFurnished": {
				"img": "<i class=\"fas fa-couch\"></i>",
				"name": "Fully Furnished"
			},
			"Gym": {
				"img": "<i class=\"fas fa-dumbbell\"></i>",
				"name": "Gym"
			},
			"Heating": {
				"img": "<i class=\"fas fa-water\"></i>",
				"name": "Heater"
			},
			"Internet": {
				"img": "<i class=\"fa fa-wifi\" aria-hidden=\"true\"></i>",
				"name": "WiFi"
			},
			"Kitchen": {
				"img": "<i class=\"fas fa-utensils\"></i>",
				"name": "Kitchen"
			},
			"Nightclub": {
				"img": "<i class=\"fas fa-glass-cheers\"></i>",
				"name": "Nightclub"
			},
			"NonSmoking": {
				"img": "<i class=\"fas fa-smoking-ban\"></i>",
				"name": "Non Smoking"
			},
			"PetsAllowed": {
				"img": "<i class=\"fas fa-dog\"></i>",
				"name": "Pets Allowed"
			},
			"PrivatePool": {
				"img": "<i class=\"fas fa-swimming-pool\"></i>",
				"name": "Private Pool"
			},
			"Refrigerator": {
				"img": "<i class=\"fas fa-door-closed\"></i>",
				"name": "Refrigerator"
			},
			"Restaurant": {
				"img": "<i class=\"fas fa-bread-slice\"></i>",
				"name": "Restaurant"
			},
			"Sauna": {
				"img": "<i class=\"fas fa-hot-tub\"></i>",
				"name": "Sauna"
			},
			"SemiFurnished": {
				"img": "<i class=\"fas fa-chair\"></i>",
				"name": "Semi Furnished"
			},
			"Smoking": {
				"img": "<i class=\"fas fa-smoking\"></i>",
				"name": "Smoking"
			},
			"SmokingArea": {
				"img": "<i class=\"fas fa-smoking\"></i>",
				"name": "Smoking Area"
			},
			"Spa": {
				"img": "<i class=\"fas fa-spa\"></i>",
				"name": "Spa"
			},
			"SwimmingPool": {
				"img": "<i class=\"fas fa-swimmer\"></i>",
				"name": "Swimming Pool"
			},
			"TV": {
				"img": "<i class=\"fa fa-television\" aria-hidden=\"true\"></i>",
				"name": "TV"
			},
			"Terrace": {
				"img": "<i class=\"fas fa-dungeon\"></i>",
				"name": "Terrace"
			},
			"WashingMachine": {
				"img": "<i class=\"fas fa-dumpster\"></i>",
				"name": "Washing Machine"
			}
		};

		for (i = 0; i <= NOofFeature - 1; i++) {
			
			var featureditem = '';

			var amenities = results[i].amenities.map(amenity => amenitiesUiMap[amenity]);
			console.log(amenities);
			
			 for (amenityIndex in amenities) {
			
				featureditem+= '<span   style="font-size:13px;padding:5px;">' + amenities[amenityIndex].img + ' ' + amenities[amenityIndex].name + '</span>';
			}
		
			featureitem += '<div onclick="location.href=\'index.html\';" style="cursor:pointer;" class="item">'+
			'<div class="imgTitle">'+
			'<img  src="http://192.168.1.211:3000/facility' + results[i].images[0].url + '"  height="150px" alt="" />'+
			'</div>'+
			'<p style="font-weight:600;font-size:17px;padding-bottom:5px;">' + results[i].name + '</p>'+ featureditem +
		    '</div>';
		
		};
		
		$(".Featureprop").append(featureitem);

	});
	
});
