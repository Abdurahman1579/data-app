// --- 1. SUPABASE CONFIGURATION ---
const supabaseUrl = "https://yjkgipivctdhezwvfwjx.supabase.co";
const supabaseKey = "sb_publishable_wgNooZL5_9oxf_0Mg2RmGw_m78N-O5m";
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

const translations = {
  om: {
    mainTitle: "Lakkoofsa Muslimoota Kutaa Magaalaa Malkaa Noonnoo",
    introText:
      "Lakkoofsa muslimoota beekuun diinaaf, hawaasaaf, karoora misoomaaf, gargaarsa waloo fi tokkummaa hawaasaa cimsuuf shoora olaanaa qaba. Ragaa sirrii qabaachuun deeggarsa sirrii kennuuf nu dandeessisa.",
    btn1: "Daataa lakkoofsa muslimtoota kutaa magaalaa malkaa noonnoo haaraa / አዲስ የቆጠራ መረጃ",
    btn2: "Baay'ina muslimtoota aanaa malkaa gafarsaatti galmaa'anii dhiiraa fi dhalaa / ወረዳ መልካ ግፋርሳ",
    btn3: "Baay'ina muslimtoota aanaa beerootti galmaa'anii dhiiraa fi dhalaa / ወረዳ ቤሮ",
    btn4: "Baay'ina muslimtoota aanaa Noonnootti galmaa'anii dhiiraa fi dhalaa / ወረዳ ኖንኖ",
    btn5: "Baay'ina muslimtoota K/M/M/N walii galaa dhiiraa fi dhalaa / አጠቃላይ በወንድ እና ሴት",
    btn6: "Ida'ama Baayyina muslimtoota K/M/M/N walii galaa / አጠቃላይ ድምር",
    lblAanaa: "Aanaa Filadhu / ወረዳ ይምረጡ:",
    lblBara: "Bara Galmee (E.C) / የቆጠራ ዓመት:",
    lblMaqaa: "Maqaa Guutuu / ሙሉ ስም:",
    lblSaala: "Saala / ጾታ:",
    lblUmrii: "Umrii / ዕድሜ:",
    lblBilbila: "Lakkoofsa Bilbilaa / የስልክ ቁጥር:",
    lblGooxii: "Ganda / Gooxii / ቀበሌ ወይም ጎጥ:",
    lblMasjida: "Masjida Itti Dhihaatu / የሚቀራረቡት መስጂድ:",
    lblMaatiiDhiira: "Baay'ina Miseensa Maatii (Dhiira) / የቤተሰብ ብዛት (ወንድ):",
    lblMaatiiDhalaa: "Baay'ina Miseensa Maatii (Dhalaa) / የቤተሰብ ብዛት (ሴት):",
    lblBarnoota: "Sadarkaa Barnootaa (Ammayyaa / Diinii) / የትምህርት ደረጃ:",
    btnSubmit: "Galmeessi / መዝግብ",
    formTitle: "Galmee Daataa Haaraa / አዲስ የመረጃ ቆጠራ ቅጽ",
    btnBack: "← Deebi'i / Back / ተመለስ",
  },
  am: {
    mainTitle: "የማልካ ኖንኖ ክፍለ ከተማ ሙስሊሞች ቆጠራ",
    introText:
      "የሙስሊሞችን ቁጥር ማወቅ ለህብረተሰቡ እድገት፣ ለልማት እቅድ እና ለአብሮነት ትልቅ ሚና አለው። ትክክለኛ መረጃ መኖሩ ተገቢውን ድጋፍ ለማድረግ ያስችላል።",
    btn1: "አዲስ የማልካ ኖንኖ ክፍለ ከተማ ሙስሊሞች ቆጠራ መረጃ / Daataa Haaraa",
    btn2: "በማልካ ግፋርሳ ወረዳ የተመዘገቡ ሙስሊሞች ብዛት (ወንድ እና ሴት) / Malkaa Gafarsaa",
    btn3: "በቤሮ ወረዳ የተመዘገቡ ሙስሊሞች ብዛት (ወንድ እና ሴት) / Beeroo",
    btn4: "በኖንኖ ወረዳ የተመዘገቡ ሙስሊሞች ብዛት (ወንድ እና ሴት) / Noonnoo",
    btn5: "አጠቃላይ የክ/ከተማው ሙስሊሞች ብዛት በወንድ እና ሴት / Walii Galaa",
    btn6: "አጠቃላይ የክ/ከተማው ሙስሊሞች ድምር ብዛት / Ida'ama Walii Galaa",
    lblAanaa: "ወረዳ ይምረጡ / Aanaa Filadhu:",
    lblBara: "የቆጠራ ዓመተ ምህረት (ኢ.ዘ) / Bara Galmee:",
    lblMaqaa: "ሙሉ ስም / Maqaa Guutuu:",
    lblSaala: "ጾታ / Saala:",
    lblUmrii: "ዕድሜ / Umrii:",
    lblBilbila: "የስልክ ቁጥር / Lakkoofsa Bilbilaa:",
    lblGooxii: "ቀበሌ / ጎጥ / Ganda / Gooxii:",
    lblMasjida: "የሚቀራረቡት መስጂድ / Masjida Itti Dhihaatu:",
    lblMaatiiDhiira: "የቤተሰብ ብዛት (ወንድ) / Maatii (Dhiira):",
    lblMaatiiDhalaa: "የቤተሰብ ብዛት (ሴት) / Maatii (Dhalaa):",
    lblBarnoota: "የትምህርት ደረጃ (ዘመናዊ / ዲን) / Sadarkaa Barnootaa:",
    btnSubmit: "መዝግብ / Galmeessi",
    formTitle: "አዲስ የመረጃ ቆጠራ ቅጽ / Galmee Daataa",
    btnBack: "ተመለስ / Deebi'i",
  },
  en: {
    mainTitle: "Malkaa Noonnoo Sub-City Muslim Population Census",
    introText:
      "Knowing the Muslim population plays a vital role in community planning, development, and strengthening unity. Accurate data ensures proper support and resources.",
    btn1: "New Malkaa Noonnoo Sub-City Muslim Population Data",
    btn2: "Number of Muslims registered in Malkaa Gafarsaa Woreda (Male & Female)",
    btn3: "Number of Muslims registered in Beeroo Woreda (Male & Female)",
    btn4: "Number of Muslims registered in Noonnoo Woreda (Male & Female)",
    btn5: "Total Muslims in Sub-City by Male & Female",
    btn6: "Grand Total of Muslims in Sub-City",
    lblAanaa: "Select Woreda / Aanaa:",
    lblBara: "Registration Year (E.C):",
    lblMaqaa: "Full Name:",
    lblSaala: "Gender:",
    lblUmrii: "Age:",
    lblBilbila: "Phone Number:",
    lblGooxii: "Kebele / Gooxii:",
    lblMasjida: "Nearby Mosque:",
    lblMaatiiDhiira: "Family Members Count (Male):",
    lblMaatiiDhalaa: "Family Members Count (Female):",
    lblBarnoota: "Education Level (Modern / Religious):",
    btnSubmit: "Register",
    formTitle: "New Census Registration Form",
    btnBack: "← Back / Deebi'i",
  },
};

