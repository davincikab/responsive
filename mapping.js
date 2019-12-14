/*

 //begin script when window loads
window.onload = initialize();

//the first function called once the html is loaded
function initialize(){
	//window.onload
	setMap();
};

//set basemap parameters
function setMap() {
	//initialize()

	//create the map and set its initial view
        map = new L.Map('map',{scrollWheelZoom:false,minZoom: 8,maxZoom: 18}).setView([-1.1242,36.8402], 30);

	//add the tile layer to the map
    var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',

		).addTo(map);
};

 L.control.scale().addTo(map);


 */


 $( document ).ready(function() {

  var map = L.map('map',{
    maxZoom:25,
    minZoom:15
  }).setView([0.091540,36.974812], 19);

  new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.control.scale().addTo(map);

 // Load geoJSON data with jQuery:
  $.getJSON('data/sold2.geojson', function(data) {
    	function coffee1000Style(feature) {
        return {
      	  fillColor:'red',
      	color: 'white',
         	weight:1.5,
      	fillOpacity:1,
      	borderColor:'white',
        };
      }

    // Use Leaflet to parse the data and display it as a layer on the map:
    	L.geoJson(data, {
    		style: coffee1000Style,
    	    onEachFeature: function (feature, layer) {
    	       // layer.bindPopup('<strong><b>PLOT NO : </b></strong>'+feature.properties.Plot_No+'<hr/><strong><b>SIZE : </b></strong>'+feature.properties.Area+'<hr/><strong><b>PRICE : </b></strong>'+feature.properties.Price+'<hr/><strong><b>STATUS : </b></strong>'+feature.properties.Status);
        			layer.on({
                click: function populate() {
                  document.getElementById('basemaps-wrapper').innerHTML = "<b >PLOT NO :</b> " + feature.properties.Plot_No + "<br><br><hr/><b>SIZE :</b>" +feature.properties.Area +"<br><br><hr/><b >PRICE :</b>" +feature.properties.Price + "<br><br><hr/><b style=color:red;font-size:0.7em;>STATUS :</b>" +feature.properties.Status;
                  }
              });

      			//information popup on hover
          	layer.on({
          		mouseover: function(){
          			this.setStyle({color: 'blue'});
          		},
          		mouseout: function(){
          			this.setStyle({color: 'white'});
          		}
          	});
  	   }
  	}).addTo(map);

	});

 // Load geoJSON data with jQuery:
    $.getJSON('data/Batian_1.geojson', function(data) {
  		function coffee1001Style(feature) {
        return {
      	  fillColor:'green',
      	  color: 'white',
         	weight:1.5,
        	fillOpacity:1,
        	borderColor:'white',
        };
      }

    	// Use Leaflet to parse the data and display it as a layer on the map:
  	L.geoJson(data, {
  		style: coffee1001Style,
  	    onEachFeature: function (feature, layer) {
  	       // layer.bindPopup('<strong><b>PLOT NO : </b></strong>'+feature.properties.Plot_No +'<hr/><strong><b>SIZE : </b></strong>'+feature.properties.Area+'<hr/><strong><b>PRICE : </b></strong>'+feature.properties.Price+'<hr/><strong><b>STATUS : </b></strong>'+feature.properties.Status);
  			 layer.on({
          click: function populate() {
             document.getElementById('basemaps-wrapper').innerHTML = "<b >PLOT NO :</b> " + feature.properties.Plot_No + "<br><br><hr/><b >SIZE :</b>" +feature.properties.Area +"<br><br><hr/><b >PRICE :</b>" +feature.properties.Price + "<br><br><hr/><b style=color:green;font-size:0.7em;>STATUS :</b>" +feature.properties.Status;
          }
        });

  			//information popup on hover
      	layer.on({
      		mouseover: function(){
      			this.setStyle({color: 'blue'});
      		},
      		mouseout: function(){
      			this.setStyle({color: 'white'});
      		}
      	});

  	    }
  	}).addTo(map);

  });

	  // Load geoJSON data with jQuery:
    $.getJSON('data/road.geojson', function(data) {
      function coffee101Style(feature) {
        return {
        	color: 'red',
          weight:2.5,
        	fillOpacity:0,
        };
      }
    	// Use Leaflet to parse the data and display it as a layer on the map:
    	L.geoJson(data, {
    		style: coffee101Style,
    	    onEachFeature: function (feature, layer) {
    	        layer.bindPopup();
    	    }
    	}).addTo(map);

	});


  L.marker(new L.LatLng(0.0969731,36.9723323), {icon:createLabelIcon("textLabelclass","A1")}).addTo(map);
  L.marker(new L.LatLng(0.0970236,36.9724423), {icon:createLabelIcon("textLabelclass","A2")}).addTo(map);
  L.marker(new L.LatLng(0.0967507,36.9724762), {icon:createLabelIcon("textLabelclass","A3")}).addTo(map);
  L.marker(new L.LatLng(0.0966234,36.9725275), {icon:createLabelIcon("textLabelclass","A4")}).addTo(map);
   L.marker(new L.LatLng(0.0964894,36.9725729), {icon:createLabelIcon("textLabelclass","A5")}).addTo(map);
  L.marker(new L.LatLng(0.0963530,36.9726259), {icon:createLabelIcon("textLabelclass","A6")}).addTo(map);
  L.marker(new L.LatLng(0.0962232,36.9726812), {icon:createLabelIcon("textLabelclass","A7")}).addTo(map);
  L.marker(new L.LatLng(0.0960851,36.9727342), {icon:createLabelIcon("textLabelclass","A8")}).addTo(map);
   L.marker(new L.LatLng(0.0959387,36.9727714), {icon:createLabelIcon("textLabelclass","A9")}).addTo(map);
  L.marker(new L.LatLng(0.0958130,36.9728309), {icon:createLabelIcon("textLabelclass","A10")}).addTo(map);
  L.marker(new L.LatLng(0.0956650,36.9728797), {icon:createLabelIcon("textLabelclass","A11")}).addTo(map);
  L.marker(new L.LatLng(0.0955418,36.9729367), {icon:createLabelIcon("textLabelclass","A12")}).addTo(map);
   L.marker(new L.LatLng(0.0953905,36.9729847), {icon:createLabelIcon("textLabelclass","A13")}).addTo(map);
  L.marker(new L.LatLng(0.0952557,36.9730426), {icon:createLabelIcon("textLabelclass","A14")}).addTo(map);
  L.marker(new L.LatLng(0.0951218,36.9730939), {icon:createLabelIcon("textLabelclass","A15")}).addTo(map);
  L.marker(new L.LatLng(0.0949796,36.9731435), {icon:createLabelIcon("textLabelclass","A16")}).addTo(map);
   L.marker(new L.LatLng(0.0948390,36.9731980), {icon:createLabelIcon("textLabelclass","A17")}).addTo(map);
  L.marker(new L.LatLng(0.0946993,36.9732534), {icon:createLabelIcon("textLabelclass","A18")}).addTo(map);
  L.marker(new L.LatLng(0.0945513,36.9733055), {icon:createLabelIcon("textLabelclass","A19")}).addTo(map);
  L.marker(new L.LatLng(0.0944090,36.9733560), {icon:createLabelIcon("textLabelclass","A20")}).addTo(map);
   L.marker(new L.LatLng(0.0942668,36.9734097), {icon:createLabelIcon("textLabelclass","A21")}).addTo(map);
  L.marker(new L.LatLng(0.0941238,36.9734659), {icon:createLabelIcon("textLabelclass","A22")}).addTo(map);
  L.marker(new L.LatLng(0.0939815,36.9735180), {icon:createLabelIcon("textLabelclass","A23")}).addTo(map);
  L.marker(new L.LatLng(0.0938352,36.9735718), {icon:createLabelIcon("textLabelclass","A24")}).addTo(map);
   L.marker(new L.LatLng(0.0936913,36.9736288), {icon:createLabelIcon("textLabelclass","A25")}).addTo(map);
   L.marker(new L.LatLng(0.0934655,36.9737069), {icon:createLabelIcon("textLabelclass","A26")}).addTo(map);
  L.marker(new L.LatLng(0.0933211,36.9737640), {icon:createLabelIcon("textLabelclass","A27")}).addTo(map);
  L.marker(new L.LatLng(0.0931745,36.9738190), {icon:createLabelIcon("textLabelclass","A28")}).addTo(map);
   L.marker(new L.LatLng(0.0930309,36.9738761), {icon:createLabelIcon("textLabelclass","A29")}).addTo(map);
   L.marker(new L.LatLng(0.0928785,36.9739245), {icon:createLabelIcon("textLabelclass","A30")}).addTo(map);
   L.marker(new L.LatLng(0.0927312,36.9739824), {icon:createLabelIcon("textLabelclass","A31")}).addTo(map);
  L.marker(new L.LatLng(0.0925810,36.9740403), {icon:createLabelIcon("textLabelclass","A32")}).addTo(map);
  L.marker(new L.LatLng(0.0924381,36.9740967), {icon:createLabelIcon("textLabelclass","A33")}).addTo(map);
  L.marker(new L.LatLng(0.0922816,36.9741442), {icon:createLabelIcon("textLabelclass","A34")}).addTo(map);
  L.marker(new L.LatLng(0.0921421,36.9742088), {icon:createLabelIcon("textLabelclass","A35")}).addTo(map);
   L.marker(new L.LatLng(0.0919852,36.9742616), {icon:createLabelIcon("textLabelclass","A36")}).addTo(map);
  L.marker(new L.LatLng(0.0918365,36.9743217), {icon:createLabelIcon("textLabelclass","A37")}).addTo(map);
  L.marker(new L.LatLng(0.0916804,36.9743752), {icon:createLabelIcon("textLabelclass","A38")}).addTo(map);
  L.marker(new L.LatLng(0.0915302,36.9744345), {icon:createLabelIcon("textLabelclass","A39")}).addTo(map);
  L.marker(new L.LatLng(0.0913704,36.9744931), {icon:createLabelIcon("textLabelclass","A40")}).addTo(map);
  L.marker(new L.LatLng(0.0912180,36.9745496), {icon:createLabelIcon("textLabelclass","A41")}).addTo(map);
   L.marker(new L.LatLng(0.0910524,36.9746060), {icon:createLabelIcon("textLabelclass","A42")}).addTo(map);
 L.marker(new L.LatLng(0.0908978,36.9746661), {icon:createLabelIcon("textLabelclass","A43")}).addTo(map);
  L.marker(new L.LatLng(0.0907315,36.9747203), {icon:createLabelIcon("textLabelclass","A44")}).addTo(map);
 L.marker(new L.LatLng(0.0905739,36.9747833), {icon:createLabelIcon("textLabelclass","A45")}).addTo(map);
  L.marker(new L.LatLng(0.0904090,36.9748427), {icon:createLabelIcon("textLabelclass","A46")}).addTo(map);
  L.marker(new L.LatLng(0.0902500,36.9749057), {icon:createLabelIcon("textLabelclass","A47")}).addTo(map);
  L.marker(new L.LatLng(0.0900778,36.9749643), {icon:createLabelIcon("textLabelclass","A48")}).addTo(map);
  L.marker(new L.LatLng(0.0899152,36.9750273), {icon:createLabelIcon("textLabelclass","A49")}).addTo(map);
  L.marker(new L.LatLng(0.0897327,36.9750830), {icon:createLabelIcon("textLabelclass","A50")}).addTo(map);
   L.marker(new L.LatLng(0.0895766,36.9751504), {icon:createLabelIcon("textLabelclass","A51")}).addTo(map);
   L.marker(new L.LatLng(0.0892916,36.9752442), {icon:createLabelIcon("textLabelclass","A52")}).addTo(map);
  L.marker(new L.LatLng(0.0891318,36.9753182), {icon:createLabelIcon("textLabelclass","A53")}).addTo(map);
   L.marker(new L.LatLng(0.0889501,36.9753827), {icon:createLabelIcon("textLabelclass","A54")}).addTo(map);
  L.marker(new L.LatLng(0.0887779,36.9754472), {icon:createLabelIcon("textLabelclass","A55")}).addTo(map);
  L.marker(new L.LatLng(0.0885881,36.9755066), {icon:createLabelIcon("textLabelclass","A56")}).addTo(map);
   L.marker(new L.LatLng(0.0884144,36.9755799), {icon:createLabelIcon("textLabelclass","A57")}).addTo(map);
  L.marker(new L.LatLng(0.0882173,36.9756421), {icon:createLabelIcon("textLabelclass","A58")}).addTo(map);
   L.marker(new L.LatLng(0.0880371,36.9757088), {icon:createLabelIcon("textLabelclass","A59")}).addTo(map);
  L.marker(new L.LatLng(0.0878421,36.9757733), {icon:createLabelIcon("textLabelclass","A60")}).addTo(map);
  L.marker(new L.LatLng(0.0876560,36.9758510), {icon:createLabelIcon("textLabelclass","A61")}).addTo(map);
   L.marker(new L.LatLng(0.0874604,36.9759177), {icon:createLabelIcon("textLabelclass","A62")}).addTo(map);
  L.marker(new L.LatLng(0.0872654,36.9759902), {icon:createLabelIcon("textLabelclass","A63")}).addTo(map);
  L.marker(new L.LatLng(0.0870720,36.9760627), {icon:createLabelIcon("textLabelclass","A64")}).addTo(map);
 L.marker(new L.LatLng(0.0868749,36.9761331), {icon:createLabelIcon("textLabelclass","A65")}).addTo(map);
 L.marker(new L.LatLng(0.0866836,36.9762086), {icon:createLabelIcon("textLabelclass","A66")}).addTo(map);
 L.marker(new L.LatLng(0.0864777,36.9762789), {icon:createLabelIcon("textLabelclass","A67")}).addTo(map);
 L.marker(new L.LatLng(0.0862777,36.9763551), {icon:createLabelIcon("textLabelclass","A68")}).addTo(map);
 L.marker(new L.LatLng(0.0860776,36.9764269), {icon:createLabelIcon("textLabelclass","A69")}).addTo(map);
 L.marker(new L.LatLng(0.0858724,36.9764929), {icon:createLabelIcon("textLabelclass","A70")}).addTo(map);
 L.marker(new L.LatLng(0.0856709,36.9765742), {icon:createLabelIcon("textLabelclass","A71")}).addTo(map);
 L.marker(new L.LatLng(0.0854584,36.976607), {icon:createLabelIcon("textLabelclass","A72")}).addTo(map);
 L.marker(new L.LatLng(0.0852525,36.9767340), {icon:createLabelIcon("textLabelclass","A73")}).addTo(map);
 L.marker(new L.LatLng(0.0854548,36.9771187), {icon:createLabelIcon("textLabelclass","A74")}).addTo(map);
  L.marker(new L.LatLng(0.0856504,36.9770461), {icon:createLabelIcon("textLabelclass","A75")}).addTo(map);
 L.marker(new L.LatLng(0.0858585,36.9769729), {icon:createLabelIcon("textLabelclass","A76")}).addTo(map);
 L.marker(new L.LatLng(0.0860681,36.9768901), {icon:createLabelIcon("textLabelclass","A77")}).addTo(map);
  L.marker(new L.LatLng(0.0862711,36.9768153), {icon:createLabelIcon("textLabelclass","A78")}).addTo(map);
  L.marker(new L.LatLng(0.0864689,36.9767384), {icon:createLabelIcon("textLabelclass","A79")}).addTo(map);
 L.marker(new L.LatLng(0.0866690,36.9766600), {icon:createLabelIcon("textLabelclass","A80")}).addTo(map);
 L.marker(new L.LatLng(0.0868690,36.9765845), {icon:createLabelIcon("textLabelclass","A81")}).addTo(map);
  L.marker(new L.LatLng(0.0870727,36.9765090), {icon:createLabelIcon("textLabelclass","A82")}).addTo(map);
L.marker(new L.LatLng(0.0872676,36.9764372), {icon:createLabelIcon("textLabelclass","A83")}).addTo(map);
 L.marker(new L.LatLng(0.0874567,36.9763654), {icon:createLabelIcon("textLabelclass","A84")}).addTo(map);
 L.marker(new L.LatLng(0.0876531,36.9762936), {icon:createLabelIcon("textLabelclass","A85")}).addTo(map);
  L.marker(new L.LatLng(0.0878429,36.9762166), {icon:createLabelIcon("textLabelclass","A86")}).addTo(map);
 L.marker(new L.LatLng(0.0880327,36.9761499), {icon:createLabelIcon("textLabelclass","A87")}).addTo(map);
  L.marker(new L.LatLng(0.0882195,36.9760833), {icon:createLabelIcon("textLabelclass","A88")}).addTo(map);
  L.marker(new L.LatLng(0.0884064,36.9760137), {icon:createLabelIcon("textLabelclass","A89")}).addTo(map);
   L.marker(new L.LatLng(0.0885918,36.9759433), {icon:createLabelIcon("textLabelclass","A90")}).addTo(map);
 L.marker(new L.LatLng(0.0887691,36.9758788), {icon:createLabelIcon("textLabelclass","A91")}).addTo(map);
 L.marker(new L.LatLng(0.0889523,36.9758055), {icon:createLabelIcon("textLabelclass","A92")}).addTo(map);
 L.marker(new L.LatLng(0.0891326,36.9757359), {icon:createLabelIcon("textLabelclass","A93")}).addTo(map);
 L.marker(new L.LatLng(0.0893062,36.9756722), {icon:createLabelIcon("textLabelclass","A94")}).addTo(map);
  L.marker(new L.LatLng(0.0894799,36.9756055), {icon:createLabelIcon("textLabelclass","A95")}).addTo(map);
 L.marker(new L.LatLng(0.0897576,36.9755029), {icon:createLabelIcon("textLabelclass","A96")}).addTo(map);
  L.marker(new L.LatLng(0.0899254,36.9754384), {icon:createLabelIcon("textLabelclass","A97")}).addTo(map);
 L.marker(new L.LatLng(0.0900896,36.9753747), {icon:createLabelIcon("textLabelclass","A98")}).addTo(map);
  L.marker(new L.LatLng(0.0902566,36.9753095), {icon:createLabelIcon("textLabelclass","A99")}).addTo(map);
 L.marker(new L.LatLng(0.0904237,36.9752494), {icon:createLabelIcon("textLabelclass","A100")}).addTo(map);
 L.marker(new L.LatLng(0.0905856,36.9751885), {icon:createLabelIcon("textLabelclass","A101")}).addTo(map);
 L.marker(new L.LatLng(0.0907513,36.9751285), {icon:createLabelIcon("textLabelclass","A102")}).addTo(map);
 L .marker(new L.LatLng(0.0909088,36.9750654), {icon:createLabelIcon("textLabelclass","A103")}).addTo(map);
  L.marker(new L.LatLng(0.0910671,36.9750046), {icon:createLabelIcon("textLabelclass","A104")}).addTo(map);
  L.marker(new L.LatLng(0.0912290,36.9749416), {icon:createLabelIcon("textLabelclass","A105")}).addTo(map);
   L.marker(new L.LatLng(0.0913866,36.9748852), {icon:createLabelIcon("textLabelclass","A106")}).addTo(map);
  L.marker(new L.LatLng(0.0915339,36.9748207), {icon:createLabelIcon("textLabelclass","A107")}).addTo(map);
   L.marker(new L.LatLng(0.0916951,36.9747635), {icon:createLabelIcon("textLabelclass","A108")}).addTo(map);
   L.marker(new L.LatLng(0.0918533,36.9747093), {icon:createLabelIcon("textLabelclass","A109")}).addTo(map);
  L.marker(new L.LatLng(0.0920058,36.9746492), {icon:createLabelIcon("textLabelclass","A110")}).addTo(map);
    L.marker(new L.LatLng(0.0921553,36.9745913), {icon:createLabelIcon("textLabelclass","A111")}).addTo(map);
  L.marker(new L.LatLng(0.0922989,36.9745334), {icon:createLabelIcon("textLabelclass","A112")}).addTo(map);
    L.marker(new L.LatLng(0.0924542,36.9744778), {icon:createLabelIcon("textLabelclass","A113")}).addTo(map);
    L.marker(new L.LatLng(0.0926015,36.9744213), {icon:createLabelIcon("textLabelclass","A114")}).addTo(map);
   L.marker(new L.LatLng(0.0927495,36.9743671), {icon:createLabelIcon("textLabelclass","A115")}).addTo(map);
    L.marker(new L.LatLng(0.0928968,36.9743136), {icon:createLabelIcon("textLabelclass","A116")}).addTo(map);
    L.marker(new L.LatLng(0.0930448,36.9742565), {icon:createLabelIcon("textLabelclass","A117")}).addTo(map);
    L.marker(new L.LatLng(0.0931892,36.9742000), {icon:createLabelIcon("textLabelclass","A118")}).addTo(map);
    L.marker(new L.LatLng(0.0933306,36.9741429), {icon:createLabelIcon("textLabelclass","A119")}).addTo(map);
    L.marker(new L.LatLng(0.0934816,36.9740901), {icon:createLabelIcon("textLabelclass","A120")}).addTo(map);
  L.marker(new L.LatLng(0.0936230,36.9740330), {icon:createLabelIcon("textLabelclass","A121")}).addTo(map);
    L.marker(new L.LatLng(0.0938362,36.9739443), {icon:createLabelIcon("textLabelclass","A122")}).addTo(map);
  L.marker(new L.LatLng(0.0939945,36.9738952), {icon:createLabelIcon("textLabelclass","A123")}).addTo(map);
  L.marker(new L.LatLng(0.0941293,36.9738417), {icon:createLabelIcon("textLabelclass","A124")}).addTo(map);
  L.marker(new L.LatLng(0.0942715,36.9737853), {icon:createLabelIcon("textLabelclass","A125")}).addTo(map);
   L.marker(new L.LatLng(0.0944151,36.9737325), {icon:createLabelIcon("textLabelclass","A126")}).addTo(map);
    L.marker(new L.LatLng(0.0945544,36.9736790), {icon:createLabelIcon("textLabelclass","A127")}).addTo(map);
  L.marker(new L.LatLng(0.0946972,36.9736219), {icon:createLabelIcon("textLabelclass","A128")}).addTo(map);
    L.marker(new L.LatLng(0.0948379,36.9735698), {icon:createLabelIcon("textLabelclass","A129")}).addTo(map);
   L.marker(new L.LatLng(0.0949794,36.9735193), {icon:createLabelIcon("textLabelclass","A130")}).addTo(map);
  L.marker(new L.LatLng(0.0951201,36.9734702), {icon:createLabelIcon("textLabelclass","A131")}).addTo(map);
   L.marker(new L.LatLng(0.0952608,36.9734108), {icon:createLabelIcon("textLabelclass","A132")}).addTo(map);
   L.marker(new L.LatLng(0.0953992,36.9733595), {icon:createLabelIcon("textLabelclass","A133")}).addTo(map);
    L.marker(new L.LatLng(0.0955355,36.9733053), {icon:createLabelIcon("textLabelclass","A134")}).addTo(map);
    L.marker(new L.LatLng(0.0956740,36.9732533), {icon:createLabelIcon("textLabelclass","A135")}).addTo(map);
    L.marker(new L.LatLng(0.0958096,36.9732049), {icon:createLabelIcon("textLabelclass","A136")}).addTo(map);
  L.marker(new L.LatLng(0.0959459,36.9731514), {icon:createLabelIcon("textLabelclass","A137")}).addTo(map);
    L.marker(new L.LatLng(0.0960822,36.9731001), {icon:createLabelIcon("textLabelclass","A138")}).addTo(map);
  L.marker(new L.LatLng(0.0962178,36.9730510), {icon:createLabelIcon("textLabelclass","A139")}).addTo(map);
    L.marker(new L.LatLng(0.0963489,36.9729983), {icon:createLabelIcon("textLabelclass","A140")}).addTo(map);
  L.marker(new L.LatLng(0.0964823,36.9729463), {icon:createLabelIcon("textLabelclass","A141")}).addTo(map);
  L.marker(new L.LatLng(0.0966186,36.9729030), {icon:createLabelIcon("textLabelclass","A142")}).addTo(map);
  L.marker(new L.LatLng(0.0967549,36.9728517), {icon:createLabelIcon("textLabelclass","A143")}).addTo(map);
   L.marker(new L.LatLng(0.0968839,36.9728026), {icon:createLabelIcon("textLabelclass","A144")}).addTo(map);
   L.marker(new L.LatLng(0.0971030,36.9726487), {icon:createLabelIcon("textLabelclass","A145")}).addTo(map);
  L.marker(new L.LatLng(0.0971455,36.9727631), {icon:createLabelIcon("textLabelclass","A146")}).addTo(map);
  L.marker(new L.LatLng(0.0972268,36.9729521), {icon:createLabelIcon("textLabelclass","A147")}).addTo(map);
  L.marker(new L.LatLng(0.0972752,36.9730642), {icon:createLabelIcon("textLabelclass","A148")}).addTo(map);
  L.marker(new L.LatLng(0.0970114,36.9731089), {icon:createLabelIcon("textLabelclass","A149")}).addTo(map);
  L.marker(new L.LatLng(0.0968824,36.9731588), {icon:createLabelIcon("textLabelclass","A150")}).addTo(map);
  L.marker(new L.LatLng(0.0967483,36.9732108), {icon:createLabelIcon("textLabelclass","A151")}).addTo(map);
  L.marker(new L.LatLng(0.0966157,36.9732577), {icon:createLabelIcon("textLabelclass","A152")}).addTo(map);
  L.marker(new L.LatLng(0.0964808,36.9733112), {icon:createLabelIcon("textLabelclass","A153")}).addTo(map);
   L.marker(new L.LatLng(0.0963439,36.9733602), {icon:createLabelIcon("textLabelclass","A154")}).addTo(map);
  L.marker(new L.LatLng(0.0962154,36.9734120), {icon:createLabelIcon("textLabelclass","A155")}).addTo(map);
  L.marker(new L.LatLng(0.0960804,36.9734609), {icon:createLabelIcon("textLabelclass","A156")}).addTo(map);
   L.marker(new L.LatLng(0.0959475,36.9735128), {icon:createLabelIcon("textLabelclass","A157")}).addTo(map);
  L.marker(new L.LatLng(0.0958095,36.9735632), {icon:createLabelIcon("textLabelclass","A158")}).addTo(map);
  L.marker(new L.LatLng(0.0956737,36.9736172), {icon:createLabelIcon("textLabelclass","A159")}).addTo(map);
   L.marker(new L.LatLng(0.0955357,36.9736720), {icon:createLabelIcon("textLabelclass","A160")}).addTo(map);
  L.marker(new L.LatLng(0.0953999,36.9737223), {icon:createLabelIcon("textLabelclass","A161")}).addTo(map);
  L.marker(new L.LatLng(0.0952619,36.9737749), {icon:createLabelIcon("textLabelclass","A162")}).addTo(map);
  L.marker(new L.LatLng(0.0951253,36.9738319), {icon:createLabelIcon("textLabelclass","A163")}).addTo(map);
  L.marker(new L.LatLng(0.0949830,36.9738800), {icon:createLabelIcon("textLabelclass","A164")}).addTo(map);
  L.marker(new L.LatLng(0.0948472,36.9739385), {icon:createLabelIcon("textLabelclass","A165")}).addTo(map);
  L.marker(new L.LatLng(0.0947077,36.9739918), {icon:createLabelIcon("textLabelclass","A166")}).addTo(map);
  L.marker(new L.LatLng(0.0945668,36.9740465), {icon:createLabelIcon("textLabelclass","A167")}).addTo(map);
  L.marker(new L.LatLng(0.09442281,36.9741057), {icon:createLabelIcon("textLabelclass","A168")}).addTo(map);
  L.marker(new L.LatLng(0.0942840,36.9741561), {icon:createLabelIcon("textLabelclass","A169")}).addTo(map);
   L.marker(new L.LatLng(0.0941455,36.9742140), {icon:createLabelIcon("textLabelclass","A170")}).addTo(map);
  L.marker(new L.LatLng(0.0939967,36.9742645), {icon:createLabelIcon("textLabelclass","A171")}).addTo(map);
  L.marker(new L.LatLng(0.0937769,36.9743554), {icon:createLabelIcon("textLabelclass","A172")}).addTo(map);
   L.marker(new L.LatLng(0.0936362,36.9744067), {icon:createLabelIcon("textLabelclass","A173")}).addTo(map);
  L.marker(new L.LatLng(0.0934940,36.9744668), {icon:createLabelIcon("textLabelclass","A174")}).addTo(map);
   L.marker(new L.LatLng(0.0933526,36.9745210), {icon:createLabelIcon("textLabelclass","A175")}).addTo(map);
  L.marker(new L.LatLng(0.0932053,36.9745723), {icon:createLabelIcon("textLabelclass","A176")}).addTo(map);
   L.marker(new L.LatLng(0.0930588,36.9746316), {icon:createLabelIcon("textLabelclass","A177")}).addTo(map);
   L.marker(new L.LatLng(0.0929100,36.9746939), {icon:createLabelIcon("textLabelclass","A178")}).addTo(map);
  L.marker(new L.LatLng(0.0927693,36.9747496), {icon:createLabelIcon("textLabelclass","A179")}).addTo(map);
  L.marker(new L.LatLng(0.0926213,36.9748053), {icon:createLabelIcon("textLabelclass","A180")}).addTo(map);
  L.marker(new L.LatLng(0.0924762,36.9748617), {icon:createLabelIcon("textLabelclass","A181")}).addTo(map);
  L.marker(new L.LatLng(0.0923231,36.9749167), {icon:createLabelIcon("textLabelclass","A182")}).addTo(map);
  L.marker(new L.LatLng(0.0921736,36.9749834), {icon:createLabelIcon("textLabelclass","A183")}).addTo(map);
   L.marker(new L.LatLng(0.0920160,36.9750376), {icon:createLabelIcon("textLabelclass","A184")}).addTo(map);
  L.marker(new L.LatLng(0.0918665,36.9751006), {icon:createLabelIcon("textLabelclass","A185")}).addTo(map);
  L.marker(new L.LatLng(0.0917061,36.9751592), {icon:createLabelIcon("textLabelclass","A186")}).addTo(map);
  L.marker(new L.LatLng(0.0915558,36.9752179), {icon:createLabelIcon("textLabelclass","A187")}).addTo(map);
   L.marker(new L.LatLng(0.0913998,36.9752779), {icon:createLabelIcon("textLabelclass","A188")}).addTo(map);
  L.marker(new L.LatLng(0.0912437,36.9753380), {icon:createLabelIcon("textLabelclass","A189")}).addTo(map);
  L.marker(new L.LatLng(0.0910832,36.9754018), {icon:createLabelIcon("textLabelclass","A190")}).addTo(map);
   L.marker(new L.LatLng(0.0909220,36.9754692), {icon:createLabelIcon("textLabelclass","A191")}).addTo(map);
  L.marker(new L.LatLng(0.0907571,36.9755352), {icon:createLabelIcon("textLabelclass","A192")}).addTo(map);
  L.marker(new L.LatLng(0.0905959,36.9755945), {icon:createLabelIcon("textLabelclass","A193")}).addTo(map);
  L.marker(new L.LatLng(0.0904325,36.9756546), {icon:createLabelIcon("textLabelclass","A194")}).addTo(map);
  L.marker(new L.LatLng(0.0902596,36.9757169), {icon:createLabelIcon("textLabelclass","A195")}).addTo(map);
  L.marker(new L.LatLng(0.0900962,36.9757865), {icon:createLabelIcon("textLabelclass","A196")}).addTo(map);
  L.marker(new L.LatLng(0.0899313,36.9758510), {icon:createLabelIcon("textLabelclass","A197")}).addTo(map);
  L.marker(new L.LatLng(0.0896404,36.9759492), {icon:createLabelIcon("textLabelclass","A198")}).addTo(map);
  L.marker(new L.LatLng(0.0894887,36.9760261), {icon:createLabelIcon("textLabelclass","A199")}).addTo(map);
  L.marker(new L.LatLng(0.0893135,36.9760899), {icon:createLabelIcon("textLabelclass","A200")}).addTo(map);
  L.marker(new L.LatLng(0.0891318,36.9761617), {icon:createLabelIcon("textLabelclass","A201")}).addTo(map);
  L.marker(new L.LatLng(0.0889625,36.9762342), {icon:createLabelIcon("textLabelclass","A202")}).addTo(map);
  L.marker(new L.LatLng(0.0887621,36.9762969), {icon:createLabelIcon("textLabelclass","A203")}).addTo(map);
  L.marker(new L.LatLng(0.0885914,36.9763753), {icon:createLabelIcon("textLabelclass","A204")}).addTo(map);
  L.marker(new L.LatLng(0.0884001,36.9764420), {icon:createLabelIcon("textLabelclass","A205")}).addTo(map);
  L.marker(new L.LatLng(0.0882177,36.9765252), {icon:createLabelIcon("textLabelclass","A206")}).addTo(map);
  L.marker(new L.LatLng(0.0880184,36.9765900), {icon:createLabelIcon("textLabelclass","A207")}).addTo(map);
  L.marker(new L.LatLng(0.0878344,36.9766611), {icon:createLabelIcon("textLabelclass","A208")}).addTo(map);
  L.marker(new L.LatLng(0.0876351,36.9767373), {icon:createLabelIcon("textLabelclass","A209")}).addTo(map);
  L.marker(new L.LatLng(0.0874365,36.9768083), {icon:createLabelIcon("textLabelclass","A210")}).addTo(map);
  L.marker(new L.LatLng(0.0872424,36.9768868), {icon:createLabelIcon("textLabelclass","A211")}).addTo(map);
  L.marker(new L.LatLng(0.0870658,36.9769659), {icon:createLabelIcon("textLabelclass","A212")}).addTo(map);
  L.marker(new L.LatLng(0.0868664,36.9770421), {icon:createLabelIcon("textLabelclass","A213")}).addTo(map);
  L.marker(new L.LatLng(0.0866583,36.9771176), {icon:createLabelIcon("textLabelclass","A214")}).addTo(map);
  L.marker(new L.LatLng(0.0864620,36.9771975), {icon:createLabelIcon("textLabelclass","A215")}).addTo(map);
  L.marker(new L.LatLng(0.0862553,36.9772773), {icon:createLabelIcon("textLabelclass","A216")}).addTo(map);
  L.marker(new L.LatLng(0.0860472,36.9773565), {icon:createLabelIcon("textLabelclass","A217")}).addTo(map);
  L.marker(new L.LatLng(0.0858354,36.9774341), {icon:createLabelIcon("textLabelclass","A218")}).addTo(map);
  L.marker(new L.LatLng(0.0856588,36.9775162), {icon:createLabelIcon("textLabelclass","A219")}).addTo(map);


  function createLabelIcon(labelClass,labelText){
    return L.divIcon({
      className:labelClass,
      html:labelText
    });
  }

  // REFACTOR THE FOLLOWING:
    // Use a loop to create the markers
    // A single onEachFeature function for sold and Batian_1 data
    // Seperate data loading from Leaflet data rendering
    //  Use a single function to add data to the geojson variables
    // 


});
