//https://github.com/manifestinteractive/jqvmap

jQuery(document).ready(function() {
var state_count = [];

jQuery('#hidden_states input').each(function(){
											   
			state = jQuery(this).attr('name');	
			state_count[state] = jQuery(this).val();

});


	jQuery('#eemap').vectorMap({
		map: 'australia_en',
		//these are default, not strictly needed to be here, but leaving them to make it easier to modify
		showTooltip: true,
		backgroundColor: '#A0C3FF',
		borderColor: '#818181',
		borderOpacity: 0.25,
		borderWidth: 1,
		color: '#f4f3f0',
		scale: 10,
		enableZoom: false,
		hoverColor: '#c9dfaf',
		hoverOpacity: null,
		normalizeFunction: 'linear',
		scaleColors: ['#b6d6ff', '#005ace'],
		selectedColor: '#c9dfaf',
		selectedRegion: null,
		onLabelShow: function(event, label, code)
	    {
			//console.log(event);
			//console.log(label);
			//console.log(code);
			
			st_count = state_count[code];
			if(st_count == undefined) { st_count = 0; }
			if(st_count == 1) { eventtext = "Event"; } else { eventtext = "Events"	; }		
			
			label.append("<br><br>" + st_count + " " + eventtext + " Available");
		},
		
		onRegionClick: function(element, code, region)
		{
			
			//add the region name to the "Events in" title
			jQuery('.ee_maps_region').remove();
			jQuery("#events_in").show().append('<span class="ee_maps_region">'+region+'</span>');
			
			//console.log(st_count);
			jQuery(".usa-table-list tr").hide();
			jQuery("."+code).show();
			if(st_count == 0) { jQuery('.noevents').css("display","block"); }

			//console.log(element);
			//console.log(code);
			//console.log(region);
			
		}
	});
	

//this needs to be done after the map is created
jQuery('#hidden_states input').each(function(){
											   
			state = jQuery(this).attr('name');	
			
			//set default colour for states with events
			//http://stackoverflow.com/questions/10650576/how-does-one-dynamically-set-a-color-of-a-country-through-a-var
			var country_colors = {};			
			country_colors[state] = '#FFAE55';
			jQuery('#eemap').vectorMap('set', 'colors', country_colors);
										
        });
			
});

 
 