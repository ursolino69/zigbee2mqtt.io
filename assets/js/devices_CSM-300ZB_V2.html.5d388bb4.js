"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[30586],{82764:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>i,data:()=>n});var o=a(6254);const s={},i=(0,a(32991).A)(s,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[10]||(t[10]=(0,o.Lk)("h1",{id:"shinasystem-csm-300zb-v2",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#shinasystem-csm-300zb-v2"},[(0,o.Lk)("span",null,"ShinaSystem CSM-300ZB_V2")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"CSM-300ZB_V2")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=ShinaSystem"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("ShinaSystem")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"SiHAS multipurpose ToF sensor")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery, voltage, status, people, rf_pairing_on, counting_freeze, tof_init, led_state, rf_state, transaction, fast_in, fast_out")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/CSM-300ZB_V2.png",alt:"ShinaSystem CSM-300ZB_V2"})])],-1))])]),t[11]||(t[11]=(0,o.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,o.Lk)("span",null,"OTA updates")])],-1)),(0,o.Lk)("p",null,[t[8]||(t[8]=(0,o.eW)("This device supports OTA updates, for more information see ")),(0,o.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,o.eW)("."))]),t[12]||(t[12]=(0,o.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="status-enum" tabindex="-1"><a class="header-anchor" href="#status-enum"><span>Status (enum)</span></a></h3><p>Currently status. Value can be found in the published state on the <code>status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>idle</code>, <code>in</code>, <code>out</code>.</p><h3 id="people-numeric" tabindex="-1"><a class="header-anchor" href="#people-numeric"><span>People (numeric)</span></a></h3><p>People count. Value can be found in the published state on the <code>people</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;people&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;people&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="rf-pairing-on-enum" tabindex="-1"><a class="header-anchor" href="#rf-pairing-on-enum"><span>Rf pairing on (enum)</span></a></h3><p>Run RF pairing mode. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rf_pairing_on&quot;: NEW_VALUE}</code>. The possible values are: <code>run</code>.</p><h3 id="counting-freeze-binary" tabindex="-1"><a class="header-anchor" href="#counting-freeze-binary"><span>Counting freeze (binary)</span></a></h3><p>Counting Freeze ON/OFF, not reporting people value when is ON. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;counting_freeze&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> counting freeze is ON, if <code>OFF</code> OFF.</p><h3 id="tof-init-enum" tabindex="-1"><a class="header-anchor" href="#tof-init-enum"><span>Tof init (enum)</span></a></h3><p>ToF sensor initial. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;tof_init&quot;: NEW_VALUE}</code>. The possible values are: <code>initial</code>.</p><h3 id="led-state-binary" tabindex="-1"><a class="header-anchor" href="#led-state-binary"><span>Led state (binary)</span></a></h3><p>Indicate LED enable/disable, default : enable. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_state&quot;: NEW_VALUE}</code>. If value equals <code>enable</code> led state is ON, if <code>disable</code> OFF.</p><h3 id="rf-state-binary" tabindex="-1"><a class="header-anchor" href="#rf-state-binary"><span>Rf state (binary)</span></a></h3><p>RF function enable/disable, default : disable. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rf_state&quot;: NEW_VALUE}</code>. If value equals <code>enable</code> rf state is ON, if <code>disable</code> OFF.</p><h3 id="transaction-enum" tabindex="-1"><a class="header-anchor" href="#transaction-enum"><span>Transaction (enum)</span></a></h3><p>Transaction interval, default : 400ms. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;transaction&quot;: NEW_VALUE}</code>. The possible values are: <code>0ms</code>, <code>200ms</code>, <code>400ms</code>, <code>600ms</code>, <code>800ms</code>, <code>1,000ms</code>.</p><h3 id="fast-in-binary" tabindex="-1"><a class="header-anchor" href="#fast-in-binary"><span>Fast in (binary)</span></a></h3><p>Fast process enable/disable when people 0 to 1. default : enable. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fast_in&quot;: NEW_VALUE}</code>. If value equals <code>enable</code> fast in is ON, if <code>disable</code> OFF.</p><h3 id="fast-out-binary" tabindex="-1"><a class="header-anchor" href="#fast-out-binary"><span>Fast out (binary)</span></a></h3><p>Fast process enable/disable when people 1 to 0. default : enable. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fast_out&quot;: NEW_VALUE}</code>. If value equals <code>enable</code> fast out is ON, if <code>disable</code> OFF.</p>',25))])}]]),n=JSON.parse('{"path":"/devices/CSM-300ZB_V2.html","title":"ShinaSystem CSM-300ZB_V2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ShinaSystem CSM-300ZB_V2 control via MQTT","description":"Integrate your ShinaSystem CSM-300ZB_V2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-08-31T11:26:27.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Status (enum)","slug":"status-enum","link":"#status-enum","children":[]},{"level":3,"title":"People (numeric)","slug":"people-numeric","link":"#people-numeric","children":[]},{"level":3,"title":"Rf pairing on (enum)","slug":"rf-pairing-on-enum","link":"#rf-pairing-on-enum","children":[]},{"level":3,"title":"Counting freeze (binary)","slug":"counting-freeze-binary","link":"#counting-freeze-binary","children":[]},{"level":3,"title":"Tof init (enum)","slug":"tof-init-enum","link":"#tof-init-enum","children":[]},{"level":3,"title":"Led state (binary)","slug":"led-state-binary","link":"#led-state-binary","children":[]},{"level":3,"title":"Rf state (binary)","slug":"rf-state-binary","link":"#rf-state-binary","children":[]},{"level":3,"title":"Transaction (enum)","slug":"transaction-enum","link":"#transaction-enum","children":[]},{"level":3,"title":"Fast in (binary)","slug":"fast-in-binary","link":"#fast-in-binary","children":[]},{"level":3,"title":"Fast out (binary)","slug":"fast-out-binary","link":"#fast-out-binary","children":[]}]}],"git":{"updatedTime":1738700508000},"filePathRelative":"devices/CSM-300ZB_V2.md"}')}}]);