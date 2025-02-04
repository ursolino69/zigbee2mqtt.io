"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78769],{90171:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>c});var i=o(6254);const a={},d=(0,o(32991).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[11]||(t[11]=(0,i.Lk)("h1",{id:"custom-devices-diy-lywsd03mmc",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#custom-devices-diy-lywsd03mmc"},[(0,i.Lk)("span",null,"Custom devices (DiY) LYWSD03MMC")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"LYWSD03MMC")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Custom%20devices%20(DiY)"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Custom devices (DiY)")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Xiaomi temperature & humidity sensor with custom firmware")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"battery, temperature, humidity, temperature_display_mode, show_smiley, enable_display, temperature_calibration, humidity_calibration, comfort_temperature_min, comfort_temperature_max, comfort_humidity_min, comfort_humidity_max")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/LYWSD03MMC.png",alt:"Custom devices (DiY) LYWSD03MMC"})])],-1))])]),t[12]||(t[12]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>Originally this device does not support Zigbee (only Bluetooth). To use this device with Zigbee2MQTT a custom firmware has to be flashed which is explained <a href="https://github.com/devbis/z03mmc/" target="_blank" rel="noopener noreferrer">here</a>. This firmware converts the device from Bluetooth to Zigbee.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',3)),(0,i.Lk)("p",null,[t[8]||(t[8]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,i.eW)("."))]),t[13]||(t[13]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[10]||(t[10]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,i.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="temperature-display-mode-enum" tabindex="-1"><a class="header-anchor" href="#temperature-display-mode-enum"><span>Temperature display mode (enum)</span></a></h3><p>The units of the temperature displayed on the device screen.. Value can be found in the published state on the <code>temperature_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="show-smiley-binary" tabindex="-1"><a class="header-anchor" href="#show-smiley-binary"><span>Show smiley (binary)</span></a></h3><p>Whether to show a smiley on the device screen.. Value can be found in the published state on the <code>show_smiley</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;show_smiley&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;show_smiley&quot;: NEW_VALUE}</code>. If value equals <code>SHOW</code> show smiley is ON, if <code>HIDE</code> OFF.</p><h3 id="enable-display-binary" tabindex="-1"><a class="header-anchor" href="#enable-display-binary"><span>Enable display (binary)</span></a></h3><p>Whether to turn display on/off.. Value can be found in the published state on the <code>enable_display</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;enable_display&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_display&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable display is ON, if <code>OFF</code> OFF.</p><h3 id="temperature-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-calibration-numeric"><span>Temperature calibration (numeric)</span></a></h3><p>The temperature calibration offset is set in 0.01° steps.. Value can be found in the published state on the <code>temperature_calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-100</code> and the maximum value is <code>100</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-calibration-numeric"><span>Humidity calibration (numeric)</span></a></h3><p>The humidity calibration offset is set in 0.01 % steps.. Value can be found in the published state on the <code>humidity_calibration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity_calibration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-100</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="comfort-temperature-min-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-min-numeric"><span>Comfort temperature min (numeric)</span></a></h3><p>Comfort parameters/Temperature minimum, in 0.01°C steps.. Value can be found in the published state on the <code>comfort_temperature_min</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;comfort_temperature_min&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature_min&quot;: NEW_VALUE}</code>. The minimal value is <code>-100</code> and the maximum value is <code>100</code>. The unit of this value is <code>°C</code>.</p><h3 id="comfort-temperature-max-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-max-numeric"><span>Comfort temperature max (numeric)</span></a></h3><p>Comfort parameters/Temperature maximum, in 0.01°C steps.. Value can be found in the published state on the <code>comfort_temperature_max</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;comfort_temperature_max&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature_max&quot;: NEW_VALUE}</code>. The minimal value is <code>-100</code> and the maximum value is <code>100</code>. The unit of this value is <code>°C</code>.</p><h3 id="comfort-humidity-min-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-humidity-min-numeric"><span>Comfort humidity min (numeric)</span></a></h3><p>Comfort parameters/Humidity minimum, in 0.01% steps.. Value can be found in the published state on the <code>comfort_humidity_min</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;comfort_humidity_min&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_humidity_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="comfort-humidity-max-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-humidity-max-numeric"><span>Comfort humidity max (numeric)</span></a></h3><p>Comfort parameters/Humidity maximum, in 0.01% steps.. Value can be found in the published state on the <code>comfort_humidity_max</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;comfort_humidity_max&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_humidity_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>',26))])}]]),c=JSON.parse('{"path":"/devices/LYWSD03MMC.html","title":"Custom devices (DiY) LYWSD03MMC control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Custom devices (DiY) LYWSD03MMC control via MQTT","description":"Integrate your Custom devices (DiY) LYWSD03MMC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-01T18:52:29.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Temperature display mode (enum)","slug":"temperature-display-mode-enum","link":"#temperature-display-mode-enum","children":[]},{"level":3,"title":"Show smiley (binary)","slug":"show-smiley-binary","link":"#show-smiley-binary","children":[]},{"level":3,"title":"Enable display (binary)","slug":"enable-display-binary","link":"#enable-display-binary","children":[]},{"level":3,"title":"Temperature calibration (numeric)","slug":"temperature-calibration-numeric","link":"#temperature-calibration-numeric","children":[]},{"level":3,"title":"Humidity calibration (numeric)","slug":"humidity-calibration-numeric","link":"#humidity-calibration-numeric","children":[]},{"level":3,"title":"Comfort temperature min (numeric)","slug":"comfort-temperature-min-numeric","link":"#comfort-temperature-min-numeric","children":[]},{"level":3,"title":"Comfort temperature max (numeric)","slug":"comfort-temperature-max-numeric","link":"#comfort-temperature-max-numeric","children":[]},{"level":3,"title":"Comfort humidity min (numeric)","slug":"comfort-humidity-min-numeric","link":"#comfort-humidity-min-numeric","children":[]},{"level":3,"title":"Comfort humidity max (numeric)","slug":"comfort-humidity-max-numeric","link":"#comfort-humidity-max-numeric","children":[]}]}],"git":{"updatedTime":1738700508000},"filePathRelative":"devices/LYWSD03MMC.md"}')}}]);