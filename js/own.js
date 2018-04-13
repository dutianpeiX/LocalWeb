window.onload=function(){
    var personTab=document.getElementById('person-tab');
    var tabPage=document.getElementById('tabPage');
    var list=personTab.getElementsByTagName('li');
    var tab=tabPage.getElementsByClassName('all');
    for(var i=0;i<list.length;i++){
        list[i].index=i;
        list[i].onclick=function(){
            for(var n=0;n<tab.length;n++){
                tab[n].className='all'+' '+'hide';
            }
            tab[this.index].className='all'+' '+'show';
        }
    }
}