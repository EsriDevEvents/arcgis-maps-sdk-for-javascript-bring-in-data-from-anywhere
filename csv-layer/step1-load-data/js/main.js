/**
 * Step 1: Load data
 * Description: Demonstrates how to load a CSVLayer from a portalItem containing a csv file. Data
 * must contain lat / long coordinates to bring it into the ArcGIS Maps SDK for JavaScript.
 */
require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/CSVLayer"
], function(
  Map, MapView, CSVLayer,
) {

  const csvLayer = new CSVLayer({
    portalItem: {
      id: "e6eed287d81a409181b008bec06d9164",
      // For use when loading data from an Enterprise Portal
      // portal: {
      //   url: "https://machine-name.domain.com/portal"
      // }
    },
    copyright: "nuforc.org",
    title: "NUFORC UFO Sightings"
  });

  const map = new Map({
    basemap: "dark-gray-vector",
    layers: [csvLayer]
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [10, 49],
    zoom: 3
  });

});