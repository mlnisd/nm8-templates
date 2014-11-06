/* Portfolio Scripts*/

var project = portfolioProjects["projects"];
var arrLength = portfolioProjects["projects"].length;
/* console.log (project, arrLength); */

// Creates the icons on the index page as list items with links and images
function loadIndexContent() {
	if (window.localStorage) {
  		window.localStorage.setItem("sort", "All");
  	}
  	console.log(window.localStorage.getItem("sort"));
	
	for (var i = 0; i < arrLength; i++) {
		// Create li
		var dynamic_li = document.createElement('li');
		dynamic_li.setAttribute('class', 'mix ' + project[i].sortTag);
		dynamic_li.setAttribute('data-myorder', i+1);
		dynamic_li.setAttribute('style', 'display: inline-block');
		
		// Create div
		var dynamic_div = document.createElement('div');
		dynamic_div.setAttribute('class', 'portfolioImg');
		
		// Create link
		var dynamic_link = document.createElement('a');
		dynamic_link.setAttribute('href', 'portfolio.php?id=' + i + '&sort=' + window.localStorage.getItem("sort"));
		
		// Create img
		var dynamic_icon = document.createElement('img');
		dynamic_icon.setAttribute('src', project[i]['portfolioIcon']);
		dynamic_icon.setAttribute('alt', project[i]['portfolioAlt']);
		dynamic_icon.setAttribute('id', i);
		
		// Create innerDiv
		var dynamic_inner_div = document.createElement('div');
		dynamic_inner_div.setAttribute('class', 'overlay');
		
		// Create h4
		var dynamic_h4 = document.createElement('h4');
		dynamic_h4.setAttribute('class', 'portfolioTitle');
		var h4_text_node = document.createTextNode(project[i].title);
		dynamic_h4.appendChild(h4_text_node);
		
		// Create dividerDiv
		var dynamic_divider_div = document.createElement('div');
		dynamic_divider_div.setAttribute('class', 'divider');
		
		// Create h5
		var dynamic_h5 = document.createElement('h5');
		dynamic_h5.setAttribute('class', 'portfolioCategory');
		var h5_text_node = document.createTextNode(project[i].category);
		dynamic_h5.appendChild(h5_text_node);				
		
		// Appending to dynamic_inner_div
		dynamic_inner_div.appendChild(dynamic_h4);
		dynamic_inner_div.appendChild(dynamic_divider_div);
		dynamic_inner_div.appendChild(dynamic_h5);
		
		// Appending to dynamic_link
		dynamic_link.appendChild(dynamic_icon);
		dynamic_link.appendChild(dynamic_inner_div);
		
		// Appending to dynamic_div
		dynamic_div.appendChild(dynamic_link);
		
		// Appending to dynamic_li
		dynamic_li.appendChild(dynamic_div);
		
		// Appending to ul
		document.getElementById('portfolioContainer').appendChild(dynamic_li);
	}	
}

