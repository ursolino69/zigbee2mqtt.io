"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[64281],{59304:(e,n,i)=>{i.r(n),i.d(n,{comp:()=>l,data:()=>r});var a=i(6254);const t={},l=(0,i(32991).A)(t,[["render",function(e,n){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[n[8]||(n[8]=(0,a.Lk)("h1",{id:"tuya-rb-srain01",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-rb-srain01"},[(0,a.Lk)("span",null,"Tuya RB-SRAIN01")])],-1)),(0,a.Lk)("table",null,[n[6]||(n[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[n[2]||(n[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"RB-SRAIN01")],-1)),(0,a.Lk)("tr",null,[n[1]||(n[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>n[0]||(n[0]=[(0,a.eW)("Tuya")]))),_:1})])]),n[3]||(n[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Solar rain sensor")],-1)),n[4]||(n[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"illuminance, illuminance_average_20min, illuminance_maximum_today, cleaning_reminder, rain_intensity, rain, battery")],-1)),n[5]||(n[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/RB-SRAIN01.png",alt:"Tuya RB-SRAIN01"})])],-1))])]),n[9]||(n[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>n[7]||(n[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),n[10]||(n[10]=(0,a.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-average-20min-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-average-20min-numeric"><span>Illuminance average 20min (numeric)</span></a></h3><p>Illuminance average for the last 20 minutes. Value can be found in the published state on the <code>illuminance_average_20min</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="illuminance-maximum-today-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-maximum-today-numeric"><span>Illuminance maximum today (numeric)</span></a></h3><p>Illuminance maximum for the last 24 hours. Value can be found in the published state on the <code>illuminance_maximum_today</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="cleaning-reminder-binary" tabindex="-1"><a class="header-anchor" href="#cleaning-reminder-binary"><span>Cleaning reminder (binary)</span></a></h3><p>Cleaning reminder. Value can be found in the published state on the <code>cleaning_reminder</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> cleaning reminder is ON, if <code>false</code> OFF.</p><h3 id="rain-intensity-numeric" tabindex="-1"><a class="header-anchor" href="#rain-intensity-numeric"><span>Rain intensity (numeric)</span></a></h3><p>Rainfall intensity. Value can be found in the published state on the <code>rain_intensity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="rain-binary" tabindex="-1"><a class="header-anchor" href="#rain-binary"><span>Rain (binary)</span></a></h3><p>Indicates whether the device detected rainfall. Value can be found in the published state on the <code>rain</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> rain is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>',16))])}]]),r=JSON.parse('{"path":"/devices/RB-SRAIN01.html","title":"Tuya RB-SRAIN01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya RB-SRAIN01 control via MQTT","description":"Integrate your Tuya RB-SRAIN01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-09-01T12:39:25.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Illuminance average 20min (numeric)","slug":"illuminance-average-20min-numeric","link":"#illuminance-average-20min-numeric","children":[]},{"level":3,"title":"Illuminance maximum today (numeric)","slug":"illuminance-maximum-today-numeric","link":"#illuminance-maximum-today-numeric","children":[]},{"level":3,"title":"Cleaning reminder (binary)","slug":"cleaning-reminder-binary","link":"#cleaning-reminder-binary","children":[]},{"level":3,"title":"Rain intensity (numeric)","slug":"rain-intensity-numeric","link":"#rain-intensity-numeric","children":[]},{"level":3,"title":"Rain (binary)","slug":"rain-binary","link":"#rain-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]}]}],"git":{"updatedTime":1738700508000},"filePathRelative":"devices/RB-SRAIN01.md"}')}}]);