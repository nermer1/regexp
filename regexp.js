// 전방 탐색과 후방 탐색
// 탐색 전 표현식은 텍스트가 일치되는 것을 검색
// 위치에서 검색을 할 때 전후방탐색을 사용한다.
// 전방탐색은 광범위하게 지원하나 후방탐색은 지원하지 않는 경우도 있음

// 전방탐색은 패턴이 일치하는 영역을 발견해도 값을 반환하지 않는 패턴을 뜻함
// 전방탐색은 실제로 하위 표현식이며 하위 표현식으로 작성
// ?=
// consume, not consume
// 
/**
 * 
 * 
 * 
 * 
 */

var txt = 'http://www.naver.com';

console.log(/.+(?=:)/.exec(txt));

console.log(/.+(:)/.exec(txt)); // 이 패턴 왜 두번 찾냐 http:, : ?? 이상하네

/**
 * 
 * 후방 탐색
 * 
 * ?= 전방탐색(lookahead)
 * ?<= 후방탐색(lookbehind)
 */