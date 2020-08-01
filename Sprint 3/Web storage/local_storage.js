// webStorage
// localStorage
// sessionStorage
// JSON

// setItem()
// getItem()
// clear() -erease everything
// removeItem(key) -delete one item
// key(index) -gives name of that key

log=console.log

localStorage.setItem('first','developement');
let val=localStorage.getItem('first');
log(val);

let key='pacman_highscore';
localStorage.setItem(key,12345);

let options={
    'name':'walter',
    'game':'bowling',
    'wepons':['uzi','pistol','granade']
};
localStorage.setItem('theDude',JSON.stringify(options));
let origional=localStorage.getItem('theDude');
log(origional);
origionalObj=JSON.parse(origional);
log(origionalObj);
log(localStorage.key(1))
