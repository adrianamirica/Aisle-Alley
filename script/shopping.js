// if (!window.navigator.standalone) {
//        document.addEventListener("DOMContentLoaded", adjustHeight, false);
//        //window.addEventListener("orientationchange", adjustHeight, true);
//    }
//function adjustHeight() {
//    var html = document.documentElement;
//    var size = window.innerHeight;
//    html.style.height = (size + size) + "px";
//    window.setTimeout(function() {
//        if (window.pageYOffset == 0) {
//            window.scrollTo(0, 0);
//        }
//        html.style.height = window.innerHeight + "px";
//    }, 0);
//}
 
// //on iPhone Orientation change
// function updateOrientation(){
//    var hScreen=document.documentElement.clientHeight;// browser window height
//    var WidthScreen=document.documentElement.clientWidth;
//            
//            //var hToolbar=document.getElementById("Toolbar").clientHeight+1;// 1 px from the css toolbar border-bottom 
//            var hFooter= document.getElementById("footer").clientHeight;
//            //var calculateHeight=hScreen-hToolbar-hFooter;
//            var calculateHeight=hScreen-hFooter;
//            //var contentdiv = document.getElementById("content");
//            var contentdiv = document.getElementById("container");
//            contentdiv.style.height=calculateHeight+ "px";
//            $('#content').height($("#container").height()-$("#Toolbar").height()-$("#searchbar").height());
//            
//            //console.log("Your screen height is " + hScreen);
//            //console.log("Your footer height is " + hFooter);
//            //console.log("Your div content height must be" + calculateHeight);
//            //console.log("Your div content height is" + contentdiv.style.height);
// }
//window.addEventListener("load", function() { setTimeout(loaded, 100) }, false);  
//  
//function loaded() {  
//    document.getElementById("container").style.visibility = "visible";
//    updateOrientation();
//    window.scrollTo(0, 1); // pan to the bottom, hides the location bar  
//}   

	    var deviceIphone = "iphone";
            var deviceIpod = "ipod";
            var deviceAndroid = "android";
            
            //Initialize our user agent string to lower case.
            var uagent = navigator.userAgent.toLowerCase();
            
            //**************************
            // Detects if the current device is an iPhone.
            function DetectIphone()
            {
               if (uagent.search(deviceIphone) > -1)
                  return true;
               else
                  return false;
            }
            
            //**************************
            // Detects if the current device is an iPod Touch.
            function DetectIpod()
            {
               if (uagent.search(deviceIpod) > -1)
                  return true;
               else
                  return false;
            }
            
            //**************************
            // Detects if the current device is an iPhone or iPod Touch.
            function DetectIphoneOrIpod()
            {
                if (DetectIphone())
                   return true;
                else if (DetectIpod())
                   return true;
                else
                   return false;
            }
            //**************************
            // Detects if the current device is an Android OS-based device.
            function DetectAndroid()
            {
               if (uagent.search(deviceAndroid) > -1)
                  return true;
               else
                  return false;
            }



//var ShoppingCart=0;
//sessionStorage.ShoppingCart=0;
var storesArray = [
			    [0, "Bush's Homestyle Baked Beans", "20oz", 2, 1.97, "Front" ,"A", "Dry Grocery"],
			    [1, "Publix Baked Beans", "20oz", 2, 1.87, "Front",  "B", "Dry Grocery"],
			    [2, "Kraft Chicken Stuffing", "6oz", 2, 1.59, "Middle", "C", "Dry Grocery"],
			    [3, "Ragu Robusto Marinara Sauce", "26oz", 4, 2.65, "Middle", "A", "Dry Grocery"],
			    [4, "Publix Marinara Sauce", "26oz", 4, 1.47, "Middle", "A", "Dry Grocery" ],
			    [5, "Kraft Marshmollow Fluff", "7oz", 5, 1.59, "End", "D", "Dry Grocery"],
			    [6, "Gredine Syrup", "12.7oz", 14, 2.49, "End", "A", "Dry Grocery"],
			    [7, "Diet Rite 0 carb", "12-12oz", 14, 4.99, "End", "B", "Dry Grocery"],
			    [8, "Coke* Buy 2 Get 2 FREE", "12-12oz", 14, 4.99, "Middle", "B", "Dry Grocery"],
			    [9, "Kraft Marshmollow Fluff", "7oz", 4, 1.59, "End", "C", "Dry Grocery"],
			    [10, "Vanila Waffers", "20oz", 10, 1.97, "Middle", "D", "Dry Grocery"],
			    [11, "Quaker Life Ceral *Publix Challenge, Get Publix Life free", "12oz", 6, 3.99, "Middle", "B", "Dry Grocery"],
			    [12, "Special K Ceral Bar *Publix Challenge, Get Publix Ceral Bar free", "8oz", 6, 2.64, "Middle", "A", "Dry Grocery"],
                            [13, "Boneless Chicken Cutlets", "16oz", 9, 4.33, "Middle", "A", "Meat"],
                            [14, "Mandarin Oranges", "12oz", 4, 3.12, "End", "A", "Produce"],
                            [15, "Vitamin-D Milk", "8oz", 5, 2.99, "End", "A", "Dairy" ]
				];
