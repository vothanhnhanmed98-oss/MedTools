/* =====================================================
   MEDTOOLS V1
   Main JavaScript
   ===================================================== */


/* =====================================================
   DRUG DATABASE
   ===================================================== */

const drugs = [

    {
        name: "Aspirin",
        generic: "Acetylsalicylic acid",
        category: "tim mach",
        group: "Kháng kết tập tiểu cầu",

        indication:
            "Phòng ngừa biến cố huyết khối động mạch trong các bệnh lý tim mạch phù hợp.",

        dose:
            "Liều dùng phụ thuộc chỉ định lâm sàng. Cần đối chiếu hướng dẫn điều trị hiện hành.",

        warning:
            "Lưu ý nguy cơ xuất huyết, dị ứng NSAID/aspirin và chống chỉ định liên quan."
    },


    {
        name: "Clopidogrel",
        generic: "Clopidogrel",
        category: "tim mach",
        group: "Kháng kết tập tiểu cầu",

        indication:
            "Phòng ngừa biến cố huyết khối trong một số bệnh lý tim mạch và sau can thiệp mạch vành theo chỉ định.",

        dose:
            "Liều phụ thuộc chỉ định và chiến lược điều trị. Cần đối chiếu phác đồ hiện hành.",

        warning:
            "Lưu ý nguy cơ xuất huyết và tương tác thuốc."
    },


    {
        name: "Bisoprolol",
        generic: "Bisoprolol",
        category: "tim mach",
        group: "Chẹn beta",

        indication:
            "Có thể được sử dụng trong tăng huyết áp, bệnh mạch vành, suy tim và một số tình trạng khác tùy chỉ định.",

        dose:
            "Liều khởi đầu và liều duy trì phụ thuộc bệnh cảnh.",

        warning:
            "Thận trọng ở bệnh nhân nhịp chậm, block nhĩ thất, hen phế quản hoặc COPD tùy mức độ."
    },


    {
        name: "Atorvastatin",
        generic: "Atorvastatin",
        category: "tim mach",
        group: "Statin",

        indication:
            "Điều trị rối loạn lipid máu và giảm nguy cơ tim mạch theo chỉ định.",

        dose:
            "Liều phụ thuộc nguy cơ tim mạch và mục tiêu LDL-C.",

        warning:
            "Theo dõi tác dụng phụ trên cơ và gan khi có chỉ định."
    },


    {
        name: "Salbutamol",
        generic: "Salbutamol",
        category: "ho hap",
        group: "Chủ vận beta-2",

        indication:
            "Giãn phế quản trong các bệnh lý tắc nghẽn đường thở phù hợp.",

        dose:
            "Liều phụ thuộc đường dùng và tình trạng lâm sàng.",

        warning:
            "Có thể gây run, hồi hộp, nhịp nhanh và hạ kali máu."
    },


    {
        name: "Budesonide",
        generic: "Budesonide",
        category: "ho hap",
        group: "Corticosteroid dạng hít",

        indication:
            "Kiểm soát viêm đường thở trong một số bệnh lý hô hấp.",

        dose:
            "Liều phụ thuộc bệnh cảnh, dụng cụ và phác đồ điều trị.",

        warning:
            "Súc miệng sau sử dụng dạng hít để giảm nguy cơ nấm miệng."
    },


    {
        name: "Furosemide",
        generic: "Furosemide",
        category: "khac",
        group: "Lợi tiểu quai",

        indication:
            "Điều trị tình trạng quá tải dịch/phù trong các bệnh cảnh phù hợp.",

        dose:
            "Liều phụ thuộc tình trạng dịch, chức năng thận và chỉ định.",

        warning:
            "Theo dõi huyết áp, điện giải và chức năng thận."
    }

];


/* =====================================================
   ICD-10 SAMPLE DATABASE
   ===================================================== */

