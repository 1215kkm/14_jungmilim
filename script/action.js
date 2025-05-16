$(window).scroll(function(){
    let scrT = $(window).scrollTop();
    let thisHeight;
    $('.floating').css({marginTop:scrT}, 700);

    $('section').each(function(index){
        let sectionTop = $(this).offset().top;
        let sectionHeight = $(this).outerHeight(); // 섹션의 높이를 고려
        let windowHeight = $(window).height(); // 현재 창의 높이

        // 스크롤 위치가 섹션이 화면에 보일 때 실행되도록 조건 설정
        if(scrT + windowHeight > sectionTop && scrT < sectionTop + sectionHeight) {
            $(this).addClass('on');
            $(this).find('p.color').addClass('on')
            // 특정 섹션에서 타이핑 효과를 한 번만 실행시킴
            if(!$(this).hasClass('type-done')) {
                runTypeIt(index);  // 타이핑 효과 실행
                $(this).addClass('type-done'); // 실행 완료 표시
            }
        } else {
            $(this).removeClass('on');
        }
    });

    console.log(scrT)
});

// 타이핑 효과를 실행하는 함수
function runTypeIt(index) {
    // 각 섹션에 따른 타이핑 텍스트
    const typingTexts = [
        "",
        "",
        "자연스러움과 미니멀리즘을 강조하여 친환경적인 브랜드 이미지를 표현하였습니다. 부드러운 색상과 간결한 <br>폰트를 사용해 브랜드의 고급스러움을 강조하며, 제품의 특징을 시각적으로 돋보이게 디자인하였습니다.",
        "현대적이고 세련된 느낌을 강조하며, 활동적인 라이프스타일을 반영하여 디자인하였습니다. 깔끔한 레이아웃과 <br>시원한 색상 배합으로 제품 라인을 강조하고, 섹션마다 시각적 강조를 통해 제품 특징을 돋보이게 하였습니다.",
        "현대적이고 세련된 디자인을 기반으로 벽산의 혁신성과 전문성을 강조하였습니다. 간결한 레이아웃과 조화로운 <br>색상 조합을 통해 사용자 친화적인 경험을 제공하며, 이미지와 텍스트 균형을 맞춰 시각적 매력을 높였습니다.",
        "캐릭터 소품샵이라는 사이트 소재에 맞춰 캐릭터와 발랄한 색상을 사용해 귀여운 느낌을 내었습니다.<br>아기자기한 일러스트로 친근감을 주면서도, 각 섹션의 정보가 명확하게 전달하고자 하였습니다.",
        "전통무늬와 명조체 폰트로 고급진 느낌을 주고자 하였고, 메인 이미지로 기업의 정체성을 강조하였습니다.<br> 세련된 색상 조합과 직관적 레이아웃이 방문자의 시선을 사로잡으며, 정보 전달에 용이하게 디자인하였습니다.",
        "애니메이션 원작 게임 사전예약 페이지로, 강렬한 비주얼과 유저 친화적 인터페이스를 제공하고자 하였습니다. <br>캐릭터 이미지와 어울리는 다양한 효과를 제작했고, 방문자가 쉽게 사전예약을 하도록 유도하였습니다.",
        "의료시설의 전문성과 신뢰성을 강조하고자 심플한 폰트와 신뢰감을 주는 녹색계열 컬러를 사용하였습니다.<br> 방문자들이 쉽게 병원의 정보를 알고 이용할 수 있도록 사용자 친화적인 인터페이스를 고려하였습니다.",
        "요거트 브랜드를 기획하고, 제품의 특징과 장점을 시각적으로 매력적으로 전달하기 위해 <br>깨끗하고 부드러운 색감을 사용하고, 요거트 질감을 나타낼 수 있는 텍스쳐 이미지를 활용하였습니다.",
        "공용오피스 브랜드를 기획하며 스마트 오피스의 다양한 기능과 장점을 직관적으로 소개하고자 깔끔한 디자인과 <br>아이콘을 사용하였습니다. 각 시스템의 특징이 명확하게 전달되어 방문자의 이해를 돕는데 중점을 두었습니다.",
        "다양한 음료와 추천 메뉴, 프로모션 정보를 제공하여 사용자 친화적인 <br>경험을 제공하고자 하였습니다. 간결한 레이아웃과 시각적 요소가 <br>조화를 이루어 방문자가 쉽게 탐색할 수 있도록 하였습니다.",
        "반려동물의 건강과 영양을 중시하는 디자인으로, 사용자 친화적인 <br>UI/UX를 구현하고자 하였습니다. 직관적인 내비게이션과 깔끔한 <br> 레이아웃을 통해 사용자가 필요한 정보를 쉽게 찾을 수 있도록 하였고, <br>브랜드 로고 컬러와 메인 제품 컬러를 활용해 브랜드 아이덴티티를<br> 드러내고자 하였습니다.",
        // 추가 텍스트는 여기에 추가 가능
    ];

    // 선택된 섹션에 맞는 요소와 텍스트로 타이핑 효과 실행
    new TypeIt(`.exp${index+1}`, {
        speed: 20,
        startDelay: 900
    }).type(typingTexts[index]).go();
}



$('.floating li').click(function(){
    let target = $(this).find('a').attr('href');
    let targetTop = $(target).offset().top;
    console.log(targetTop)
    $('html, body').animate({scrollTop: targetTop}, 1000);

    return false
})



$(document).ready(function () {
    // 모든 섹션의 offset 값을 미리 계산
    var sectionOffsets = [];
    for (var i = 1; i <= 13; i++) {
        sectionOffsets.push($('#section' + i).offset().top);
    }

    // 스크롤 이벤트를 감지
    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop(); 
        var currentSection = '';  // 현재 보고 있는 섹션

        // 스크롤 위치와 각 섹션의 위치를 비교하여 현재 보고 있는 섹션을 찾음
        for (var i = 0; i < sectionOffsets.length; i++) {
            if (scrollTop >= sectionOffsets[i] - 10 && scrollTop < sectionOffsets[i + 1]) {
                currentSection = '#section' + (i + 1);
                break;
            }
        }

        // .gnb a의 href와 비교하여 on 클래스를 추가/삭제
        $('.gnb a').each(function () {
            var href = $(this).attr('href');
            
            if (href === currentSection) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        });
    });
});
