#version 300 es
precision mediump float;
out vec4 fragColor;
uniform vec2 u_resolution;
/**
* 3点の線形補完
*/
void main() {
  vec2 pos = gl_FragCoord.xy / u_resolution.xy;
  // ベクトルの配列を用意
  vec3[3] col3 = vec3[](
    vec3(1.0, 0.0, 0.0),
    vec3(0.0, 1.0, 0.0),
    vec3(0.0, 0.0, 1.0)
  );
  // viewportのX座標を[0, 2]区間にスケール
  pos.x *= 2.0;
  int ind = int(pos.x);
  // x軸に沿った赤、緑、青の順にLerp(補完)する
  vec3 col = mix(col3[ind], col3[ind + 1], fract(pos.x));
  fragColor = vec4(col, 1.0);
}