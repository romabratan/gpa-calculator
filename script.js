let currentLang = localStorage.getItem("studentCalcLang") || "kk";

const translations = {
  kk: {
    title: "Студент балл калькуляторы",
    subtitle: "Рейтинг, стипендия және GPA есептеу",
    ratingTitle: "15 апта рейтинг есептеу",
    ratingDesc: "Пән бағаларыңызды енгізіп, рейтинг пен стипендия көрсеткіштерін есептеңіз",
    subjectName: "Пән атауы",
    subjectNameExample: "Мысалы: Информатика",
    calculate: "Есептеу",
    rating: "Рейтинг:",
    needExam: "Стипендияға емтиханнан керек:",
    finalPrediction: "Қорытынды болжам:",
    status: "Статус:",
    share: "Досыңмен бөлісу",
    shareText: "Рейтинг, стипендия және GPA есептейтін сайт",
    linkCopied: "Сайт сілтемесі көшірілді!",
    scholarshipImpossible: "❌ 100 балл алса да стипендияға жетпейді",
    finalGradeTitle: "Қорытынды балл есептеу",
    finalGradeDesc: "Рейтинг пен емтихан балын енгізіп, қорытынды бағаны шығарыңыз",
    finalRatingLabel: "Рейтинг балл",
    finalExamLabel: "Емтихан балл",
    finalRatingExample: "85",
    finalExamExample: "50",
    finalGradeLabel: "Қорытынды балл:",
    gpaTitle: "Семестр GPA есептеу",
    gpaDesc: "Пән атауы, кредит және қорытынды балл арқылы GPA есептеңіз",
    addSubject: "+ Пән қосу",
    calculateGpa: "GPA есептеу",
    semesterGpa: "Семестр GPA:",
    gpaDetailCredit: "Кредит",
    gpaDetailScore: "Баға",
    gpaDetailLetter: "Әріптік",
    gpaDetailGpa: "GPA",
    targetGpaTitle: "Мақсат GPA калькуляторы",
    targetGpaDesc: "Қалған пәндерден орташа қанша балл керек екенін шамамен есептейді",
    currentGpaLabel: "Қазіргі GPA",
    targetGpaLabel: "Мақсат GPA",
    remainingSubjectsLabel: "Қалған пән саны",
    currentGpaExample: "2.92",
    targetGpaExample: "3.30",
    remainingSubjectsExample: "5",
    targetAvgPrefix: "Қалған пәндерден орташа:",
    targetAvgSuffix: "балл алу керек",
    impossibleTargetScore: "100+ мүмкін емес",
    courseGpaTitle: "Курс GPA есептеу",
    courseGpaDesc: "1 және 2 семестр GPA арқылы курс GPA есептеу",
    sem1GpaLabel: "1-семестр GPA",
    sem2GpaLabel: "2-семестр GPA",
    courseGpaLabel: "Курс GPA:",
    exportTitle: "Нәтижені шығару",
    exportDesc: "Нәтижені сақтап, PDF немесе PNG ретінде жүктей аласыз",
    exportPng: "PNG / Screenshot",
    exportPdf: "PDF",
    save: "Браузерге сақтау",
    clear: "Тазалау",
    week: "апта",
    weekScorePlaceholder: "0 - 100",
    passedScholarship: " Стипендия сақталады",
    passedNoScholarship: " Өтті, бірақ стипендия жоқ",
    failedFinal: " Қорытынды 50-ден төмен, жазғы семестр қаупі бар",
    failedExam: " Емтихан 50-ден төмен, өтпейді",
    noData: "Мәлімет енгізіңіз",
    saved: "Мәлімет браузерге сақталды",
    cleared: " Мәлімет тазаланды",
    invalidScore: "Балдар 0 мен 100 аралығында болуы керек!",
    invalidGpa: "GPA 0 мен 4 аралығында болуы керек!",
    subjectPlaceholder: "Пән атауы",
    creditPlaceholder: "Кредит",
    finalPlaceholder: "Қорытынды балл",
    delete: "Өшіру"
  },

  ru: {
    title: "Калькулятор баллов студента",
    subtitle: "Расчет рейтинга, стипендии и GPA",
    ratingTitle: "Расчет рейтинга за 15 недель",
    ratingDesc: "Введите оценки по предмету, чтобы рассчитать рейтинг и стипендию",
    subjectName: "Название предмета",
    subjectNameExample: "Например: Информатика",
    calculate: "Рассчитать",
    rating: "Рейтинг:",
    needExam: "Для стипендии нужно на экзамене:",
    finalPrediction: "Прогноз итоговой оценки:",
    status: "Статус:",
    share: "Поделиться с другом",
    shareText: "Сайт для расчета рейтинга, стипендии и GPA",
    linkCopied: "Ссылка на сайт скопирована!",
    scholarshipImpossible: "❌ Даже 100 баллов на экзамене не хватает для стипендии",
    finalGradeTitle: "Расчет итоговой оценки",
    finalGradeDesc: "Введите рейтинг и экзамен, чтобы получить итоговую оценку",
    finalRatingLabel: "Рейтинговый балл",
    finalExamLabel: "Экзаменационный балл",
    finalRatingExample: "85",
    finalExamExample: "50",
    finalGradeLabel: "Итоговый балл:",
    gpaTitle: "Расчет GPA за семестр",
    gpaDesc: "Рассчитайте GPA по названию предмета, кредитам и итоговому баллу",
    addSubject: "+ Добавить предмет",
    calculateGpa: "Рассчитать GPA",
    semesterGpa: "GPA за семестр:",
    gpaDetailCredit: "Кредит",
    gpaDetailScore: "Оценка",
    gpaDetailLetter: "Буква",
    gpaDetailGpa: "GPA",
    targetGpaTitle: "Калькулятор целевого GPA",
    targetGpaDesc: "Примерно рассчитывает средний балл, нужный по оставшимся предметам",
    currentGpaLabel: "Текущий GPA",
    targetGpaLabel: "Целевой GPA",
    remainingSubjectsLabel: "Количество оставшихся предметов",
    currentGpaExample: "2.92",
    targetGpaExample: "3.30",
    remainingSubjectsExample: "5",
    targetAvgPrefix: "Средний балл по оставшимся предметам:",
    targetAvgSuffix: "нужно набрать",
    impossibleTargetScore: "100+ невозможно",
    courseGpaTitle: "Расчет GPA за курс",
    courseGpaDesc: "Расчет GPA за курс по GPA 1 и 2 семестра",
    sem1GpaLabel: "GPA 1-го семестра",
    sem2GpaLabel: "GPA 2-го семестра",
    courseGpaLabel: "GPA за курс:",
    exportTitle: "Экспорт результата",
    exportDesc: "Сохраните результат и скачайте в формате PDF или PNG",
    exportPng: "PNG / Скриншот",
    exportPdf: "PDF",
    save: "Сохранить в браузере",
    clear: "Очистить",
    week: "неделя",
    weekScorePlaceholder: "0 - 100",
    passedScholarship: " Стипендия сохраняется",
    passedNoScholarship: " Сдал, но без стипендии",
    failedFinal: " Итог ниже 50, есть риск летнего семестра",
    failedExam: " Экзамен ниже 50, не проходит",
    noData: "Введите данные",
    saved: " Данные сохранены в браузере",
    cleared: " Данные очищены",
    invalidScore: "Баллы должны быть от 0 до 100!",
    invalidGpa: "GPA должен быть от 0 до 4!",
    subjectPlaceholder: "Название предмета",
    creditPlaceholder: "Кредит",
    finalPlaceholder: "Итоговый балл",
    delete: "Удалить"
  },

  tr: {
    title: "Öğrenci Puan Hesaplayıcı",
    subtitle: "Rating, burs ve GPA hesaplama",
    ratingTitle: "15 haftalık rating hesaplama",
    ratingDesc: "Ders notlarını girerek rating ve burs göstergelerini hesaplayın",
    subjectName: "Ders adı",
    subjectNameExample: "Örneğin: Bilişim",
    calculate: "Hesapla",
    rating: "Rating:",
    needExam: "Burs için sınavdan gereken:",
    finalPrediction: "Tahmini final notu:",
    status: "Durum:",
    share: "Arkadaşınla paylaş",
    shareText: "Rating, burs ve GPA hesaplayan site",
    linkCopied: "Site bağlantısı kopyalandı!",
    scholarshipImpossible: "❌ Sınavdan 100 alsa bile burs için yetmez",
    finalGradeTitle: "Final notu hesaplama",
    finalGradeDesc: "Rating ve sınav notunu girerek final notunu hesaplayın",
    finalRatingLabel: "Rating notu",
    finalExamLabel: "Sınav notu",
    finalRatingExample: "85",
    finalExamExample: "50",
    finalGradeLabel: "Final notu:",
    gpaTitle: "Dönem GPA hesaplama",
    gpaDesc: "Ders adı, kredi ve final notu ile GPA hesaplayın",
    addSubject: "+ Ders ekle",
    calculateGpa: "GPA hesapla",
    semesterGpa: "Dönem GPA:",
    gpaDetailCredit: "Kredi",
    gpaDetailScore: "Not",
    gpaDetailLetter: "Harf",
    gpaDetailGpa: "GPA",
    targetGpaTitle: "Hedef GPA hesaplayıcı",
    targetGpaDesc: "Kalan derslerden gereken ortalama notu yaklaşık hesaplar",
    currentGpaLabel: "Mevcut GPA",
    targetGpaLabel: "Hedef GPA",
    remainingSubjectsLabel: "Kalan ders sayısı",
    currentGpaExample: "2.92",
    targetGpaExample: "3.30",
    remainingSubjectsExample: "5",
    targetAvgPrefix: "Kalan derslerden ortalama:",
    targetAvgSuffix: "puan almanız gerekir",
    impossibleTargetScore: "100+ mümkün değil",
    courseGpaTitle: "Kurs GPA hesaplama",
    courseGpaDesc: "1. ve 2. dönem GPA ile kurs GPA hesaplama",
    sem1GpaLabel: "1. dönem GPA",
    sem2GpaLabel: "2. dönem GPA",
    courseGpaLabel: "Kurs GPA:",
    exportTitle: "Sonucu dışa aktar",
    exportDesc: "Sonucu kaydedin ve PDF veya PNG olarak indirin",
    exportPng: "PNG / Ekran görüntüsü",
    exportPdf: "PDF",
    save: "Tarayıcıya kaydet",
    clear: "Temizle",
    week: "hafta",
    weekScorePlaceholder: "0 - 100",
    passedScholarship: " Burs korunur",
    passedNoScholarship: " Geçti, ancak burs yok",
    failedFinal: " Genel not 50'nin altında, yaz dönemi riski var",
    failedExam: " Sınav 50'nin altında, geçmez",
    noData: "Bilgi giriniz",
    saved: " Bilgiler tarayıcıya kaydedildi",
    cleared: " Bilgiler temizlendi",
    invalidScore: "Puanlar 0 ile 100 arasında olmalıdır!",
    invalidGpa: "GPA 0 ile 4 arasında olmalıdır!",
    subjectPlaceholder: "Ders adı",
    creditPlaceholder: "Kredi",
    finalPlaceholder: "Genel not",
    delete: "Sil"
  }
};

