var assetsUrl =
"https://www.positivethinking.tech/youremailsignature/email-assets/images/";
var brands = {};
var ubrands = {
  adneom: [
  // key
  "ADNEOM", // name
  "https://www.adneom.com", // URL
  "www.adneom.com", // display URL
  "#ff1738", // hex color code
  "https://www.linkedin.com/company/adneom/", // Url Linkedin
  "", //twitter
  "https://www.instagram.com/adneom/", // Url Insta
  "", //youtube
  "https://vimeo.com/positivethinkingcompany" // Url Vimeo
  ],
  acpartners: [
  "AC Partners",
  "https://www.acpartners.com",
  "www.acpartners.com",
  "#e41e13",
  "https://www.linkedin.com/company/ac-partners/",
  "", //twitter
  "https://www.instagram.com/positivethinkingcompany/",
  "", //youtube
  "https://vimeo.com/positivethinkingcompany"],

  bgficonsulting: [
  "BGFi Consulting",
  "https://www.bgfi-groupe.com",
  "www.bgfi-groupe.com",
  "#e5004e",
  "https://www.linkedin.com/company/bgfi-groupe/",
  "", //twitter
  "https://www.instagram.com/positivethinkingcompany/",
  "", //youtube
  "https://vimeo.com/positivethinkingcompany"],

  mayato: [
  "Mayato",
  "https://www.mayato.com",
  "www.mayato.com",
  "#3b9c01",
  "https://www.linkedin.com/company/mayato/",
  "", //twitter
  "https://www.instagram.com/positivethinkingcompany/",
  "", //youtube
  "https://vimeo.com/positivethinkingcompany"],

  alispharm: [
  "Alispharm",
  "https://www.alispharm.com",
  "www.alispharm.com",
  "#00afef",
  "https://www.linkedin.com/company/alispharm/",
  "", //twitter
  "https://www.instagram.com/positivethinkingcompany/",
  "", //youtube
  "https://vimeo.com/positivethinkingcompany"],

  serial: [
  "SERIAL",
  "https://www.serial.ch",
  "www.serial.ch",
  "#0071bd",
  "https://www.linkedin.com/company/serial-sa/",
  "", //twitter
  "https://www.instagram.com/positivethinkingcompany/",
  "", //youtube
  "https://vimeo.com/positivethinkingcompany"],

  steepconsult: [
  "SteepConsult",
  "https://www.steepconsult.com",
  "www.steepconsult.com",
  "#39938e",
  "https://www.linkedin.com/company/steepconsult/",
  "", //twitter
  "https://www.instagram.com/steepconsult/",
  "", //youtube
  "https://vimeo.com/positivethinkingcompany"],

  worldofdigits: [
  "World Of Digits",
  "https://worldofdigits.com",
  "www.worldofdigits.com",
  "#0597a7",
  "https://www.linkedin.com/company/worldofdigits/",
  "", //twitter
  "https://www.instagram.com/worldofdigits/",
  "", //youtube
  "https://vimeo.com/worldofdigits"],

  // positivethinkingcompanyecosytem: [
  //   "Positive Thinking Company (Ecosystem)",
  //   "https://www.positivethinkingcompany.com",
  //   "www.positivethinkingcompany.com",
  //   "#FF0044",
  //   "https://www.linkedin.com/company/the-positive-thinking-company",
  //   "https://www.instagram.com/positivethinkingcompany/",
  //   "https://vimeo.com/positivethinkingcompany",
  // ],
  positivethinkingcompanybrand: [
  "Positive Thinking Company",
  "http://positivethinking.tech",
  "www.positivethinking.tech",
  "#FF0044",
  "https://www.linkedin.com/company/the-positive-thinking-company",
  "https://twitter.com/PTC_Tech", //twitter
  "https://www.instagram.com/positivethinkingcompany/",
  "https://youtube.com/channel/UCfaImWa6r0IoZoUYLhbiF7w", //youtube
  "https://vimeo.com/positivethinkingcompany"],

  oneaston100x26: [
  "OneAston",
  "https://www.oneaston.com",
  "www.oneaston.com",
  "#3963ac",
  "https://www.linkedin.com/company/oneaston/",
  "", //twitter
  "https://www.instagram.com/positivethinkingcompany/",
  "", //youtube
  "https://vimeo.com/positivethinkingcompany"],

  otofacto: [
  "Otofacto",
  "https://otofacto.tech/",
  "www.otofacto.tech",
  "#FA7024",
  "https://www.linkedin.com/company/otofacto/",
  "", //twitter
  "https://www.instagram.com/otofacto.tech/",
  "", //youtube
  "",
  "" // Url Xing
  ],
  redcactus: [
  // key
  "Redcactus", // name
  "https://red-cactus.io/", // URL
  "www.red-cactus.io", // display URL
  "#e32b38", // hex color code
  "https://www.linkedin.com/company/redcactus-by-positivethinkingcompany/about/",
  "", //twitter
  "https://www.instagram.com/positivethinkingcompany/",
  "", //youtube
  "https://vimeo.com/positivethinkingcompany"],

  softwareadvies: [
  // key
  "Software ADVIES", // name
  "https://software-advies.be/", // URL
  "www.software-advies.be", // display URL
  "#e40c88", // hex color code
  "https://www.linkedin.com/company/software-advies/",
  "", //twitter
  "https://www.instagram.com/positivethinkingcompany/",
  "", //youtube
  "https://vimeo.com/positivethinkingcompany"],

  versett: [
  // key
  "Versett", // name
  "https://versett.com/", // URL
  "www.versett.com", // display URL
  "#121212", // hex color code
  "https://www.linkedin.com/company/versett-europe", //linkedin
  "", //twitter
  "https://www.instagram.com/versett-europe", // instagram
  "", //youtube
  "" //vimeo
  ],
  cbtw: [
  // key
  "Collaboration betters the world", // name
  "https://www.collaborationbetterstheworld.com", // URL
  "www.collaborationbetterstheworld.com", // display URL
  "#ffffff", // hex color code
  "https://www.linkedin.com/company/collaboration-betters-the-world/mycompany/", //linkedin
  "", //twitter
  "", // instagram
  "", //youtube
  "", //vimeo
  "", //xing
  "verdana", //font-family
  "Calibri" // secondary font
  ],
  bluechaingers: [
  "Blue Chaingers",
  "https://www.positivethinkingcompany.com",
  "www.positivethinkingcompany.com",
  "#e40c88",
  "https://www.linkedin.com/company/the-positive-thinking-company",
  "", //twitter
  "https://www.instagram.com/positivethinkingcompany/",
  "", //youtube
  "https://vimeo.com/positivethinkingcompany",
  "https://www.xing.com/companies/industry4.0?sc_o=da980_e",
  "IBM Plex Mono" // font-family
  ] };


