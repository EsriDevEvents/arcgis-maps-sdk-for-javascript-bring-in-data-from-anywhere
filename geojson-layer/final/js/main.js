/**
 * This sample demonstrates how to load GeoJSON data into an ArcGIS Maps SDK for JavaScript app.
 */
require([
	"esri/Map",
	"esri/layers/GeoJSONLayer",
	"esri/views/SceneView",
	"esri/widgets/Legend",
	"esri/widgets/ElevationProfile",
	"esri/widgets/Expand",
	"esri/widgets/Search",
	"esri/popup/content/TextContent",
], (
	Map,
	GeoJSONLayer,
	SceneView,
	Legend,
	ElevationProfile,
	Expand,
	Search,
	TextContent
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
		renderer: {
			type: "simple",
			symbol: {
				type: "simple-line",
				color: "white",
				width: "4px",
				style: "short-dot",
			},
		},
		popupTemplate: {
			title: "{name}",
			outFields: ["*"],
			fieldInfos: [
				{
					fieldName: "sac_scale",
					label: "SAC Scale",
				},
			],
			content: formatContent,
		},
	});

	// Create GeoJSONLayer from GeoJSON data
	const backCountryLayer = new GeoJSONLayer({
		url: alpineHut,
		copyright: "OpenStreetMap",
		title: "Alpine Huts",
		popupTemplate: {
			title: "{name}",
			outFields: ["*"],
			fieldInfos: [
				{
					fieldName: "phone",
					label: "Phone",
				},
				{
					fieldName: "email",
					label: "Email",
				},
				{
					fieldName: "website",
					label: "Website",
				},
			],
			content: formatContent,
		},
		renderer:  {
			type: "simple",
			symbol: {
				type: "cim",
				data: {
					type: "CIMSymbolReference",
					symbol: {
						"type": "CIMPointSymbol",
						"symbolLayers": [
						  {
							"type": "CIMVectorMarker",
							"enable": true,
							"anchorPointUnits": "Relative",
							"dominantSizeAxis3D": "Z",
							"size": 24,
							"billboardMode3D": "FaceNearPlane",
							"frame": {
							  "xmin": 0,
							  "ymin": 0,
							  "xmax": 283.5,
							  "ymax": 283.5
							},
							"markerGraphics": [
							  {
								"type": "CIMMarkerGraphic",
								"geometry": {
								  "rings": [
									[
									  [
										143.4,
										243
									  ],
									  [
										262.1,
										166.7
									  ],
									  [
										269.3,
										177.8
									  ],
									  [
										143.5,
										258.7
									  ],
									  [
										14.2,
										177.8
									  ],
									  [
										21.2,
										166.6
									  ],
									  [
										143.4,
										243
									  ]
									],
									[
									  [
										202.1,
										135.5
									  ],
									  [
										202.1,
										164.1
									  ],
									  [
										174.2,
										164.1
									  ],
									  [
										174.2,
										133.5
									  ],
									  [
										202.1,
										135.5
									  ]
									],
									[
									  [
										111.6,
										135.5
									  ],
									  [
										111.6,
										164.1
									  ],
									  [
										83.8,
										164.1
									  ],
									  [
										83.8,
										133.5
									  ],
									  [
										111.6,
										135.5
									  ]
									],
									[
									  [
										242,
										114.3
									  ],
									  [
										242.2,
										114.3
									  ],
									  [
										242.2,
										114.3
									  ],
									  [
										250.9,
										116.4
									  ],
									  [
										254.2,
										121.9
									  ],
									  [
										254.2,
										123.5
									  ],
									  [
										254.2,
										128.9
									  ],
									  [
										253.4,
										132.7
									  ],
									  [
										249.2,
										136.7
									  ],
									  [
										242.2,
										138.1
									  ],
									  [
										242,
										138.2
									  ],
									  [
										231.8,
										136
									  ],
									  [
										229.1,
										133.3
									  ],
									  [
										228.2,
										129.5
									  ],
									  [
										228.2,
										123.5
									  ],
									  [
										228.9,
										119.8
									  ],
									  [
										231.2,
										116.9
									  ],
									  [
										239.7,
										114.3
									  ],
									  [
										242,
										114.3
									  ]
									],
									[
									  [
										164.5,
										34.5
									  ],
									  [
										164.5,
										90.2
									  ],
									  [
										121.2,
										90.2
									  ],
									  [
										121.2,
										31.3
									  ],
									  [
										164.5,
										34.5
									  ]
									]
								  ]
								},
								"symbol": {
								  "type": "CIMPolygonSymbol",
								  "symbolLayers": [
									{
									  "type": "CIMSolidFill",
									  "enable": true,
									  "color": [
										255,
										0,
										0,
										255
									  ]
									}
								  ],
								  "angleAlignment": "Map"
								}
							  },
							  {
								"type": "CIMMarkerGraphic",
								"geometry": {
								  "rings": [
									[
									  [
										42.6,
										144
									  ],
									  [
										43.6,
										144.1
									  ],
									  [
										53.5,
										146.5
									  ],
									  [
										55.8,
										149.3
									  ],
									  [
										56.5,
										153.3
									  ],
									  [
										56.5,
										158.7
									  ],
									  [
										55.7,
										162.5
									  ],
									  [
										53.2,
										165.5
									  ],
									  [
										49.3,
										167.4
									  ],
									  [
										44.3,
										168
									  ],
									  [
										43.6,
										167.9
									  ],
									  [
										33.8,
										165.6
									  ],
									  [
										31.3,
										163
									  ],
									  [
										30.4,
										159.4
									  ],
									  [
										30.4,
										153.3
									  ],
									  [
										31.2,
										149.4
									  ],
									  [
										33.6,
										146.5
									  ],
									  [
										37.5,
										144.7
									  ],
									  [
										42.6,
										144
									  ],
									  [
										42.6,
										144
									  ]
									],
									[
									  [
										242.2,
										144.1
									  ],
									  [
										250.8,
										146.3
									  ],
									  [
										253.1,
										148.5
									  ],
									  [
										254.2,
										151.7
									  ],
									  [
										254.3,
										153.3
									  ],
									  [
										254.3,
										158.7
									  ],
									  [
										253.4,
										162.5
									  ],
									  [
										249.2,
										166.5
									  ],
									  [
										242.2,
										168
									  ],
									  [
										242,
										168
									  ],
									  [
										231.8,
										165.8
									  ],
									  [
										229.1,
										163.1
									  ],
									  [
										228.2,
										159.4
									  ],
									  [
										228.2,
										159.4
									  ],
									  [
										228.2,
										153.3
									  ],
									  [
										229,
										149.4
									  ],
									  [
										231.4,
										146.5
									  ],
									  [
										235.3,
										144.7
									  ],
									  [
										240.4,
										144
									  ],
									  [
										242.2,
										144.1
									  ]
									],
									[
									  [
										44.2,
										114.3
									  ],
									  [
										53.6,
										116.8
									  ],
									  [
										55.8,
										119.6
									  ],
									  [
										56.5,
										123.5
									  ],
									  [
										56.5,
										128.9
									  ],
									  [
										55.7,
										132.7
									  ],
									  [
										53.2,
										135.7
									  ],
									  [
										49.3,
										137.5
									  ],
									  [
										44.3,
										138.2
									  ],
									  [
										44.3,
										138.2
									  ],
									  [
										43.6,
										138.1
									  ],
									  [
										33.8,
										135.8
									  ],
									  [
										31.3,
										133.2
									  ],
									  [
										30.4,
										129.5
									  ],
									  [
										30.4,
										123.5
									  ],
									  [
										31.2,
										119.7
									  ],
									  [
										33.2,
										117.2
									  ],
									  [
										42,
										114.3
									  ],
									  [
										44.2,
										114.3
									  ]
									]
								  ]
								},
								"symbol": {
								  "type": "CIMPolygonSymbol",
								  "symbolLayers": [
									{
									  "type": "CIMSolidFill",
									  "enable": true,
									  "color": [
										0,
										0,
										0,
										255
									  ]
									}
								  ],
								  "angleAlignment": "Map"
								}
							  },
							  {
								"type": "CIMMarkerGraphic",
								"geometry": {
								  "rings": [
									[
									  [
										168.3,
										170.1
									  ],
									  [
										208,
										170.1
									  ],
									  [
										208,
										129.9
									  ],
									  [
										168.3,
										127.1
									  ],
									  [
										168.3,
										170.1
									  ]
									],
									[
									  [
										77.8,
										170.1
									  ],
									  [
										117.6,
										170.1
									  ],
									  [
										117.6,
										129.9
									  ],
									  [
										77.8,
										127.1
									  ],
									  [
										77.8,
										170.1
									  ]
									],
									[
									  [
										227.7,
										114.3
									  ],
									  [
										224.7,
										118.5
									  ],
									  [
										223.7,
										123.5
									  ],
									  [
										223.7,
										128.9
									  ],
									  [
										223.8,
										129.8
									  ],
									  [
										226.2,
										136.7
									  ],
									  [
										232.4,
										141.1
									  ],
									  [
										226,
										145.9
									  ],
									  [
										223.7,
										153.3
									  ],
									  [
										223.7,
										158.7
									  ],
									  [
										223.8,
										159.6
									  ],
									  [
										224.9,
										164.4
									  ],
									  [
										227.8,
										168.2
									  ],
									  [
										232.2,
										170.8
									  ],
									  [
										238,
										172.1
									  ],
									  [
										144.3,
										232.4
									  ],
									  [
										47.9,
										172.1
									  ],
									  [
										53.2,
										170.6
									  ],
									  [
										57.4,
										167.6
									  ],
									  [
										60,
										163.6
									  ],
									  [
										60.9,
										158.7
									  ],
									  [
										60.9,
										158.7
									  ],
									  [
										60.9,
										153.3
									  ],
									  [
										58.8,
										145.7
									  ],
									  [
										52.3,
										141.1
									  ],
									  [
										58.7,
										136.2
									  ],
									  [
										60.9,
										128.9
									  ],
									  [
										60.9,
										123.5
									  ],
									  [
										60,
										118.4
									  ],
									  [
										57.2,
										114.3
									  ],
									  [
										227.7,
										114.3
									  ]
									],
									[
									  [
										44.8,
										84.5
									  ],
									  [
										53.8,
										87.1
									  ],
									  [
										55.9,
										89.8
									  ],
									  [
										56.5,
										93.7
									  ],
									  [
										56.5,
										99.1
									  ],
									  [
										55.7,
										102.9
									  ],
									  [
										53.3,
										105.8
									  ],
									  [
										44.5,
										108.3
									  ],
									  [
										43.8,
										108.3
									  ],
									  [
										43.6,
										108.3
									  ],
									  [
										43.6,
										108.3
									  ],
									  [
										33.8,
										106
									  ],
									  [
										31.3,
										103.4
									  ],
									  [
										30.4,
										99.7
									  ],
									  [
										30.4,
										93.7
									  ],
									  [
										31.2,
										89.9
									  ],
									  [
										33.1,
										87.6
									  ],
									  [
										33.4,
										87.1
									  ],
									  [
										41.7,
										84.5
									  ],
									  [
										44.8,
										84.5
									  ]
									],
									[
									  [
										115.2,
										84.5
									  ],
									  [
										115.2,
										96.2
									  ],
									  [
										170.5,
										96.2
									  ],
									  [
										170.5,
										84.5
									  ],
									  [
										227.7,
										84.5
									  ],
									  [
										227.7,
										84.5
									  ],
									  [
										224.7,
										88.7
									  ],
									  [
										223.7,
										93.7
									  ],
									  [
										223.7,
										99.1
									  ],
									  [
										223.8,
										100
									  ],
									  [
										224.9,
										104.6
									  ],
									  [
										227.5,
										108.3
									  ],
									  [
										56.8,
										108.3
									  ],
									  [
										59.9,
										104.1
									  ],
									  [
										60.9,
										99.1
									  ],
									  [
										60.9,
										93.7
									  ],
									  [
										60,
										88.6
									  ],
									  [
										57.3,
										84.5
									  ],
									  [
										115.2,
										84.5
									  ]
									],
									[
									  [
										242.4,
										84.5
									  ],
									  [
										250.9,
										86.7
									  ],
									  [
										253.1,
										88.9
									  ],
									  [
										254.2,
										92.1
									  ],
									  [
										254.2,
										92.1
									  ],
									  [
										254.2,
										93.7
									  ],
									  [
										254.2,
										99.1
									  ],
									  [
										253.4,
										102.9
									  ],
									  [
										249.3,
										106.9
									  ],
									  [
										242.2,
										108.3
									  ],
									  [
										241.5,
										108.3
									  ],
									  [
										231.6,
										106.1
									  ],
									  [
										229.1,
										103.4
									  ],
									  [
										228.2,
										99.7
									  ],
									  [
										228.2,
										93.7
									  ],
									  [
										228.9,
										90
									  ],
									  [
										231.1,
										87.2
									  ],
									  [
										239.5,
										84.5
									  ],
									  [
										242.4,
										84.5
									  ]
									],
									[
									  [
										227.6,
										54.7
									  ],
									  [
										224.7,
										58.9
									  ],
									  [
										223.7,
										63.9
									  ],
									  [
										223.7,
										63.9
									  ],
									  [
										223.7,
										69.2
									  ],
									  [
										223.8,
										70.2
									  ],
									  [
										224.9,
										74.8
									  ],
									  [
										227.6,
										78.6
									  ],
									  [
										170.5,
										78.6
									  ],
									  [
										170.5,
										54.7
									  ],
									  [
										227.6,
										54.7
									  ]
									],
									[
									  [
										115.2,
										54.7
									  ],
									  [
										115.2,
										78.6
									  ],
									  [
										56.8,
										78.6
									  ],
									  [
										59.9,
										74.3
									  ],
									  [
										60.9,
										69.2
									  ],
									  [
										60.9,
										69.2
									  ],
									  [
										60.9,
										63.9
									  ],
									  [
										60,
										58.8
									  ],
									  [
										57.3,
										54.7
									  ],
									  [
										115.2,
										54.7
									  ]
									],
									[
									  [
										45.5,
										54.7
									  ],
									  [
										53.9,
										57.4
									  ],
									  [
										55.9,
										60.1
									  ],
									  [
										56.5,
										63.9
									  ],
									  [
										56.5,
										69.2
									  ],
									  [
										55.7,
										73.1
									  ],
									  [
										53.2,
										76.1
									  ],
									  [
										49.3,
										77.9
									  ],
									  [
										44.3,
										78.6
									  ],
									  [
										43.6,
										78.5
									  ],
									  [
										43.6,
										78.5
									  ],
									  [
										33.8,
										76.2
									  ],
									  [
										31.3,
										73.5
									  ],
									  [
										30.4,
										69.9
									  ],
									  [
										30.4,
										63.9
									  ],
									  [
										31.2,
										60.1
									  ],
									  [
										33,
										57.9
									  ],
									  [
										36.6,
										55.5
									  ],
									  [
										41.4,
										54.7
									  ],
									  [
										45.5,
										54.7
									  ]
									],
									[
									  [
										242.8,
										54.7
									  ],
									  [
										251.5,
										57.3
									  ],
									  [
										253.6,
										60.1
									  ],
									  [
										254.3,
										63.9
									  ],
									  [
										254.3,
										69.2
									  ],
									  [
										253.4,
										73.1
									  ],
									  [
										249.2,
										77.1
									  ],
									  [
										242.2,
										78.5
									  ],
									  [
										242.2,
										78.5
									  ],
									  [
										242,
										78.6
									  ],
									  [
										231.8,
										76.4
									  ],
									  [
										229.1,
										73.7
									  ],
									  [
										228.2,
										69.9
									  ],
									  [
										228.2,
										63.9
									  ],
									  [
										228.9,
										60.3
									  ],
									  [
										231.1,
										57.4
									  ],
									  [
										239.2,
										54.7
									  ],
									  [
										242.8,
										54.7
									  ]
									],
									[
									  [
										254.2,
										40.9
									  ],
									  [
										254.1,
										42
									  ],
									  [
										254.1,
										43.1
									  ],
									  [
										254.3,
										44.1
									  ],
									  [
										252.4,
										46.2
									  ],
									  [
										251.1,
										46.2
									  ],
									  [
										250.7,
										46.5
									  ],
									  [
										243.2,
										48.8
									  ],
									  [
										239.7,
										48.8
									  ],
									  [
										231.2,
										46.2
									  ],
									  [
										229,
										43.7
									  ],
									  [
										228.2,
										40.3
									  ],
									  [
										228.2,
										39.8
									  ],
									  [
										228.2,
										39
									  ],
									  [
										254.2,
										40.9
									  ]
									],
									[
									  [
										223.7,
										39.5
									  ],
									  [
										223.7,
										39.6
									  ],
									  [
										223.7,
										39.6
									  ],
									  [
										223.8,
										40.5
									  ],
									  [
										224.8,
										45.1
									  ],
									  [
										227.4,
										48.8
									  ],
									  [
										170.5,
										48.8
									  ],
									  [
										170.5,
										35.6
									  ],
									  [
										223.7,
										39.5
									  ]
									],
									[
									  [
										115.2,
										31.6
									  ],
									  [
										115.2,
										48.8
									  ],
									  [
										56.7,
										48.8
									  ],
									  [
										59.9,
										44.5
									  ],
									  [
										60.9,
										39.4
									  ],
									  [
										60.9,
										39.4
									  ],
									  [
										60.9,
										34.1
									  ],
									  [
										59.4,
										27.5
									  ],
									  [
										115.2,
										31.6
									  ]
									],
									[
									  [
										46.4,
										25
									  ],
									  [
										53.2,
										27
									  ],
									  [
										55.9,
										29.8
									  ],
									  [
										56.5,
										34.1
									  ],
									  [
										56.5,
										39.4
									  ],
									  [
										55.7,
										43.3
									  ],
									  [
										53.2,
										46.2
									  ],
									  [
										49.3,
										48.1
									  ],
									  [
										44.3,
										48.7
									  ],
									  [
										44.3,
										48.7
									  ],
									  [
										43.6,
										48.7
									  ],
									  [
										33.8,
										46.4
									  ],
									  [
										31.3,
										43.7
									  ],
									  [
										30.4,
										40.1
									  ],
									  [
										30.4,
										34.1
									  ],
									  [
										31.2,
										30.2
									  ],
									  [
										33.6,
										27.2
									  ],
									  [
										37.5,
										25.4
									  ],
									  [
										42.6,
										24.8
									  ],
									  [
										46.4,
										25
									  ]
									]
								  ]
								},
								"symbol": {
								  "type": "CIMPolygonSymbol",
								  "symbolLayers": [
									{
									  "type": "CIMSolidFill",
									  "enable": true,
									  "color": [
										0,
										0,
										0,
										255
									  ]
									}
								  ],
								  "angleAlignment": "Map"
								}
							  }
							],
							"scaleSymbolsProportionally": true,
							"respectFrame": true,
							"clippingPath": {
							  "type": "CIMClippingPath",
							  "clippingType": "Intersect",
							  "path": {
								"rings": [
								  [
									[
									  0,
									  0
									],
									[
									  283.5,
									  0
									],
									[
									  283.5,
									  283.5
									],
									[
									  0,
									  283.5
									],
									[
									  0,
									  0
									]
								  ]
								]
							  }
							}
						  }
						]
					  },
				},
			},
		}
	});

	function formatContent(feature) {
		// Check if the access type is open or unrestricted and set
		// the color to green. Otherwise, set the color to red.
		let color;
		switch (feature.graphic.attributes.sac_scale) {
			case "hiking":
				color = "yellow";
				break;
			case "mountain_hiking":
			case "demanding_mountain_hiking":
				color = "red";
				break;
			case "alpine_hiking":
			case "demanding_alpine_hiking":
			case "difficult_alpine_hiking":
				color = "blue";
				break;
			default:
				color = "white";
				break;
		};

		let textContent = new TextContent();
		// Create the text content and set the text depending on which layer
		// the feature is from and return in an array.
		if (feature.graphic.layer.title == "Alpine Huts") {
			textContent.text =
				`This site has the following contact information:<br/>Phone: {phone}<br/>Email: <a href="mailto:{email}">{email}</a><br/>Website: <a href="{website}">{website}</a>`;
		} else {
			textContent.text =
				'The SAC Mountain and Alpine Hiking Scale of this path is <font color="'+color+'"><b>{sac_scale}</b></font>';
		}
		return [textContent];
	}

	// Create GeoJSONLayer from GeoJSON data
	const boundaryLayer = new GeoJSONLayer({
		url: alps,
		copyright: "OpenStreetMap",
		title: "Alps Boundary",
		popupEnabled: false,
		renderer: {
			type: "simple",
			symbol: {
				type: "simple-fill",
				color: null,
				style: "solid",
				outline: {
					color: "black",
				},
			},
		},
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

	// Add the ElevationProfile widget referencing the view
	const elevationExpand = new Expand({
		view,
		content: new ElevationProfile({ view }),
	});
	const legendExpand = new Expand({
		view,
		content: new Legend({ view }),
	});

	const searchWidget = new Search({
		view: view,
		sources: [{
			layer: backCountryLayer,
			placeholder: "Search alpine hut",
			name: "Alpine huts",
			prefix: "",
			suffix: "",
			maxResults: 1,
			maxSuggestions: 6,
			exactMatch: false,
			searchFields: ["name"],
			displayField: "name",
			minSuggestCharacters: 0
		  }]
	  });
	view.ui.add(searchWidget, {position: "top-right"});

	// Add widgets to the UI
	view.ui.add(elevationExpand, "top-right");
	view.ui.add(legendExpand, "bottom-left");
});
