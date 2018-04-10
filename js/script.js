$(function() {
	
	// global variables
	var width = 1000;
	var height = 700;
	var margin = {"left": 25, "bottom": 25, "right": 5}
	
	// x scale
	var xScale = d3.scale.linear()
		.domain([0, 100])
		.range([0, width - margin.left - margin.right])
		
	var xAxis = d3.svg.axis()
		.scale(xScale)
		.ticks(0)
		.orient("bottom");
		
	// y scale
	var yScale = d3.scale.linear()
		.domain([0, 100])
		.range([height - margin.bottom, 0])
		
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.ticks(0)
		.orient("left");
		
	// creating the main svg
	var svg = d3.select("#canvas")
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("class", "svg")

	
	// axis and axis description
	/*svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(15," + (height - 15) + ")")
		.call(xAxis);*/
		
	var xLabel = svg.append("text")
		.attr("x", 50)
		.attr("y", height - 2)
		.attr("class", "axis wcm-label")
		.text("Effort to Implement ->")
		.style("font-family", "Verdana")
		.style("font-weight", "500")
	
	/*svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(15, 10)")
		.call(yAxis);*/
		
	var yLabel = svg.append("text")
		.attr("x", -300)
		.attr("y", 325)
		.attr("class", "axis wcm-label")
		.text("Business Value ->")
		.attr("transform", "rotate(270 10,325)")
		.style("font-family", "Verdana")
		.style("font-weight", "500")
		
	// wcm quadrant
	var quadrant_group = svg.append("g")
		.attr("transform", "translate(" + margin.left + ",0)")
	

	var quadrant_border = quadrant_group.append("rect")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", width - margin.left - margin.right)
		.attr("height", height - margin.bottom)
		.attr("rx", 0) //round corner
		.attr("ry", 0) //round corner
		.attr("class", "quadrant_border")
		.style("fill", "white")
		.style("stroke", "#bbdefb")

	//top right rectangle
	quadrant_group.append("rect")
		.attr("x", (width - margin.left - margin.right)/2)
		.attr("y", 0)
		.attr("width", (width - margin.left - margin.right)/2)
		.attr("height", (height - margin.bottom)/2)
		.attr("rx", 0) //round corner
		.attr("ry", 0) //round corner
		.attr("class", "quadrant_border")
		.style("fill", "#e3f2fd")
		.style("stroke", "#bbdefb")

	//bottom right rectangle
	quadrant_group.append("rect")
		.attr("x", 0)
		.attr("y", (height - margin.bottom)/2)
		.attr("width", (width - margin.left - margin.right)/2)
		.attr("height", (height - margin.bottom)/2)
		.attr("rx", 0) //round corner
		.attr("ry", 0) //round corner
		.attr("class", "quadrant_border")
		.style("fill", "#e3f2fd")
		.style("stroke", "#bbdefb")
	
	// creating quadrant descriptions
	quadrant_group.append("text")
		.attr("x", xScale(25))
		.attr("y", yScale(2))
		.attr("text-anchor", "middle")
		.text("Fill-In/Base Hit")
		.attr("class", "quad-label")
		.style("fill", "#fd8f00")
		.style("font-size", "16px")
		.style("font-family", "Verdana")
		.style("font-weight", "500")

		
	quadrant_group.append("text")
		.attr("x", xScale(25))
		.attr("y", yScale(96))
		.attr("text-anchor", "middle")
		.text("Must Have/Home Run")
		.attr("class", "quad-label")
		.style("fill", "#fd8f00")
		.style("font-size", "16px")
		.style("font-family", "Verdana")
		.style("font-weight", "500")
	
	quadrant_group.append("text")
		.attr("x", xScale(75))
		.attr("y", yScale(2))
		.attr("text-anchor", "middle")
		.text("Try Again/Foul Ball")
		.attr("class", "quad-label")
		.style("fill", "#fd8f00")
		.style("font-size", "16px")
		.style("font-family", "Verdana")
		.style("font-weight", "500")
		
	quadrant_group.append("text")
		.attr("x", xScale(75))
		.attr("y", yScale(96))
		.attr("text-anchor", "middle")
		.text("Strategic/World Series")
		.attr("class", "quad-label")
		.style("fill", "#fd8f00")
		.style("font-size", "16px")
		.style("font-family", "Verdana")
		.style("font-weight", "500")
		
	// creating the dividers
	quadrant_group.append("line")
		.attr("x1", 0)
		.attr("y1", yScale(50))
		.attr("x2", xScale(100))
		.attr("y2", yScale(50))
		.attr("class", "divider")
		.style("stroke", "#bbdefb");
		
	quadrant_group.append("line")
		.attr("x1", xScale(50))
		.attr("y1", 0)
		.attr("x2", xScale(50))
		.attr("y2", yScale(0))
		.attr("class", "divider")
		.style("stroke", "#bbdefb");
		
	// data for each wcm
	var data = [
		{
			"company": "IBM",
			"cov": 3,
			"ate": 3,
			"label_x": 1.5,
			"label_y": -.7,
			"text_anchor": "start",
			"link": "http://www.ibm.com/",
		},
		{
			"company": "Microsoft",
			"cov": 40,
			"ate": 54,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end",
			"description": "There is huge interest in the WCM capabilities of <a href='http://sharepoint.microsoft.com'>SharePoint 2010</a> and its predecessor, since although this widely adopted product is used most often to support internal content management and collaboration, some Microsoft customers and partners also use it for customer- and partner-facing websites. A beta version of <a href='http://sharepoint.microsoft.com/en-us/preview/sharepoint.aspx'>SharePoint 2013</a> was released in July 2012.",
			"link": "http://www.microsoft.com/",
			"flag": "us",
			"language": "net",
			"languageLong": ".NET",
			"product": "Sharepoint",
			"logo": "microsoft.png"
		},
		{
			"company": "Atex",
			"cov": 30,
			"ate": 40,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end",
			"description": "Atex, which has its headquarters in Reading, U.K., has a long history in the newspaper, magazine, broadcast media and publishing sectors, particularly concerning editorial content management, advertising, subscriptions and support for digital strategies. Its acquisition of the Swedish company Polopoly in 2008 enabled it to enter the WCM market. <a href='http://www.atex.com/solutions/web-cms'>Atex Polopoly</a> is a Java-based offering, the most recent version of which, 10.4, was released in January 2012.",
			"link": "http://www.atex.com/",
			"flag": "gb",
			"language": "java",
			"languageLong": "Java",
			"product": "Atex Polopoly",
			"logo": "atex.png"
		},
		{
			"company": "eZ Systems",
			"cov": 47,
			"ate": 38,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end",
			"description": "eZ Systems, a Norwegian company, offers a WCM platform both on a commercial open-source basis and as SaaS. Its flagship product, <a href='http://ez.no/Products/eZ-Publish-Enterprise'>eZ Publish</a>, now in version 4.7, is based on the Linux, Apache, MySQL, PHP (LAMP) stack. Version 5 is scheduled for release in November 2012. In August 2011, eZ Systems added recommendation and personalization capabilities to its portfolio with the acquisition of German firm Yoochoose and, in October 2011, Web analytics with the acquisition of odoscope. Both acquisitions are now fully integrated as part of eZ Systems' strategy of building a platform in which WCM is the kernel.",
			"link": "http://ez.no/",
			"flag": "no",
			"language": "php",
			"product": "eZ Publish",
			"logo": "ezsystems.png",
			"languageLong": "PHP"
		},
		{
			"company": "Limelight Networks",
			"cov": 48,
			"ate": 33,
			"label_x": -2,
			"label_y": -1,
			"text_anchor": "end",
			"link": "http://www.limelight.com/",
			"description": "Limelight Networks, which is headquartered in Tempe, Arizona, entered the WCM market through its May 2011 acquisition of Clickability, a provider of a SaaS-based WCM offering. It markets this offering as the <a href='http://www.limelight.com/web-content-management/'>Limelight Dynamic Site Platform</a>. Limelight's product portfolio also covers small-object delivery, video content management, website and application acceleration, mobile delivery and monetization, electronic software downloads, and live and on-demand media delivery.",
			"flag": "us",
			"language": "java",
			"languageLong": "Java",
			"logo": "limelightnetworks.jpg",
			"product": "Limelight Dynamic Site Platform"
		},
		{
			"company": "e-Spirit",
			"cov": 32,
			"ate": 28,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end",
			"link": "http://www.e-spirit.com/",
			"description": "e-Spirit is wholly owned by adesso and based in Dortmund, Germany. Its flagship product, <a href='http://www.e-spirit.com/en/product/advantage/advantages.html'>FirstSpirit CMS</a>, is a Java-based WCM offering currently in its fourth major release (4.2 R4), with version 5 scheduled for release later in 2012.",
			"flag": "de",
			"language": "java",
			"languageLong": "Java",
			"logo": "espirit.gif",
			"product": "FirstSpirit"
		}
	]
	
	// creating the circles
	quadrant_group.selectAll("circle")
		.data(data)
		.enter()
		.append("circle")
		.attr("class", function(d) {
			return "circle item " + d.flag + " " + d.language + " " + d.company.toLowerCase().replace(/\s/g, "")
		})
		.attr("cx", function(d) {
			return xScale(d.cov);
		})
		.attr("cy", function(d) {
			return yScale(d.ate);
		})
		.attr("r", 7)
		.attr("opacity", 1)
		.on("mouseover", function() {
			d3.select(this).classed("circle-hover", true)
			d3.select("text." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("wcm-label-hover", true)
		})
		.on("click", function() {
			$(".init-info").hide()
			$(".init-hidden").show()
			var self = this;
			d3.select(".circle-selected").classed("circle-selected", false)
			d3.select(".wcm-label-selected").classed("wcm-label-selected", false)
			d3.select(self).classed("circle-selected", true)
			d3.select("text." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("wcm-label-selected", true)
			d3.select("#language").text(self.__data__.languageLong)
			d3.select("#product").text(self.__data__.product)
			d3.select("#link").html("<a href='" + self.__data__.link + "'>" + self.__data__.link + "</a>")
			d3.select("#flag").html("<img src='img/flags/" + self.__data__.flag + ".png'>")
			d3.select("#logo").html("<a class='thumbnail' href='" + self.__data__.link + "'><img src='img/logos/" + self.__data__.logo + "'></a>")
			d3.select("#description").html(self.__data__.description)
		
		})
		.on("mouseout", function() {
			d3.select(this).classed("circle-hover", false)
			d3.select("text." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("wcm-label-hover", false)
		})
	
	// creating the labels for the circles
	quadrant_group.selectAll(".wcm-label")
		.data(data)
		.enter()
		.append("text")
		.attr("opacity", 1)
		.style("font-family", "Verdana")
		.style("font-weight", "500")
		.attr("class", function(d) {
			return "wcm-label item " + d.flag + " " + d.language + " " + d.company.toLowerCase().replace(/\s/g, "")
		})
		.attr("x", function(d) {
			return xScale(d.cov + d.label_x);
		})
		.attr("y", function(d) {
			return yScale(d.ate + d.label_y);
		})
		.text(function(d) {
			return d.company
		})
		.attr("text-anchor", function(d) {
			return d.text_anchor
		})
		.on("mouseover", function() {
			d3.select(this).classed("wcm-label-hover", true)
			d3.select("circle." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("circle-hover", true)
		})
		.on("mouseout", function() {
			d3.select(this).classed("wcm-label-hover", false)
			d3.select("circle." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("circle-hover", false)
		})
		/*
		.on("click", function() {
			$(".init-info").hide()
			$(".init-hidden").show()
			var self = this;
			d3.select(".circle-selected").classed("circle-selected", false)
			d3.select(".wcm-label-selected").classed("wcm-label-selected", false)
			d3.select(self).classed("wcm-label-selected", true)
			d3.select("circle." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("circle-selected", true)
			d3.select("#language").text(self.__data__.languageLong)
			d3.select("#product").text(self.__data__.product)
			d3.select("#link").html("<a href='" + self.__data__.link + "'>" + self.__data__.link + "</a>")
			d3.select("#flag").html("<img src='img/flags/" + self.__data__.flag + ".png'>")
			d3.select("#logo").html("<a class='thumbnail' href='" + self.__data__.link + "'><img src='img/logos/" + self.__data__.logo + "'></a>")
			d3.select("#description").html(self.__data__.description)
			d3.select("#strengths").html(function() {
				return "<ul>" + 
							self.__data__.strengths.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
			d3.select("#cautions").html(function() {
				return "<ul>" + 
							self.__data__.cautions.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
		})*/
		
	// click on the country dropdown
	$(".country-select").on("click", function(evt) {
		$(".country-top").html($(this).html())
		$(".language-top").html(' \
			<i class="icon-font"></i> \
			<span></span>  \
			<span>Select Language</span> \
		');
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
		d3.selectAll(".item:not(." + $(this).attr("id") + ")")
			.transition()
			.duration(1000)
			.attr("opacity", 0.1)
	})
	
	// click on country reset
	$(".country-reset").on("click", function(evt) {
		$(".country-top").html($(this).html())
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
	})
	
	// click on language dropdown
	$(".language-select").on("click", function(evt) {
		$(".country-top").html(' \
			<i class="icon-globe"></i> \
			<span></span>  \
			<span>Select Country</span> \
		');
		$(".language-top").html($(this).html())
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
		d3.selectAll(".item:not(." + $(this).attr("id") + ")")
			.transition()
			.duration(1000)
			.attr("opacity", 0.1)
	})
	
	// click on language reset
	$(".language-reset").on("click", function(evt) {
		$(".language-top").html($(this).html())
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
	})
	
	$(".init-hidden").hide();
	
});