function changeLanguage(lang) {
  document.getElementById("mainTitle").innerText = translations[lang].mainTitle;
  document.getElementById("introText").innerText = translations[lang].introText;
  document.getElementById("btn1").innerText = translations[lang].btn1;
  document.getElementById("btn2").innerText = translations[lang].btn2;
  document.getElementById("btn3").innerText = translations[lang].btn3;
  document.getElementById("btn4").innerText = translations[lang].btn4;
  document.getElementById("btn5").innerText = translations[lang].btn5;
  document.getElementById("btn6").innerText = translations[lang].btn6;
  document.getElementById("lblAanaa").innerText = translations[lang].lblAanaa;
  document.getElementById("lblBara").innerText = translations[lang].lblBara;
  document.getElementById("lblMaqaa").innerText = translations[lang].lblMaqaa;
  document.getElementById("lblSaala").innerText = translations[lang].lblSaala;
  document.getElementById("lblUmrii").innerText = translations[lang].lblUmrii;
  document.getElementById("lblBilbila").innerText =
    translations[lang].lblBilbila;
  document.getElementById("lblGooxii").innerText = translations[lang].lblGooxii;
  document.getElementById("lblMasjida").innerText =
    translations[lang].lblMasjida;
  document.getElementById("lblMaatiiDhiira").innerText =
    translations[lang].lblMaatiiDhiira;
  document.getElementById("lblMaatiiDhalaa").innerText =
    translations[lang].lblMaatiiDhalaa;
  document.getElementById("lblBarnoota").innerText =
    translations[lang].lblBarnoota;
  document.getElementById("btnSubmit").innerText = translations[lang].btnSubmit;
  document.getElementById("formTitle").innerText = translations[lang].formTitle;
  document.getElementById("btnBack").innerText = translations[lang].btnBack;
  document.getElementById("btnBackReport").innerText =
    translations[lang].btnBack;
}

function openRegistration() {
  document.getElementById("introSection").classList.add("hidden");
  document.getElementById("menuButtons").classList.add("hidden");
  document.getElementById("registrationForm").classList.remove("hidden");
  document.getElementById("reportSection").classList.add("hidden");
}

