

function rotate(){
    let t = new Date();
    let h = t.getHours()%12;
    let m = t.getMinutes();
    let s = t.getSeconds();
    min_rotation = (m-15)*6;
    hour_rotation = ((h*60)-180)*0.5;
    sec_rotation = (s-15)*6;
    
    let min = document.getElementById('minutehand');
    let hour = document.getElementById('hourhand');
    let second = document.getElementById('secondhand');
    min.style.transform = `rotate(${min_rotation}deg)`;
    hour.style.transform = `rotate(${hour_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}
setInterval(rotate, 1000);
