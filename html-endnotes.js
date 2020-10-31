/*  jquery-endnotes v1.0
 *  (c) 2018 Mitchell Golden
 *
 *  jquery-endnotes is freely distributable under the terms of an MIT license.
 *  https://github.com/mgolden/jquery-endnotes
 *--------------------------------------------------------------------------*/
(function($) {
	$(document).ready(function() {
		$("#endnotes-here").append("<ol id=\"endnotes\"></ol>");
		endnotes = $("#endnotes");
		endnote = 1;
		$("span[data-ref]").addClass("endnote");
		$(".endnote").each(function() {
			ref = $(this).attr("data-ref");
			refArr = ref.split("|");
			contentArr = new Array();
			link = "";
			for (var i=0, l=refArr.length; i < l; i++) {
				ref = refArr[i].trim();
				if(ref.substring(0,4)=="http") {
					if(link!="") {
						contentArr.push(link+"</a> ");
					}
					contentArr.push("<a href='"+ref+"' target='_blank'>");
					link = ref;
				}
				else {
					contentArr.push(ref);
					if(link!="") {
						contentArr.push("</a>");
					}
					contentArr.push(" ");
					link = "";
				}
			}
			if(link!="") {
				contentArr.push(link+"</a>");
			}
			$(this).append("<a href='#endnote-"+endnote+"'><sup id='ref-"+endnote+"'>"+endnote+"</sup></a>");
			cite="<li id='endnote-"+endnote+"'>"
				+ "<a href='#ref-"+endnote+"'>^</a> "
				+ contentArr.join("")
				+ "</li>";
			endnotes.append(cite);
			endnote++;
		});
	});
})(jQuery);
