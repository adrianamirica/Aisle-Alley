    

	    var deviceIphone = "iphone";
            var deviceIpod = "ipod";
            var deviceAndroid = "android";
	    var deviceIpad="ipad";
            
            //Initialize our user agent string to lower case.
            var uagent = navigator.userAgent.toLowerCase();
            
            
            // Detects if the current device is an iPhone.
            function DetectIphone()
            {
               if (uagent.search(deviceIphone) > -1)
                  return true;
               else
                  return false;
            }
            
           
            // Detects if the current device is an iPod Touch.
            function DetectIpod()
            {
               if (uagent.search(deviceIpod) > -1)
                  return true;
               else
                  return false;
            }
            
            
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
            
            // Detects if the current device is an Android OS-based device.
            function DetectAndroid()
            {
               if (uagent.search(deviceAndroid) > -1)
                  return true;
               else
                  return false;
            }
	    // Detects if the current device is an iPad tablet.
	    function DetectIpad()
	    {
	       if (uagent.search(deviceIpad) > -1  && DetectWebkit())
		  return true;
	       else
		  return false;
	    }
var storesArray = [
			    [0, "Bush's Homestyle Baked Beans", "20oz", 2, 1.97, "Front" ,"A", "Dry Grocery", "0.jpg"],
			    [1, "Publix Baked Beans", "20oz", 2, 1.87, "Front",  "B", "Dry Grocery", "1.jpg"],
			    [2, "Kraft Chicken Stuffing", "6oz", 2, 1.59, "Middle", "C", "Dry Grocery", "2.jpg"],
			    [3, "Ragu Robusto Marinara Sauce", "26oz", 4, 2.65, "Middle", "A", "Dry Grocery", "3.jpg"],
			    [4, "Publix Marinara Sauce", "26oz", 4, 1.47, "Middle", "A", "Dry Grocery", "4.jpg" ],
			    [5, "Kraft ", "7oz", 5, 1.59, "End", "D", "Dry Grocery", "5.jpg"],
			    [6, "Gredine Syrup", "12.7oz", 14, 2.49, "End", "A", "Dry Grocery", "6.jpg"],
			    [7, "Diet Rite 0 carb", "12-12oz", 14, 4.99, "End", "B", "Dry Grocery", "7.jpg"],
			    [8, "Coke* Buy 2 Get 2 FREE", "12-12oz", 14, 4.99, "Middle", "B", "Drinks", "8.jpg"],
			    [9, "Kraft Marshmallow Fluff", "7oz", 4, 1.59, "End", "C", "Dry Grocery", "9.jpg"],
			    [10, "Vanila Waffers", "20oz", 10, 3.97, "Middle", "D", "Dry Grocery", "10.jpg"],
			    [11, "Quaker Life Cereal *Publix Challenge", "12oz", 6, 3.99, "Middle", "B", "Dry Grocery", "11.jpg"],
			    [12, "Special K Cereal Bar *Publix Challenge", "8oz", 6, 2.64, "Middle", "A", "Dry Grocery", "12.jpg"],
                            [13, "Boneless Chicken Cutlets", "16oz", 9, 4.33, "Middle", "A", "Meat", "13.jpg"],
                            [14, "Mandarin Oranges", "12oz", 4, 3.12, "End", "A", "Produce", "14.jpg"],
                            [15, "Vitamin-D Milk", "8oz", 5, 2.99, "End", "A", "Dairy", "15.jpg" ],
			    [16, "Reduced-fat milk", "12oz", 3, 4.00, "End", "A", "Dairy", "16.jpg"],
			    [17, "Confectioners' sugar", "1oz", 3, 2.99, "Front", "B", "Dry Grocery", "17.jpg"],
			    [18, "Frozen whole strawberries", "16oz", 5, 5.00, "Middle", "D", "Frozen", "18.jpg"],
			    [19, "Bananas", "16oz", 4, 4.00, "End", "A", "Produce", "19.jpg"],
			    [20, "Shredded Parmesan cheese","1 oz", 3, 3.00, "End", "D", "Dairy", "20.jpg"],
			    [21, "Season croutons", "4 oz", 3,3.00, "Front", "B", "Dry Grocery", "21.jpg"],
			    [22, "Caesar salad dressing", "6 pack",3,3.00, "Front", "B", "Dry Grocery", "22.jpg"],
			    [23, "Refrigerated chicken breast strips", "10 oz",3,3.20, "Front", "B", "Meat", "23.jpg"],
			    [24, "European salad blend", "32 oz",3,3.67, "Front", "B", "Produce", "24.jpg"],
			    [25, "Coke diet CF ", "96FLOZ 8PK 12OZ", 3, 3.20, "Front", "B", "Drinks", "25.png"],
			    [26, "Coke Diet", "12FLOZ 12PK 144 FLOZ", 3, 4.00, "Front", "B", "Drinks", "26.jpg"],
			    [27, "Coke Diet", "2 Liter", 3, 1.10, "Front", "B", "Drinks", "27.png"],
			    [28, "Coke Classic", "96FLOZ 8PK 12OZ PET", 3, 10.90,"Front", "B", "Drinks", "28.jpg" ],
			    [29, "Coca Cola", "Dose", 3, 0.45, "Front", "B", "Drinks", "29.jpg"]
				];
			    

