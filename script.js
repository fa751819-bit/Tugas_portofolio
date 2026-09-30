const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
	const isOpen = menu.classList.toggle('is-open');
	menuButton.setAttribute('aria-expanded', String(isOpen));
	menuButton.setAttribute('aria-label', isOpen ? 'Tutup navigasi' : 'Buka navigasi');
	menuButton.querySelector('span').textContent = isOpen ? '×' : '☰';
});

menu.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		menu.classList.remove('is-open');
		menuButton.setAttribute('aria-expanded', 'false');
		menuButton.setAttribute('aria-label', 'Buka navigasi');
		menuButton.querySelector('span').textContent = '☰';
	});
});

document.querySelector('#year').textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('is-visible');
			revealObserver.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

document.querySelectorAll('[data-reveal]').forEach((element) => revealObserver.observe(element));