document.addEventListener("DOMContentLoaded", () => {
  createWeekInputs();
  addGpaRow();
  loadTheme();
  loadData();
  setLang(currentLang);
});

function t(key) {
  return translations[currentLang][key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("studentCalcLang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  updatePlaceholders();
  createWeekLabels();
}

function updatePlaceholders() {
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });

  document.querySelectorAll(".week-input").forEach((input) => {
    input.placeholder = t("weekScorePlaceholder");
  });

  document.querySelectorAll(".gpa-subject").forEach((input) => (input.placeholder = t("subjectPlaceholder")));
  document.querySelectorAll(".gpa-credit").forEach((input) => (input.placeholder = t("creditPlaceholder")));
  document.querySelectorAll(".gpa-final").forEach((input) => (input.placeholder = t("finalPlaceholder")));
  document.querySelectorAll(".delete-row").forEach((btn) => (btn.textContent = t("delete")));
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("studentCalcTheme", document.body.classList.contains("dark") ? "dark" : "light");
}

function loadTheme() {
  if (localStorage.getItem("studentCalcTheme") === "dark") {
    document.body.classList.add("dark");
  }
}

function createWeekInputs() {
  const weeks = document.getElementById("weeks");
  weeks.innerHTML = "";

  for (let i = 1; i <= 15; i++) {
    const box = document.createElement("div");
    box.className = "week-box";
    box.innerHTML = `
      <label data-week-label="${i}">${i} ${t("week")}</label>
      <input type="number" class="week-input" min="0" max="100" placeholder="${t("weekScorePlaceholder")}">
    `;
    weeks.appendChild(box);
  }
}

