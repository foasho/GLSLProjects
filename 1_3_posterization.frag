#version 300 es
precision mediump float;
out vec4 fragColor;
vec2 u_resolution;


void main(){
  vec2 pos = gl_FragCoord.xy/u_resolution.xy;
  float n = 4.0;// 階調数: 色の段階
  pos *= n;
  channel = int(2.0 * gl_FragCoord.x / u_resolution.x);
  if (channel == 0){
    // フラグメント座標を階段化
    pos = floor(pos) + step(0.5, fract(pos));
  }
  else {
    // 後述
  }
  // 階段化した座標を元に戻す
  pos /= n;
  // vec3 col = min(
  //   mix(col)
  // )
}