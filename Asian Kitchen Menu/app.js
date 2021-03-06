const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
  
  // Yukar??daki k??s??m ??dev i??in haz??r olarak verilmi??tir
  //Her ne yapacaksak art??k yukar??daki k??s??m html dosyas??ndaym???? gibi ??al????acak
  
  /* ------------------------------ODEV A??IKLAMASI---------------------------------------------
  Sitedeki i??erik JavaScript'te menu ??eklinde bir dizi i??inde objeler olarak tan??mlanacak.
  
  Id, title, category, price, img ve desc b??l??mleri olacak.
  
  ????eri??i istedi??iniz gibi de??i??tirebilirsiniz yaln??z de??i??tirirken kategori isimlerine ekstra dikkat edin.
  
  Butonlar da js dosyas??ndan gelecek.
  
  Site i??erisinde map, reduce gibi methodlar?? kullanman??z gerekecek. Hat??rlam??yorsan??z 
  
  Map ile Array ????erisideki Yap??n??n De??i??tirilerek Yeni Liste Olu??turulmas?? #38 isimli videoya d??nebilirsiniz.*/
  //-------------------------------------------
  
  //-----nas??l yap??ld?? pek?
  
  // men??  elemanlar?? ection-center adl?? bir classta tan??mlanm????, bunun querryselector ile ??ekelim ve section diye tan??mlayal??m
  //buton elemanlar?? da btn-container class ?? na sahip bir konteyner de , buna da ayn?? ??ekildequerry selector yapal??m ve butonConteynerim diyelim
  let section = document.querySelector(".section-center")
  let butonContainerim = document.querySelector(".btn-container")
  
  /* Butonlar?? Tan??mlama */
  //bir buton yaratma fonksiyonu: i??erisine yazd??????m??z buton ad??n?? html eleman i??erisde id ve d??zyaz?? k??sm??na yazacak 
  
  function createButton(buttonName) {
    let btn = `<button class="btn btn-outline-dark btn-item" id="${buttonName}">${buttonName}</button>`
    return btn
  }
  
  
  
  /* Butonlar?? Ekleme */
  // bu ise buton ekleme fonksiyonu: i??er
  
  function addButton() {
    //yukarda yaratt??????m????z konteyner yard??m??yla btn konteyner i??erisine create buton ??al????t??rarak, ad?? a??a????da verilen butonlar yarat??p ekleyecek
    //
    butonContainerim.innerHTML = createButton("All") + " " + createButton("Korea") + " " + createButton("Japan") + " " + createButton("China")
    //yarat??l??p eklenen bu butonlara  t??klan??nca ??ekilecek elemntleri veriyoruz,
    //addfoods*** ??eklindekii bu fonksiyonlar?? biraz daha a??a????da tan??mlad??k
    document.getElementById('All').addEventListener('click',addFoodsAll)
    document.getElementById('Korea').addEventListener('click',addFoodsKorea)//??r:t??klan??nca KOREAadl?? butonu alaca ve addfoodskorea y?? ??al????t??racak
    document.getElementById('Japan').addEventListener('click',addFoodsJapan)
    document.getElementById('China').addEventListener('click',addFoodsChina)
  }
  
  
  
  /* Yemek Tan??mlama */
  //yemek tan??mlama fonksiyonu(a??a????daki foreach sayesinde herbir elemnt i??leniyo) 
  //ve bir yemek tan??ml??yor-ki title ,id,img,price description en yukardaki const menu de tan??ml??
  //foreach sana ne g??nderirse .img si , .price si vs al ??u ??eklide kullan, ve htmli yarat demek bu
  function foodCreator(name) {
    let item = `<div class="menu-items col-lg-6 col-sm-12">
    <img src="${name.img}" alt="${name.title}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${name.title}</h4>
        <h4 class="price">${name.price}</h4>
      </div>
      <div class="menu-text">
        ${name.desc}
      </div>
    </div>
  </div>`
    return item
  }
  
  
  
  /* T??m Men?? Ekleme */
  ////buradaki menu en ??stte const ile tan??mland?? ve 9 yeme??i i??eriyor- foreach ile yemek yaratma fonksiyonundan
  //????kanlar?? burada d??ng?? ??eklkinde ekliyor-- sectionun inneri her ne ise onun yan??na menudeki s??radaki elementi de ekliyorum demek
  //ayr??ca buradaki foreach sayesinde menudeki her elementi foodcreatora at??yor ve i??liyor
  //bu foodall i??in yani:filtreleme olmadan
  function addFoodsAll() {
    section.innerHTML = ""
    menu.forEach(element => {
      section.innerHTML += (" " + foodCreator(element))
    });
  }
  
  /* Kore Men??s?? Ekleme */
  //??rnek devam: addfoodskoreay?? ??al????t??rd??:nolcak ??imdi:
  //korea adl?? kategoriye g??re filtrle ve buraddan gelen her elementi foodcreator ile i??le ve inner htmle atarak seyirci kar????s??na ????kar
  function addFoodsKorea() {
    section.innerHTML = ""
    const koreanMenu = menu.filter(x => x.category == "Korea")
    koreanMenu.forEach(element => {
      section.innerHTML += (" " + foodCreator(element))
    });
  }
  //JAPON CE CH??NESE DE AYNI ??EK??L VE MANTIKLA ??ALI??IYOR
  
  /* Japon Men??s?? Ekleme */
  function addFoodsJapan() {
    section.innerHTML = ""
    const koreanMenu = menu.filter(x => x.category == "Japan")
    koreanMenu.forEach(element => {
      section.innerHTML += (" " + foodCreator(element))
    });
  }
  
  /* ??in Men??s?? Ekleme */
  function addFoodsChina() {
    section.innerHTML = ""
    const koreanMenu = menu.filter(x => x.category == "China")
    koreanMenu.forEach(element => {
      section.innerHTML += (" " + foodCreator(element))
    });
  }
  
  //BUNALR NE ????E YARIYOR PEK??
  window.addEventListener('load',addButton)//BU a????k a??a????daki kapal?? yapal??m: sadece butonlar gelir butona t??klay??nca uygun element gelir
  //a??a????daki kapal??yken ??u olmaz: ilk ba??ta t??m elemntler g??r??lmez
  window.addEventListener('load',addFoodsAll)