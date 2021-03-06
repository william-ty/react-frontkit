/*******************************************************************************
 * ASSETS
 * Path: assets.js
 ******************************************************************************/

// Import CSS entry point for webpack
import '../scss/main.scss';

// Import or require all assets (CSS, images, sprites...)

console.log("main.js has started loading...")


// SVG sprites
// See: https://community.wia.io/d/6-generating-an-svg-sprite-sheet-with-webpack
function requireAll(r) {
    r.keys().forEach(r)
}

requireAll(require.context("../img/sprites/", true, /\.svg$/))

const assets = () => {}

console.log("assets.js is loaded")

export default assets
