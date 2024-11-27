var kilo = prompt("Lütfen kilonuzu giriniz: ");
var boy = prompt("Lütfen boyunuzu giriniz: ");

var boyIndex = boy * boy;
var kitleIndex = kilo / boyIndex;

if (kitleIndex >= 45.0) {
  window.alert("Aşırı Obezsiniz... Kitle İndexiniz: " + kitleIndex);
} else if (kitleIndex >= 30.0 && kitleIndex <= 44.9) {
  window.alert("Obezsiniz... Kitle İndexiniz: " + kitleIndex);
} else if (kitleIndex >= 25.0 && kitleIndex <= 29.9) {
  window.alert("Fazla kilolusunuz... Kitle İndexiniz: " + kitleIndex);
} else if (kitleIndex >= 18.5 && kitleIndex <= 24.9) {
  window.alert(
    "Normal kilodasınız, gayet sağlıklısınız :) Kitle İndexiniz: " + kitleIndex
  );
} else if (kitleIndex >= 8.5 && kitleIndex <= 18.4) {
  window.alert("Zayıfsınız... Kitle İndexiniz: " + kitleIndex);
} else if (kitleIndex <= 8.4) {
  window.alert("Aşırı Zayıfsınız... Kitle İndexiniz: " + kitleIndex);
}
