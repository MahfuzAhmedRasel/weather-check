const inputValue = document.getElementById('input-value');

const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=0c5ffd467a479c1fc62c3a2d0823c894')
    .then(res => res.json())
    .then(data => {
        const cityName = data.name;
        const temparetior = data.main.temp;
        const des = data.weather[0].main;
        // const icon = data.weather[0].icon;
        // console.log(icon);
    
        document.getElementById('title').innerText =cityName;
        document.getElementById('tapmatra').innerText = temparetior;
        document.getElementById('bornona').innerText = des;
        
    });
  
} 

);

