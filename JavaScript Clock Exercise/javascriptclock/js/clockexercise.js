

// prompt ile Kulanıcı Adı öğrenip, daha sonra name id'sini çağırarak onu, ekranda yazalım
let userName = prompt("Lütfen Kullanıcı Adınızı Giriniz:")

// İsim kutucuğu boş bırakılırsa alert ile ekrana hata mesajı gelecektir.
let name = document.querySelector("#name").innerHTML = `
"${userName.length > 0 ? userName : 
alert("Kullanıcı Adınız Hatalı veya Boş!") ? userName : "İsimsiz Dostum"
}"`
// ismini "yazmamakta" ısrar eden olursa, ona da otomatik olarak ("İsimsiz Dostum") sesleniyorum :)

//HOŞ GELDİNİZ yazısının rengine müdahala etmek istiyorum. O yüzden bir classList yardımı ile class ekledim ve bootstrap ile de rengini değiştirdim.
let wel = document.querySelector('#wel');
wel.classList.add("text-warning")

let Frontend = '"Frontend Web Development"'
let Javascript = '"JavaScript"'
let ClockWork = '"Clock and Greeting"'
const date = new Date();
//UTC saat dilimine göre değiştirdik, aşağıda da Tarih bölümüne yazdığım kod ile kolayca ekledim, fakat ödev de istendiği gibi yani tekrar manuel olarak aşağıya yazacağım.


// Örnek yazı olduğu için Template Literals Kullanimi ile farklı bir şekilde de yazalabilirim:
let middle = 
`
Ders: ${Frontend} 
<br>
Bölüm: ${Javascript}
<br>
Ödev: ${ClockWork}
<br>
Tarih: ${(new Intl.DateTimeFormat('tr-TR', { dateStyle: 'full', }).format(date))}
<br>
`

let greeting = document.querySelector("#middle").innerHTML = `${middle}`


// Saat: ${new Date().getHours()}:${new Date().getMinutes()} 
// Anlık saat bilgisini aşağıda yazdım FAKAT normal de saat bilgisi böyle de çıkabilirdi 
// (let middle = Ders... içine Saat diye ekleyebilirdim yani), 
// Fakat "F5" ile sürekli sayfa yenilenmesi gerekirdi. 
// Bu yüzden daha kolay şekilde anlık saat bilgisini ekrana verebilirim:

setInterval(myTimer, 1000); // her 1 saniyede bir değişecek

function myTimer() {
  const saat = new Date();
  document.getElementById("timezone").innerHTML = `"Anlık Saat Bilgisi : ${saat.toLocaleTimeString()}"`;
}   // ...${saat.toLocaleTimeString('en-US')} // bu şekilde yazsa idim "17:00:00" yerine, "05:00:00 PM" yazacaktı.



// ****************************************************************************************


// Uzun Yoldan "Tarih" ve "Saat" ekleyelim tekrar:
//fonksiyon içine hem saati hem de tarihi yazacağım.

function clockWork() { 

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let days = date.getDay();
    let year = date.getFullYear();

    switch (days) {
        case 01:
            days = "Pazartesi";
            break;

            case 02:
                days = "Salı";
            break;

            case 03:
                days = "Çarşamba";
            break;

            case 04:
                days = "Perşembe";
            break;
                        
            case 05:
                days = "Cuma";
            break;

            case 06:
                days = "Cumartesi";
            break;
                                
            case 07:
                days = "Pazar";
            break;
    }

    hours = hours < 10 ? "0" + hours : hours; 
    //Saat = saat, 10,'dan küçük ise, sol tarafa 0 + saat yazılsın, değilse yani büyükse direkt saat  yazılsın
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // watch değişkenine saatimizi ekliyorum. Daha sonra myClock id'sini çağırıp, o elemente yazdırıyorum. 
    let watch = `"${hours} : ${minutes} : ${seconds} - ${days} - ${year} "`;
    document.querySelector("#myClock").innerHTML = watch;
    
    setInterval(clockWork, 1000); // her 1 saniyede bir değişecek.

    let greenlove = document.getElementsByClassName('bos');  
    // "bos" classına müdahale ettim. 
    // "bos" sınıfına sahip olan tüm öğelerin rengini yeşile döndürdüm. 
    // Başka türlü de yapılabilirdi ama exercise (ing yazayım da havalı olsun) olarak yaptım.
        for (let i = 0; i < greenlove.length; i++){
            greenlove[i].style.color = "green";
    }
} 
clockWork();


function HackTheWorld() {
    alert('app.patika.dev');
  }
