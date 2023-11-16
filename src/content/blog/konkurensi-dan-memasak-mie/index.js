function rebusMie() {
  const apiUrl = 'https://hub.dummyapis.com/delay?seconds=1';

	console.log('mie mulai direbus 🕐');
  fetch(apiUrl).then(() => console.log('mie selesai direbus ✅'));
}

function bukaBungkusMie() {
  console.log('bungkus mie berhasil dibuka ✅');
}

function siapkanPiring() {
  console.log('piring berhasil disiapkan ✅');
}

function bukaDanTuangkanBumbuKePiring() {
  console.log('bumbu berhasil dituangkan ✅');
}

function campurMieDenganBumbu() {
  console.log('mie dan bumbu sudah tercampur ✅');
}

// 2
function masakMie() {
  bukaBungkusMie();
  rebusMie();
  siapkanPiring();
  bukaDanTuangkanBumbuKePiring();
  campurMieDenganBumbu();
}

await masakMie();
