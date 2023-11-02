/**
 * This sample demonstrates how to load GeoJSON data into an ArcGIS Maps SDK for JavaScript app.
 */
require(["esri/Map", "esri/layers/GeoJSONLayer", "esri/views/SceneView"], (
	Map,
	GeoJSONLayer,
	SceneView
) => {
	const alps = "../../data/geojson/salzburg.json";
	const alpineHut = "../../data/geojson/alpine-hut-salzburg.json";

	// Create GeoJSONLayer from GeoJSON data
	const trailsLayer = new GeoJSONLayer({
		portalItem: {
			id: "7ea8f2ec516b4207b6fb1ba5d8ec7f3d",
		},
		copyright: "OpenStreetMap",
		title: "Trails",
	});

	// Create GeoJSONLayer from GeoJSON data
	const backCountryLayer = new GeoJSONLayer({
		url: alpineHut,
		copyright: "OpenStreetMap",
		title: "Alpine Huts",
	});

	// Create GeoJSONLayer from GeoJSON data
	const boundaryLayer = new GeoJSONLayer({
		url: alps,
		copyright: "OpenStreetMap",
		title: "Alps Boundary",
		popupEnabled: false,
	});

	const map = new Map({
		basemap: "satellite",
		ground: "world-elevation",
		layers: [boundaryLayer, trailsLayer, backCountryLayer],
	});
	const view = new SceneView({
		container: "viewDiv",
		map: map,
		qualityProfile: "high",
		popup: {
			defaultPopupTemplateEnabled: true,
		},
		// Set the camera angle
		camera: {
			position: [13, 46.5, 45000],
			tilt: 65,
			heading: 0,
		},
		environment: {
			weather: {
				type: "cloudy", // autocasts as new CloudyWeather({ cloudCover: 0.3 })
				cloudCover: 0.3,
			},
		},
	});
});
