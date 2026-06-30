var returnUrl = '';
function getReturnUrl(url) {
  returnUrl = url;
}
function updatePwdDialogClose() {
  document.getElementById("update-password-wrap").style.display = 'none';
}
function linkToMycnki() {
	window.location.href = 'https://my.cnki.net/mycnki/myAccount.html#/accountSafe?fromExternal=true';
}
function linkToReturnUrl() {
  //window.location.href = decodeURIComponent(returnUrl);
	document.getElementById("update-password-wrap").style.display = 'none';
}