import {python_technologies} from "./constants.js"
const sec = document.getElementById('py-tools')

const render_py_tool = (imgUrl, tool) => {
    const py_tool = document.createElement('div')
    py_tool.className = "py-tool"

    const img = document.createElement('img')
    img.className = "py-img"
    img.setAttribute('src', imgUrl + tool.img)

    const para = document.createElement('div')
    para.className = "text-py"
    para.innerHTML = tool.title

    py_tool.appendChild(img)
    py_tool.appendChild(para)

    return py_tool
}

const reder_section = (section, imgUrl, python_technologies) => {
    python_technologies.map(tool => {
        const py_tool = render_py_tool(imgUrl, tool)
        section.appendChild(py_tool)
    })
}

reder_section(sec, "./images/python_tutorials/", python_technologies)