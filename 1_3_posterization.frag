#version 300 es
precision mediump float;
out vec4 fragColor;
uniform vec2 u_resolution;
int channel;
uniform float u_time;
/**
* 階調
*/
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
    float thr = 0.25 * sin(u_time);
    pos = floor(pos) + smoothstep(0.25 + thr, 0.75 - thr, fract(pos));
  }
  vec3[4] col4 = vec3[](
    vec3(1.0, 0.0, 0.0),  
    vec3(0.0, 1.0, 0.0),
    vec3(0.0, 0.0, 1.0),
    vec3(1.0, 1.0, 0.0)
  );
  // 階段化した座標を元に戻す
  pos /= n;
  vec3 col = mix(
    mix(col4[0], col4[1], pos.x), 
    mix(col4[2], col4[3], pos.x), 
    pos.y
  );
  fragColor = vec4(col, 1.0);
}