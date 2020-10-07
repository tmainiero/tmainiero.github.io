// Inspired by Andrew Neitkze's expand.js. Thanks Andy!
function textExpand(action, id)
{
	if (action == 'show')
	{
		document.getElementById("talk-"+id+"-abs").style.display = "block";
		document.getElementById("talk-"+id+"-abslink").href= "javascript:textExpand('hide', '"+id+"')";
		document.getElementById("talk-"+id+"-abslink").innerHTML = "Hide Abstract";
	}

	if (action == 'hide')
	{
		document.getElementById("talk-"+id+"-abs").style.display = "none";
		document.getElementById("talk-"+id+"-abslink").href= "javascript:textExpand('show', '"+id+"')";
		document.getElementById("talk-"+id+"-abslink").innerHTML = "Show Abstract";
	}
}