var recipesArray=[
		  [0, "Fruit Smoothies", 10, 3, "Place milk and sugar in blender. Break banana into chunks while adding into blender; and strawberries.", "Blend and high until smooth; scrape sides with rubber spatula, as needed.","Chill until ready to serve.",4, 16,17,18,19,"Fruit_Smoothie.png"],
		  [1, "Fudge Puddles",30, 5, "Preheat oven to 325 degrees F.","Sift together flour, baking soda and salt.","Cream butter, peanut butter and white and brown sugars. Mix in egg and 1/2 teaspoon vanilla. Stir the flour mixture into creamed mixture. Shape the dough into 48 balls, 1 inch each.Place each ball in one compartment of a mini muffin tin.","For filling, put chocolate chips in a double boiler over simmering water. Stir in milk and vanilla, mix well.","Bake for 14 to 16 minutes or until lightly browned. Remove from oven and immediately make wells in the center of each using a melon baller. Cool in pan for 5 minutes. Then carefully remove to wire racks.", 1, 9, "Fudge_Puddles.png"],
		  [2, "Caesar Salad", 10, 3, "Place salad blend in large bowl and toss with salad dressing", "Divide mixture into two servings. Top with chicken and croutons.", "Sprinkle with cheese. Serve.",5, 20,21,22,23,24, "Caesar_Salad.png" ]
		  ];



// find Products page
var ArrayByCriteria=[];
var optionSelect="BestMatch";// implicit the option is the first value

 function SelectChoice(){
    optionSelect=$('#select-choice-1 option:selected').val();
    $('#Option-select-choise').text(optionSelect);// change the option in the span tag 
   if($('#productsToSearch').val()=="Enter a product")//empty search
	{
	    ArrayByCriteria= storesArray.slice();
	    if(optionSelect=="BestMatch"){
		ShowAllProducts();
	    }
	    if(optionSelect=="Price"){
		//sort by price
		ArrayByCriteria.sort(function(a,b){
		    return a[4]-b[4];	
		});
		ShowAllProductsSortByPrice();
		
	    }
	    if(optionSelect=="Featured"){
		//empty
	    }
	}
	
    else {
	findProducts();
	}  
    }