//sessionStorage.ShoppingCartArray=[];

// find Products page
function findProducts()
        {
            document.getElementById('resultList').innerHTML='';// clear ul resultlist for each search
	    var product = new RegExp(document.getElementById("productsToSearch").value, 'gi');// product to search
	    var findElement=false;
            var li;
	    var a;
	    var spanName, spanComment;
            var root=document.getElementById('resultList');//ul
            for(var i=0; i<storesArray.length; i++){
                var storeProducts=storesArray[i];// all the products from one store
                console.log(storeProducts);
                if(storeProducts[1].search(product, "i")!=-1){
		    li=document.createElement('li');
		    if(i==0){
			 li.setAttribute('class', 'arrow ui-corner-top');
		    }
		    else{
			if(i==storesArray.length-1)
			    li.setAttribute('class', 'arrow ui-corner-bottom');
			else
			    li.setAttribute('class', 'arrow');
		    }
		    
		    spanComment=document.createElement('p');
		    findElement=true;
		    for(var j=1; j<storeProducts.length; j++){// the first value is the product id
			    //console.log(storeProducts[1]);
			    switch(j)
			    {
				case 1:
				    spanName=document.createElement('p');
				    //spanName.appendChild(document.createTextNode("Name: "));
				    spanName.appendChild(document.createTextNode(storeProducts[j]));
				    spanName.setAttribute('class', 'name');
				    break;
                                case 2:
				    spanComment.appendChild(document.createTextNode("Size: "));
				    spanComment.appendChild(document.createTextNode(storeProducts[j]+ ", "));
				    spanComment.setAttribute('class', 'comment');
				    break;
				case 3:
				    spanComment.appendChild(document.createTextNode("Aisle: "));
				    spanComment.appendChild(document.createTextNode(storeProducts[j]+ ", "));
				    spanComment.setAttribute('class', 'comment');
				    break;
				case 4:
				    spanComment.appendChild(document.createTextNode("Price: "));
				    spanComment.appendChild(document.createTextNode(storeProducts[j]+ ", "));
				    spanComment.setAttribute('class', 'comment');
				    break;
				case 5:
				    spanComment.appendChild(document.createTextNode("Location: "));
				    spanComment.appendChild(document.createTextNode(storeProducts[j]+ ", "));
				    spanComment.setAttribute('class', 'comment');
				    break;
				case 6:
				    spanComment.appendChild(document.createTextNode("Shelf: "));
				    spanComment.appendChild(document.createTextNode(storeProducts[j]+ ", "));
				    spanComment.setAttribute('class', 'comment');
				    break;
                                case 7:
                                    spanComment.appendChild(document.createTextNode("Category: "));
				    spanComment.appendChild(document.createTextNode(storeProducts[j]));
				    spanComment.setAttribute('class', 'comment');
				    break;
			    }// end switch
			}// end for
			    
			    li.appendChild(spanName);
			    li.appendChild(spanComment);
			    root.appendChild(li);
			    root.setAttribute('class', 'Find');//ul
			    //root.setAttribute('class', 'corner-radius');
			    document.getElementById('divresultList').style.display="block" ;
			    onCompletion();
		}// end if
            }// end for
            if(findElement!=true)
            {
                alert("No product was found");
            }
            
        }
