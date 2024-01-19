// setItem : Localstorage 정보를 저장할 때 쓰는 메소드
// Localstorage에 저장되는 값들은 전부 문자열임

localStorage.setItem('name', 'dwell');
localStorage.setItem('age', 100);

// getItem : localStorage에서 정보를 가져올 때 사용하는 메소드

const result = localStorage.getItem('age');
console.log(result);

// JSON.stringify, JSON.parse : 객체를 로컬스토리지에서 불러오기 위한 것

const travel = {
    destinations : ['paris', 'sydney', 'taipei'],
    date : 100,
    mate : undefined,
    isAvailable : true
}
// JSON.stringify로 문자열로 한 번 변환하고 저장해서 형태를 유지시키고 이후 JSON.parse로 객체형식으로 불러온다.
localStorage.setItem('travel', JSON.stringify(travel));

const data = JSON.parse(localStorage.getItem('travel'));
console.log(data.destinations);

// 삭제 removeItem, 전부삭제 clear
localStorage.removeItem('name');
localStorage.clear();