function ShowAllProductsSortByPrice()
{
    var li;
    var a, h3, img, p, div;// h3 for title, img for picture and p for price
    var src;
    var path="img/products/";// path to the products image
   
    var root=document.getElementById('resultListViewThumbnails');//ul
    document.getElementById('resultListViewThumbnails').innerHTML='';// clear ul resultlist for each search
   if(root){
    
    for(var i=0; i<ArrayByCriteria.length; i++){
	var storeProducts=ArrayByCriteria[i];
	li=document.createElement('li');
	div=document.createElement('div');// contains a
	a=document.createElement('a');// contains img, h3, p
	img=document.createElement('img');
	h3=document.createElement('h3');
	p=document.createElement('p');
		    for(var j=1; j<storeProducts.length; j++){// the first value is the product id
			    switch(j)
			    {
				case 1:
				    h3.appendChild(document.createTextNode(storeProducts[j]+" "));//product name
				    break;
                                case 2:
				    h3.appendChild(document.createTextNode(storeProducts[j]));//product size
				    break;
				case 4:
			 	    p.appendChild(document.createTextNode("$"+storeProducts[j]));// product price
				    break;
				case 8:
				    src="";
				    src=path+storeProducts[j];
				    img.setAttribute('src', src);
				    break
			    }// end switch
			}// end for
	a.appendChild(img);
	a.appendChild(h3);
	a.appendChild(p);
	
	a.setAttribute('class', 'ui-link-inherit');
	img.setAttribute('class', 'ui-li-thumb');
	h3.setAttribute('class', 'ui-li-heading');
	p.setAttribute('class', 'ui-li-desc');
	
	div.appendChild(a);
	div.setAttribute('class', 'ui-btn-text ui-btn-inner ui-li');
	
	li.setAttribute('id', storeProducts[0]);
	li.setAttribute('onClick', "Javascript: ShowProductDetails(this, id);");// when click on a product id
	li.setAttribute('class', 'ui-btn ui-btn-icon-right-list-view ui-li ui-li-has-thumb ui-btn-up-c');
	li.appendChild(div);
	root.appendChild(li);
	root.setAttribute('class', 'ui-listview');//ul
	document.getElementById('divresultListViewThumbnails').style.display="block" ;
	$('#divresultListViewThumbnails').addClass('ui-shadow');
	onCompletion();
    }// end for products
    }// end if root
}
function ShowAllProducts(){
    var li;
    var a, h3, img, p, div;// h3 for title, img for picture and p for price
    var src;
    var path="img/products/";// path to the products image
   
    var root=document.getElementById('resultListViewThumbnails');//ul
   if(root){
    document.getElementById('resultListViewThumbnails').innerHTML='';// clear ul resultlist for each search
    for(var i=0; i<storesArray.length; i++){
	var storeProducts=storesArray[i];
	li=document.createElement('li');
	div=document.createElement('div');// contains a
	a=document.createElement('a');// contains img, h3, p
	img=document.createElement('img');
	h3=document.createElement('h3');
	p=document.createElement('p');
		    for(var j=1; j<storeProducts.length; j++){// the first value is the product id
			    switch(j)
			    {
				case 1:
				    h3.appendChild(document.createTextNode(storeProducts[j]+" "));//product name
				    break;
                                case 2:
				    h3.appendChild(document.createTextNode(storeProducts[j]));//product size
				    break;
				case 4:
			 	    p.appendChild(document.createTextNode("$"+storeProducts[j]));// product price
				    break;
				case 8:
				    src="";
				    src=path+storeProducts[j];
				    img.setAttribute('src', src);
				    break
			    }// end switch
			}// end for
	a.appendChild(img);
	a.appendChild(h3);
	a.appendChild(p);
	
	a.setAttribute('class', 'ui-link-inherit');
	img.setAttribute('class', 'ui-li-thumb');
	h3.setAttribute('class', 'ui-li-heading');
	p.setAttribute('class', 'ui-li-desc');
	
	div.appendChild(a);
	div.setAttribute('class', 'ui-btn-text ui-btn-inner ui-li');
	
	li.setAttribute('id', storeProducts[0]);
	li.setAttribute('onClick', "Javascript: ShowProductDetails(this, id);");// when click on a product id
	li.setAttribute('class', 'ui-btn ui-btn-icon-right-list-view ui-li ui-li-has-thumb ui-btn-up-c');
	li.appendChild(div);
	root.appendChild(li);
	root.setAttribute('class', 'ui-listview');//ul
	document.getElementById('divresultListViewThumbnails').style.display="block" ;
	$('#divresultListViewThumbnails').addClass('ui-shadow');
	onCompletion();
    }// end for products
    }// end if root
	    
}