// Shopping list page
//show category list
function ShowProductsByCategory(){
    
    // Category array keeps unique category 
    var CategoryArray=[];
    var li;
    var aLink;
    var root=document.getElementById('Category');// ul
    for(var i=0; i<storesArray.length; i++){
        var storeProducts=storesArray[i];
        if(jQuery.inArray(storeProducts[7], CategoryArray)==-1)
        {
           CategoryArray.push(storeProducts[7]);// add the category to the category array
        }
    }
    //console.log(CategoryArray);
   // put the categories on screen
    if(root!=null){
        for(var i=0; i<CategoryArray.length; i++){
          li=document.createElement('li');
          aLink=document.createElement('p');
          aLink.appendChild(document.createTextNode(CategoryArray[i]));
          li.setAttribute('id', CategoryArray[i]);
          //li.setAttribute('onClick', "Javascript: window.location.href = 'ItemShoppingList.html'; ShowItemsFromCategory(CategoryArray[i]);");// when click on a category
           //li.setAttribute('onClick', "Javascript: window.location.href = 'ItemShoppingList.html'");// when click on a category
	  li.setAttribute('onClick', "Javascript: ShowItemsFromCategory(this, id);");// when click on a category id=category name
          li.setAttribute('class', 'arrow');
          li.appendChild(aLink);
          root.appendChild(li);
        }// end for
	onCompletion();
    }// end if
   
}// end function

// ItemShoppingList page
function ShowItemsFromCategory(e, liID){// liID is the category name
    var li;
    var p;
    var root=document.getElementById('Category');// ul
    $('#Category').empty();
    //alert("category id is "+ liID); 
    
     for(var i=0; i<storesArray.length; i++){
        var storeProducts=storesArray[i];// all the products
            if(liID==storeProducts[7]){
                if(root!=null)
                {
                    li=document.createElement('li');
                    li.setAttribute('class', 'simplearrow');
		    
		    //on li click the product is stored and the checkbox is ckecked
		    li.setAttribute('value', storeProducts[0]);
		    li.setAttribute('onClick', 'SaveItemIntoDatabase(this, value)');
                    
		    var cb = document.createElement( "input" );
                    cb.type = "checkbox";
                    //cb.value = storeProducts[0];// product id
		    cb.setAttribute('value', storeProducts[0]);
		    cb.setAttribute('onClick', 'SaveItemIntoDatabase(this, value)');
		    cb.setAttribute('style', 'margin:11px 0 0 7px;');
                    //cb.checked = true;
                     p = document.createTextNode(" "+ storeProducts[1]);
                    li.appendChild( cb );
                    li.appendChild( p );
                    root.appendChild(li);
		    
		    
                }//end if
            
            }// end if
        }// end for
    ShowAllItemsChecked();
    
    // 
    //var myScroll; 
    //        function loaded() { 
    //            myScroll = new iScroll('content'); 
    //        } 
    //        document.addEventListener('DOMContentLoaded', function() 
    //            { setTimeout(loaded,500);}, false); 
    
   
//	    var input = document.getElementsByTagName('input'); 
//            if (input) {
//		//alert("there are inputs" + input.length);
//                for (var i=0; i<input.length; i++) { 
//		    input[i].addEventListener('touchstart', function(e) {
//			//alert("e.stopPropagation();");
//			e.stopPropagation(); 
//		    }, false);
//		}
//            }
	var input = document.getElementsByTagName('input'); 
            if (input) {
		//alert("there are inputs" + input.length);
                for (var i=0; i<input.length; i++) { 
		    input[i].addEventListener('touchstart', function(e){
			
			//alert("this is "+ this.value);
			SaveItemIntoDatabase(this, this.value);
			e.stopPropagation(); 
		    }, false);
		}
            } 
     onCompletion();  // myScroll.refresh()    
    
}// end function

var db;
function connect_db(){
    var shortName = 'ShoppingApp'; // the file name on disk
    var version = '1.0';
    var displayName = 'ShoppingApp';
    var maxSize = 65536;
    db = openDatabase(shortName, version, displayName, maxSize);
    db.transaction(
	function(transaction) {
	    transaction.executeSql(
		'CREATE TABLE IF NOT EXISTS ProductsToBuy ' +
		' (Id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ' +
		' IdProduct INTEGER NOT NULL , ProductName TEXT NOT NULL, CategoryName TEXT NOT NULL, ' +
		' Price DOUBLE NOT NULL );'
	    );
	}
    );
    if(!db)
	{
	    console.log("Failed to connect to database.");
	    alert("Failed to connect to database.");
	}
	
    else
    {
	 console.log("Connected to database.");
	//alert("Connected to database.");
	 
    }
}