Object.keys(ubrands).
sort().
forEach(function (key) {
  brands[key] = ubrands[key];
});

var uaddresses = {
  paris: [
  // key
  "Paris", // label
  "255 boulevard Pereire, 75017 Paris" // address
  ],
  berlin: ["Berlin (PTC)", "FriedrichstraÃŸe 121,\n 10117 Berlin"],
  brussels: ["Brussels", "ChaussÃ©e de Charleroi 112,\n 1060 Brussels Belgium"],
  brussels2: [
  "Brussels (SteepConsult)",
  "Broekstraat 49-53 bus 5, 1000 Brussels"],

  brussels3: ["Brussels (Redcactus)", "Rue du Marais 49,\n 1000 Brussels"],
  berchem: ["Berchem", "Filip Williotstraat 9,\n 2600 Berchem"],
  calgary: ["Calgary", "1410 1122 4 St. SW,\n Calgary, AB T2R 1M1 - Canada"],
  toronto: [
  "Toronto",
  "Suite 304, 49 Spadaina Ave.,\n Toronto, ON M5V 2J1 â€“ Canada"],

  sidney: [
  "Sidney",
  "Level 17, 9 Castlereagh St.,\n Sydney, CBD NSW 2000 â€“ Australia"],

  luxembourg: ["Luxembourg", "1 Rue du Fort Rheinsheim, 2419 Luxembourg"],
  frankfurt: ["Frankfurt", "FellnerstraÃŸe 5, 60322 Frankfurt am Main"],
  frankfurt2: ["Frankfurt (PTC)", "Taunusanlage 8, 60329 Frankfurt am Main"],
  lyon: ["Lyon", "15 rue des cuirassiers,\n Lyon 69003, France"],
  lille: ["Lille", "40 Place du ThÃ©Ã¢tre,\n Lille 59800, France"],
  // "am" : "Barbara Strozzilaan 201, 1083 Amsterdam",
  ghent: ["Ghent", "Sluisweg 1 bus 15,\n 9000 Ghent"],
  geneva: ["Geneva", "5 Chemin du PrÃ©-Fleuri - CH 1228 Plan-les-Ouates"],
  lausanne: ["Lausanne", "Avenue de cour 135,\n 1007 Lausanne"],
  zurich: ["Zurich", "Thurgauerstrasse 40,\n 8050 Zurich"],
  chambery: [
  "ChambÃ©ry",
  "AllÃ©e lac saint andrÃ© Savoie technolac,\n 73382 Le bourget du lac"],

  berlin: ["Berlin", "FriedrichstraÃŸe 121,\n 10117 Berlin"],

  munchen: ["MÃ¼nchen (PTC)", "Birketweg 31,\n 80639 MÃ¼nchen"],
  wien: ["Wien", "Fischhof 3/6,\n A-1010 Wien"],
  wien2: ["Wien (PTC)", "Mariahilfer Str. 93/2/20,\n 1060 Wien"],
  bielefeld: [
  "Bielefeld",
  "Technologiezentrum, MeisenstraÃŸe 96,\n 33607 Bielefeld"],

  singapore: [
  "Singapore",
  "9 Raffles Place #17-02, Republic Plaza II,\n Singapore 048619"],

  hongkong: [
  "Hong Kong",
  "Level 10, Central Building,1-3 Pedder Street,\n Central, Hong Kong"],

  hongkong2: [
  "Hong Kong (APAC)",
  "26/F Beautiful Group Tower,\n 77 Connaught Road Central"],

  vietnam_hanoi: [
  "Vietnam (Hanoi)",
  "TNR Tower, 54A Nguyen Chi Thanh, Dong Da,\n Hanoi, Vietnam"],


  nantes: [
  "Nantes",
  "Immeuble ZERO NEWTON, 3 place Albert Camus,\n 44200 Nantes, France"],

  vietnam_etown1: [
  "Vietnam (e.town 1)",
  "e.town 1, 364 Cong Hoa, Tan Binh,\n Ho Chi Minh City, Vietnam"],

  vietnam_etown3: [
  "Vietnam (e.town 3)",
  "e.town 3, 364 Cong Hoa, Tan Binh,\n Ho Chi Minh City, Vietnam"],


  sofia: [
  "Sofia",
  "Avenue Aleksandar Stamboliyski 239,\n 1309 Sofia, Bulgaria"],

  bogota: ["Bogota", "Cra. 11B #99-35 \n BogotÃ¡, Colombia"] };


