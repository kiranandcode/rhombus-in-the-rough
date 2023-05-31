#version 330

uniform vec2 params;
uniform sampler2D texture0;
uniform sampler2D texture1;

in vec2 fragTexCoord;
in vec4 fragColor;
out vec4 outColor;

void main() {
  outColor = fragColor; //mix(texture(texture0, fragTexCoord), texture(texture1, fragTexCoord), params.x);
}
