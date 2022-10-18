import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// console.log(window.event);

const gallery = document.querySelector('.gallery')
const items = []

galleryItems.forEach(element => {
	const galleryItem = document.createElement('div')
	galleryItem.className = 'gallery__item'
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
    galleryImage.className = 'gallery__image'
    galleryImage.src = element.preview;
    galleryImage.setAttribute('data-source', element.original)
    galleryImage.alt = element.description;

	galleryItem.append(galleryLink)
	galleryLink.append(galleryImage)
	items.push(galleryItem)
})

gallery.append(...items)

document.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = e.target.getAttribute('data-source')
    const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`)

    instance.show()
    

    document.addEventListener('keydown', handleKeypress);

	function handleKeypress(e){
		console.log(e);
		if (e.key === 'Escape') {
			instance.close(document.removeEventListener('keydown', handleKeypress))
		}
	}
})

