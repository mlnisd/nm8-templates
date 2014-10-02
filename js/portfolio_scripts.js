/* Portfolio Scripts*/

var project = portfolioProjects["projects"];
var arrLength = portfolioProjects["projects"].length;
/* console.log (project, arrLength); */

// Creates the icons on the index page as list items with links and images
function loadIndexContent() {
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
		dynamic_link.setAttribute('href', 'portfolio.php');
		
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
	console.log('here');
	console.log(id);
}
