export const name = "Drawful Animate";
export const logo = "https://i.imgur.com/7QPiNMv.png";

export function getPresenceData({
	playerState,
}: GameCallbackParams): PresenceData {
	switch (playerState.kind) {
		case "lobby": {
			return { state: "Waiting in lobby" };
		}
		case "waiting": {
			return { state: "Waiting" };
		}
		case "drawing": {
			if (playerState.prompt === "an animation of yourself")
				return { state: "Drawing an animation of themselves" };
			else return { state: "Drawing an animation" };
		}
		case "writing": {
			return { state: "Guessing the original prompt" };
		}
		case "liking": {
			return { state: "Awarding likes to other's guesses" };
		}
		case "choosing": {
			return { state: "Looking for the true prompt" };
		}
		case "postGame": {
			return { state: "Viewing the results" };
		}
		case "ugc": {
			return { state: "Creating a custom game" };
		}
	}
	return {};
}
