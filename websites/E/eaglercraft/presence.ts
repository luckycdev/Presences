const presence = new Presence({
		clientId: "1010667786919497789",
	}),
	browsingTimestamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
		largeImageKey:
			"https://i.imgur.com/o8pAuOl.png",
		details: "Eaglercraft",
		startTimestamp: browsingTimestamp,
	};

	if (document.location.pathname === "/")
		presenceData.details = "Server: ";

	if (presenceData.details) presence.setActivity(presenceData);
	//Update the presence with no data, therefore clearing it and making the large image the Discord Application icon, and the text the Discord Application name
	else presence.setActivity();
});
