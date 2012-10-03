/* This file is part of Mura CMS. 

	Mura CMS is free software: you can redistribute it and/or modify 
	it under the terms of the GNU General Public License as published by 
	the Free Software Foundation, Version 2 of the License. 

	Mura CMS is distributed in the hope that it will be useful, 
	but WITHOUT ANY WARRANTY; without even the implied warranty of 
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
	GNU General Public License for more details. 

	You should have received a copy of the GNU General Public License 
	along with Mura CMS.  If not, see <http://www.gnu.org/licenses/>. 

	Linking Mura CMS statically or dynamically with other modules constitutes the preparation of a derivative work based on 
	Mura CMS. Thus, the terms and conditions of the GNU General Public License version 2 ("GPL") cover the entire combined work.
	
	However, as a special exception, the copyright holders of Mura CMS grant you permission to combine Mura CMS with programs
	or libraries that are released under the GNU Lesser General Public License version 2.1.
	
	In addition, as a special exception, the copyright holders of Mura CMS grant you permission to combine Mura CMS with 
	independent software modules (plugins, themes and bundles), and to distribute these plugins, themes and bundles without 
	Mura CMS under the license of your choice, provided that you follow these specific guidelines: 
	
	Your custom code 
	
	• Must not alter any default objects in the Mura CMS database and
	• May not alter the default display of the Mura CMS logo within Mura CMS and
	• Must not alter any files in the following directories.
	
	 /admin/
	 /tasks/
	 /config/
	 /requirements/mura/
	 /Application.cfc
	 /index.cfm
	 /MuraProxy.cfc
	
	You may copy and distribute Mura CMS with a plug-in, theme or bundle that meets the above guidelines as a combined work 
	under the terms of GPL for Mura CMS, provided that you include the source code of that other code when and as the GNU GPL 
	requires distribution of source code.
	
	For clarity, if you create a modified version of Mura CMS, you are not obligated to grant this special exception for your 
	modified version; it is your choice whether to do so, or to make such modified version available under the GNU General Public License 
	version 2 without this exception.  You may, if you choose, apply this exception to your own modified versions of Mura CMS. */(function(e){var t={},n=[],r={},i={},s="",o="",u={};if(window.Prototype){delete Object.prototype.toJSON;delete Array.prototype.toJSON;delete Hash.prototype.toJSON;delete String.prototype.toJSON}e.fn.templatebuilder=function(u){function x(n){g.hide();b.hide();e("#mura-tb-fields").sortable({axis:"y",opacity:.6,delay:200,update:function(n,r){e(this).children().each(function(){});t.fieldorder=e("#mura-tb-fields").sortable("toArray");t.issortchanged=1}});O();T(n)}function T(e){Y();t=e.form;r=e.datasets;i.fields={};C()}function N(e){}function C(){n=t.fieldorder.slice(0);if(n.length){var e=n.shift();L(t.fields[e])}}function k(e){t.fieldorder.push(e.fieldid);t.fields[e.fieldid]=e;L(e)}function L(e){h["field-block"]==undefined?et("field-block",A,e):A("field-block",e)}function A(r,i){e("#mura-tb-fields-empty").hide();var s=e(h["field-block"]),o={};o.fieldType="field-"+i.fieldtype.fieldtype;o.fieldID=i.fieldid;e("ul",s).hide();s.attr("id",i.fieldid);e(".mura-tb-block",s).attr("data-field",JSON.stringify(o));e(".mura-tb-block",s).addClass(i.fieldtype.displaytype);s.addClass("field-"+i.fieldtype.fieldtype);e("span",s).html(i.label);e("#mura-tb-fields").append(s);if(n.length){var u=n.shift();L(t.fields[u])}}function O(){e("#mura-templatebuilder .mura-tb-menu div").each(function(){var n=e(this);n.click(function(){Z(e(this).attr("data-object"),t.formid)})});e("#mura-tb-fields li div").live("click",function(){M(this)})}function M(n){var r=e(n),i=r.parent(),s=r.attr("data-field"),u=e.parseJSON(s),a=t.fields[u.fieldID],f="field-"+a.fieldtype.fieldtype,l=e('<div class="pointer"></div>');if(o==1){var c=CKEDITOR.instances.field_textblock;c.destroy();o=!1}e("#mura-tb-field-empty").hide();g.hide();y.hide();b.hide();if(d!=""){e(".ui-button",d).each(function(){e(this).unbind()});e("ul",d).hide();d.removeClass("selected");e(".pointer").remove()}p=r;d=i;v=u.fieldID;e("ul",d).show();d.addClass("selected");d.append(l);e(".ui-button",d).each(function(){e(this).click(function(){switch(e(this).attr("id")){case"button-trash":P()}})});h[f]==undefined?et(f):_();a.fieldtype.isdata==1&&(a.datasetid.length?H():nt())}function _(){var n=t.fields[v],r="field-"+n.fieldtype.fieldtype;e(".tb-label").unbind();e("#mura-tb-field-form").unbind();g.html(h[r]);g.show();e("#mura-tb-form").jsonForm({source:n,createOnNull:!0,createOnDataNull:!0,bindBy:"name",baseObject:"field"});e("#mura-tb-form").bind("jsonformField",function(r,i){if(i.kind=="selected"){s!=undefined&&e(s).removeClass("selected");s=i.object;e(s).addClass("selected")}else if(i.kind=="update"){n.isdirty=1;t.isdirty=1}});e("#mura-tb-form #mura-tb-form-label").html(e(".tb-label").val());e(".tb-label").keyup(function(){var t=e(this).val(),n=t.replace(/[^A-Za-z|_]/g,"").toLowerCase();e("#tb-name").val(n);e("#tb-name").trigger("change");e("span",p).html(t);e("#mura-tb-form-label").html(t)});e("#ui-tabs").tabs();e("#ui-tabs").tabs("select",0);if(n.fieldtype.fieldtype=="textblock"){e("#field_textblock").ckeditor({toolbar:"Basic",customConfig:"config.js.cfm"},D);o=!0}}function D(){var n=CKEDITOR.instances.field_textblock,r=t.fields[v];n.on("change",function(t){r.value=e("#field_textblock").val()})}function P(){var n=t.fields[v],i=e("#"+v);delete t.fields[v];e("#mura-tb-field-empty").show();i.remove();g.hide();y.hide();b.hide();t.fieldorder=e("#mura-tb-fields").sortable("toArray");n.datasetid.length&&delete r[n.datasetid];t.fieldorder.length||e("#mura-tb-fields-empty").show()}function H(){var e=t.fields[v],n=e.datasetid,i=r[n];m=i;y.hide();b.hide();if(m.sourcetype==""){j();return}m.sourcetype=="entered"?h["dataset-grid"]==undefined?et("dataset-grid",q):q():h["dataset-sourced"]==undefined?et("dataset-sourced",B):B()}function B(){y.hide();b.hide();e(".ui-button",b).unbind();b.html(h["dataset-sourced"]);e(".ui-button",b).click(function(){switch(e(this).attr("id")){case"button-grid-edit":j()}});e("#tb-source").val(m.source);b.show()}function j(){var e=t.fields[v],n=e.datasetid,i=r[n];m=i;y.hide();b.hide();h["dataset-form"]==undefined?et("dataset-form",I):F()}function F(){var n=t.fields[v],i=n.datasetid,s=r[i];m=s;e(".mura-tb-dsi").hide();switch(m.sourcetype){case"entered":e(".mura-tb-grp-entered").show();break;case"dsp":case"object":case"remote":e(".mura-tb-grp-source").show();break;default:e(".mura-tb-grp-entered").show()}e("#mura-tb-dataset-issorted").val()==1?e(".mura-tb-grp-sorted").show():e(".mura-tb-grp-sorted").hide();if(m.sourcetype.length==0){e("#button-grid-grid",y).unbind();e("#button-grid-grid",y).hide()}else{e("#button-grid-grid",y).show();e("#button-grid-grid",y).click(function(){H()})}e("#mura-tb-dataset-sourcetype").val(m.sourcetype);e("#mura-tb-dataset-issorted").val(m.issorted);e("#mura-tb-dataset-sorttype").val(m.sorttype);e("#mura-tb-dataset-sortcolumn").val(m.sortcolumn);e("#mura-tb-dataset-sortdirection").val(m.sortcolumn);e("#mura-tb-dataset-source").val(m.source);y.show()}function I(){var n=t.fields[v],i=n.datasetid,s=r[i];m=s;y.hide();y.html(h["dataset-form"]);e("#mura-tb-dataset-sourcetype").change(function(){e(".mura-tb-dsi").hide();m.sourcetype=e(this).val();e("#button-grid-grid",y).unbind();e("#button-grid-grid",y).hide();if(m.sourcetype=="entered"){e(".mura-tb-grp-entered").show();e("#mura-tb-dataset-issorted").val()==1?e(".mura-tb-grp-sorted").show():e(".mura-tb-grp-sorted").hide()}else e(".mura-tb-grp-source").show()});e("#mura-tb-dataset-issorted").change(function(){e(".mura-tb-grp-sorted").hide();m.issorted=e(this).val();m.issorted==1?e(".mura-tb-grp-sorted").show():e(".mura-tb-grp-sorted").hide()});e("#mura-tb-save-dataset").click(function(){m.sourcetype=e("#mura-tb-dataset-sourcetype").val();m.issorted=e("#mura-tb-dataset-issorted").val();m.sorttype=e("#mura-tb-dataset-sorttype").val();m.sortcolumn=e("#mura-tb-dataset-sortcolumn").val();m.sortdirection=e("#mura-tb-dataset-sortdirection").val();m.source=e("#mura-tb-dataset-source").val();if(m.sourcetype!="entered"&&!m.source.length){K("message-dataset-sourcerequired");return}H()});F()}function q(){var n=t.fields[v],i=n.datasetid,s=r[i];e(".ui-tabs-nav li",b).unbind();b.html(h["dataset-grid"]);w=e("#mura-tb-grid-table");E=e("#mura-tb-grid-table-header");R("edit");b.html(h["dataset-sourced"]);e(".ui-tabs-nav li",b).click(function(){switch(e(this).attr("id")){case"button-grid-edit":j()}});e(".ui-button",b).click(function(){switch(e(this).attr("id")){case"button-grid-add":$()}});e(".mura-tb-grid-radio",b).live("click",function(){id=e(this).attr("data-id");m.defaultid=id});b.show();U()}function R(e){var n=t.fields[v],i=n.datasetid,s=r[i]}function U(){h["dataset-row"]==undefined?et("dataset-row",z):z()}function z(){var n=t.fields[v],i=n.datasetid,s=r[i],o="";e(":input",w).unbind();var u="";w.html("");E.html("");s.issorted!=1&&w.sortable({axis:"y",opacity:.6,delay:200,update:function(t,n){var r=0;e(this).children().each(function(){r++;r%2?e(this).addClass("alt"):e(this).removeClass("alt")});s.datarecordorder=w.sortable("toArray");s.issortchanged=1},receive:function(e,t){}});X();for(var a=0;a<s.datarecordorder.length;a++){o=s.datarecords[s.datarecordorder[a]];o&&$(o)}}function W(n){var i=t.fields[v],s=i.datasetid,o=r[s],u=n.id;e("#"+u,w).remove();if(!o.datarecords[u].config.isphantom){o.deletedrecords[u]=1;o.isdirty=1}delete o.datarecords[u];for(var a=0;a<o.datarecordorder.length;a++)if(o.datarecordorder[a]==u){o.datarecordorder.splice(a,1);break}}function X(){var n=t.fields[v],i=n.datasetid,s=r[i],o=e(h["dataset-row"]),u=e("#element-cell",o).html(),a=e("#element-row",o).html(),f="",c=e(a);f=e(u);f.addClass("mura-tb-cell-input");f.addClass("mura-tb-cell-label");f.html(e("#element-labels #label",o).html());c.append(f);for(var p=0;p<l.dataColumns.length;p++){colName=l.dataColumns[p];f=e(u);f.addClass("mura-tb-cell-input");f.html(e("#element-labels #"+colName,o).html());c.append(f)}E.append(c)}function V(){var n=t.fields[v],i=n.datasetid,s=r[i],o=uuid(),u=e.extend({},s.model);s.isdirty=1;u.config={};u.datarecordid=o;u.config.isphantom=1;u.isdirty=1;s.datarecordorder.push(o);s.datarecords[o]=u;return u}function $(n){n||(n=V());var i=t.fields[v],s=i.datasetid,o=r[s],u=0,a="",f="",c=e(h["dataset-row"]),p=e("#element-cell",c).html(),d=e("#element-display",c).html(),m=e("#element-input",c).html(),g=e("#element-radio",c).html(),y=e("#element-checkbox",c).html(),b=e("#element-row",c).html(),E=e("#element-handle",c).html(),S=e("#element-button-delete",c).html(),x="",T="",N="",C="",k="",L="",C="",A="",O="";u=1;C=e(b);C.attr("id",n.datarecordid);if(o.issorted!=1){e("#mura-tb-grid-table-header li").removeClass("nohandle");C.append(E)}else e("#mura-tb-grid-table-header li").addClass("nohandle");if(i.fieldtype.fieldtype!="checkbox"){x=e(p);x.addClass("mura-tb-cell-small");k=e(g);k.attr("data-id",n.datarecordid);k.attr("name","isdefault");o.defaultid==n.datarecordid&&k.attr("CHECKED","CHECKED");x.append(k);C.append(x)}else{x=e(p);x.addClass("mura-tb-cell-small");L=e(y);L.attr("data-id",n.datarecordid);L.attr("name","isselected");n.isselected==1&&L.attr("CHECKED","CHECKED");x.append(L);C.append(x)}x=e(p);x.addClass("mura-tb-cell-input");N=e(m);N.attr("data-id",n.datarecordid);N.attr("name","label");N.val(n.label);x.append(N);C.append(x);for(var M=0;M<l.dataColumns.length;M++){a=l.dataColumns[M];x=e(p);x.addClass("mura-tb-cell-input");N=e(m);N.attr("data-id",n.datarecordid);N.attr("name",a);N.val(n[a]);x.append(N);C.append(x)}x=e(p);x.addClass("mura-tb-cell-delete");O=e(S);O.attr("data-id",n.datarecordid);x.append(O);C.append(x);w.append(C);w.children().length%2&&C.addClass("alt");e(".mura-tb-grid-input",C).each(function(){e(this).keyup(function(){var t=e(this).attr("name"),n=e(this).attr("data-id");o.datarecords[n][t]=e(this).val();o.datarecords[n].isdirty=1;o.isdirty=1})});e(".button-grid-row-delete",C).click(function(){var t=e(this).attr("data-id");K("message-delete-row",!1,W,{id:t})});e(".mura-tb-grid-checkbox",C).change(function(){var t=e(this).attr("name"),n=e(this).attr("data-id");o.datarecords[n][t]=e(this).is(":checked")?1:0;o.datarecords[n].isdirty=1;o.isdirty=1});return C}function J(e){h["dataset-create"]==undefined?Z(v,"dataset-create"):fieldData.fieldtype.isdata!=1&&K("message-dataset-new")}function K(t,n,r,i,s,o){bt={};n==0&&(bt[s?s:l.lbl.yes]=function(){e(this).dialog("close");r&&r(i)});bt[o?o:l.lbl.no]=function(){e(this).dialog("close")};h[t]?e("<div id='closable' style='display: none'>"+h[t]+"</div>").dialog({modal:!0,resizable:!1,buttons:bt}):tt(t,n,r,i,s,o)}function Q(e){return i.fields.dirty[e]==undefined?!1:!0}function G(e){return i.fields.created[e]==undefined?!1:!0}function Y(){e("#mura-tb-fields").children().remove();g.html("")}function Z(n){var r=this,i={},s=n,o=Math.floor(Math.random()*9999999);i.fieldtype=s;i.formid=t.formid;e.ajax({url:l.url+"?muraAction=cform.getfield&i="+o,type:"POST",data:i,cache:!1,success:function(e){k(e)},error:function(){alert("fail: load field")}})}function et(t,n,r){var i={},s=Math.floor(Math.random()*9999999);i.fieldType=t;e.ajax({url:l.url+"?muraAction=cform.getfieldtemplate&i="+s,type:"POST",data:i,cache:!1,success:function(e){h[t]=e;n?n(t,r):_()},error:function(){alert("fail: load template")}})}function tt(t,n,r,i,s,o){var u={},a=Math.floor(Math.random()*9999999);u.dialog=t;e.ajax({url:l.url+"?muraAction=cform.getdialog&i="+a,type:"POST",data:u,cache:!1,success:function(e){h[t]=e;K(t,n,r,i,s,o)},error:function(){alert("fail: load dialog")}})}function nt(n){var i={},s=t.fields[v],o=Math.floor(Math.random()*9999999);i.datasetID=n==undefined?s.datasetid:n;i.fieldID=v;e.ajax({url:l.url+"?muraAction=cform.getdataset&i="+o,type:"POST",data:i,cache:!1,success:function(e){if(i.datasetID.length==0){r[e.datasetid]=e;s.datasetid=e.datasetid;j()}},error:function(){alert("fail: load dataset")}})}function rt(){var e={};for(var n in t)typeof t[n]=="string"&&(e[n]=t[n]);return e}function it(e){var t={},n=r[e];for(var i in n)typeof n[i]=="string"&&(t[i]=n[i]);return t}if(u){var a={},f=[];a.form=t;a.datasets=r;e("#mura-formdata").val(JSON.stringify(a));return!1}var l=e.extend({},e.fn.templatebuilder.defaults,l),c=e.parseJSON(e("#mura-formdata").val()),h={},p="",d="",v="",m="",g=e("#mura-tb-field"),y=e("#mura-tb-dataset-form"),b=e("#mura-tb-grid"),w="",E="",S=0;l.url||(l.url=e("#mura-templatebuilder").attr("data-url"));x(c)};e.templatebuilder={};e.fn.templatebuilder.defaults={url:"",formid:"",mode:"create",dataColumns:["value"],lbl:{yes:"Yes",no:"Cancel",cancel:"Cancel"}};e.templatebuilder.clear=function(e){};uuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,n=e=="x"?t:t&3|8;return n.toString(16)})}})(jQuery);