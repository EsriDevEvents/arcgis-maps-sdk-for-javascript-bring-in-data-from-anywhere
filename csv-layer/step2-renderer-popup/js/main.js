/**
 * Step 2: Renderer + Popup
 * Description: Demonstrates how to configure a Renderer using a CIMSymbol for the symbol. Also
 * shows how to configure a custom PopupTemplate with some native html elements.
 */
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/CSVLayer"
], function (
  Map, MapView, CSVLayer,
) {

  // Defines a SimpleRenderer
  const ufoRenderer = {
    type: "simple",
    symbol: {
      type: "cim",
      // gets JSON data defining CIMPointSymbol
      data: {
        type: "CIMSymbolReference",
        symbol: getPointSymbolData()
      }
    }
  }

  // Defines a PopupTemplate
  const popupTemplate = {
    title: "{NAME}",
    content: [
      {
        type: "text",
        text: "You can drink beer in a biergarten in <b>{addr:city}</b>."
      }
    ]
  }

  const csvLayer = new CSVLayer({
    portalItem: {
      id: "777a073543994b97bea2521d699dde39",
      // For use when loading data from an Enterprise Portal
      // portal: {
      //   url: "https://machine-name.domain.com/portal"
      // }
    },
    copyright: "osm.org",
    title: "Biergarten",
    longitudeField: "@lon",
    latitudeField: "@lat",
    popupTemplate,  // short-hand property name (same as popupTemplate: popupTemplate) 
    renderer: ufoRenderer,
  });

  const map = new Map({
    basemap: "gray-vector",
    layers: [csvLayer]
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [10, 49],
    zoom: 3
  });

  function getPointSymbolData() {
    return {
      "type": "CIMPointSymbol",
      "symbolLayers": [
        {
          "type": "CIMVectorMarker",
          "enable": true,
          "anchorPointUnits": "Relative",
          "dominantSizeAxis3D": "Z",
          "size": 10,
          "billboardMode3D": "FaceNearPlane",
          "frame": {
            "xmin": 0,
            "ymin": 0,
            "xmax": 75.7,
            "ymax": 97.6
          },
          "markerGraphics": [
            {
              "type": "CIMMarkerGraphic",
              "geometry": {
                "x": 0,
                "y": 0
              },
              "symbol": {
                "type": "CIMPointSymbol",
                "symbolLayers": [
                  {
                    "type": "CIMVectorMarker",
                    "enable": true,
                    "anchorPointUnits": "Relative",
                    "dominantSizeAxis3D": "Z",
                    "offsetX": 37.834999084472656,
                    "offsetY": 48.779998779296875,
                    "size": 97.55999755859375,
                    "billboardMode3D": "FaceNearPlane",
                    "frame": {
                      "xmin": 0,
                      "ymin": 0,
                      "xmax": 75.7,
                      "ymax": 97.6
                    },
                    "markerGraphics": [
                      {
                        "type": "CIMMarkerGraphic",
                        "geometry": {
                          "x": 0,
                          "y": 0
                        },
                        "symbol": {
                          "type": "CIMPointSymbol",
                          "symbolLayers": [
                            {
                              "type": "CIMVectorMarker",
                              "enable": true,
                              "anchorPointUnits": "Relative",
                              "dominantSizeAxis3D": "Z",
                              "offsetX": 0,
                              "offsetY": 0,
                              "size": 3000,
                              "billboardMode3D": "FaceNearPlane",
                              "frame": {
                                "xmin": 0,
                                "ymin": 0,
                                "xmax": 75.7,
                                "ymax": 97.6
                              },
                              "markerGraphics": [
                                {
                                  "type": "CIMMarkerGraphic",
                                  "geometry": {
                                    "rings": [
                                      [
                                        [
                                          6.3,
                                          54.7
                                        ],
                                        [
                                          4.7,
                                          56
                                        ],
                                        [
                                          4,
                                          58.6
                                        ],
                                        [
                                          5.6,
                                          62.6
                                        ],
                                        [
                                          5.8,
                                          63.1
                                        ],
                                        [
                                          5.9,
                                          63.4
                                        ],
                                        [
                                          5.9,
                                          66.6
                                        ],
                                        [
                                          4.7,
                                          71.6
                                        ],
                                        [
                                          4.8,
                                          72.6
                                        ],
                                        [
                                          6.1,
                                          73.8
                                        ],
                                        [
                                          8.3,
                                          74.7
                                        ],
                                        [
                                          9.2,
                                          74.9
                                        ],
                                        [
                                          9.6,
                                          75.7
                                        ],
                                        [
                                          10,
                                          77.3
                                        ],
                                        [
                                          9.6,
                                          80.2
                                        ],
                                        [
                                          9.4,
                                          81
                                        ],
                                        [
                                          10.5,
                                          84
                                        ],
                                        [
                                          13.6,
                                          85.8
                                        ],
                                        [
                                          16.5,
                                          87.1
                                        ],
                                        [
                                          17.7,
                                          89.5
                                        ],
                                        [
                                          17.8,
                                          89.9
                                        ],
                                        [
                                          18.6,
                                          91.6
                                        ],
                                        [
                                          20,
                                          92.9
                                        ],
                                        [
                                          23.4,
                                          93.6
                                        ],
                                        [
                                          25.4,
                                          93.3
                                        ],
                                        [
                                          27.3,
                                          92.3
                                        ],
                                        [
                                          28.7,
                                          90.6
                                        ],
                                        [
                                          31.2,
                                          87.3
                                        ],
                                        [
                                          31.5,
                                          87.2
                                        ],
                                        [
                                          33.3,
                                          87.3
                                        ],
                                        [
                                          35.9,
                                          87.7
                                        ],
                                        [
                                          38.8,
                                          87.5
                                        ],
                                        [
                                          41.3,
                                          86.5
                                        ],
                                        [
                                          43.2,
                                          84.9
                                        ],
                                        [
                                          44.5,
                                          82.6
                                        ],
                                        [
                                          44.5,
                                          82.6
                                        ],
                                        [
                                          44.9,
                                          81.5
                                        ],
                                        [
                                          46,
                                          81.3
                                        ],
                                        [
                                          48.1,
                                          80.5
                                        ],
                                        [
                                          48.9,
                                          79
                                        ],
                                        [
                                          48.4,
                                          77.6
                                        ],
                                        [
                                          47,
                                          76.5
                                        ],
                                        [
                                          42.9,
                                          77.9
                                        ],
                                        [
                                          32.9,
                                          77.8
                                        ],
                                        [
                                          21.8,
                                          75.3
                                        ],
                                        [
                                          13.3,
                                          71.8
                                        ],
                                        [
                                          10.9,
                                          70.2
                                        ],
                                        [
                                          9.3,
                                          68.4
                                        ],
                                        [
                                          9.2,
                                          68.2
                                        ],
                                        [
                                          8.2,
                                          63.4
                                        ],
                                        [
                                          8.3,
                                          53.8
                                        ],
                                        [
                                          6.3,
                                          54.7
                                        ]
                                      ],
                                      [
                                        [
                                          55.8,
                                          56.9
                                        ],
                                        [
                                          58.7,
                                          57.5
                                        ],
                                        [
                                          60.6,
                                          56.7
                                        ],
                                        [
                                          60.6,
                                          56.7
                                        ],
                                        [
                                          62,
                                          53.9
                                        ],
                                        [
                                          61.8,
                                          50.1
                                        ],
                                        [
                                          61.2,
                                          48.1
                                        ],
                                        [
                                          61.2,
                                          48.1
                                        ],
                                        [
                                          59.4,
                                          44.1
                                        ],
                                        [
                                          55.8,
                                          56.9
                                        ]
                                      ],
                                      [
                                        [
                                          60.2,
                                          38.3
                                        ],
                                        [
                                          62.9,
                                          42.4
                                        ],
                                        [
                                          65.1,
                                          47.5
                                        ],
                                        [
                                          65.2,
                                          47.5
                                        ],
                                        [
                                          65.8,
                                          51.4
                                        ],
                                        [
                                          65.8,
                                          54.6
                                        ],
                                        [
                                          65,
                                          57.3
                                        ],
                                        [
                                          63.5,
                                          59.5
                                        ],
                                        [
                                          61.4,
                                          60.9
                                        ],
                                        [
                                          58.7,
                                          61.5
                                        ],
                                        [
                                          55.7,
                                          61
                                        ],
                                        [
                                          52.5,
                                          59.7
                                        ],
                                        [
                                          52.5,
                                          59.7
                                        ],
                                        [
                                          51.1,
                                          58.9
                                        ],
                                        [
                                          55.2,
                                          44.2
                                        ],
                                        [
                                          57.8,
                                          35.1
                                        ],
                                        [
                                          60.2,
                                          38.3
                                        ]
                                      ],
                                      [
                                        [
                                          27.6,
                                          4.2
                                        ],
                                        [
                                          23.2,
                                          5
                                        ],
                                        [
                                          21.2,
                                          6.4
                                        ],
                                        [
                                          13.1,
                                          48.5
                                        ],
                                        [
                                          12.4,
                                          58
                                        ],
                                        [
                                          12.7,
                                          66
                                        ],
                                        [
                                          15.1,
                                          68.1
                                        ],
                                        [
                                          20.1,
                                          70.3
                                        ],
                                        [
                                          22.9,
                                          71.3
                                        ],
                                        [
                                          31,
                                          73.3
                                        ],
                                        [
                                          38.7,
                                          74
                                        ],
                                        [
                                          42.3,
                                          73.8
                                        ],
                                        [
                                          45,
                                          72.8
                                        ],
                                        [
                                          45.7,
                                          72.4
                                        ],
                                        [
                                          47.4,
                                          70.8
                                        ],
                                        [
                                          48.4,
                                          68.8
                                        ],
                                        [
                                          49.1,
                                          67.4
                                        ],
                                        [
                                          49.1,
                                          67.4
                                        ],
                                        [
                                          50.7,
                                          67.4
                                        ],
                                        [
                                          55,
                                          67.6
                                        ],
                                        [
                                          60.1,
                                          67.1
                                        ],
                                        [
                                          64.4,
                                          65.5
                                        ],
                                        [
                                          67,
                                          63.6
                                        ],
                                        [
                                          69.1,
                                          61
                                        ],
                                        [
                                          70.5,
                                          57.6
                                        ],
                                        [
                                          71.4,
                                          53.6
                                        ],
                                        [
                                          71.2,
                                          48.5
                                        ],
                                        [
                                          69.7,
                                          43.5
                                        ],
                                        [
                                          67.3,
                                          38.7
                                        ],
                                        [
                                          61,
                                          29.5
                                        ],
                                        [
                                          60.3,
                                          28.5
                                        ],
                                        [
                                          64,
                                          16.8
                                        ],
                                        [
                                          64.2,
                                          16.5
                                        ],
                                        [
                                          64.2,
                                          16.4
                                        ],
                                        [
                                          64.2,
                                          16.2
                                        ],
                                        [
                                          62.5,
                                          13.6
                                        ],
                                        [
                                          57.8,
                                          10.7
                                        ],
                                        [
                                          51.5,
                                          8.1
                                        ],
                                        [
                                          43.9,
                                          5.9
                                        ],
                                        [
                                          35.2,
                                          4.5
                                        ],
                                        [
                                          27.6,
                                          4.2
                                        ]
                                      ],
                                      [
                                        [
                                          37,
                                          0.6
                                        ],
                                        [
                                          44.9,
                                          2
                                        ],
                                        [
                                          54.9,
                                          5
                                        ],
                                        [
                                          62.5,
                                          8.7
                                        ],
                                        [
                                          67,
                                          12.5
                                        ],
                                        [
                                          68.1,
                                          14.5
                                        ],
                                        [
                                          68.4,
                                          16.5
                                        ],
                                        [
                                          68.2,
                                          17.4
                                        ],
                                        [
                                          67.9,
                                          18.3
                                        ],
                                        [
                                          64.9,
                                          27.9
                                        ],
                                        [
                                          70.7,
                                          36.5
                                        ],
                                        [
                                          73.6,
                                          42
                                        ],
                                        [
                                          75.3,
                                          47.8
                                        ],
                                        [
                                          75.5,
                                          54.2
                                        ],
                                        [
                                          75.5,
                                          54.2
                                        ],
                                        [
                                          74.4,
                                          59.2
                                        ],
                                        [
                                          72.5,
                                          63.4
                                        ],
                                        [
                                          69.8,
                                          66.7
                                        ],
                                        [
                                          66.3,
                                          69.2
                                        ],
                                        [
                                          61,
                                          71.1
                                        ],
                                        [
                                          54.8,
                                          71.7
                                        ],
                                        [
                                          51.7,
                                          71.6
                                        ],
                                        [
                                          51,
                                          72.9
                                        ],
                                        [
                                          50.3,
                                          73.9
                                        ],
                                        [
                                          52.2,
                                          76.3
                                        ],
                                        [
                                          52.9,
                                          79.2
                                        ],
                                        [
                                          52.5,
                                          81.2
                                        ],
                                        [
                                          51.4,
                                          82.8
                                        ],
                                        [
                                          47.8,
                                          85
                                        ],
                                        [
                                          45.8,
                                          87.9
                                        ],
                                        [
                                          43,
                                          90.1
                                        ],
                                        [
                                          39.6,
                                          91.4
                                        ],
                                        [
                                          35.7,
                                          91.7
                                        ],
                                        [
                                          32.8,
                                          91.3
                                        ],
                                        [
                                          32.2,
                                          92.4
                                        ],
                                        [
                                          29.8,
                                          95.4
                                        ],
                                        [
                                          26.5,
                                          97.2
                                        ],
                                        [
                                          22.2,
                                          97.6
                                        ],
                                        [
                                          18,
                                          96.4
                                        ],
                                        [
                                          15.3,
                                          94
                                        ],
                                        [
                                          13.9,
                                          90.8
                                        ],
                                        [
                                          13.7,
                                          90.3
                                        ],
                                        [
                                          13.7,
                                          90.1
                                        ],
                                        [
                                          12.6,
                                          89.7
                                        ],
                                        [
                                          9.5,
                                          88.4
                                        ],
                                        [
                                          7.2,
                                          86.2
                                        ],
                                        [
                                          5.7,
                                          83.4
                                        ],
                                        [
                                          5.4,
                                          80.4
                                        ],
                                        [
                                          5.7,
                                          79.3
                                        ],
                                        [
                                          5.9,
                                          78.2
                                        ],
                                        [
                                          3,
                                          76.6
                                        ],
                                        [
                                          1.2,
                                          74.5
                                        ],
                                        [
                                          0.6,
                                          72.5
                                        ],
                                        [
                                          0.9,
                                          70.4
                                        ],
                                        [
                                          2.1,
                                          64.7
                                        ],
                                        [
                                          2,
                                          64.5
                                        ],
                                        [
                                          0.5,
                                          61.2
                                        ],
                                        [
                                          0,
                                          58.2
                                        ],
                                        [
                                          0.4,
                                          55.6
                                        ],
                                        [
                                          1.7,
                                          53.4
                                        ],
                                        [
                                          4.5,
                                          51.1
                                        ],
                                        [
                                          8.1,
                                          49.8
                                        ],
                                        [
                                          8.8,
                                          49.6
                                        ],
                                        [
                                          9,
                                          47.9
                                        ],
                                        [
                                          16.6,
                                          8.2
                                        ],
                                        [
                                          16.6,
                                          7.5
                                        ],
                                        [
                                          17.1,
                                          5.5
                                        ],
                                        [
                                          18.2,
                                          3.4
                                        ],
                                        [
                                          20.2,
                                          1.8
                                        ],
                                        [
                                          23.3,
                                          0.7
                                        ],
                                        [
                                          27.4,
                                          0.2
                                        ],
                                        [
                                          29.8,
                                          0.1
                                        ],
                                        [
                                          37,
                                          0.6
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
                                          23,
                                          23,
                                          23,
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
                                        75.7,
                                        0
                                      ],
                                      [
                                        75.7,
                                        97.6
                                      ],
                                      [
                                        0,
                                        97.6
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
                          ],
                          "haloSize": 1,
                          "scaleX": 1,
                          "angleAlignment": "Display"
                        }
                      }
                    ],
                    "scaleSymbolsProportionally": true,
                    "respectFrame": true
                  }
                ],
                "haloSize": 1,
                "scaleX": 1,
                "angleAlignment": "Display"
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
                    75.7,
                    0
                  ],
                  [
                    75.7,
                    97.6
                  ],
                  [
                    0,
                    97.6
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
    }
  }
});