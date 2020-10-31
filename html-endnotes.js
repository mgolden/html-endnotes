/*  html-endnotes v1.1 (formerly jquery-endnotes)
 *  (c) 2020 Mitchell Golden
 *
 *  html-endnotes is freely distributable under the terms of an MIT license.
 *  https://github.com/mgolden/html-endnotes
 *--------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', (event) => {
	let endnotesElement = document.getElementById("endnotes-here");
	if(!endnotesElement) {
		alert("Error: There is nowhere to put the list of endnotes.");
		return;
	}
	let endnotesOl = document.createElement("ol");
	endnotesOl.id = "endnotes";
	endnotesElement.appendChild(endnotesOl);
	let endnoteList = document.querySelectorAll("span[data-ref]");
	let endnoteNum = 1;
	for(let endnote of endnoteList) {
		endnote.setAttribute("class", "endnote");
		let refData = endnote.getAttribute("data-ref");
		let refArr = refData.split("|");
		let contentArr = new Array();
		let link = "";
		for (var i=0, l=refArr.length; i < l; i++) {
			let ref = refArr[i].trim();
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
		let newNote = document.createElement("span")
		newNote.innerHTML = "<a href='#endnote-"+endnoteNum+"'><sup id='ref-"+endnoteNum+"'>"+endnoteNum+"</sup></a>";
		endnote.appendChild(newNote);
		let cite = document.createElement("li");
		cite.id = "endnote-"+endnoteNum;
		cite.innerHTML = "<a href='#ref-"+endnoteNum+"'>^</a> " + contentArr.join("");
		endnotesOl.appendChild(cite);
		endnoteNum++;
	}
});