const icd10 = [

    {
        code: "J18.9",
        name: "Viêm phổi, không xác định tác nhân",
        category: "Bệnh lý hô hấp"
    },

    {
        code: "J44.9",
        name: "Bệnh phổi tắc nghẽn mạn tính, không đặc hiệu",
        category: "Bệnh lý hô hấp"
    },

    {
        code: "J45.9",
        name: "Hen phế quản, không đặc hiệu",
        category: "Bệnh lý hô hấp"
    },

    {
        code: "I10",
        name: "Tăng huyết áp vô căn (nguyên phát)",
        category: "Tim mạch"
    },

    {
        code: "I21.9",
        name: "Nhồi máu cơ tim cấp, không đặc hiệu",
        category: "Tim mạch"
    },

    {
        code: "I48.9",
        name: "Rung nhĩ và cuồng nhĩ, không đặc hiệu",
        category: "Tim mạch"
    },

    {
        code: "I50.9",
        name: "Suy tim, không đặc hiệu",
        category: "Tim mạch"
    },

    {
        code: "E11.9",
        name: "Đái tháo đường type 2 không có biến chứng",
        category: "Nội tiết"
    },

    {
        code: "N18.9",
        name: "Bệnh thận mạn, không đặc hiệu",
        category: "Thận"
    },

    {
        code: "G40.9",
        name: "Động kinh, không đặc hiệu",
        category: "Thần kinh"
    }

];


/* =====================================================
   PAGE NAVIGATION
   ===================================================== */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {
            page.classList.remove("active");
        });


    const page = document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
    }


    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.remove("active");

            if (item.dataset.page === pageId) {
                item.classList.add("active");
            }

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (pageId === "drugs") {
        renderDrugs();
    }


    if (pageId === "icd10") {
        renderICD();
    }

}


/* =====================================================
   OPEN TOOL
   ===================================================== */

function openTool(tool) {

    if (tool === "curb65") {
        showCURB65();
    }

    if (tool === "cha2ds2vasc") {
        showCHA2DS2VASc();
    }

    if (tool === "hasbled") {
        showHASBLED();
    }

    if (tool === "icd10") {
        showPage("icd10");
    }

}


/* =====================================================
   MODAL
   ===================================================== */

