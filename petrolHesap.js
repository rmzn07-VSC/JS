var yeniSatır = "\r\n";

var secim = parseFloat(
  prompt(
    "Hangi benzinden dolduracaksınız?" +yeniSatır+
      "1- Dizel: Litresi 24.53 TL" +yeniSatır+
      "2- Benzin: Litresi 22.25 TL" +yeniSatır+
      "3- LPG: Litresi 11.1 TL"
  )
);



var litre = prompt("Kaç litre (L) alacaksınız?");
var tutar = 0;

if (secim == 1) {
  tutar = 24.53 * litre;

  window.alert("Tutarnız: " + tutar);
} else if (secim == 2) {
  tutar = 22.25 * litre;

  window.alert("Tutarnız: " + tutar);
} else if (secim == 3) {
  tutar = 11.1 * litre;

  window.alert("Tutarnız: " + tutar);
} else {
  window.alert("Geçerli bir değer giriniz!");
}