function findProducts()
        {
            document.getElementById('resultListViewThumbnails').innerHTML='';// clear ul resultlist for each search
	    var product = new RegExp(document.getElementById("productsToSearch").value, 'gi');// product to search
	    var findElement=false;
            var li;
	    var a, h3, img, p, div;// h3 for title, img for picture and p for price
	    var src;
	    var path="img/products/";// path to the products image
            var root=document.getElementById('resultListViewThumbnails');//ul
	    
	    var ArrayBySearch=[];//array after search products
	    for(var i=0; i<storesArray.length; i++){
		var storeProducts=storesArray[i];// all the products from one store
		if(storeProducts[1].search(product, "i")!=-1){
		    findElement=true;
		    ArrayBySearch.push(storeProducts);
			    
		}
	    }
	    if(optionSelect=="BestMatch"){
		//sort by id
		ArrayBySearch.sort(function(a,b){
		    return a[0]-b[0];	
		});
		for(var i=0; i<ArrayBySearch.length; i++){// array of products found
			var productFound=ArrayBySearch[i];
			li=document.createElement('li');
			div=document.createElement('div');// contains a
			a=document.createElement('a');// contains img, h3, p
			img=document.createElement('img');
			h3=document.createElement('h3');
			p=document.createElement('p');
			for(var j=0; j<productFound.length; j++){
			    switch(j)
				{
				    case 1:
					h3.appendChild(document.createTextNode(productFound[j]+" "));//product name
					break;
				    case 2:
					h3.appendChild(document.createTextNode(productFound[j]));//product size
					break;
				    case 4:
					p.appendChild(document.createTextNode("$ "+productFound[j]));// product price
					break;
				    case 8:
					src="";
					src=path+productFound[j];
					img.setAttribute('src', src);
					break
				}// end switch
			}//end for product
		    a.appendChild(img);
		    a.appendChild(h3);
		    a.appendChild(p);
				
		    a.setAttribute('class', 'ui-link-inherit');
		    img.setAttribute('class', 'ui-li-thumb');
		    h3.setAttribute('class', 'ui-li-heading');
		    p.setAttribute('class', 'ui-li-desc');
				
		    div.appendChild(a);
		    div.setAttribute('class', 'ui-btn-text ui-btn-inner ui-li');
				
		    li.setAttribute('id', productFound[0]);
		    li.setAttribute('onClick', "Javascript: ShowProductDetails(this, id);");// when click on a product id
		    li.setAttribute('class', 'ui-btn ui-btn-icon-right-list-view ui-li ui-li-has-thumb ui-btn-up-c');
		    li.appendChild(div);
		    root.appendChild(li);
		    root.setAttribute('class', 'ui-listview');//ul
		    document.getElementById('divresultListViewThumbnails').style.display="block" ;
		    $('#divresultListViewThumbnails').addClass('ui-shadow');
		    onCompletion();
		    }
	    }//end if select option
	    else{
		if(optionSelect=="Price"){
		    document.getElementById('resultListViewThumbnails').innerHTML='';// clear ul resultlist for each option change
		    		    
		    ArrayBySearch.sort(function(a,b){
			return a[4]-b[4];	
		    });
		    
		    for(var i=0; i<ArrayBySearch.length; i++){// array of products found
			var productFound=ArrayBySearch[i];
			li=document.createElement('li');
			div=document.createElement('div');// contains a
			a=document.createElement('a');// contains img, h3, p
			img=document.createElement('img');
			h3=document.createElement('h3');
			p=document.createElement('p');
			for(var j=0; j<productFound.length; j++){
			    switch(j)
				{
				    case 1:
					h3.appendChild(document.createTextNode(productFound[j]+" "));//product name
					break;
				    case 2:
					h3.appendChild(document.createTextNode(productFound[j]));//product size
					break;
				    case 4:
					p.appendChild(document.createTextNode("$ "+productFound[j]));// product price
					break;
				    case 8:
					src="";
					src=path+productFound[j];
					img.setAttribute('src', src);
					break
				}// end switch
			}//end for product
		    a.appendChild(img);
		    a.appendChild(h3);
		    a.appendChild(p);
				
		    a.setAttribute('class', 'ui-link-inherit');
		    img.setAttribute('class', 'ui-li-thumb');
		    h3.setAttribute('class', 'ui-li-heading');
		    p.setAttribute('class', 'ui-li-desc');
				
		    div.appendChild(a);
		    div.setAttribute('class', 'ui-btn-text ui-btn-inner ui-li');
				
		    li.setAttribute('id', productFound[0]);
		    li.setAttribute('onClick', "Javascript: ShowProductDetails(this, id);");// when click on a product id
		    li.setAttribute('class', 'ui-btn ui-btn-icon-right-list-view ui-li ui-li-has-thumb ui-btn-up-c');
		    li.appendChild(div);
		    root.appendChild(li);
		    root.setAttribute('class', 'ui-listview');//ul
		    document.getElementById('divresultListViewThumbnails').style.display="block" ;
		    $('#divresultListViewThumbnails').addClass('ui-shadow');
		    onCompletion();
		    }
		}
		else{
		    //Featured selected
		    
		}
	    }
            if(findElement!=true)
            {
		 // Wait for PhoneGap to load
	        document.addEventListener("deviceready", onDeviceReady, false);

		// PhoneGap is ready
		function onDeviceReady() {
		    //empty
		}
		    
		if((PhoneGap.queue.ready||PhoneGap.available)&& navigator.notification){
		     navigator.notification.alert(
		    'Product not found',  // message
		    'Notification',       // title
		    'OK'                  // buttonName
		    );
		   }
		else{ 
                alert("No product was found");
		}
		
		
            }
            
        }
	