function createWeekLabels() {
  document.querySelectorAll("[data-week-label]").forEach(label => {
    label.textContent = `${label.getAttribute("data-week-label")} ${t("week")}`;
  });
}

function calculateRating() {
  const inputs = document.querySelectorAll(".week-input");
  let total = 0;
  let count = 0;
  let hasError = false;

  inputs.forEach(input => {
    const value = parseFloat(input.value);
    input.style.borderColor = "#cbd5e1";

    if (!isNaN(value)) {
      if (value < 0 || value > 100) {
        input.style.borderColor = "#dc2626";
        hasError = true;
      } else {
        total += value;
        count++;
      }
    }
  });

  if (hasError) return alert(t("invalidScore"));
  if (count === 0) return alert(t("noData"));

  const rating = total / count;

  const rawNeededExam = (70 - rating * 0.6) / 0.4;
  let neededExam = Math.max(50, Math.ceil(rawNeededExam));

  if (neededExam > 100) neededExam = 101;

  const examForPrediction = neededExam <= 100 ? neededExam : 100;
  const finalGrade = rating * 0.6 + examForPrediction * 0.4;

  let status = "";

  if (neededExam > 100) {
    status = t("scholarshipImpossible");
  } else if (finalGrade < 50) {
    status = t("failedFinal");
  } else if (finalGrade >= 70) {
    status = t("passedScholarship");
  } else {
    status = t("passedNoScholarship");
  }

  document.getElementById("ratingResult").textContent = rating.toFixed(2);
  document.getElementById("needExamResult").textContent = neededExam > 100 ? "100+" : neededExam;
  document.getElementById("finalResult").textContent = finalGrade.toFixed(2);
  document.getElementById("statusResult").textContent = status;

  saveData(false);
}

