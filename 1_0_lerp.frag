#version 300 es
precision mediump float;
out vec4 fragColor;
uniform vec2 u_resolution;
/**
* 2点の線形補完
*/
void main(){
  vec2 pos = gl_FragCoord.xy / u_resolution.xy;
  vec3 RED = vec3(1.0, 0.0, 0.0);
  vec3 BLUE = vec3(0.0, 0.0, 1.0);
  vec3 col = mix(RED, BLUE, pos.x);
  fragColor = vec4(col, 1.0); 
}