function ShowProductDetails(e, liID){// liId is product id
   
    var src, path="img/products/large/";// path to the products image
    $('#resultListViewThumbnails').empty();
    $('#divresultListViewThumbnails').css('display', 'none');
    $('#ShowProductDetailsPage').css('display', 'block');
    $('img.logo').css('display', 'none');// hide the left image
    $('#SchoppingCartIcon').css('display', 'block');
    $('#leftButton').css('display', 'block');// show the back button
    $('h1').text("Product Details");
    $('#BestMatchBar').css('display', 'none');
    $('#searchbar').css('display', 'none');
    $('#content').height($("#container").height()-$("#Toolbar").height());
     
    
    for(var i=0; i<storesArray.length; i++){
	var productFound=storesArray[i];
	if(productFound[0]==liID){
	    $('#title').text(productFound[1]+ " " +productFound[2]);
	    src="";
	    src=path+productFound[8];
	    $('#ProductImage').attr('src', src);
	    $('#ProductPrice').text("$ "+productFound[4]);//product price
	    
	    $('#AddtoList').attr('value', liID);
	    $('#AddtoList').attr('onclick', "Javascript: SaveProductIntoDatabase(value);");// when click on a product id
	}
    }
    onCompletion();
    myScroll.scrollTo(0,0,0);
    
}
function SaveProductIntoDatabase(value){
    
    //alert("the value is"+ value);
    var name, category, price;
    
    
    //save the product in the table
	     for(var i=0; i<storesArray.length; i++){
		var storeProducts=storesArray[i];// all the products
		    if(storeProducts[0]==parseInt(value))
		    {
			
			 
			name=storeProducts[1];
			category=storeProducts[7];
			price= storeProducts[4];
			db.transaction(
			    function(transaction) {
				transaction.executeSql(
				    'INSERT INTO ProductsToBuy(IdProduct, ProductName, CategoryName, Price) VALUES (?, ?, ?, ?);',[value, name , category, price],
				    function(){
					
					$('#AddtoList').addClass('active-add-to-list-htc');
				    }
				    ,
				    errorHandler
				);
			    }
			);
			 
		    }
		
	     }
}
function backButtonFindProducts(){
    var url='findProducts.html';
    var findUrl, filename, i1, i2;
    loadPage(url);
    var link=document.getElementsByTagName('a');
    for(var i=0; i<link.length; i++){
	filename=link[i].href;
	findUrl=filename.substring(filename.lastIndexOf('/')+1);
	if(url==findUrl){
	    
	    i1=$(link[i]).children();
	    i2=$(i1).children();
	    $(i2).addClass('iactivelink');// make the icon blue
	}
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
   // put the categories on screen
    if(root!=null){
        for(var i=0; i<CategoryArray.length; i++){
          li=document.createElement('li');
          aLink=document.createElement('p');
          aLink.appendChild(document.createTextNode(CategoryArray[i]));
          li.setAttribute('id', CategoryArray[i]);
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
    $('img.logo').css('display', 'none');// hide the left image
    $('#leftButton').css('display', 'block');// show the back button
   
    
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
		    cb.setAttribute('value', storeProducts[0]);
		    cb.setAttribute('onClick', 'SaveItemIntoDatabase(this, value)');
		    cb.setAttribute('style', 'margin:11px 0 0 7px;');
                     p = document.createTextNode(" "+ storeProducts[1]);
                    li.appendChild( cb );
                    li.appendChild( p );
                    root.appendChild(li);
                }//end if
            }// end if
        }// end for
    ShowAllItemsChecked();
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

function backButtonShoppingList(){
    var url='shoppingList.html';
    var findUrl, filename, i1, i2;
    loadPage(url);
    var link=document.getElementsByTagName('a');
    for(var i=0; i<link.length; i++){
	filename=link[i].href;
	findUrl=filename.substring(filename.lastIndexOf('/')+1);
	if(url==findUrl){
	    
	    i1=$(link[i]).children();
	    i2=$(i1).children();
	    $(i2).addClass('iactivelink');// make the icon blue
	}
    }
}


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
    var name, category, price;
    
//if the checkbox isn't checked
if($('input[value='+ID+']').prop('checked')!=true)
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
					//alert("Data saved");
					$('input[value='+ID+']').attr('checked','checked');// check the checkbox
				    },
				    errorHandler
				);
			    }
			);
			 
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
	}
}
function errorHandler(transaction, error) {
    alert('Oops. Error was '+error.message+' (Code '+error.code+')');
    return true;
}