// --- 2. SHOW REPORT FUNCTION (Updated Labels to Ida'ama Dhiiraa / Dhalaa) ---
async function showReport(type) {
  document.getElementById("introSection").classList.add("hidden");
  document.getElementById("menuButtons").classList.add("hidden");
  document.getElementById("registrationForm").classList.add("hidden");
  document.getElementById("reportSection").classList.remove("hidden");

  let reportHTML = "";
  let titleText = "";

  try {
    if (type === "malkaa_gafarsaa" || type === "beeroo" || type === "noonnoo") {
      let aanaaName = type;
      titleText = `Gabaasa Aanaa ${type} / የ${type} ወረዳ ሪፖርት`;

      const { data, error } = await _supabase
        .from("muslim_census")
        .select("maatii_dhiira, maatii_dhalaa")
        .eq("aanaa", aanaaName);

      if (error) throw error;

      let sumDhiira = 0;
      let sumDhalaa = 0;

      data.forEach((row) => {
        sumDhiira += Number(row.maatii_dhiira || 0);
        sumDhalaa += Number(row.maatii_dhalaa || 0);
      });

      reportHTML = `<p>Ida'ama Dhiiraa (የወንድ ድምር): <b>${sumDhiira}</b> | Ida'ama Dhalaa (የሴት ድምር): <b>${sumDhalaa}</b></p>`;
    } else if (type === "walii_galaa") {
      titleText = "Gabaasa Walii Galaa / አጠቃላይ ሪፖርት (Dhiira & Dhalaa)";

      const { data, error } = await _supabase
        .from("muslim_census")
        .select("maatii_dhiira, maatii_dhalaa");

      if (error) throw error;

      let totalDhiira = 0;
      let totalDhalaa = 0;

      data.forEach((row) => {
        totalDhiira += Number(row.maatii_dhiira || 0);
        totalDhalaa += Number(row.maatii_dhalaa || 0);
      });

      reportHTML = `
                <p>Ida'ama Dhiiraa (አጠቃላይ የወንድ ድምር): <b>${totalDhiira}</b></p>
                <p>Ida'ama Dhalaa (አጠቃላይ የሴት ድምር): <b>${totalDhalaa}</b></p>
            `;
    } else if (type === "iada_ama") {
      titleText = "Ida'ama Walii Galaa / አጠቃላይ ድምር K/M/M/N";

      const { data, error } = await _supabase
        .from("muslim_census")
        .select("maatii_dhiira, maatii_dhalaa");

      if (error) throw error;

      let grandTotal = 0;

      data.forEach((row) => {
        grandTotal +=
          Number(row.maatii_dhiira || 0) + Number(row.maatii_dhalaa || 0);
      });

      reportHTML = `<h3>Ida'ama Waliigala Uummata Muslimaa (አጠቃላይ የሙስሊሞች ድምር): <b>${grandTotal}</b></h3>`;
    }
  } catch (err) {
    console.error("Error fetching report:", err);
    reportHTML =
      "<p style='color: red;'>Ragaan fiduu irratti dogoggorri uumameera! / መረጃውን በማምጣት ላይ ስህተት ተፈጥሯል!</p>";
  }

  document.getElementById("reportTitle").innerText = titleText;
  document.getElementById("reportContent").innerHTML = reportHTML;
}

function goBackToMenu() {
  document.getElementById("introSection").classList.remove("hidden");
  document.getElementById("menuButtons").classList.remove("hidden");
  document.getElementById("registrationForm").classList.add("hidden");
  document.getElementById("reportSection").classList.add("hidden");
}

// --- 3. SUPABASE DATA INSERTION ON FORM SUBMIT ---
document
  .getElementById("registrationForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      aanaa: document.getElementById("aanaa").value,
      bara: document.getElementById("bara").value,
      maqaa: document.getElementById("maqaa").value,
      saala: document.getElementById("saala").value,
      umrii: parseInt(document.getElementById("umrii").value),
      bilbila: document.getElementById("bilbila").value,
      gooxii: document.getElementById("gooxii").value,
      masjida: document.getElementById("masjida").value,
      maatii_dhiira: parseInt(document.getElementById("maatiiDhiira").value),
      maatii_dhalaa: parseInt(document.getElementById("maatiiDhalaa").value),
      barnoota: document.getElementById("barnoota").value,
    };

    try {
      const { data, error } = await _supabase
        .from("muslim_census")
        .insert([formData]);

      if (error) {
        console.error("Dogoggori uumameera:", error);
        alert("Galmeessuu irratti dogoggorri uumame! / መዝገብ ላይ ስህተት ተፈጥሯል!");
      } else {
        alert("Galmeen milkaa'eera! / መዝገቡ ተሳክቷል! (Data saved successfully)");
        this.reset();
        goBackToMenu();
      }
    } catch (err) {
      console.error("Network Error:", err);
      alert("Rakkoo internetiitiin deetaan hin ergamne!");
    }
  });
