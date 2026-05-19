
//Von der Ki

document.addEventListener('DOMContentLoaded', () => {
	function updateVolcanoAchievement() {
		const achieved = localStorage.getItem('volcanoWin') === 'true';
		const ach = document.querySelectorAll('.achievment');
		if (!ach || ach.length === 0) return;
		const first = ach[0];
		const img = first.querySelector('img');
		const caption = first.querySelector('figcaption');

		if (achieved) {
			first.classList.add('unlocked');
			if (caption) caption.textContent = 'Achievement 1 — Unlocked';
			if (img) img.style.filter = 'none';
		} else {
			if (caption) caption.textContent = 'Achievement 1';
			if (img) img.style.filter = 'grayscale(1) opacity(0.6)';
		}
	}

	updateVolcanoAchievement();

	window.addEventListener('achievementUnlocked', (e) => {
		if (e && e.detail && e.detail.key === 'volcanoWin') {
			updateVolcanoAchievement();
		}
	});
});

