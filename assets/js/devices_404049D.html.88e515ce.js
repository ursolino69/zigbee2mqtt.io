"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[4855],{74259:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>o,data:()=>a});var s=t(6254);const i={},o=(0,t(32991).A)(i,[["render",function(e,n){const t=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[n[8]||(n[8]=(0,s.Lk)("h1",{id:"muller-licht-404049d",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#muller-licht-404049d"},[(0,s.Lk)("span",null,"Müller Licht 404049D")])],-1)),(0,s.Lk)("table",null,[n[6]||(n[6]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[n[2]||(n[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"404049D")],-1)),(0,s.Lk)("tr",null,[n[1]||(n[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(t,{to:"/supported-devices/#v=M%C3%BCller%20Licht"},{default:(0,s.k6)((()=>n[0]||(n[0]=[(0,s.eW)("Müller Licht")]))),_:1})])]),n[3]||(n[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"Tint dim remote control")],-1)),n[4]||(n[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"action, action_group")],-1)),n[5]||(n[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/404049D.png",alt:"Müller Licht 404049D"})])],-1))])]),n[9]||(n[9]=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Remove the battery cover and use the cover to press the button above the batteries. Press and hold this button for 10-20 seconds and release the button. After that the remote should show up as a paired device.</p><h3 id="groups-binding" tabindex="-1"><a class="header-anchor" href="#groups-binding"><span>Groups binding</span></a></h3><p>This remote is able to deal with 4 ZigBee groups:</p><ul><li>group0 = All three leds lit</li><li>group1 = first led lit</li><li>group2 = second led lit</li><li>group3 = third let lit</li></ul><p>The device is bound to the default tint action groups (group0-3) with ids 16387/16388/16389/16390. This cannot be changed.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',8)),(0,s.Lk)("p",null,[(0,s.Lk)("em",null,[(0,s.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.k6)((()=>n[7]||(n[7]=[(0,s.eW)("How to use device type specific configuration")]))),_:1})])]),n[10]||(n[10]=(0,s.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>, <code>brightness_stop</code>, <code>color_temperature_move</code>, <code>color_move</code>, <code>scene_1</code>, <code>scene_2</code>, <code>scene_3</code>, <code>scene_4</code>, <code>scene_5</code>, <code>scene_6</code>, <code>scene_7</code>, <code>scene_8</code>, <code>scene_9</code>, <code>scene_10</code>.</p><h3 id="action-group-numeric" tabindex="-1"><a class="header-anchor" href="#action-group-numeric"><span>Action group (numeric)</span></a></h3><p>Group where the action was triggered on. Value can be found in the published state on the <code>action_group</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>',7))])}]]),a=JSON.parse('{"path":"/devices/404049D.html","title":"Müller Licht 404049D control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Müller Licht 404049D control via MQTT","description":"Integrate your Müller Licht 404049D via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-26T06:45:18.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Groups binding","slug":"groups-binding","link":"#groups-binding","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Action group (numeric)","slug":"action-group-numeric","link":"#action-group-numeric","children":[]}]}],"git":{"updatedTime":1738700508000},"filePathRelative":"devices/404049D.md"}')}}]);