function clearRating() {
  document.getElementById("subjectName").value = "";

  document.querySelectorAll(".week-input").forEach(input => {
    input.value = "";
    input.style.borderColor = "#cbd5e1";
  });

  document.getElementById("ratingResult").textContent = "0";
  document.getElementById("needExamResult").textContent = "0";
  document.getElementById("finalResult").textContent = "0";
  document.getElementById("statusResult").textContent = "-";

  saveData(false);
}

function calculateFinalGrade() {
  const ratingInput = document.getElementById("finalRatingInput");
  const examInput = document.getElementById("finalExamInput");

  const rating = parseFloat(ratingInput.value);
  const exam = parseFloat(examInput.value);

  ratingInput.style.borderColor = "#cbd5e1";
  examInput.style.borderColor = "#cbd5e1";

  if (isNaN(rating) || isNaN(exam)) return alert(t("noData"));

  if (rating < 0 || rating > 100) {
    ratingInput.style.borderColor = "#dc2626";
    return alert(t("invalidScore"));
  }

  if (exam < 0 || exam > 100) {
    examInput.style.borderColor = "#dc2626";
    return alert(t("invalidScore"));
  }

  const finalGrade = rating * 0.6 + exam * 0.4;

  let status = "";
  if (exam < 50) {
    status = t("failedExam");
  } else if (finalGrade < 50) {
    status = t("failedFinal");
  } else if (finalGrade >= 70) {
    status = t("passedScholarship");
  } else {
    status = t("passedNoScholarship");
  }

  document.getElementById("finalGradeOnlyResult").textContent = finalGrade.toFixed(2);
  document.getElementById("finalGradeStatus").textContent = status;

  saveData(false);
}

function clearFinalGrade() {
  document.getElementById("finalRatingInput").value = "";
  document.getElementById("finalExamInput").value = "";
  document.getElementById("finalGradeOnlyResult").textContent = "0";
  document.getElementById("finalGradeStatus").textContent = "-";
  saveData(false);
}

function addGpaRow(data = {}) {
  const wrapper = document.getElementById("gpaSubjects");

  const row = document.createElement("div");
  row.className = "gpa-row";

  row.innerHTML = `
    <input type="text" class="gpa-subject" placeholder="${t("subjectPlaceholder")}" value="${data.subject || ""}">
    <input type="number" class="gpa-credit" placeholder="${t("creditPlaceholder")}" min="1" value="${data.credit || ""}">
    <input type="number" class="gpa-final" placeholder="${t("finalPlaceholder")}" min="0" max="100" value="${data.final || ""}">
    <button type="button" class="delete-row" onclick="removeGpaRow(this)">${t("delete")}</button>
  `;

  wrapper.appendChild(row);
}

