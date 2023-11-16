---
title: Konkurensi dan memasak mie
subtitle: Menjelaskan konkurensi dengan contoh aktifitas di dunia nyata
date: '2023-10-15'
---

## Apa itu konkurensi

Ketika saya mempelejari konkurensi, salah satu kesulitan yang sulit dipahami adalah bagaimana
konsep ini berbeda dengan paralelisme. Berikut kutipan dari Wikipedia terkait apa itu konkurensi dan paralelisme

> concurrency is about dealing with lots of things at once but parallelism is about doing lots of things at once.

Kunci perbedannya terletak di kata kerja yang berbeda **dealing** vs **doing**. Jika diterjemahkan ke bahasa indonesia, kalimat tersebut bisa disusun menjadi:

> Konkurensi **mengerjakan** banyak hal sekaligus, sedangkan parallelism **melakukan** banyak hal dalam satu waktu.

Lalu apa bedanya **mengerjakan** dan **melakukan** banyak hal dalam satu waktu?

Memasak mie instan adalah salah satu hal yang bisa, dan saya cukup yakin, kebanyakan orang melakukannya secara konkuren.

Berikut contoh hal yang dilakukan untuk memasak mie instan dan waktu yang dibutuhkan untuk tiap langkah:

1. Membuka bungkus mie instan (10 detik)
1. <ins>Merebus mie</ins> (4 menit)
1. Memotong bumbu dan menuangkan bumbu ke piring (1 menit)
1. Menyiapkan piring (10 detik)
1. Mencampuraduk mie dengan bumbu (20 detik)

Total waktu yang diperlukan adalah 5 menit 40 detik. Perhatikan langkah yang digaris bawahi: merebus mie. Langkah ini, meskipun memakan waktu yang lama, **bisa kita tinggalkan dan tidak berhenti**.

Konkurensi adalah kemampuan (apa) untuk berpindah dari satu tugas ke tugas lainnya. Dalam eksekusi yang konkuren, tugas tersebut segera ditinggalkan dan tugas selanjutnya segera dikerjakan. Perbandingan utama dalam kasus ini yaitu: **menunggu mie selesai direbus lalu mulai mengerjakan tugas lain** atau **mengerjakan tugas lain selagi mie direbus**.

Berikut ilustrasi untuk menunjukan perbedannya:

![comparison](/blogs/konkurensi-dan-memasak-mie/comparison.png)

Titik-titik yang putus menunjukan proses berlangsung tanpa memerlukan keterlibatan dari kita.

Kemampuan mengerjakan beberapa task dalam satu jangka waktu dan berpindah dari satu task ke task lainnya merupakan keuntungan dari konkurensi. Tanpa konkurensi maka memasak mie akan lebih lama karena kita harus mengerjakan semua proses secara runtut, yang artinya kita mesti menunggu mie selesai direbus sebelum mengerjakan hal lainnya.

<!-- Goal: Memeberi kesadaran bahwa konkurensi terjadi di banyak program tanpa kita sadari -->

## Perbandingan dengan konkurensi di sebuah program

Sebenarnya konkurensi terdapat di banyak program. Hal yang sering kita temui adalah interaksi antara client dan server. Berikut contoh program sederhana yang menunjukan konkurensi. Tiap function disini mewakili langkah memasak mie di atas.

```js
// 1

function bukaBungkusMie() {
  console.log('bungkus mie berhasil dibuka ✅');
}

function rebusMie() {
  const apiUrl = 'https://hub.dummyapis.com/delay?seconds=1';

  console.log('mie mulai direbus 🕐');
  fetch(apiUrl).then(() => console.log('mie selesai direbus ✅'));
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
```

Berikut penjelasan kode tersebut

1. Function ini mensimulasikan komputasi yang memakan waktu lama yang terjadi di server
2. Eksekusi langkah secara runtut

Jika kalian menjalankan program diatas, urutan selesainya tiap function tidak akan sesuai yang diharapkan.

```js
bungkus mie berhasil dibuka ✅
mie mulai direbus 🕐
piring berhasil disiapkan ✅
bumbu berhasil dituangkan ✅
mie dan bumbu sudah tercampur ✅ // <-- seharusnya langkah ini dieksekusi terkahir ❌
mie selesai direbus ✅
```

Cara memperbaiki urutan ini akan dibahas di sesi selanjutnya.

## Tantangan konkurensi: kontrol

Konkurensi menimbulkan masalah dimana urutan program tidak dieksekusi sesuai urutan yang diinginkan. Dalam contoh program diatas, `campurMieDenganBumbu` muncul sebelum `rebusMie` selesai karena kita tidak memberikan instruksi **untuk `campurMieDenganBumbu` untuk dieksekusi setelah `rebusMie` selesai**. Untuk memperbaiki urutannya kita bisa mengubah kode menjadi:

```javascript
function masakMie() {
  bukaBungkusMie();
  // 1
  rebusMie().then(() => campurMieDenganBumbu());
  siapkanPiring();
  bukaDanTuangkanBumbuKePiring();
}
```

1. Sintaks `then` menyuruh javascript mengeksekusi `campurMie` setelah `rebusMie` selesai

## Kesimpulan

Konkurensi menjadikan program lebih efisien karena program mampu mengerjakan tugas selagi menunggu tugas yang dikerjakan oleh pihak lain (mis. server). Namun juga memunculkan tantangan dalam memastikan program tereksusi sesuai urutan
