int analogVal;
int digitalVal;
String delimiter = "&";


int incomingData;


int LED1 = 13;
int LED2 = 12;
int LED3 = 11;
int LED4 = 10;
int LED5 = 9;


void setup() {
   pinMode(LED1, OUTPUT);
   pinMode(LED2, OUTPUT);
   pinMode(LED3, OUTPUT);
   pinMode(LED4, OUTPUT);
   pinMode (LED5, OUTPUT);

  Serial.begin(9600);
   
}


void loop() {

analogVal = analogRead(A0);
  digitalVal = digitalRead(2);

   Serial.println(analogVal+delimiter+digitalVal);
  
if(Serial.available() > 0){ // Checks whether data is comming from the serial port
    //if so, read the incoming data
    incomingData = Serial.read(); // Reads the data from the serial port
 }
 if (incomingData == '0') {
  digitalWrite(LED1, LOW); // Turn off Green Led
  incomingData = 0;
 }
 
 else if (incomingData == '1') {
  digitalWrite(LED1, HIGH); //Turn on Green LED
  digitalWrite(LED2, LOW);    // turn off LED2
  digitalWrite(LED3, LOW);    // turn off LED3 
  digitalWrite(LED4, LOW);    // turn off LED4
  digitalWrite (LED5, LOW);  // turn off LED5
incomingData = 0;
 }

 if (incomingData == '0') {
  digitalWrite (LED2, LOW); //Turn off Red LED
  incomingData = 0;
 }
 else if (incomingData == '2') {
  digitalWrite(LED1, LOW); //Turn off Green LED
  digitalWrite(LED2, HIGH);    // turn on Red LED2
  digitalWrite(LED3, LOW);    // turn off LED3 
  digitalWrite(LED4, LOW);    // turn off LED4
  digitalWrite (LED5, LOW);  // turn off LED5
incomingData = 0;
 }
  if (incomingData == '0') {
  digitalWrite (LED3, LOW); //Turn off Yellow LED
  incomingData = 0;
 }
 else if (incomingData == '3') {
  digitalWrite(LED1, LOW); //Turn off Green LED
  digitalWrite(LED2, LOW);    // turn off Red LED2
  digitalWrite(LED3, HIGH);    // turn on Yellow LED3 
  digitalWrite(LED4, LOW);    // turn off LED4
  digitalWrite (LED5, LOW);  // turn off LED5
incomingData = 0;
 }
  if (incomingData == '0') {
  digitalWrite (LED4, LOW); //Turn off Blue LED
  incomingData = 0;
 }
 else if (incomingData == '4') {
  digitalWrite(LED1, LOW); //Turn off Green LED
  digitalWrite(LED2, LOW);    // turn on Red LED2
  digitalWrite(LED3, LOW);    // turn off LED3 
  digitalWrite(LED4, HIGH);    // turn on BLUE LED4
  digitalWrite (LED5, LOW);  // turn off LED5
incomingData = 0;
 }
 if (incomingData == '0') {
  digitalWrite (LED5, LOW); //Turn off White LED
  incomingData = 0;
 }
 else if (incomingData == '5') {
  digitalWrite(LED1, LOW); //Turn off Green LED
  digitalWrite(LED2, LOW);    // turn on Red LED2
  digitalWrite(LED3, LOW);    // turn off LED3 
  digitalWrite(LED4, LOW);    // turn off LED4
  digitalWrite (LED5, HIGH);  // turn on White LED5
incomingData = 0;
 }
 

  
}
