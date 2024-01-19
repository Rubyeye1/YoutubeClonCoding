const $div = document.querySelector('.container');
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

// event 추가
// 1. 이벤트 핸들러
// target.이벤트이름 = 콜백함수

// $div.onclick = handleClick; // 콜백은 ()를 붙일 필요없다.
// $div.onclick = () => console.log("clicked"); // 동일한 대상의 이벤트가 있을 때에는 뒤의 이벤트가 앞에껄 덮어씌운다.
// $div.onclick = () => alert("clicked");
// function handleClick() {
//     console.log('clicked');
// }

// 2. addEventListener
// addEventListener는 두 개 다 실행 가능
//$div.addEventListener('click', handleClick)
//$div.addEventListener('click', () => alert('clicked'))


//function handleClick(){
//    console.log('clicked');
//}

// 3. removeEventListener : 이벤트 삭제

//$div.removeEventListener('click', handleClick)

// 4. 이벤트에 인자받기

$div.addEventListener('click', handleClick)

function handleClick (event) {
    console.log(event.target.innerText);
}


$input.addEventListener('change', handleChange);

function handleChange(event) {
    console.dir(event.target.value) // dir은 객체보기
}

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()           // preventDefault()는 이벤트의 기본적인 동작들을 막아준다.(submit누르면 제출이 자동으로 되고 input이 날라가고 새로고침이 되듯이)
    const inputValue = $input.value; // input안의 텍스트를 가져오려면 위의 handlechange의 이벤트 과정에서 target.value로 가져와야하는데 이건
    console.log(inputValue);         // handleSubmit 이벤트라서 가져오지 못한다. 그래서 $input.value를 쓰면 가져올 수가 있다.
    $input.value = '';               // 위의 코드에서 input.value를 가져온 뒤에 다시 인풋창을 초기화하는 코드
}