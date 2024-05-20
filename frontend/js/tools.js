const tools = document.getElementById('tools')
import {dev_tools} from './constants.js' 


const render_dev_tool = (imgUrl, dev_tool) => {
	//<div class="tool"> </div>
	const tool = document.createElement('div') 
	tool.className = "tool"

	//<img src="imgUrl/dev_tool.img" class="tool-img"/> 
	const img = document.createElement('img')
	img.setAttribute('src', imgUrl + "/" + dev_tool.img)
	img.className = "tool-img"

	//<p class="tool-title"> {dev_tool.title} </p>
	const title = document.createElement('p')
	title.className = 'tool-title'
    title.innerHTML = dev_tool.title

	/*
	<div class="tool">
		<img src="imgUrl/dev_tool.img" class="tool-img"/>
		<p class="tool-title"> {dev_tool.title} </p>
	</div>
	 */
	tool.appendChild(img)
	tool.appendChild(title)
	return tool
}

const render_dev_tools = (section, dev_tools, imgUrl) => {
	dev_tools.map(tool => {
		const dev_tool = render_dev_tool(imgUrl, tool)
		section.appendChild(dev_tool)
	})
}


render_dev_tools(tools, dev_tools, "./images/tools/")