var addresses = {};

Object.keys(uaddresses).
sort().
forEach(function (key) {
  addresses[key] = uaddresses[key];
});

var personal = {
  firstName: {
    label: "First name",
    value: "" },

  lastName: {
    label: "Last name",
    value: "" },

  position: {
    label: "Position",
    value: "" },

  email: {
    label: "Email",
    value: "" },

  phoneA: {
    label: "Phone",
    value: "" },

  phoneB: {
    label: "Mobile",
    value: "" } };



var data = {
  personal: personal,
  brands: brands,
  addresses: addresses,
  selectedBrand: "positivethinkingcompanybrand",
  selectedAddress: "brussels",
  wasCopied: false,
  assetsUrl: assetsUrl };


var vm = new Vue({
  el: "#app",
  data: data,
  computed: {
    fullName() {
      return (
        this.personal.firstName.value +
        " " +
        this.personal.lastName.value.toUpperCase());

    },
    brandName() {
      var isParis = this.addresses[this.selectedAddress][1].
      replace(/\s/g, "").
      toLowerCase().
      includes("paris");
      var isBerlin = this.addresses[this.selectedAddress][1].
      replace(/\s/g, "").
      toLowerCase().
      includes("berlin");
      var isBielefeld = this.addresses[this.selectedAddress][1].
      replace(/\s/g, "").
      toLowerCase().
      includes("bielefeld");
      var isBrussels = this.addresses[this.selectedAddress][1].
      replace(/\s/g, "").
      toLowerCase().
      includes("brussels");
      var isFrankfurt = this.addresses[this.selectedAddress][1].
      replace(/\s/g, "").
      toLowerCase().
      includes("frankfurt");
      var isGeneva = this.addresses[this.selectedAddress][1].
      replace(/\s/g, "").
      toLowerCase().
      includes("geneva");
      var isHongkong = this.addresses[this.selectedAddress][1].
      replace(/\s/g, "").
      toLowerCase().
      includes("hongkong");
      var isLuxembourg = this.addresses[this.selectedAddress][1].
      replace(/\s/g, "").
      toLowerCase().
      includes("luxembourg");
      var isSingapore = this.addresses[this.selectedAddress][1].
      replace(/\s/g, "").
      toLowerCase().
      includes("singapore");
      var isZurich = this.addresses[this.selectedAddress][1].
      replace(/\s/g, "").
      toLowerCase().
      includes("zurich");
      //var isNantes = this.addresses[this.selectedAddress][1].replace(/\s/g, "").toLowerCase().includes('nantes');

      /*Check for AC Partners */
      if (this.brands[this.selectedBrand][0] === "AC Partners" && isBrussels)
      return "AC PartnersÂ® (ADNEOM S.A.)";

      /*Check for Adneom */
      if (this.brands[this.selectedBrand][0] === "ADNEOM" && isBerlin)
      return "ADNEOMÂ® (Mayato GmbH)";
      if (this.brands[this.selectedBrand][0] === "ADNEOM" && isBielefeld)
      return "ADNEOMÂ® (Mayato GmbH)";
      if (this.brands[this.selectedBrand][0] === "ADNEOM" && isGeneva)
      return "ADNEOMÂ® (SERIAL S.A.)";
      if (this.brands[this.selectedBrand][0] === "ADNEOM" && isHongkong)
      return "ADNEOMÂ® (OneAston HK Ltd.)";
      //if (this.brands[this.selectedBrand][0] === "ADNEOM" &&  isNantes) return "ADNEOMÂ® (World of Digits Nantes S.A.S.)";
      if (this.brands[this.selectedBrand][0] === "ADNEOM" && isSingapore)
      return "ADNEOMÂ® (OneAston Pte. Ltd.)";
      if (this.brands[this.selectedBrand][0] === "ADNEOM" && isZurich)
      return "ADNEOMÂ® (SERIAL S.A.)";

      /*Check for Alispharm*/
      if (this.brands[this.selectedBrand][0] === "Alispharm" && isBrussels)
      return "AlispharmÂ®(ADNEOM S.A.)";

      /*Check for BGFi*/
      if (
      this.brands[this.selectedBrand][0] === "BGFi Consulting" &&
      isBrussels)

      return "BGFIÂ® (ADNEOM S.A.)";
      if (this.brands[this.selectedBrand][0] === "BGFi Consulting" && isGeneva)
      return "BGFIÂ® (SERIAL S.A.)";
      if (
      this.brands[this.selectedBrand][0] === "BGFi Consulting" &&
      isHongkong)

      return "BGFIÂ® (OneAston HK Ltd.)";
      if (
      this.brands[this.selectedBrand][0] === "BGFi Consulting" &&
      isLuxembourg)

      return "BGFIÂ® (ADNEOM Luxembourg SARL)";
      if (
      this.brands[this.selectedBrand][0] === "BGFi Consulting" &&
      isSingapore)

      return "BGFIÂ® (OneAston Pte. Ltd.)";

      /*Check for Otofacto*/
      // if (this.brands[this.selectedBrand][0] === "Otofacto" && isBerlin)
      //   return "Otofacto (Mayato GmbH)";
      // if (this.brands[this.selectedBrand][0] === "Otofacto" && isBielefeld)
      //   return "Otofacto (Mayato GmbH)";
      // if (this.brands[this.selectedBrand][0] === "Otofacto" && isBrussels)
      //   return "Otofacto (ADNEOM S.A.)";
      // if (this.brands[this.selectedBrand][0] === "Otofacto" && isGeneva)
      //   return "Otofacto (SERIAL S.A.)";
      // if (this.brands[this.selectedBrand][0] === "Otofacto" && isLuxembourg)
      //   return "Otofacto (ADNEOM Luxembourg SARL)";

      /*Check for Mayato*/
      if (this.brands[this.selectedBrand][0] === "Mayato" && isZurich)
      return "MayatoÂ® (SERIAL S.A.)";

      /*Check for Oneaston*/
      if (this.brands[this.selectedBrand][0] === "OneAston" && isLuxembourg)
      return "OneAstonÂ® (ADNEOM Luxembourg SARL)";

      /*Check for Redcactus*/
      if (this.brands[this.selectedBrand][0] === "Redcactus" && isBrussels)
      return "RedcactusÂ®Â (ADNEOM S.A.)";
      if (this.brands[this.selectedBrand][0] === "Redcactus" && isLuxembourg)
      return "RedcactusÂ® (ADNEOM Luxembourg SARL)";

      /*Check for WOD*/
      if (this.brands[this.selectedBrand][0] === "World Of Digits" && isBerlin)
      return "World of DigitsÂ® (Mayato GmbH)";
      if (
      this.brands[this.selectedBrand][0] === "World Of Digits" &&
      isBielefeld)

      return "World of DigitsÂ® (Mayato GmbH)";
      if (
      this.brands[this.selectedBrand][0] === "World Of Digits" &&
      isFrankfurt)

      return "World of DigitsÂ® (Mayato GmbH)";
      if (this.brands[this.selectedBrand][0] === "World Of Digits" && isGeneva)
      return "World of DigitsÂ® (SERIAL S.A.)";
      if (
      this.brands[this.selectedBrand][0] === "World Of Digits" &&
      isLuxembourg)

      return "World of DigitsÂ® (ADNEOM Luxembourg SARL)";

      /*Otherwise... do as usual*/
      return this.brands[this.selectedBrand][0];
    },
    brandHref() {
      return this.brands[this.selectedBrand][1];
    },
    brandDomain() {
      return this.brands[this.selectedBrand][2];
    },
    brandColor() {
      return this.brands[this.selectedBrand][3];
    },
    address() {
      return this.addresses[this.selectedAddress][1];
    },
    linkedin() {
      return this.brands[this.selectedBrand][4];
    },
    twitter() {
      return this.brands[this.selectedBrand][5];
    },
    instagram() {
      return this.brands[this.selectedBrand][6];
    },
    youtube() {
      return this.brands[this.selectedBrand][7];
    },
    vimeo() {
      return this.brands[this.selectedBrand][8];
    },
    xing() {
      return this.brands[this.selectedBrand][9];
    },
    font() {
      return this.brands[this.selectedBrand][10];
    },
    font2() {
      return this.brands[this.selectedBrand][11];
    },
    replaceWithBr() {
      return this.addresses[this.selectedAddress][1].replace(/\n/g, "<br />");
    } },

  methods: {
    copyAlert() {
      this.wasCopied = true;
      that = this;
      setTimeout(function () {
        that.wasCopied = false;
      }, 3000);
    },
    copyClick() {
      document.getElementById("signature").focus();
      this.copyTextToClipboard(document.getElementById("signature").outerHTML);
    },
    copyTextToClipboard(text) {
      if (!navigator.clipboard) {
        this.fallbackCopyTextToClipboard(text);
        return;
      }
      that = this;
      navigator.clipboard.writeText(text).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
        that.copyAlert();
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      });

    },
    fallbackCopyTextToClipboard(text) {
      var textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
        console.log("Fallback: Copying text command was " + msg);
        this.copyAlert();
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      document.body.removeChild(textArea);
    },
    copyWithFormatting() {
      var range = document.createRange();
      range.selectNodeContents(document.getElementById("signature"));
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      if (document.execCommand("copy")) {
        this.copyAlert();
      }
      sel.removeAllRanges();
    } } });