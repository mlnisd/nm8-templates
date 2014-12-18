// This is the file you can edit to add your own projects to you can have as many or as few projects as you want but the demonstrated format needs to stay the same
var portfolioProjects = {
	"projects" : [
		{ // Each project should be wrapped in brackets
			"title"						: "Project One", // This is the title of the project and will be displayed at the top of the project page and the icon
			"portfolioIcon" 			: "images/portfolio1.jpg", // This is the image that will be used for the icon
			"portfolioAlt"				: "This is image 1", // This is the alternate text that will appear if the icon can't or won't load this is required of all images
			"portfolioLink"				: "#", //This is the link to your project, leave it blank if you do not have one, or can not provide one
			"sortTag"					: "category-1", // This is the tag that matches to a sort on the main page make sure it matches the category
			"category"					: "Illustration", // This is the sort name that is displayed on the icon and should match the tag display name of the sortTag
			"maxLength"					: 7, // maxLength is the length of the longest list of content, if you forget to change this and you add more content and images it won't be display
			"portfolioPageImages"		: [ // This is a list of the images you want displayed on the content page, put the url in quotes and separate each with a comma
				"images/heroImage2.png",
				"http://38.media.tumblr.com/b17db73cf114d2e77523226dea59a324/tumblr_nbk6bwaU3h1st5lhmo1_1280.jpg",
				"https://unsplash.imgix.net/45/PlEgx5PSoiiJOmnE2izQ_NYC%20skyline%20empire-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=0ac9d7e64b272680b86cd42add38ac67",
				"http://38.media.tumblr.com/f1047529838236ec1af3055dac80c92c/tumblr_nbk7bzHUrh1st5lhmo1_1280.jpg",
				"http://33.media.tumblr.com/913b9ca07de8a526d03555b4d693b7b5/tumblr_nb1uqtIxbr1st5lhmo1_1280.jpg",
				"http://38.media.tumblr.com/f1047529838236ec1af3055dac80c92c/tumblr_nbk7bzHUrh1st5lhmo1_1280.jpg",
				"http://33.media.tumblr.com/913b9ca07de8a526d03555b4d693b7b5/tumblr_nb1uqtIxbr1st5lhmo1_1280.jpg"
			],
			"portfolioPageAlts"			: [ // This is the alt list for the images, these are required and each alt should match the image in the same place in the list
				"This is image 1a",
				"This is image 1b",
				"This is image 1c",
				"This is image 1d",
				"This is image 1e",
				"This is image 1f",
				"This is image 1g"
			],
			"portfolioPageDescriptions"	: [ // This is the content which should be wrapped in quotes and separated by commas
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			]
		}, // Each project should be separated by a comma
		
		{
			"title"						: "Project Two",
			"portfolioIcon" 			: "images/portfolio2.jpg",
			"portfolioAlt"				: "This is image 2",
			"portfolioLink"				: "#",
			"sortTag"					: "category-2",
			"category"					: "3D",
			"maxLength"					: 5,
			"portfolioPageImages"		: [
				"images/heroImage2.png",
				"http://38.media.tumblr.com/b17db73cf114d2e77523226dea59a324/tumblr_nbk6bwaU3h1st5lhmo1_1280.jpg",
				"https://unsplash.imgix.net/45/PlEgx5PSoiiJOmnE2izQ_NYC%20skyline%20empire-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=0ac9d7e64b272680b86cd42add38ac67",
				"http://38.media.tumblr.com/f1047529838236ec1af3055dac80c92c/tumblr_nbk7bzHUrh1st5lhmo1_1280.jpg",
				"http://33.media.tumblr.com/913b9ca07de8a526d03555b4d693b7b5/tumblr_nb1uqtIxbr1st5lhmo1_1280.jpg"
			],
			"portfolioPageAlts"			: [
				"This is image 1a",
				"This is image 1b",
				"This is image 1c",
				"This is image 1d",
				"This is image 1e"
			],
			"portfolioPageDescriptions"	: [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			]
		},
		
		{
			"title"						: "Project Three",
			"portfolioIcon" 			: "images/portfolio3.jpg",
			"portfolioAlt"				: "This is image 3",
			"portfolioLink"				: "#",
			"sortTag"					: "category-3",
			"category"					: "Animation",
			"maxLength"					: 5,
			"portfolioPageImages"		: [
				"images/heroImage2.png",
				"http://38.media.tumblr.com/b17db73cf114d2e77523226dea59a324/tumblr_nbk6bwaU3h1st5lhmo1_1280.jpg",
				"https://unsplash.imgix.net/45/PlEgx5PSoiiJOmnE2izQ_NYC%20skyline%20empire-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=0ac9d7e64b272680b86cd42add38ac67",
				"http://38.media.tumblr.com/f1047529838236ec1af3055dac80c92c/tumblr_nbk7bzHUrh1st5lhmo1_1280.jpg",
				"http://33.media.tumblr.com/913b9ca07de8a526d03555b4d693b7b5/tumblr_nb1uqtIxbr1st5lhmo1_1280.jpg"
			],
			"portfolioPageAlts"			: [
				"This is image 1a",
				"This is image 1b",
				"This is image 1c",
				"This is image 1d",
				"This is image 1e"
			],
			"portfolioPageDescriptions"	: [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			]
		},
		
		{
			"title"						: "Project Four",
			"portfolioIcon" 			: "images/portfolio4.jpg",
			"portfolioAlt"				: "This is image 4",
			"portfolioLink"				: "#",
			"sortTag"					: "category-4",
			"category"					: "Web",
			"maxLength"					: 5,
			"portfolioPageImages"		: [
				"images/heroImage2.png",
				"http://38.media.tumblr.com/b17db73cf114d2e77523226dea59a324/tumblr_nbk6bwaU3h1st5lhmo1_1280.jpg",
				"https://unsplash.imgix.net/45/PlEgx5PSoiiJOmnE2izQ_NYC%20skyline%20empire-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=0ac9d7e64b272680b86cd42add38ac67",
				"http://38.media.tumblr.com/f1047529838236ec1af3055dac80c92c/tumblr_nbk7bzHUrh1st5lhmo1_1280.jpg",
				"http://33.media.tumblr.com/913b9ca07de8a526d03555b4d693b7b5/tumblr_nb1uqtIxbr1st5lhmo1_1280.jpg"
			],
			"portfolioPageAlts"			: [
				"This is image 1a",
				"This is image 1b",
				"This is image 1c",
				"This is image 1d",
				"This is image 1e"
			],
			"portfolioPageDescriptions"	: [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			]
		},
		{
			"title"						: "Project Five",
			"portfolioIcon" 			: "images/portfolio5.jpg",
			"portfolioAlt"				: "This is image 5",
			"portfolioLink"				: "#",
			"sortTag"					: "category-4",
			"category"					: "Web",
			"maxLength"					: 5,
			"portfolioPageImages"		: [
				"images/heroImage2.png",
				"http://38.media.tumblr.com/b17db73cf114d2e77523226dea59a324/tumblr_nbk6bwaU3h1st5lhmo1_1280.jpg",
				"https://unsplash.imgix.net/45/PlEgx5PSoiiJOmnE2izQ_NYC%20skyline%20empire-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=0ac9d7e64b272680b86cd42add38ac67",
				"http://38.media.tumblr.com/f1047529838236ec1af3055dac80c92c/tumblr_nbk7bzHUrh1st5lhmo1_1280.jpg",
				"http://33.media.tumblr.com/913b9ca07de8a526d03555b4d693b7b5/tumblr_nb1uqtIxbr1st5lhmo1_1280.jpg"
			],
			"portfolioPageAlts"			: [
				"This is image 1a",
				"This is image 1b",
				"This is image 1c",
				"This is image 1d",
				"This is image 1e"
			],
			"portfolioPageDescriptions"	: [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			]
		},
		
		{
			"title"						: "Project Six",
			"portfolioIcon" 			: "images/portfolio6.jpg",
			"portfolioAlt"				: "This is image 6",
			"portfolioLink"				: "#",
			"sortTag"					: "category-1",
			"category"					: "Illustration",
			"maxLength"					: 5,
			"portfolioPageImages"		: [
				"images/heroImage2.png",
				"http://38.media.tumblr.com/b17db73cf114d2e77523226dea59a324/tumblr_nbk6bwaU3h1st5lhmo1_1280.jpg",
				"https://unsplash.imgix.net/45/PlEgx5PSoiiJOmnE2izQ_NYC%20skyline%20empire-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=0ac9d7e64b272680b86cd42add38ac67",
				"http://38.media.tumblr.com/f1047529838236ec1af3055dac80c92c/tumblr_nbk7bzHUrh1st5lhmo1_1280.jpg",
				"http://33.media.tumblr.com/913b9ca07de8a526d03555b4d693b7b5/tumblr_nb1uqtIxbr1st5lhmo1_1280.jpg"
			],
			"portfolioPageAlts"			: [
				"This is image 1a",
				"This is image 1b",
				"This is image 1c",
				"This is image 1d",
				"This is image 1e"
			],
			"portfolioPageDescriptions"	: [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			]
		},
		
		{
			"title"						: "Project Seven",
			"portfolioIcon" 			: "images/portfolio7.jpg",
			"portfolioAlt"				: "This is image 7",
			"portfolioLink"				: "#",
			"sortTag"					: "category-2",
			"category"					: "3D",
			"maxLength"					: 5,
			"portfolioPageImages"		: [
				"images/heroImage2.png",
				"http://38.media.tumblr.com/b17db73cf114d2e77523226dea59a324/tumblr_nbk6bwaU3h1st5lhmo1_1280.jpg",
				"https://unsplash.imgix.net/45/PlEgx5PSoiiJOmnE2izQ_NYC%20skyline%20empire-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=0ac9d7e64b272680b86cd42add38ac67",
				"http://38.media.tumblr.com/f1047529838236ec1af3055dac80c92c/tumblr_nbk7bzHUrh1st5lhmo1_1280.jpg",
				"http://33.media.tumblr.com/913b9ca07de8a526d03555b4d693b7b5/tumblr_nb1uqtIxbr1st5lhmo1_1280.jpg"
			],
			"portfolioPageAlts"			: [
				"This is image 1a",
				"This is image 1b",
				"This is image 1c",
				"This is image 1d",
				"This is image 1e"
			],
			"portfolioPageDescriptions"	: [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			]
		},
		
		{
			"title"						: "Project Eight",
			"portfolioIcon" 			: "images/portfolio8.jpg",
			"portfolioAlt"				: "This is image 8",
			"portfolioLink"				: "#",
			"sortTag"					: "category-3",
			"category"					: "Animation",
			"maxLength"					: 5,
			"portfolioPageImages"		: [
				"images/heroImage2.png",
				"http://38.media.tumblr.com/b17db73cf114d2e77523226dea59a324/tumblr_nbk6bwaU3h1st5lhmo1_1280.jpg",
				"https://unsplash.imgix.net/45/PlEgx5PSoiiJOmnE2izQ_NYC%20skyline%20empire-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=0ac9d7e64b272680b86cd42add38ac67",
				"http://38.media.tumblr.com/f1047529838236ec1af3055dac80c92c/tumblr_nbk7bzHUrh1st5lhmo1_1280.jpg",
				"http://33.media.tumblr.com/913b9ca07de8a526d03555b4d693b7b5/tumblr_nb1uqtIxbr1st5lhmo1_1280.jpg"
			],
			"portfolioPageAlts"			: [
				"This is image 1a",
				"This is image 1b",
				"This is image 1c",
				"This is image 1d",
				"This is image 1e"
			],
			"portfolioPageDescriptions"	: [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			]
		},
		
		{
			"title"						: "Project Nine",
			"portfolioIcon" 			: "images/portfolio9.jpg",
			"portfolioAlt"				: "This is image 9",
			"portfolioLink"				: "#",
			"sortTag"					: "category-4",
			"category"					: "Web",
			"maxLength"					: 5,
			"portfolioPageImages"		: [
				"images/heroImage2.png",
				"http://38.media.tumblr.com/b17db73cf114d2e77523226dea59a324/tumblr_nbk6bwaU3h1st5lhmo1_1280.jpg",
				"https://unsplash.imgix.net/45/PlEgx5PSoiiJOmnE2izQ_NYC%20skyline%20empire-1.jpg?q=75&w=1080&h=1080&fit=max&fm=jpg&auto=format&s=0ac9d7e64b272680b86cd42add38ac67",
				"http://38.media.tumblr.com/f1047529838236ec1af3055dac80c92c/tumblr_nbk7bzHUrh1st5lhmo1_1280.jpg",
				"http://33.media.tumblr.com/913b9ca07de8a526d03555b4d693b7b5/tumblr_nb1uqtIxbr1st5lhmo1_1280.jpg"
			],
			"portfolioPageAlts"			: [
				"This is image 1a",
				"This is image 1b",
				"This is image 1c",
				"This is image 1d",
				"This is image 1e"
			],
			"portfolioPageDescriptions"	: [
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			]
		}
	]
};