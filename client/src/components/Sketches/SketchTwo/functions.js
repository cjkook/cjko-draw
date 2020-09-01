export default {
  wavedLinePlane: function (w,h,waveHeightRatio,sw,sc) {
    p5.strokeWeight(sw);
    noStroke();
    fill(bgCol);
    wavedPlane(w, h, waveHeightRatio, false);
    stroke(sc);
    noFill();
    wavedPlane(w, h, waveHeightRatio, true);
  },
  wavedPlane: function () {
    console.log("nice2");
  },
};
