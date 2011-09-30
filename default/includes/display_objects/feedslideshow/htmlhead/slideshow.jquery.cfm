<!--- This file is part of Mura CMS.

Mura CMS is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, Version 2 of the License.

Mura CMS is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Mura CMS. If not, see <http://www.gnu.org/licenses/>.

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
version 2 without this exception.  You may, if you choose, apply this exception to your own modified versions of Mura CMS.
--->
<cfoutput>
<script src="#event.getSite().getAssetPath()#/includes/display_objects/feedslideshow/js/jquery.cycle.js" type="text/javascript"></script>
<script src="#event.getSite().getAssetPath()#/includes/display_objects/feedslideshow/js/slideshow.jquery.js" type="text/javascript"></script>

<cfset imageBorder = 6> <!--- Total number of pixels of top and bottom borders --->
<cfset minHeight = #$.siteConfig('galleryMediumScale')# + imageBorder> <!--- Add the border to the size of the medium image set in site settings--->

<cfset topBottomMargin = 20> <!--- Total of top and bottom margin on each slide (dl) --->
<cfset slideMargin = #$.siteConfig('galleryMediumScale')# + topBottomMargin>

<cfset addToPager = 10> <!--- Total of top and bottom margin on each slide (dl) --->
<cfset pagerWidth = #$.siteConfig('galleryMediumScale')# + addToPager>

<!--- These are only applicable for square images. Images constrained by x or y in site settings must be accounted for directly in CSS --->
<style>
	
	.svSlides dl.hasImage {
	padding-left: #slideMargin#px !important;
	min-height: #minHeight#px !important;
	}
	
	ol.svPager { <!--- Center the pager beneath the image  --->
	width: #pagerWidth#px !important;
	}
	
	<!--- Not sure if this is needed --->
	<cfif $.content('contentID') EQ "00000000000000000000000000000000001">	
	.home .svSlides { min-height: #minHeight#px !important; }
	* html .home .svSlides { height: #minHeight#px !important; } <!-- ie6 -->

	.home .svSlides dl { height: #slideMargin#px !important; }
	</cfif>
</style>

</cfoutput>