// the click can be to check or uncheck the checkbox
function SaveItemIntoDatabase(e, ID)// ID is the product id
{
    //alert("ID is" + ID);
    var name, category, price;
    //if(connect_db()==true){
    // in browser
	//if($('input[value='+ID+']').attr('checked')==true)
	//
	//{
	//    
	//    //save the product in the table
	//     for(var i=0; i<storesArray.length; i++){
	//	var storeProducts=storesArray[i];// all the products
	//	    if(storeProducts[0]==parseInt(ID))
	//	    {
	//		alert("in");
	//		name=storeProducts[1];
	//		category=storeProducts[7];
	//		price= storeProducts[4];
	//		//db.transaction(
	//		//    function(transaction) {
	//		//	transaction.executeSql(
	//		//	    'INSERT INTO ProductsToBuy(IdProduct, ProductName, CategoryName, Price) VALUES (?, ?, ?, ?);',[ID, name , category, price],
	//		//	    function(){
	//		//		//refreshEntries();
	//		//		console.log("Data saved");
	//		//	    },
	//		//	    errorHandler
	//		//	);
	//		//    }
	//		//);
	//		db.transaction(
	//		    function(transaction) {
	//			transaction.executeSql(
	//			    'INSERT INTO ProductsToBuy(IdProduct, ProductName, CategoryName, Price) VALUES (?, ?, ?, ?);',[ID, name , category, price],
	//			    null,
	//			    errorHandler
	//			);
	//		    }
	//		);
	//	    }
	//	
	//     }
	//    
	//}
	//else
	//{
	//    //delete the product from table
	////    db.transaction(
	////	function(transaction) {
	////	    transaction.executeSql(
	////		'DELETE FROM ProductsToBuy WHERE IdProduct=? ;',[parseInt(ID)],
	////		     function(){
	////			//refreshEntries();
	////			console.log("Data deleted");
	////		     },
	////			 errorHandler
	////		);
	////	    }
	////    );
	//db.transaction(
	//	function(transaction) {
	//	    transaction.executeSql(
	//		'DELETE FROM ProductsToBuy WHERE IdProduct=? ;',[parseInt(ID)],null ,
	//			 errorHandler
	//		);
	//	    }
	//    );
	//    
	//}
    //}
// in iPhone
//if the checkbox isn't checked
if($('input[value='+ID+']').attr('checked')!=true)
	
	{
	    
	    //save the product in the table
	     for(var i=0; i<storesArray.length; i++){
		var storeProducts=storesArray[i];// all the products
		    if(storeProducts[0]==parseInt(ID))
		    {
			
			 
			name=storeProducts[1];
			category=storeProducts[7];
			price= storeProducts[4];
			db.transaction(
			    function(transaction) {
				transaction.executeSql(
				    'INSERT INTO ProductsToBuy(IdProduct, ProductName, CategoryName, Price) VALUES (?, ?, ?, ?);',[ID, name , category, price],
				    function(){
					//refreshEntries();
					//alert("Data saved");
					
					$('input[value='+ID+']').attr('checked','checked');// check the checkbox
				    },
				    errorHandler
				);
			    }
			);
			//db.transaction(
			//    function(transaction) {
			//	transaction.executeSql(
			//	    'INSERT INTO ProductsToBuy(IdProduct, ProductName, CategoryName, Price) VALUES (?, ?, ?, ?);',[ID, name , category, price],
			//	    null,
			//	    errorHandler
			//	);
			//    }
			//);
		    }
		
	     }
	    
	}
	else
	{
	    
	    //delete the product from table
	    db.transaction(
		function(transaction) {
		    transaction.executeSql(
			'DELETE FROM ProductsToBuy WHERE IdProduct=? ;',[parseInt(ID)],
			     function(){
				//refreshEntries();
				//alert("Data deleted");
				 $('input[value='+ID+']').attr('checked',false);// uncheck the checkbox
			     },
				 errorHandler
			);
		    }
	    );
	//db.transaction(
	//	function(transaction) {
	//	    transaction.executeSql(
	//		'DELETE FROM ProductsToBuy WHERE IdProduct=? ;',[parseInt(ID)],null ,
	//			 errorHandler
	//		);
	//	    }
	//    );
	    
	}
    
}
function errorHandler(transaction, error) {
    alert('Oops. Error was '+error.message+' (Code '+error.code+')');
    return true;
}

function ShowAllItemsChecked()
{
    //if(connect_db()==true){
	db.transaction(
	function(transaction) {
	   transaction.executeSql(
		'SELECT  IdProduct, ProductName FROM ProductsToBuy;',
		[],
		function (transaction, result) {		
		    for (var i=0; i < result.rows.length; i++) {
			var row = result.rows.item(i);
			if($('input[value='+row.IdProduct+']').length!=0)// if checkbox element exist
			{
			    $('input[value='+row.IdProduct+']').attr('checked','checked');
			}
		    }
		},
		errorHandler
		);
	    }
	);
    //}
    
}

