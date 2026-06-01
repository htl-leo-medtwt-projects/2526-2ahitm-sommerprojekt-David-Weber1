
document.addEventListener('DOMContentLoaded', () => {
	const mapping = { 
		volcanoWin: 0, 
		volcanoDeath: 1,
		castleWin: 2,
		castleDeath: 3,
		forestWin: 4,
		forestDeath: 5,
		houseWin: 6,
		houseDeath: 7
	};
	const ach = document.querySelectorAll('.achievment');
	if (!ach || ach.length === 0) return;

	function unlockAchievementByKey(key) {
		const idx = mapping[key];
		if (idx == null) return;
		const el = ach[idx];
		if (!el) return;
		const img = el.querySelector('img');
		const caption = el.querySelector('figcaption');

		el.classList.add('unlocked');
		if (img) img.style.filter = 'none';
		if (caption) {
			if (key === 'volcanoWin') caption.textContent = 'Achievement 1 — Unlocked';
			else if (key === 'volcanoDeath') caption.textContent = 'Achievement 2 — Unlocked';
			else caption.textContent = 'Achievement — Unlocked';
		}
	}

	Object.keys(mapping).forEach((key) => {
		if (localStorage.getItem(key) === 'true') unlockAchievementByKey(key);
	});

	window.addEventListener('achievementUnlocked', (e) => {
		if (e && e.detail && e.detail.key) unlockAchievementByKey(e.detail.key);
	});
});

