<?php
	if(isset($_GET['id'])) {
		$id = $_GET['id'];
	}
?>
<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie10" lang="en" > <![endif]-->
<html class="no-js" lang="en" data-useragent="Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NM T8 Portfolio Page</title>
  
    <meta name="description" content="Low Detailed NM Wireframe" />
    <meta name="author" content="Created by Michael Nguyen" />
    <meta name="copyright" content="Copyright (c) Michael Nguyen 2014" />

    <link rel="shortcut icon" type="image/gif" href="http://e08595.medialib.glogster.com/media/20/20c73be0524a63d32fcfe89b27bcbe9dbf6d2622537245f8a9d35316ee574102/nyan-cat-gif.gif"/>

    <link rel="stylesheet" href="foundation-5.4.0/css/foundation.css" />
    <link rel="stylesheet" type="text/css" href="custom.css">
    <link rel="stylesheet" type="text/css" href="foundation-icons/foundation-icons.css">
    <link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Bitter:400,400italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Merriweather:400,400italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet' type='text/css'>

	<script type="text/javascript" src="js/portfolioProjectsJSON.js"></script>
    <script type="text/javascript" src="foundation-5.4.0/js/vendor/modernizr.js"></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>

  </head>
  <body onload="addPortfolioContent(<? echo $id; ?>)">
    <div class="off-canvas-wrap" data-offcanvas>
    <div class="inner-wrap">
      <nav class="tab-bar hide-for-large-up">
        <section class="left-small">
          <a class="left-off-canvas-toggle menu-icon" href="#"><span></span></a>
        </section>
        <section class="middle tab-bar-section">
          <h1 class="title">Portfolio</h1>
        </section>
      </nav>  
      <aside class="left-off-canvas-menu">
        <ul class="off-canvas-list">
          <li><label>Navigation</label></li>
          <li><a href="index.html">Home</a></li>
          <li><a id="about" href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Resume</a></li>
        </ul>
      </aside>
      <!-- START CONTENT --> 
  	<div class="show-for-large-up icon-bar five-up">
      <a class="item" href="index.html">
        <i class="fi-home"></i>
        <label id='iconNavlabel1'>HOME</label>
      </a>
      <a class="item">
        <i class="fi-torso"></i>
        <label id='iconNavlabel2'>ABOUT</label>
      </a>
      <a class="item" href="index.html">
        <!-- <img src="http://e08595.medialib.glogster.com/media/20/20c73be0524a63d32fcfe89b27bcbe9dbf6d2622537245f8a9d35316ee574102/nyan-cat-gif.gif">-->
        <img src="images/NMT8_Logo.png">
      </a>
      <a class="item">
        <i class="fi-comments"></i>
        <label id='iconNavlabel3'>BLOG</label>
      </a>
      <a class="item">
        <i class="fi-mail"></i>
        <label id='iconNavlabel4'>RESUME</label>
      </a>
      </div>
      
      <!-- Dynamic Content -->
    <div class="row" style="background-color:#ffffff;margin-top:10px">
      <div id="content-page" class="small-12 columns" style="padding:0px !important">
      	
      </div>
    </div>
    <div class="row" style="background-color:#ffffff;margin-top:10px">
	    <div class="otherProjects small-12 columns">
	        <div id="other-projects" class="small-12 medium-12 large-10 large-centered columns">
	            <hr/>
	            <h1 class="sectionTitleBlue">Related Projects</h1>
	            <ul class="small-block-grid-1 medium-block-grid-2 large-block-grid-3">
		                
	            </ul>
	        </div>
        </div>
    </div>
      <!-- End Dynamic Content -->
    <footer id="footer" class="row" style="background-color:#222222; margin-top: 80px;">
  <div id="footer_contents" class="large-12 columns">
    <div class="row">
      <ul id="footerSiteMap" class="small-centered medium-11 medium-centered large-10 columns small-block-grid-1 medium-block-grid-1 large-block-grid-1" style="margin-top:20px;">
        <li class="footerSiteMapLevel1">
          <ul class="footerSiteMapLevel2 small-12 small-centered medium-8 medium-centered large-6 large-centered columns" style="list-style:none;">
            <li><img class="headshot" src="images/headshot.jpg"></li>
            <h3 id="helloMessage">HEY! NICE TO MEET YA!</h3>
            <p class="personalBio">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </ul>
        </li>
      </ul>
    </div>  
  <!-- <hr style="border-color:black;"/> -->
  <div class="row">
    <div class="small-12 small-centered medium-8 medium-centered large-6 large-centered columns">
      <p id="contactInfo">
        <span><a href="mailto:someone@example.com" target="_top">SOMEONE@RIT.EDU</a></span>
        <span>(555) 555-5555</span>
        <span><a href="#">RESUME</a></span>
        <span><a href="#">BLOG</a></span>
      </p>
    </div>
    <div id="contactSocial" class="small-12 small-centered medium-8 medium-centered large-6 large-centered columns">
      <ul class="inline-list">
        <li>
          <a href="#">
            <i class="fi-social-facebook large"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fi-social-twitter large"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fi-social-linkedin large"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fi-social-google-plus large"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>
<!-- END CONTENT --> 
  <a class="exit-off-canvas"></a>
  </div>
</div>
  <script src="http://cdn.jsdelivr.net/jquery.mixitup/latest/jquery.mixitup.min.js"></script>
  <script src="foundation-5.4.0/js/foundation/foundation.js"></script>
  <script src="foundation-5.4.0/js/foundation/foundation.offcanvas.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
  <script type="text/javascript" src="js/portfolio_scripts.js"></script>
  </body>
</html>