function removeGpaRow(button) {
  button.closest(".gpa-row").remove();
  if (document.querySelectorAll(".gpa-row").length === 0) addGpaRow();
  saveData(false);
}

function getGradeInfo(score) {
  if (score >= 95) return { letter: "A", point: 4.00 };
  if (score >= 90) return { letter: "A-", point: 3.67 };
  if (score >= 85) return { letter: "B+", point: 3.33 };
  if (score >= 80) return { letter: "B", point: 3.00 };
  if (score >= 75) return { letter: "B-", point: 2.67 };
  if (score >= 70) return { letter: "C+", point: 2.33 };
  if (score >= 65) return { letter: "C", point: 2.00 };
  if (score >= 60) return { letter: "C-", point: 1.67 };
  if (score >= 55) return { letter: "D+", point: 1.33 };
  if (score >= 50) return { letter: "D", point: 1.00 };
  return { letter: "F", point: 0.00 };
}

function calculateGPA() {
  const rows = document.querySelectorAll(".gpa-row");

  let totalCredits = 0;
  let totalPoints = 0;
  let details = "";
  let hasError = false;

  rows.forEach(row => {
    const subjectInput = row.querySelector(".gpa-subject");
    const creditInput = row.querySelector(".gpa-credit");
    const finalInput = row.querySelector(".gpa-final");

    const subject = subjectInput.value.trim();
    const credit = parseFloat(creditInput.value);
    const finalScore = parseFloat(finalInput.value);

    creditInput.style.borderColor = "#cbd5e1";
    finalInput.style.borderColor = "#cbd5e1";

    if (!isNaN(finalScore) && (finalScore < 0 || finalScore > 100)) {
      finalInput.style.borderColor = "#dc2626";
      hasError = true;
      return;
    }

    if (!isNaN(credit) && credit <= 0) {
      creditInput.style.borderColor = "#dc2626";
      hasError = true;
      return;
    }

    if (!isNaN(credit) && !isNaN(finalScore) && credit > 0) {
      const grade = getGradeInfo(finalScore);

      totalCredits += credit;
      totalPoints += grade.point * credit;

      details += `
        <div class="gpa-detail-item">
          <b>${subject || t("subjectPlaceholder")}</b><br>
          ${t("gpaDetailCredit")}: ${credit}<br>
          ${t("gpaDetailScore")}: ${finalScore}<br>
          ${t("gpaDetailLetter")}: ${grade.letter}<br>
          ${t("gpaDetailGpa")}: ${grade.point.toFixed(2)}
        </div>
      `;
    }
  });

  if (hasError) return alert(t("invalidScore"));
  if (totalCredits === 0) return alert(t("noData"));

  const gpa = totalPoints / totalCredits;

  document.getElementById("gpaResult").textContent = gpa.toFixed(2);
  document.getElementById("gpaDetails").innerHTML = details;

  saveData(false);
}

function clearGPA() {
  const wrapper = document.getElementById("gpaSubjects");
  wrapper.innerHTML = "";
  addGpaRow();

  document.getElementById("gpaResult").textContent = "0.00";
  document.getElementById("gpaDetails").innerHTML = "";

  saveData(false);
}

function calculateCourseGPA() {
  const sem1 = parseFloat(document.getElementById("sem1Gpa").value);
  const sem2 = parseFloat(document.getElementById("sem2Gpa").value);

  if (isNaN(sem1) || isNaN(sem2)) return alert(t("noData"));

  if (sem1 < 0 || sem1 > 4 || sem2 < 0 || sem2 > 4) {
    return alert(t("invalidGpa"));
  }

  document.getElementById("courseGpaResult").textContent = ((sem1 + sem2) / 2).toFixed(2);
  saveData(false);
}

function clearCourseGPA() {
  document.getElementById("sem1Gpa").value = "";
  document.getElementById("sem2Gpa").value = "";
  document.getElementById("courseGpaResult").textContent = "0.00";
  saveData(false);
}

function gpaPointToScore(point) {
  if (point > 4) return t("impossibleTargetScore");
  if (point >= 3.67) return 90;
  if (point >= 3.33) return 85;
  if (point >= 3.00) return 80;
  if (point >= 2.67) return 75;
  if (point >= 2.33) return 70;
  if (point >= 2.00) return 65;
  if (point >= 1.67) return 60;
  if (point >= 1.33) return 55;
  if (point >= 1.00) return 50;
  return 0;
}

