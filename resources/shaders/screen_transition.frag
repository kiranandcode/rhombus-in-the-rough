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
  // vec2 screen_pos = vec2(fragTexCoord.x * screen_size.x, fragTexCoord.y * screen_size.y);
  // vec2 subsampled_screen_pos = fract(abs(screen_pos / diamond_pixel_size - 0.5));
  // vec2 subsampled_pos = vec2(subsampled_screen_pos.x / screen_size.x, subsampled_screen_pos.y / screen_size.y);
  vec2 subsampled_pos = abs(fract((fragTexCoord * diamond_pixel_size)) - 0.5) / diamond_pixel_size;
  if (subsampled_pos.x + subsampled_pos.y > params.x / diamond_pixel_size) {
      finalColor = texture(texture1, fragTexCoord);
  } else {
    finalColor = texture(texture0, fragTexCoord);
  }
  
}
