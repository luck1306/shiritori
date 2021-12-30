const number = document.querySelector("#number");
const keyword = document.querySelector("#keyword");
const inputbox = document.getElementById("inputbox");

let temp_keyword;
let sc;
let count = 0;
const form = document.getElementById("form").onsubmit = ()=>{
    sc = inputbox.value;
    const last = (sc.charCodeAt(sc.length - 1)); // 마지막 단어 아스키코드 값
    if ((temp_keyword.slice(temp_keyword.length-1, temp_keyword.length) === sc.slice(0,1))&&(last>=44032)&&(last<=55203)) { 
        // 비교와 예외처리
        keyword.innerHTML = sc;
        number.innerHTML = `${++count}번 반복중입니다.`; // 횟수
        temp_keyword = sc;
        inputbox.value = null; // input 값 비우기
        return false;
    }
    else {
        alert('되겠냐?');
        document.location.href="file:///C:/Users/user/Desktop/aa/Shiritori/src/index.html?";
        return false;
    }
};

const files = ['키188이동현', '도현이의냥코계정', '주찬이뱃살', '상우의라면', '저주받은유빈이의로아계정', '재영이의핫스팟3강', '부러진운일이의뇌', '주찬이의19점짜리수학시험지', 'QSS의마지막희망최유빈', 'GG의유일한멤버김운일', 'QSS필요악이주찬', '재영이의넷플릭스계정', '오염된주찬이의유튜브알고리즘', '주찬이의뱅드림마우스패드12강', '주찬이의뱅드림쿠션', '찢어진주찬이의미나토유키나브로마이드', '주찬이의뱅드림극장판로젤리아의약속영화티켓', '유빈이의정보처리기능사불합격용지', '엉클어진태완이의침대', '유빈이의쿠키런계정', '뒤틀린황천의파푸니카의침식된니아의호감도', '유빈이의소녀종말여행전권', '냄새나는주찬이의트림', '역겨운상우의방귀', '동현이의개잘만든인공지능오목프로젝트', '주찬이가생일선물로준묻혀진베스킨라벤스기프티콘', '쌉벌레최유빈의테트리스실력'];
// 초기 배열값
function keyword_random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}; // 랜덤 함수
const random_keyword_number = keyword_random(0, files.length - 1);
const random_keyword = files[random_keyword_number];
if(random_keyword === undefined) {
    random_keyword_number = keyword_random(0, files.length);
    random_keyword = files[random_keyword_number];
};
if (sc != undefined) {
    random_keyword = sc;
}

keyword.innerHTML = random_keyword;
number.innerHTML = `ㅎㅇ`;
temp_keyword = random_keyword;