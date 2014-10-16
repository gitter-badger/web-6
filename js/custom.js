$(document).ready(function() {
	var updateMenu = function() {
		var highlighted = false;
		var closestToTop = null;
		$("section").each(function(index) {
			var currentID = this.id;
			var y = $(this).offset().top;
			var wh = window.innerHeight;
			var st = window.pageYOffset;
			var topOnScreen = y >= st && y + 100 <= st + wh;
			if(topOnScreen && !highlighted) {
				//console.log("Setting by top.");
				$("header a[href='#" + currentID + "']").addClass("highlight");
				highlighted = true;
			} else {
				if(!closestToTop) {
					closestToTop = this;
				} else if(y < st && y - st > $(closestToTop).offset().top - st) {
					closestToTop = this;
				}
				$("header a[href='#" + currentID + "']").removeClass("highlight");
			}
		});
		if(!highlighted && closestToTop) {
			//console.log("Setting by close to top.");
			$("header a[href='#" + closestToTop.id + "']").addClass("highlight");
		}
	};

	$(window).scroll(updateMenu);
	$(window).resize(updateMenu);
	updateMenu();
});