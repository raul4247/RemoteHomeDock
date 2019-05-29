#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>
#include <ESP8266mDNS.h>

const char* ssid = "xxxxx";
const char* password = "xxxxx";
const int RELAY = D1;
const int BUZZER = D2;
const int LED = D3;

ESP8266WebServer server(3000);

bool statusLight = false;

void handleRoot() {
  server.send(200, "text/plain", "online");
}

void handleLight() {
  if(statusLight)
    digitalWrite(RELAY, LOW);
  else
    digitalWrite(RELAY, HIGH);

  statusLight = !statusLight;
  server.send(200, "text/plain", "switched!");
}

void handleBeep() {
  digitalWrite(BUZZER, HIGH);
  delay(300);
  digitalWrite(BUZZER, LOW);
  server.send(200, "text/plain", "beeped!");
}

void setup(void){
  pinMode(RELAY, OUTPUT);
  pinMode(BUZZER, OUTPUT);
  pinMode(LED, OUTPUT);
  digitalWrite(LED, LOW);
  digitalWrite(BUZZER, LOW);
  digitalWrite(LED, LOW);
  
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connected to ");
  Serial.println(ssid);
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());

  if (MDNS.begin("esp8266"))
    Serial.println("MDNS responder started");

  digitalWrite(LED, HIGH);
  digitalWrite(BUZZER, HIGH);
  delay(300);
  digitalWrite(BUZZER, LOW);
  server.on("/", handleRoot);
  server.on("/light", handleLight);
  server.on("/beep", handleBeep);

  server.begin();
  Serial.println("HTTP server started");
}

void loop(void){
  server.handleClient();
}