// Function that clears and gets content for portfolio page
function addPortfolioContent(id) {
	// Create Header Div
	var headerDiv = document.createElement('div');
	headerDiv.setAttribute('class', 'small-12 medium-12 large-10 large-centered columns');
	
	// Create h1 header tag
	var projTitleEle = document.createElement('h1');
	projTitleEle.setAttribute('class', 'sectionTitleBlue projectTitle');
	var projTextNode = document.createTextNode(project[id].title);
	projTitleEle.appendChild(projTextNode);
	
	// Append header to div and div to dom
	headerDiv.appendChild(projTitleEle);
	document.getElementById('content-page').appendChild(headerDiv);
	
	for (var i = 0; i < project[id].maxLength; i++) {
		// Variables
		var divEle = document.createElement('div');
		divEle.setAttribute('class', 'portfolioPieceWrapper small-12 columns');

		// If it is the first index create the first text and the first image
		if(i == 0) {
			// Create div
			var pDiv = document.createElement('div');
			pDiv.setAttribute('class', 'small-12 medium-10 large-8 large-centered columns');
			
			// Create p
			var pEle = document.createElement('p');
			var pTextNode = document.createTextNode(project[id].portfolioPageDescriptions[i]);
			pEle.setAttribute('class', 'portfolioPieceDesc');
			pEle.style.textAlign = 'center';
			pEle.appendChild(pTextNode);
			
			// Fix Div
			divEle.setAttribute('class', 'small-12 columns');
			
			// Append
			pDiv.appendChild(pEle);
			divEle.appendChild(pDiv);
		}
		
		// If it is the second and the third text add them together
		else if(i == 1) {
			// First image in first div
			var imgDiv = document.createElement('div');
			imgDiv.setAttribute('class', 'small-12 medium-12 large-10 large-centered columns');
			imgDiv.style.paddingBottom = '30px';
			
			var imgEle = document.createElement('img');
			imgEle.setAttribute('class', 'alignCenter');
			imgEle.src = project[id].portfolioPageImages[i-1];
			imgEle.alt = project[id].portfolioPageAlts[i-1];
			
			imgDiv.appendChild(imgEle);
			divEle.appendChild(imgDiv);
			
			// Second text in second div
			leftDiv = document.createElement('div');
			leftDiv.setAttribute('class', 'small-12 medium-6 large-5 large-offset-1 columns');
			
			var leftP = document.createElement('p');
			var leftTextNode = document.createTextNode(project[id].portfolioPageDescriptions[i]);
			leftP.setAttribute('class', 'portfolioPieceDesc');
			leftP.appendChild(leftTextNode);
			
			leftDiv.appendChild(leftP);
			divEle.appendChild(leftDiv);
			
			// Third text in third div
			rightDiv = document.createElement('div');
			rightDiv.setAttribute('class', 'small-12 medium-6 large-5 end columns');
			
			var rightP = document.createElement('p');
			var rightTextNode = document.createTextNode(project[id].portfolioPageDescriptions[i + 1]);
			rightP.setAttribute('class', 'portfolioPieceDesc');
			rightP.appendChild(rightTextNode);
			
			rightDiv.appendChild(rightP);
			divEle.appendChild(rightDiv);
			
		}
		
		else if(i == 2) {
			// Create first image
			var leftDiv = document.createElement('div');
			leftDiv.setAttribute('class', 'small-12 medium-6 large-5 large-offset-1 columns');
			
			var leftImg = document.createElement('img');
			leftImg.src = project[id].portfolioPageImages[i - 1];
			leftImg.alt = project[id].portfolioPageAlts[i - 1];
			
			leftDiv.appendChild(leftImg);
			divEle.appendChild(leftDiv);
			
			// Create second image
			var rightDiv = document.createElement('div');
			rightDiv.setAttribute('class', 'small-12 medium-6 large-5 end columns');
			
			var rightImg = document.createElement('img');
			rightImg.src = project[id].portfolioPageImages[i];
			rightImg.alt = project[id].portfolioPageAlts[i];
			
			rightDiv.appendChild(rightImg);
			divEle.appendChild(rightDiv);
			
		}
		
		// If it is 4th, 6th, 8th, etc. do image text
		else if(i > 2 && (i % 2) == 1) {
			// left image
			var leftImgDiv = document.createElement('div');
			leftImgDiv.setAttribute('class', 'small-12 medium-6 large-5 large-offset-1 columns');
			
			var leftOddImg = document.createElement('img');
			leftOddImg.src = project[id].portfolioPageImages[i];
			leftOddImg.alt = project[id].portfolioPageAlts[i];
			
			leftImgDiv.appendChild(leftOddImg);
			divEle.appendChild(leftImgDiv);
			
			// right text
			var rightTextDiv = document.createElement('div');
			rightTextDiv.setAttribute('class', 'portfolioPieceDescWithImgWrapper small-12 medium-6 large-5 end columns');
			
			var rightOddP = document.createElement('p');
			var rightOddTextNode = document.createTextNode(project[id].portfolioPageDescriptions[i]);
			rightOddP.setAttribute('class', 'portfolioPieceDescWithImg');
			rightOddP.appendChild(rightOddTextNode);
			
			rightTextDiv.appendChild(rightOddP);
			divEle.appendChild(rightTextDiv);
			
		}
		
		// If it is 5th, 7th, 9th, etc do text image
		else if(i > 2 && (i % 2) == 0) {
			// left text
			var leftTextDiv = document.createElement('div');
			leftTextDiv.setAttribute('class', 'small-12 medium-6 large-5 large-offset-1 columns');
			
			var LeftEvenP = document.createElement('p');
			var LeftEvenTextNode = document.createTextNode(project[id].portfolioPageDescriptions[i]);
			LeftEvenP.setAttribute('class', 'portfolioPieceDescWithImg');
			LeftEvenP.appendChild(LeftEvenTextNode);
			
			leftTextDiv.appendChild(LeftEvenP);
			divEle.appendChild(leftTextDiv);
			
			// right image
			var rightImgDiv = document.createElement('div');
			rightImgDiv.setAttribute('class', 'portfolioPieceDescWithImgWrapper small-12 medium-6 large-5 end columns');
			
			var rightEvenImg = document.createElement('img');
			rightEvenImg.src = project[id].portfolioPageImages[i];
			rightEvenImg.alt = project[id].portfolioPageAlts[i];
			
			
			rightImgDiv.appendChild(rightEvenImg);
			divEle.appendChild(rightImgDiv);
		}
		document.getElementById('content-page').appendChild(divEle);
	}
	
	loadRelatedProjects(id);
}

