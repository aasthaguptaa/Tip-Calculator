window.onload = () =>
	{
		document.querySelector('#calculate').onclick = calculateTip;
	}

function calculateTip() {

	let BillAmount = document.querySelector('#BillAmount').value;
	let NumOfPeople = document.querySelector('#NumOfPeople').value;
	let ServiceQuality = document.querySelector('#ServiceQuality').value;

	console.log(ServiceQuality);

	if (BillAmount === '' && ServiceQuality === 'Select') {
		alert("Please enter valid values");
		return;
	}

	if (NumOfPeople === '1')
		document.querySelector('#each').style.display = 'none';
	else
		document.querySelector('#each').style.display = 'block';

	let total = (BillAmount * ServiceQuality) / NumOfPeople;
	total = total.toFixed(2);

	document.querySelector('.tip').style.display = 'block';
	document.querySelector('#total').innerHTML = total;
}
