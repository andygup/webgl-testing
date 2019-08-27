
# WebGL testing

## Performance Testing Goals

* Test various hardware configurations
* Test using software emulation - no graphics card
* Compare 3x WebGL to 4x WebGL
* Compare 3x no-WebGL to 4x with WebGL

## Types of Tests
* Initial Load - Measure time until all features are finished rendering on initial load for feature services 
* Post-load - Measure time until all features are finished rendering after pan, zoom and combination of pan zoom with varying amounts of features
   * Feature service
   * Feature collection

## Caveats
* Download speeds - Testing feature service load times are heavily dependant on internet download speeds and these speeds can be highly variable. I suggest at least testing the download speed before running tests.

## Feature Collection Apps
[`3x-fl-collection.html`](3x-fl-collection.html) - Add graphics in increments. No WebGL since it's using a feature collection. 

[`4x-fl-collection.html`](4x-fl-collection.html) - WebGL - Add graphics in increments.

## FeatureLayer with Feature Service Apps

[`3x-fl.html`](3x-fl.html) - Run specific tests with or without WebGL.

[`4x-fl.html`](4x-fl.html) - Run specific tests. WebGL Only.

[`4x-fl-custom-renderer.html`](4x-fl-custom-renderer.html) - Run specific tests and use custom renderer

[`4x-large-fl-load-test.html`](4x-large-fl-load-test.html) - Simply load a very loarge feature layer and measure the load time.

## Graphics Layer Apps

[`4x-custom-gl.html`](4x-custom-gl.html) - Custom graphics layer using blinking graphics.