function loadRelatedProjects(id) {
	// Checks for no sort being applied
	var relatedArray = [];
	if(window.localStorage.getItem("sort") == 'All') {
		for(var i = 0; i < arrLength; i++) {
			relatedArray.push(i);
		}
	}
	else {
		console.log('else');
		for(var i = 0; i < arrLength; i++) {
			if(window.localStorage.getItem("sort") == project[i].category) {
				relatedArray.push(i);
			}
		}
	}
	for(var k = 0; k < relatedArray.length; k++) {
		if(relatedArray[k] == id) {
			relatedArray.splice(k, 1);
		}
	}
	console.log(relatedArray);
	
	// Parse relatedArray and add them to the dom
	for(var j = 0; j < relatedArray.length; j++) {
		var liEle = document.createElement('li');
		
		var divEle = document.createElement('div');
		divEle.setAttribute('class', 'portfolioImg');
		
		var aEle = document.createElement('a');
		aEle.setAttribute('href', 'portfolio.php?id=' + relatedArray[j] + '&sort=' + window.localStorage.getItem("sort"));
		
		var imgEle = document.createElement('img');
		imgEle.setAttribute('src', project[relatedArray[j]].portfolioIcon);
		imgEle.setAttribute('alt', project[relatedArray[j]].portfolioAlt);
		imgEle.setAttribute('id', relatedArray[j]);
		
		var overlayDivEle = document.createElement('div');
		overlayDivEle.setAttribute('class', 'overlay');
		
		var h4Ele = document.createElement('h4');
		h4Ele.setAttribute('class', 'portfolioTitle');
		h4Text = document.createTextNode(project[relatedArray[j]].title);
		h4Ele.appendChild(h4Text);
		
		var divDividerEle = document.createElement('div');
		divDividerEle.setAttribute('class', 'divider');
		
		var h5Ele = document.createElement('h5');
		h5Ele.setAttribute('class', 'portfolioCategory');
		h5Text = document.createTextNode(project[relatedArray[j]].category);
		h5Ele.appendChild(h5Text);
		
		// Append to dom
		overlayDivEle.appendChild(h4Ele);
		overlayDivEle.appendChild(divDividerEle);
		overlayDivEle.appendChild(h5Ele);
		
		aEle.appendChild(imgEle);
		aEle.appendChild(overlayDivEle);
		
		divEle.appendChild(aEle);
		
		liEle.appendChild(divEle);
		
		document.getElementById('other-projects').getElementsByTagName('ul')[0].appendChild(liEle);
	}
 }


function updateSorter (which) {
  // Set the value of the anchor tag to local storage
  if (window.localStorage) {
  	window.localStorage.setItem("sort", which.valueOf().text);
  }
  console.log(window.localStorage.getItem("sort"));
}