//function findShoppingProducts() {
//		var li;
//		var aLink;
//		var root=document.getElementById('Category');// ul
//		if(root!=null){
//                    for(var i=0; i<storesArray.length; i++){
//                        var storeProducts=storesArray[i];// all the products
//                        //console.log(storeProducts);
//                        li=document.createElement('li');
//                        aLink=document.createElement('a');
//                        aLink.setAttribute('href', '#');
//                        //aLink.setAttribute('target', '_self');
//                        li.setAttribute('class', 'arrow');
//                        li.setAttribute('id', storeProducts[0]);
//                        aLink.appendChild(document.createTextNode(storeProducts[1]));
//                        li.appendChild(aLink);
//                        li.setAttribute('onClick', "Javascript: AddToShoppingList(this, id);");// the price of a product
//                        //li.setAttribute('onClick', "Javascript: window.location.href = 'shoppingCart.html';");// when click on a product the Shopping Cart page is loaded
//                        root.appendChild(li);
//                    }// end for
//                }//end if
//		
//		if(parseFloat(sessionStorage.ShoppingCart)==0){
//                    $('#box').text('Empty Shopping Cart');
//		    //document.getElementById("box").innerHTML="Empty Shopping Cart";
//		}
//	    }
//	    
//function AddToShoppingList(e, liID)
//    {
//    console.log("On click index "+ liID);
//	for(var i=0; i<storesArray.length; i++){
//	    var storeProducts=storesArray[i];// all the products
//                if(liID==storeProducts[0]){
//		    ShoppingCart+=storeProducts[4];
//		}
//	}
//    sessionStorage.ShoppingCart=ShoppingCart;
//    console.log("sessionStorage.ShoppingCart"+ sessionStorage.ShoppingCart);
//    //document.getElementById("box").innerHTML="Total amount payable: "+ShoppingCart.toFixed(2);
//		
//    if(parseFloat(sessionStorage.ShoppingCart)==0){
//	 document.getElementById("box").innerHTML="Empty Shopping Cart";
//    }
//    else{
//	 document.getElementById("box").innerHTML="Total amount payable: "+parseFloat(ShoppingCart).toFixed(2);
//    }
//		
//		//console.log("Sum to pay: " + ShoppingCart);
//		//console.log("Sum to pay: " + document.getElementById("box").innerHTML);
//}
//// end shopping list page

