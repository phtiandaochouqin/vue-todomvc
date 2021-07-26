/*global app, Router */

(function () {
this.onhashchange = function(){
	app.visibility = window.location.hash.substr(2)
}

})();
