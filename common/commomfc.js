// 헤더 스크롤 제어
let lastScrollTop = 0;
let scrollTimeout;
const header = document.querySelector('header');
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu'); // 햄버거 메뉴 영역

btn.addEventListener('click', () => {
    // 활성화 클래스 토글
    menu.classList.toggle('menu-active');
    
    // 애니메이션이 진행되는 동안 body padding을 실시간으로 맞추기 위해 
    // 약간의 시간차를 두고 여러 번 계산하거나, transitionend 이벤트를 사용합니다.
    const updateInterval = setInterval(updateBodyPadding, 10);
    setTimeout(() => clearInterval(updateInterval), 500); // 애니메이션 시간(0.5초) 후 중단
});

function handleHeaderScroll() {
    // 햄버거 메뉴가 열려있는지 확인 (Tailwind의 'hidden' 클래스 여부로 판단)
    const isMenuOpen = menu.classList.contains('menu-active');
    if (isMenuOpen) {
        header.classList.remove('header-hidden');
        return;
    }

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // 아래로 스크롤 중
        header.classList.add('header-hidden');
    } else {
        // 위로 스크롤 중
        header.classList.remove('header-hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        header.classList.remove('header-hidden');
    }, 800);
}

function updateBodyPadding() {
    if (header) {
        // header를 fixed로 만들었으므로, 그 높이만큼 body를 밀어줍니다.
        const headerHeight = header.offsetHeight;
        document.body.style.paddingTop = headerHeight + 'px';
    }
}

// 초기 실행 및 이벤트 등록
window.addEventListener('load', () => {
    updateBodyPadding();
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
});

// 리사이즈 시 패딩 재계산 (메뉴가 펼쳐지며 높이가 변할 때 대응)
window.addEventListener('resize', updateBodyPadding);

// // 모달 제어 함수
// function toggleModal(show) {
//         document.getElementById('contactModal').classList.toggle('hidden', !show);
//     }

//     function showTab(tabName) {
//         // 모든 컨텐츠 숨기기
//         document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
//         // 선택된 컨텐츠 보이기
//         document.getElementById('tab-' + tabName).classList.add('active');

//         // 버튼 이미지 상태 업데이트
//         const btnPatent = document.getElementById('btn-patent');
//         const btnDesign = document.getElementById('btn-design');

//         if (tabName === 'patent') {
//             btnPatent.classList.remove('inactive');
//             btnDesign.classList.add('inactive');
//         } else {
//             btnPatent.classList.add('inactive');
//             btnDesign.classList.remove('inactive');
//         }
//     }