function ShowAllItemsChecked()
{
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
}
   
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
                }// end if
	   
	 }// end initialize()   

	      
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
    var address = document.getElementById("address").value;
    var findElement=false;
    
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
	for (var i=0; i<markersArray.length; i++)
	    {
		var store=markersArray[i];
		var myLatLng = new google.maps.LatLng(store[1], store[2]);
		if(results[0].geometry.location.lat()==parseFloat(store[1])&& results[0].geometry.location.lng()==parseFloat(store[2])){
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
  
//Recipes page
function recipesList(){
    var li, aLink;
    var root=document.getElementById('Recipes');// ul
    if(root){
	for(var i=0; i<recipesArray.length; i++){
	    var recipe=recipesArray[i];
	      li=document.createElement('li');
	      aLink=document.createElement('p');
	      aLink.appendChild(document.createTextNode(recipe[1]));
	      li.setAttribute('id', recipe[0]);
	      li.setAttribute('onClick', "Javascript: ShowRecipeDetails(this, id);");// when click on a recipe id
	      li.setAttribute('class', 'arrow');
	      li.appendChild(aLink);
	      root.appendChild(li);
	}// end for
	onCompletion();
    }
}
function ShowRecipeDetails(e, liID){//liID is the recipe id
    var li,ol, ul ;
    var p, steps, ingredients,oz;
    var title;
    var root=document.getElementById('detailsView');
    
    var src="img/";
    $('#Recipes').empty();
    $('#Recipes').css('display', 'none');
    $('img.logo').css('display', 'none');// hide the left image
    $('#detailsView').css('display', 'block');
    $('#leftButton').css('display', 'block');// show the back button
    
     for(var i=0; i<recipesArray.length; i++){
        var recipe=recipesArray[i];// one recipe
            if(liID==recipe[0]){
                if(root!=null){
		    //Add Steps
		    var olRoot=document.getElementById('Steps');
		    $('h1').text(recipe[1]);
		    $('.button').css('display', 'inline');
		    $('#title').text(recipe[1]);
		    $('#subtitle').text("Total Time - " +recipe[2]+ " Minutes");
		    
		    src+=recipe[recipe.length-1];
		    $('#recipeImage').attr('src',src);
		    
		    steps=recipe[3];
		    ol=document.createElement('ol');
		    ol.setAttribute('type', '1');
		    $(ol).css('padding-left', '30px');
		    for(var j=4; j<(4+steps); j++){
			li=document.createElement('li');
			p=document.createElement('p');
			p.appendChild(document.createTextNode(recipe[j]));
			li.appendChild(p);
			ol.appendChild(li);
		    }
		    olRoot.appendChild(ol);
		    
		    //Add Ingredients
		    var ulRoot=document.getElementById('Ingredients');
		    ingredients=recipe[4+steps];
		    ul=document.createElement('ul');
		    ul.setAttribute('class', 'Category');
		    for(var j=(4+steps+1); j<(4+steps+1+ingredients); j++){
			var indexProduct=recipe[j];
			for(var k=0; k<storesArray.length; k++){
			    var product=storesArray[k];
			    if(indexProduct==product[0]){
				li=document.createElement('li');
				li.setAttribute('class', 'simplearrow');
				li.setAttribute('value', product[0]);
				li.setAttribute('onClick', 'SaveItemIntoDatabase(this, value)');
				p=document.createElement('p');
				oz=document.createElement('p');
				var cb = document.createElement( "input" );
				cb.type = "checkbox";
                   
				cb.setAttribute('value', product[0]);// product id
				cb.setAttribute('onClick', 'SaveItemIntoDatabase(this, value)');
				cb.setAttribute('style', 'margin:5px 0 0 7px;');
				//product's name
				p.appendChild(document.createTextNode(" "+product[1]));
				
				//product's oz
				oz.appendChild(document.createTextNode(" "+product[2]));
				oz.setAttribute('style', 'margin: 0px 0px 0px 30px;  font-size: 15px; display: block; ');
				
				li.appendChild( cb );
				li.appendChild(p);
				li.appendChild(oz);
				ul.appendChild(li);
			    }
			}
		    }
		    ulRoot.appendChild(ul);
		}
	    }//end if liID
    onCompletion();// refresh iScroll
     }//end for
     
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
    ShowAllItemsChecked();
}// end function

// add all ingredients to the shopping list
function Addall(){
    var input = document.getElementsByTagName('input');
    var value, name, category, price;
    var toSaveArray=[];
    if (input) {
        for (var i=0; i<input.length; i++) {
	   value=parseInt(input[i].value);
	   if($('input[value='+value+']').attr('checked')!=true){
		toSaveArray.push(value);
	   }// end if
	}//end for
	for(var i=0;i<toSaveArray.length; i++){
	    Save(toSaveArray[i]);
	}//end for
    }//end if
}
function Save(ID){
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
					//alert("Data saved");
					$('input[value='+ID+']').attr('checked','checked');// check the checkbox
				    },
				    errorHandler
				);
			    }
			);
			
		    }
	     }
}

function backButton(){
    var url='recipes.html';
    var findUrl, filename, i1, i2;
    loadPage(url);
    var link=document.getElementsByTagName('a');
    for(var i=0; i<link.length; i++){
	filename=link[i].href;
	findUrl=filename.substring(filename.lastIndexOf('/')+1);
	if(url==findUrl){
	    
	    i1=$(link[i]).children();
	    i2=$(i1).children();
	    $(i2).addClass('iactivelink');// make the icon blue
	}
    }
    
}