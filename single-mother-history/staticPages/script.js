var yesButtonsIds = ["fkt-link-9a3-ca7-a2f", "fkt-link-18e-d82-be1"];
const handleClickYes = () => (location.href = location.origin + "/dev3/special");
const addClicksListeners = () => {
	yesButtonsIds.map((id) => {
		window.document.getElementById(id).addEventListener("click", handleClickYes);
	});
};
addClicksListeners();
