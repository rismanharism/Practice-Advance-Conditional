/*
Untuk soal nomor 1 dan 2 ini dilarang uncomment/ menjalankan kode. Silahkan analisa output dari kode berikut dengan cara membaca dan melihat alur dari kode berikut.

var day = 'senin';
var time = 12;
var lectureStatus;

if (day === 'senin' || 
day === 'selasa' || 
day === 'rabu' || 
day === 'kamis' || 
day === "jum'at" || 
day === 'sabtu' || 
day === 'minggu') {
    if (day === 'sabtu' || day === 'minggu') {
        lectureStatus = false;
    } else {
        if ((time >= 9 && time < 12) || (time >= 13 && time <= 15)) {
            lectureStatus = true;
        } else {
            lectureStatus = false;
        }
    }

    if (lectureStatus) {
        console.log("Ada lecture di hari " + day + " dan jam " + time);
    } else {
        console.log("Tidak ada lecture di hari " + day + " dan jam " + time);
    }
} else {
    console.log("Anda memasukkan hari yang salah");
}
*/

// ============== 1 ===============
/* 
1. Apa output dari kode di atas ?
- Jawaban : 
Tidak ada lecture di hari senin  dan jam 12
*/ 

// ============== 2 ===============
/* 
2. Apabila isi variabel day dan time di baris 4 dan 5 dirubah menjadi

var day = 'Kamis';
var time = 13;

Maka apa output dari kode di atas ?
- Jawaban : 
Anda memasukkan hari yang salah
*/ 