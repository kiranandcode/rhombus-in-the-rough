#version 330
// Input vertex attributes (from vertex shader)
in vec2 fragTexCoord;
in vec4 fragColor;

// Output fragment color
out vec4 finalColor;

uniform vec2 params;
uniform vec2 screen_size;
uniform sampler2D texture0;
uniform sampler2D texture1;
float diamond_pixel_size = 10.0;

void main() {
  vec2 subsampled_pos = abs(fract((fragTexCoord * diamond_pixel_size)) - 0.5);
  float computed_value = subsampled_pos.x + subsampled_pos.y - fragTexCoord.y + fragTexCoord.x;
  if (computed_value <= 2 * params.x) {
    finalColor = texture(texture0, fragTexCoord);
  } else if (computed_value > 2 * params.x && computed_value < 3 * params.x) {
    discard;
  } else {
    finalColor = texture(texture1, fragTexCoord);
  }
  
}
