export def html(fragment\string)
	const template = document.createElement('template')
	template.innerHTML = fragment.trim()
	return template.content.firstChild\Element

export def render_component(name\string, attributes\{[x: string]: any}, label\string = '')
	const component\ImbaElement = <{name} autorender=yes>
	for own key, value of attributes
		if key.startsWith('@')
			component.addEventListener(key.slice(1), value)
		else
			component.setAttribute(key, value)
	if label
		component.#getSlot('__').text$(label)
	return component.render!

def infer_component_type(element\Element)
	const is_attr = element.getAttribute('is')
	if is_attr
		return is_attr
	return element.tagName.toLowerCase()

def get_valid_attributes(element\Element)
	const invalid_attributes = ['is', 'autorender', 'class', 'style']
	const attributes = []
	for attribute\Attr in element.attributes
		const [name, value] = [attribute.nodeName, attribute.value]
		unless invalid_attributes.includes(name) or name.startsWith('@')
			attributes.push(`{name}="{value}"`)
	return attributes.join(' ')

def get_default_text_slot(element\Element)
	for child\Element in element.childNodes
		if child.nodeType == Node.TEXT_NODE
			return child.textContent
	return ''

export def imba_source_transform(code\string)
	unless code
		return
	let output = ''
	const element = html(code)
	const type = infer_component_type(element)
	const attributes = get_valid_attributes(element)
	const label = get_default_text_slot(element)
	if attributes
		output += `<{type} {attributes}>`
	else
		output += `<{type}>`
	if label
		output += `\n\t'{label}'`
	return output