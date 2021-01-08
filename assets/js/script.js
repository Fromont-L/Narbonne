// Map
/*function init() {
	var narbonne = {
		lat: 43.1833,
		lng: 3
	}*/

	//var zoomLevel = 7;

	var map = L.map("mapid").setView([43.182327937390305, 3.0050774539960003], 15);

	var mainLayer = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 18,
	    id: "mapbox/streets-v11",
	    tileSize: 512,
	    zoomOffset: -1,
	    accessToken: "pk.eyJ1IjoiZnJvbW9udC1sIiwiYSI6ImNramlwM3RocDRoeDgyem5xcWlmMTZxMzMifQ.CaF4Tu_AUhxXGFVeNAfMGw"
	});

	// Marqueur Best Games
	var markerManette = L.icon({
		iconUrl: "assets/images/icones/markermanette.png",

		iconSize : [50, 50], //Taille de l'icône
		iconAnchor: [20, 50], //Ancre de l'icône
		popupAnchor: [6, -45] //Point ou va s'ouvrir le popup
	});

	//Marqueur Cathédrale
	var markerEglise = L.icon({
		iconUrl: "assets/images/icones/markereglise.png",

		iconSize : [50, 50], //Taille de l'icône
		iconAnchor: [20, 50], //Ancre de l'icône
		popupAnchor: [6, -45] //Point ou va s'ouvrir le popup
	});

	// Marqueur YOLI
	var markerMaki = L.icon({
		iconUrl: "assets/images/icones/markermaki.png",

		iconSize : [50, 50], //Taille de l'icône
		iconAnchor: [20, 50], //Ancre de l'icône
		popupAnchor: [6, -45] //Point ou va s'ouvrir le popup
	});

	// Marqueur Echoppe Médiévale
	var markerBiere = L.icon({
		iconUrl: "assets/images/icones/markerbiere.png",

		iconSize : [50, 50], //Taille de l'icône
		iconAnchor: [20, 50], //Ancre de l'icône
		popupAnchor: [6, -45] //Point ou va s'ouvrir le popup
	});

	// Marqueur Parc du Jadin des Martyrs de la Résistance
	var markerParc = L.icon({
		iconUrl: "assets/images/icones/markerparc.png",

		iconSize : [50, 50], //Taille de l'icône
		iconAnchor: [20, 50], //Ancre de l'icône
		popupAnchor: [6, -45] //Point ou va s'ouvrir le popup
	});

	// Affichage du marqueur de Best Games
	L.marker([43.18013, 3.00391], {icon: markerManette}).addTo(map).bindPopup("Best Games<br/><img src='assets/images/map/bestgames.png'/><br/>37 Boulevard Docteur Ferroul 11100 Narbonne");

	// Affichage du marqueur de la Cathédrale Saint-Just
	L.marker([43.18499, 3.00379], {icon: markerEglise}).addTo(map).bindPopup("Cathédrale Saint-Just<br/><img src='assets/images/map/cathedrale.png'/><br/>Rue Armand Gauthier, 11100 Narbonne");

	// Affichage du marqueur de YOLI
	L.marker([43.18086, 3.00547], {icon: markerMaki}).addTo(map).bindPopup("Restaurant YOLI<br/><img src='assets/images/map/yoli.png'/><br/>11 Boulevard Docteur Ferroul 11100 Narbonne");

	// Affichage du marqueur de l'Echoppe Médiévale
	L.marker([43.18261, 3.00230], {icon: markerBiere}).addTo(map).bindPopup("L\'Echoppe Médiévale<br/><img src='assets/images/map/echoppe.png'/><br/>1 Rue Hector Berlioz, 11100 Narbonne");

	// Affichage du marqueur du Jardin des Martyrs
	L.marker([43.18064, 2.99853], {icon: markerParc}).addTo(map).bindPopup("Parc des Jardin des Martyrs<br/><img src='assets/images/map/parc.png'/><br/>22 Rue du Bourget, 11100 Narbonne");

	/*L.marker([43.18013, 3.00391]).addTo(map)
    .bindPopup("Best Games")
    .openPopup();
    
    L.marker([43.18499, 3.00379]).addTo(map)
    .bindPopup("Cathédrale Saint-Just")
    .openPopup();

    L.marker([43.18086, 3.00547]).addTo(map)
    .bindPopup("Restaurant YOLI")
    .openPopup();

    L.marker([43.18261, 3.00230]).addTo(map)
    .bindPopup("L'Echoppe Médiévale")
    .openPopup();

    L.marker([43.18064, 2.99853]).addTo(map)
    .bindPopup("Jardin des Martyrs de la Résistance")
    .openPopup();
	*/

	mainLayer.addTo(map);


// Météo

const APIKEY = "454cf0348dee8780b201775055d818e0";

let url = `http://api.openweathermap.org/data/2.5/weather?q=Narbonne,fr&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) =>
	response.json().then((data) => {
		console.log(data);
		let temp = document.getElementById("temp");
		temp.innerHTML = `${Math.round(data.main.temp)}` + " C°";
		//document.getElementById("temp").innerHTML = data.main.temp + " C°";
		document.getElementById("wind").innerHTML = data.wind.speed + " m/s";
		//document.getElementsById("logoweather").innerHTML = data.main.
	})
);


	/*
	.fetch("http://api.openweathermap.org/data/2.5/weather?q=Narbonne,fr&units=metric&lang=fr&appid=454cf0348dee8780b201775055d818e0")
	.then(response => response.json())
	.then(responseJson => console.log(responseJson))
	*/

