"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[77317],{33292:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>a,data:()=>l});var c=t(6254);const d={},a=(0,t(32991).A)(d,[["render",function(e,o){const t=(0,c.g2)("RouteLink");return(0,c.uX)(),(0,c.CE)("div",null,[o[8]||(o[8]=(0,c.Lk)("h1",{id:"yale-yrd652ha20bp",tabindex:"-1"},[(0,c.Lk)("a",{class:"header-anchor",href:"#yale-yrd652ha20bp"},[(0,c.Lk)("span",null,"Yale YRD652HA20BP")])],-1)),(0,c.Lk)("table",null,[o[6]||(o[6]=(0,c.Lk)("thead",null,[(0,c.Lk)("tr",null,[(0,c.Lk)("th"),(0,c.Lk)("th")])],-1)),(0,c.Lk)("tbody",null,[o[2]||(o[2]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Model"),(0,c.Lk)("td",null,"YRD652HA20BP")],-1)),(0,c.Lk)("tr",null,[o[1]||(o[1]=(0,c.Lk)("td",null,"Vendor",-1)),(0,c.Lk)("td",null,[(0,c.bF)(t,{to:"/supported-devices/#v=Yale"},{default:(0,c.k6)((()=>o[0]||(o[0]=[(0,c.eW)("Yale")]))),_:1})])]),o[3]||(o[3]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Description"),(0,c.Lk)("td",null,"Assure lock SL")],-1)),o[4]||(o[4]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Exposes"),(0,c.Lk)("td",null,"lock (state, lock_state), battery, pin_code, action_source_name, action_user, auto_relock_time, sound_volume, battery_low, action")],-1)),o[5]||(o[5]=(0,c.Lk)("tr",null,[(0,c.Lk)("td",null,"Picture"),(0,c.Lk)("td",null,[(0,c.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/YRD652HA20BP.png",alt:"Yale YRD652HA20BP"})])],-1))])]),o[9]||(o[9]=(0,c.Lk)("h2",{id:"options",tabindex:"-1"},[(0,c.Lk)("a",{class:"header-anchor",href:"#options"},[(0,c.Lk)("span",null,"Options")])],-1)),(0,c.Lk)("p",null,[(0,c.Lk)("em",null,[(0,c.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,c.k6)((()=>o[7]||(o[7]=[(0,c.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,c.Fv)('<ul><li><code>expose_pin</code>: Expose pin of this lock in the published payload (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock"><span>Lock</span></a></h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="pin-code-composite" tabindex="-1"><a class="header-anchor" href="#pin-code-composite"><span>Pin code (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pin_code&quot;: {&quot;user&quot;: VALUE, &quot;user_type&quot;: VALUE, &quot;user_enabled&quot;: VALUE, &quot;pin_code&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pin_code&quot;: &quot;&quot;}</code>.</p><ul><li><code>user</code> (numeric): User ID to set or clear the pincode for</li><li><code>user_type</code> (enum): Type of user, unrestricted: owner (default), (year|week)_day_schedule: user has ability to open lock based on specific time period, master: user has ability to both program and operate the door lock, non_access: user is recognized by the lock but does not have the ability to open the lock allowed values: <code>unrestricted</code>, <code>year_day_schedule</code>, <code>week_day_schedule</code>, <code>master</code>, <code>non_access</code></li><li><code>user_enabled</code> (binary): Whether the user is enabled/disabled allowed values: <code>true</code> or <code>false</code></li><li><code>pin_code</code> (numeric): Pincode to set, set pincode to null to clear</li></ul><h3 id="action-source-name-enum" tabindex="-1"><a class="header-anchor" href="#action-source-name-enum"><span>Action source name (enum)</span></a></h3><p>Source of the triggered action on the lock. Value can be found in the published state on the <code>action_source_name</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>keypad</code>, <code>rfid</code>, <code>manual</code>, <code>rf</code>.</p><h3 id="action-user-numeric" tabindex="-1"><a class="header-anchor" href="#action-user-numeric"><span>Action user (numeric)</span></a></h3><p>ID of user that triggered the action on the lock. Value can be found in the published state on the <code>action_user</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="auto-relock-time-numeric" tabindex="-1"><a class="header-anchor" href="#auto-relock-time-numeric"><span>Auto relock time (numeric)</span></a></h3><p>The number of seconds to wait after unlocking a lock before it automatically locks again. 0=disabled. Value can be found in the published state on the <code>auto_relock_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;auto_relock_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_relock_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3600</code>. The unit of this value is <code>s</code>.</p><h3 id="sound-volume-enum" tabindex="-1"><a class="header-anchor" href="#sound-volume-enum"><span>Sound volume (enum)</span></a></h3><p>Sound volume of the lock. Value can be found in the published state on the <code>sound_volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sound_volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>silent_mode</code>, <code>low_volume</code>, <code>high_volume</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>unknown</code>, <code>lock</code>, <code>unlock</code>, <code>lock_failure_invalid_pin_or_id</code>, <code>lock_failure_invalid_schedule</code>, <code>unlock_failure_invalid_pin_or_id</code>, <code>unlock_failure_invalid_schedule</code>, <code>one_touch_lock</code>, <code>key_lock</code>, <code>key_unlock</code>, <code>auto_lock</code>, <code>schedule_lock</code>, <code>schedule_unlock</code>, <code>manual_lock</code>, <code>manual_unlock</code>, <code>non_access_user_operational_event</code>.</p>',21))])}]]),l=JSON.parse('{"path":"/devices/YRD652HA20BP.html","title":"Yale YRD652HA20BP control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Yale YRD652HA20BP control via MQTT","description":"Integrate your Yale YRD652HA20BP via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-30T19:41:12.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Pin code (composite)","slug":"pin-code-composite","link":"#pin-code-composite","children":[]},{"level":3,"title":"Action source name (enum)","slug":"action-source-name-enum","link":"#action-source-name-enum","children":[]},{"level":3,"title":"Action user (numeric)","slug":"action-user-numeric","link":"#action-user-numeric","children":[]},{"level":3,"title":"Auto relock time (numeric)","slug":"auto-relock-time-numeric","link":"#auto-relock-time-numeric","children":[]},{"level":3,"title":"Sound volume (enum)","slug":"sound-volume-enum","link":"#sound-volume-enum","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1738700508000},"filePathRelative":"devices/YRD652HA20BP.md"}')}}]);