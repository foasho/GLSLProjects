#version 300 es
precision mediump float;
uniform vec2 u_resolution;
const float PI = 3.1415926;

float atan2(float y, float x) {
  if (x == 0.0){
    return sign(y) * PI / 2.0;
  }
  else {
    return atan(y, x);
  }
}

/**
* 直交座標 => 極座標 
*/ 
vec2 xy2pol(vec2 xy)[
  return vec2(atan2(xy.y, xy.x), length(xy));
]

/**
* 極座標 => 直交座標
*/ 
vec2 pol2xy(vec2 pol)[
  return vec2(pol.y * cos(pol.x), pol.y * sin(pol.x));
]