//store locator page- google map
//function detectBrowser() {
//		var useragent = navigator.userAgent;
//		var mapdiv = document.getElementById("map_canvas");
//		  
//		if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
//		    mapdiv.style.width = '100%';
//		    mapdiv.style.height = '100%';
//		} else {
//		   
//		    mapdiv.style.width = '600px';
//		    mapdiv.style.height = '800px';
//		}
//	    }
//	   
	var map;
	var geocoder;
	var markersArray = [
			    ['Bondi Store', -33.890542, 151.274856, "Bondi Store is a Pharmacy"],
			    ['Coogee Store', -33.923036, 151.259052, "Coogee Store is for kids"],
			    ['Cronulla Store', -34.028249, 151.157507, "Have a drink at Cronulla Store"],
			    ['Manly Store', -33.80010128657071, 151.28747820854187, "Manly Store is for fun"],
			    ['Maroubra Store', -33.950198, 151.259302, "Maroubra Store has little prices"],
			    ['New York Store', 40.698470, -73.9514422, "New York Store is the best for you"],
			    ['Woodstock Road', 54.5864015, -5.901728000000048, "BT6 8NL east Belfast street of the Woodstock Road"],
			    ['Absolute Mobile', 28.0133862, -82.50775929999998, " Tampa Intl,FLORIDA, USA 33614"],
			    ['Warsof Store', 40.699461, -73.9514453, "Warsof Store is a place for kids to play"]
				];
	

	    function initialize() {
		var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);
		//connect_db();// connect to database
		//refreshEntries();// show all the store from te database
		geocoder = new google.maps.Geocoder();
                var myOptions = {
                    zoomControl: true,
                    zoom: 17,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
		    };
                var element=document.getElementById("map_canvas");
                if(element!=null){
                    map = new google.maps.Map(element,myOptions);
                    map.setCenter(newyork);// set center to New York
                    show_Marker(map, markersArray);// put the stores on the map   
                    //google.maps.event.addListener(map, 'click', function(event){addMarker(event.latLng);});// add marker on the screen
                }// end if
	   
	 }// end initialize()   

	 //on click on the screen add a marker
	 function addMarker(location) {
		marker = new google.maps.Marker({
		  position: location,
		  map: map
		  //title: 'Some title';
		});
		marker.setTitle("New Store in town");
		attachSecretMessage(marker,"This store is a new one");
		markersArray.push(marker);
		console.log(markersArray);
		//localStorage.markersArray= markersArray;
	      }// end addMarker
	
	// Shows any overlays currently in the array(markers)
	function showOverlays() {
	  if (markersArray) {
	    for (i in markersArray) {
	      markersArray[i].setMap(map);
	    }
	  }
	}
	
	// Deletes all markers in the array by removing references to them
	function deleteOverlays() {
	  if (markersArray) {
	    for (i in markersArray) {
	      markersArray[i].setMap(null);
	    }
	    markersArray.length = 0;
	  }
	}
	      
	//add a description for the store
	    function attachSecretMessage(marker, message) {
		//var message = ["Toy store","Food Store","Pharmacy","Hospital","Hotel"];
		var infowindow = new google.maps.InfoWindow(
		    { content: message,
		      size: new google.maps.Size(50,50)
		    });
		google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
		});
	      }// end attachSecretMessage    
	
	//put the markers on the map
	function show_Marker(map, locations)
	{
	    for (var i = 0; i < locations.length; i++) {
	    var store = locations[i];
	    var myLatLng = new google.maps.LatLng(store[1], store[2]);
	    var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: store[0]
		//zIndex: beach[3]
	    });
	    attachSecretMessage(marker,store[3]);
	  }
	map.setCenter(myLatLng);  
	}
	
    function findAddress() {
    document.getElementById('MarkersList').style.display='none';
    document.getElementById('map_canvas').style.display='block';
    //document.getElementById('map_canvas').style.top=0+'px';
    var address = document.getElementById("address").value;
    var findElement=false;
    
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
	for (var i=0; i<markersArray.length; i++)
	    {
		var store=markersArray[i];
		//console.log(store);
		var myLatLng = new google.maps.LatLng(store[1], store[2]);
		//console.log("vector: "+ myLatLng);
		//console.log("gasite in urma cautarii"+results[0].geometry.location.lat());
		if(results[0].geometry.location.lat()==parseFloat(store[1])&& results[0].geometry.location.lng()==parseFloat(store[2])){
		    //console.log("gasit");
		    findElement=true;
		    map.setCenter(results[0].geometry.location);
		    var marker = new google.maps.Marker({
			map: map,
			position: results[0].geometry.location,
			title: store[0]
		    });
		    attachSecretMessage(marker,store[3]);
		}
	    }
	    if(findElement!=true)
		{
		    alert("This store doesn't exist on the map");
		}
        
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
  
 function showMapMarker(){
    var li;
    var p;
    var root=document.getElementById('MarkersList');
    document.getElementById('MarkersList').innerHTML='';
   //document.getElementById('MarkersList').style.top=0+'px';// scroll top of the page when switch between map view and list view 
    document.getElementById('MarkersList').style.display='block';// ul
    li=document.createElement('li');
    p=document.createElement('p');
    p.appendChild(document.createTextNode("List of stores:"));
    p.setAttribute('style', 'font-weight:bold');
    li.appendChild(p);
    li.setAttribute('class', 'arrow');
    root.setAttribute('class', 'Find');//ul
    root.appendChild(li);
    if(root!=null){
        for(var i=0; i<markersArray.length; i++){
            var markerList=markersArray[i];// all markers
	    p=document.createElement('p');
            li=document.createElement('li');
	    if(i==0){
			 li.setAttribute('class', 'arrow ui-corner-top');
		    }
	    else{
		if(i==markersArray.length-1)
		    li.setAttribute('class', 'arrow ui-corner-bottom');
		else
		     li.setAttribute('class', 'arrow');
		    }
            
            li.setAttribute('id', i);
            p.appendChild(document.createTextNode(markerList[0]));
            root.setAttribute('class', 'Find');//ul
            li.appendChild(p);
	    root.appendChild(li);
        }// end for
    document.getElementById('map_canvas').style.display='none';
    onCompletion();//myScroll.refresh();
    }//end if
    
  }