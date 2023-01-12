const iframe = new iFrame();

if (document.location.href.includes("https://skystudioapps.com")) {
	iframe.on("UpdateData", async () => {
		iframe.send({
			name: document.querySelector("#songname").textContent,
			subName: document.querySelector("#songsubname").textContent,
			currentTime: document.querySelector("#time").textContent,
			difficulty: document
				.querySelector<HTMLSelectElement>("#difficultyselect")
				.value.replace("Plus", "+"),
			customDifficulty: document
				.querySelector<HTMLSelectElement>("#difficultyselect")
				.selectedOptions?.item(0)?.textContent,
			gameMode: document
				.querySelector<HTMLSelectElement>("#modeselect")
				.value.replace("Plus", "+"),
			playing: Boolean(document.querySelector("#play-button.fas.fa-pause")),
			duration: document
				.querySelector("#stats")
				?.firstChild?.textContent.split(" ")[1],
		});
	});
}
if (document.location.href.includes("https://replay.beatleader.xyz")) {
	iframe.on("UpdateData", async () => {
		iframe.send({
			name: document.querySelector("#songName")?.textContent,
			subName: document.querySelector("#songSubName")?.textContent,
			currentTime: document.querySelector("#songProgress")?.textContent,
			playing: Boolean(document.querySelector(".btn.pause")),
			duration: document.querySelector("#songDuration")?.textContent,
			playerName: document.querySelector("#playerName")?.textContent,
		});
	});
}