function openModal(html) {

    document.getElementById("modalBody").innerHTML = html;

    document
        .getElementById("modal")
        .classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeModal() {

    document
        .getElementById("modal")
        .classList.remove("show");

    document.body.style.overflow = "";
}


/* =====================================================
   DRUG FUNCTIONS
   ===================================================== */

let currentDrugCategory = "all";


function renderDrugs() {

    const search =
        document
            .getElementById("drugSearch")
            ?.value
            .toLowerCase()
            .trim() || "";


    const filtered = drugs.filter(drug => {

        const matchSearch =
            drug.name.toLowerCase().includes(search) ||
            drug.generic.toLowerCase().includes(search) ||
            drug.group.toLowerCase().includes(search);


        const matchCategory =
            currentDrugCategory === "all" ||
            drug.category === currentDrugCategory;


        return matchSearch && matchCategory;

    });


    const list =
        document.getElementById("drugList");


    if (!list) return;


    if (filtered.length === 0) {

        list.innerHTML = `
            <div class="empty">
                <div>🔎</div>
                <p>Không tìm thấy thuốc phù hợp.</p>
            </div>
        `;

        return;
    }


    list.innerHTML = filtered.map((drug, index) => `

        <div
            class="drug-item"
            onclick="showDrug(${drugs.indexOf(drug)})"
        >

            <div class="drug-icon">
                💊
            </div>

            <div>

                <strong>${drug.name}</strong>

                <small>
                    ${drug.generic} · ${drug.group}
                </small>

            </div>

        </div>

    `).join("");

}


function searchDrugs() {

    renderDrugs();

}


function filterDrugs(category, button) {

    currentDrugCategory = category;


    document
        .querySelectorAll(".filter")
        .forEach(btn => {
            btn.classList.remove("active");
        });


    button.classList.add("active");


    renderDrugs();

}


function showDrug(index) {

    const drug = drugs[index];


    openModal(`

        <h2 class="modal-title">
            ${drug.name}
        </h2>

        <p class="modal-subtitle">
            ${drug.generic} · ${drug.group}
        </p>


        <div class="info-section">

            <h4>Chỉ định / sử dụng</h4>

            <p>
                ${drug.indication}
            </p>

        </div>


        <div class="info-section">

            <h4>Liều dùng</h4>

            <p>
                ${drug.dose}
            </p>

        </div>


        <div class="warning-box">

            ⚠️ <strong>Lưu ý:</strong><br>

            ${drug.warning}

        </div>


        <div class="warning-box">

            Thông tin trên là dữ liệu minh họa của
            MedTools V1. Khi sử dụng thực tế cần đối chiếu
            Dược thư, tờ hướng dẫn sử dụng và phác đồ hiện hành.

        </div>

    `);

}


/* =====================================================
   ICD-10
   ===================================================== */

function renderICD() {

    const input =
        document.getElementById("icdSearch");


    const search =
        input?.value
            .toLowerCase()
            .trim() || "";


    const filtered =
        icd10.filter(item =>

            item.code
                .toLowerCase()
                .includes(search)

            ||

            item.name
                .toLowerCase()
                .includes(search)

            ||

            item.category
                .toLowerCase()
                .includes(search)

        );


    const list =
        document.getElementById("icdList");


    if (!list) return;


    if (filtered.length === 0) {

        list.innerHTML = `
            <div class="empty">
                <div>📋</div>
                <p>Không tìm thấy mã ICD-10.</p>
            </div>
        `;

        return;
    }


    list.innerHTML = filtered.map(item => `

        <div class="icd-item">

            <span class="icd-code">
                ${item.code}
            </span>

            <strong>
                ${item.name}
            </strong>

            <small>
                ${item.category}
            </small>

        </div>

    `).join("");

}


function searchICD() {

    renderICD();

}


/* =====================================================
   CURB-65
   ===================================================== */

function showCURB65() {

    openModal(`

        <h2 class="modal-title">
            CURB-65
        </h2>

        <p class="modal-subtitle">
            Đánh giá mức độ nặng viêm phổi cộng đồng
        </p>


        <div class="score-form">

            <div class="score-row">

                <input
                    type="checkbox"
                    id="curb-confusion"
                >

                <label for="curb-confusion">
                    <strong>C</strong> — Confusion
                    (lú lẫn)
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="curb-urea"
                >

                <label for="curb-urea">
                    <strong>U</strong> — Urea
                    &gt; 7 mmol/L
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="curb-resp"
                >

                <label for="curb-resp">
                    <strong>R</strong> — Nhịp thở
                    ≥ 30 lần/phút
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="curb-bp"
                >

                <label for="curb-bp">
                    <strong>B</strong> — Huyết áp
                    tâm thu &lt; 90 hoặc tâm trương ≤ 60 mmHg
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="curb-age"
                >

                <label for="curb-age">
                    <strong>65</strong> — Tuổi ≥ 65
                </label>

                <span class="points">
                    +1
                </span>

            </div>

        </div>


        <button
            class="calculate-btn"
            onclick="calculateCURB65()"
        >
            TÍNH ĐIỂM
        </button>


        <div id="curb-result"></div>

    `);

}


function calculateCURB65() {

    const ids = [
        "curb-confusion",
        "curb-urea",
        "curb-resp",
        "curb-bp",
        "curb-age"
    ];


    const score =
        ids.filter(id =>
            document.getElementById(id).checked
        ).length;


    let label = "";
    let description = "";


    if (score === 0) {

        label = "Nguy cơ thấp";

        description =
            "Cần kết hợp đánh giá lâm sàng, bệnh nền, khả năng uống thuốc và hoàn cảnh chăm sóc.";

    }
    else if (score === 1) {

        label = "Nguy cơ thấp – trung bình";

        description =
            "Cần đánh giá toàn diện để quyết định xử trí và nơi điều trị.";

    }
    else if (score === 2) {

        label = "Nguy cơ trung bình";

        description =
            "Cần cân nhắc nhập viện tùy tình trạng lâm sàng và các yếu tố nguy cơ.";

    }
    else {

        label = "Nguy cơ cao";

        description =
            "Nguy cơ tử vong tăng; cần đánh giá nhập viện và mức độ chăm sóc phù hợp.";

    }


    document.getElementById("curb-result").innerHTML = `

        <div class="score-result">

            <div class="score-number">
                ${score}
            </div>

            <div class="score-label">
                ${label}
            </div>

            <div class="score-description">
                ${description}
            </div>

        </div>

    `;

}


/* =====================================================
   CHA2DS2-VASc
   ===================================================== */

function showCHA2DS2VASc() {

    openModal(`

        <h2 class="modal-title">
            CHA₂DS₂-VASc
        </h2>

        <p class="modal-subtitle">
            Đánh giá nguy cơ đột quỵ ở bệnh nhân rung nhĩ
        </p>


        <div class="score-form">


            <div class="score-row">

                <input
                    type="checkbox"
                    id="chf"
                >

                <label for="chf">
                    <strong>C</strong> — Suy tim / rối loạn chức năng thất trái
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="htn"
                >

                <label for="htn">
                    <strong>H</strong> — Tăng huyết áp
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="age75"
                >

                <label for="age75">
                    <strong>A₂</strong> — Tuổi ≥ 75
                </label>

                <span class="points">
                    +2
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="diabetes"
                >

                <label for="diabetes">
                    <strong>D</strong> — Đái tháo đường
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="stroke"
                >

                <label for="stroke">
                    <strong>S₂</strong> — Tiền sử đột quỵ/TIA/thuyên tắc
                </label>

                <span class="points">
                    +2
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="vascular"
                >

                <label for="vascular">
                    <strong>V</strong> — Bệnh mạch máu
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="age6574"
                >

                <label for="age6574">
                    <strong>A</strong> — Tuổi 65–74
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="female"
                >

                <label for="female">
                    <strong>Sc</strong> — Giới nữ
                </label>

                <span class="points">
                    +1
                </span>

            </div>

        </div>


        <button
            class="calculate-btn"
            onclick="calculateCHA2DS2VASc()"
        >
            TÍNH ĐIỂM
        </button>


        <div id="cha-result"></div>

    `);

}


function calculateCHA2DS2VASc() {

    let score = 0;


    if (
        document.getElementById("chf").checked
    ) score += 1;


    if (
        document.getElementById("htn").checked
    ) score += 1;


    if (
        document.getElementById("age75").checked
    ) score += 2;


    if (
        document.getElementById("diabetes").checked
    ) score += 1;


    if (
        document.getElementById("stroke").checked
    ) score += 2;


    if (
        document.getElementById("vascular").checked
    ) score += 1;


    if (
        document.getElementById("age6574").checked
    ) score += 1;


    if (
        document.getElementById("female").checked
    ) score += 1;


    let label;


    if (score === 0) {

        label =
            "Nguy cơ thấp";

    }
    else if (score === 1) {

        label =
            "Cần đánh giá nguy cơ và lợi ích chống đông";

    }
    else {

        label =
            "Nguy cơ đột quỵ tăng";

    }


    document.getElementById("cha-result").innerHTML = `

        <div class="score-result">

            <div class="score-number">
                ${score}
            </div>

            <div class="score-label">
                ${label}
            </div>

            <div class="score-description">

                Điểm số cần được diễn giải cùng
                bối cảnh lâm sàng và khuyến cáo
                chống đông hiện hành.

            </div>

        </div>

    `;

}


/* =====================================================
   HAS-BLED
   ===================================================== */

function showHASBLED() {

    openModal(`

        <h2 class="modal-title">
            HAS-BLED
        </h2>

        <p class="modal-subtitle">
            Đánh giá nguy cơ chảy máu ở bệnh nhân rung nhĩ
        </p>


        <div class="score-form">


            <div class="score-row">

                <input
                    type="checkbox"
                    id="has-hypertension"
                >

                <label for="has-hypertension">
                    <strong>H</strong> — Tăng huyết áp
                    (đặc biệt SBP &gt; 160 mmHg)
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="has-renal"
                >

                <label for="has-renal">
                    <strong>A</strong> — Chức năng thận bất thường
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="has-liver"
                >

                <label for="has-liver">
                    <strong>A</strong> — Chức năng gan bất thường
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="has-stroke"
                >

                <label for="has-stroke">
                    <strong>S</strong> — Tiền sử đột quỵ
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="has-bleeding"
                >

                <label for="has-bleeding">
                    <strong>B</strong> — Tiền sử chảy máu hoặc khuynh hướng chảy máu
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="has-inr"
                >

                <label for="has-inr">
                    <strong>L</strong> — INR không ổn định
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="has-age"
                >

                <label for="has-age">
                    <strong>E</strong> — Tuổi &gt; 65
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="has-drugs"
                >

                <label for="has-drugs">
                    <strong>D</strong> — Thuốc làm tăng nguy cơ chảy máu
                </label>

                <span class="points">
                    +1
                </span>

            </div>


            <div class="score-row">

                <input
                    type="checkbox"
                    id="has-alcohol"
                >

                <label for="has-alcohol">
                    <strong>D</strong> — Rượu
                </label>

                <span class="points">
                    +1
                </span>

            </div>

        </div>


        <button
            class="calculate-btn"
            onclick="calculateHASBLED()"
        >
            TÍNH ĐIỂM
        </button>


        <div id="has-result"></div>

    `);

}


function calculateHASBLED() {

    const ids = [

        "has-hypertension",
        "has-renal",
        "has-liver",
        "has-stroke",
        "has-bleeding",
        "has-inr",
        "has-age",
        "has-drugs",
        "has-alcohol"

    ];


    const score =
        ids.filter(id =>
            document.getElementById(id).checked
        ).length;


    let label;
    let description;


    if (score <= 1) {

        label =
            "Nguy cơ chảy máu thấp";

        description =
            "Tiếp tục đánh giá các yếu tố nguy cơ chảy máu và theo dõi phù hợp.";

    }
    else if (score === 2) {

        label =
            "Nguy cơ chảy máu trung bình";

        description =
            "Cần xem xét và điều chỉnh các yếu tố nguy cơ có thể thay đổi.";

    }
    else {

        label =
            "Nguy cơ chảy máu cao";

        description =
            "Cần đặc biệt chú ý các yếu tố nguy cơ chảy máu có thể thay đổi; điểm cao không tự động là chống chỉ định chống đông.";

    }


    document.getElementById("has-result").innerHTML = `

        <div class="score-result">

            <div class="score-number">
                ${score}
            </div>

            <div class="score-label">
                ${label}
            </div>

            <div class="score-description">
                ${description}
            </div>

        </div>

    `;

}


/* =====================================================
   DARK MODE
   ===================================================== */

function toggleTheme() {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "medtools-theme",
        isDark ? "dark" : "light"
    );


    updateThemeIcon();

}


function updateThemeIcon() {

    const button =
        document.querySelector(".theme-btn");


    if (!button) return;


    const isDark =
        document.body.classList.contains("dark");


    button.textContent =
        isDark ? "☀️" : "🌙";

}


function loadTheme() {

    const saved =
        localStorage.getItem("medtools-theme");


    if (saved === "dark") {

        document.body.classList.add("dark");

    }


    updateThemeIcon();

}


/* =====================================================
   INITIALIZE
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadTheme();

        renderDrugs();

        renderICD();

    }
);