const increment_btn = document.getElementById('increment')
const decrement_btn = document.getElementById('decrement')
const reset_btn = document.getElementById('reset')

reset_btn.onclick = () => {
    count = 0;
    counter_value.style.color = 'black'
    counter_value.textContent = count;

}


var count = 0;

const counter_value = document.getElementById('count')

increment_btn.onclick = () => {
    count++;
    changeColor(count)
    counter_value.textContent = count;
}

decrement_btn.onclick = () => {
    count--;
    changeColor(count)
    counter_value.textContent = count;
}

const changeColor = (c) => {
    if(c>0){
        counter_value.style.color = 'green'
    }
    else if(c<0){
        counter_value.style.color = 'red'
    }
    
}


