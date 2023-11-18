const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
let str = '';

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

if(!str) {
	suggestions.classList.add("hidden");
}

function search(str) {
	let results = [];
	results = fruit.filter((item) => item.toLowerCase().includes(str))
	if (!(results[0] === str) && suggestions.classList.contains("hidden")) {
		suggestions.classList.remove("hidden");
	}
	if (results.length > 7) {
		return showSuggestions(results.slice(0, 8))
	}
	return showSuggestions(results);
}

function searchHandler(e) {
	if (e.key.toUpperCase() !== e.key.toLowerCase() && e.key.length === 1) {
		str = input.value.toLowerCase();
		return search(str);
	} else if (e.key === ' ') {
		str = input.value.toLowerCase();
		return search(str);
	} else if (e.key === 'Backspace') {
		str = input.value.toLowerCase();
		return search(str);
	}
}

// added helper function
function removeAllChildren() {
	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.firstChild);
	}
	return;
}

function showSuggestions(results, inputVal) {

	removeAllChildren();
	for (let i = 0; i < results.length; i++) {
		const newLi = document.createElement('li');
		let ans = suggestions.appendChild(newLi).innerText = results[i];
	}
	return;
}

function useSuggestion(e) {
	input.value = (e.target.innerText);
	showSuggestions([e.target.innerText])
	suggestions.classList.add("hidden");
	return;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);