function calculateTargetGPA() {
  const current = parseFloat(document.getElementById("currentGpa").value);
  const target = parseFloat(document.getElementById("targetGpa").value);
  const remaining = parseFloat(document.getElementById("remainingSubjects").value);

  if (isNaN(current) || isNaN(target) || isNaN(remaining)) return alert(t("noData"));

  if (current < 0 || current > 4 || target < 0 || target > 4 || remaining <= 0) {
    return alert(t("invalidGpa"));
  }

  const neededPoint = target + (target - current) / remaining;
  document.getElementById("targetResult").textContent = gpaPointToScore(neededPoint);

  saveData(false);
}

function clearTargetGPA() {
  document.getElementById("currentGpa").value = "";
  document.getElementById("targetGpa").value = "";
  document.getElementById("remainingSubjects").value = "";
  document.getElementById("targetResult").textContent = "0";
  saveData(false);
}

function collectData() {
  return {
    lang: currentLang,
    subjectName: document.getElementById("subjectName").value,
    weeks: Array.from(document.querySelectorAll(".week-input")).map(input => input.value),
    finalRatingInput: document.getElementById("finalRatingInput")?.value || "",
    finalExamInput: document.getElementById("finalExamInput")?.value || "",
    gpaSubjects: Array.from(document.querySelectorAll(".gpa-row")).map(row => ({
      subject: row.querySelector(".gpa-subject").value,
      credit: row.querySelector(".gpa-credit").value,
      final: row.querySelector(".gpa-final").value
    })),
    currentGpa: document.getElementById("currentGpa")?.value || "",
    targetGpa: document.getElementById("targetGpa")?.value || "",
    remainingSubjects: document.getElementById("remainingSubjects")?.value || "",
    sem1Gpa: document.getElementById("sem1Gpa")?.value || "",
    sem2Gpa: document.getElementById("sem2Gpa")?.value || ""
  };
}

function saveData(showAlert = true) {
  localStorage.setItem("studentCalcData", JSON.stringify(collectData()));
  if (showAlert) alert(t("saved"));
}

function loadData() {
  const raw = localStorage.getItem("studentCalcData");
  if (!raw) return;

  try {
    const data = JSON.parse(raw);

    if (data.lang) currentLang = data.lang;

    document.getElementById("subjectName").value = data.subjectName || "";

    document.querySelectorAll(".week-input").forEach((input, index) => {
      input.value = data.weeks?.[index] || "";
    });

    document.getElementById("finalRatingInput").value = data.finalRatingInput || "";
    document.getElementById("finalExamInput").value = data.finalExamInput || "";

    const wrapper = document.getElementById("gpaSubjects");
    wrapper.innerHTML = "";

    if (Array.isArray(data.gpaSubjects) && data.gpaSubjects.length > 0) {
      data.gpaSubjects.forEach(item => addGpaRow(item));
    } else {
      addGpaRow();
    }

    document.getElementById("currentGpa").value = data.currentGpa || "";
    document.getElementById("targetGpa").value = data.targetGpa || "";
    document.getElementById("remainingSubjects").value = data.remainingSubjects || "";
    document.getElementById("sem1Gpa").value = data.sem1Gpa || "";
    document.getElementById("sem2Gpa").value = data.sem2Gpa || "";

  } catch (e) {
    console.error("Load error:", e);
  }
}

function clearData() {
  localStorage.removeItem("studentCalcData");
  location.reload();
}

function downloadPNG() {
  const area = document.getElementById("captureArea");

  html2canvas(area, {
    scale: 2,
    backgroundColor: document.body.classList.contains("dark") ? "#081225" : "#eef6ff"
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "studentcalc-result.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

function downloadPDF() {
  const area = document.getElementById("captureArea");

  html2canvas(area, {
    scale: 2,
    backgroundColor: document.body.classList.contains("dark") ? "#081225" : "#eef6ff"
  }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth - 20;
    const imgHeight = canvas.height * imgWidth / canvas.width;

    let heightLeft = imgHeight;
    let position = 10;

    pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight + 10;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("studentcalc-result.pdf");
  });
}
function shareSite() {
  const shareData = {
    title: "StudentCalc",
    text: t("shareText"),
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData);
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert(t("linkCopied"));
  }
}