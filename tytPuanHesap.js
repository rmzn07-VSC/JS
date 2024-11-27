var turkDogru,
  turkYanlis,
  turkBos,
  turkNet,
  dogruDegerTurk,
  yanlisDegerTurk,
  sonHesapTurk,
  turkGercekYanlis;
var matDogru,
  matYanlis,
  matBos,
  matNet,
  dogruDegerMat,
  yanlisDegerMat,
  sonHesapMat;
var sosDogru,
  sosYanlis,
  sosBos,
  sosNet,
  dogruDegerSos,
  yanlisDegerSos,
  sonHesapSos;
var fenDogru,
  fenYanlis,
  fenBos,
  fenNet,
  dogruDegerFen,
  yanlisDegerFen,
  sonHesapFen;

var turkToplamS = 40,
  matToplamS = 40,
  sosToplamS = 20,
  fenToplamS = 20;

function getNet(dersAdi, toplamSoru) {
  let dogru, yanlis, bos;
  do {
    dogru = parseInt(prompt(dersAdi + "den kaç doğrunuz var?"));
    yanlis = parseInt(prompt(dersAdi + "den kaç yanlışınız var?"));
    bos = parseInt(prompt(dersAdi + "den kaç boşunuz var?"));
    let net = dogru - yanlis / 4;
    if (net > toplamSoru || net < 0) {
      alert(dersAdi + " için yanlış değer girdiniz! Lütfen tekrar deneyin.");
    } else {
      return net;
    }
  } while (true);
}

// Türkçe
sonHesapTurk = getNet("Türkçe", turkToplamS);
alert("Türkçe netiniz: " + sonHesapTurk);

// Matematik
sonHesapMat = getNet("Matematik", matToplamS);
alert("Matematik netiniz: " + sonHesapMat);

// Sosyal
sonHesapSos = getNet("Sosyal Bilgiler", sosToplamS);
alert("Sosyal Bilgiler netiniz: " + sonHesapSos);

// Fen
sonHesapFen = getNet("Fen Bilimleri", fenToplamS);
alert("Fen Bilimleri netiniz: " + sonHesapFen);

// Toplam Net
var toplamNet = sonHesapTurk + sonHesapMat + sonHesapSos + sonHesapFen;
alert("Toplam netiniz: " + toplamNet);
