function go() {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var timer;

    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        //无限滚动判断
        if (newLeft > -735) {
            list.style.left = -3675 + 'px';
        }
        if (newLeft < -3675) {
            list.style.left = -735 + 'px';
        }
    }

    function play() {
        //重复执行的定时器
        timer = setInterval(function () {
            next.onclick();
        }, 2000)
    }

    function stop() {
        clearInterval(timer);
    }

    function buttonsShow() {
        //将之前的小圆点的样式清除
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
            }
        }
        //数组从0开始，故index需要-1
        buttons[index - 1].className = "on";
    }

    prev.onclick = function () {
        index -= 1;
        if (index < 1) {
            index = 5
        }
        buttonsShow();
        animate(735);
    };

    next.onclick = function () {
        //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        index += 1;
        if (index > 5) {
            index = 1
        }
        animate(-735);
        buttonsShow();
    };

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            //优化，当前图片点击当前的小圆点不执行以下代码。
            if (this.className == "on") {
                return;
            }
            /*   这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
            /*   由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = -735 * (clickIndex - index); //这个index是当前图片停留时的index
            animate(offset);
            index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
            buttonsShow();
        }
    }

    container.onmouseover = stop;
    container.onmouseout = play;
    play();

}
go();



function go_1() {
    var container = document.getElementById('container_1');
    var list = document.getElementById('list_1');
    var buttons = document.getElementById('buttons_1').getElementsByTagName('span');
    var prev = document.getElementById('prev_1');
    var next = document.getElementById('next_1');
    var index = 1;
    var timer;

    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        //无限滚动判断
        if (newLeft > -735) {
            list.style.left = -3675 + 'px';
        }
        if (newLeft < -3675) {
            list.style.left = -735 + 'px';
        }
    }

    function play() {
        //重复执行的定时器
        timer = setInterval(function () {
            next.onclick();
        }, 3000)
    }

    function stop() {
        clearInterval(timer);
    }

    function buttonsShow() {
        //将之前的小圆点的样式清除
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
            }
        }
        //数组从0开始，故index需要-1
        buttons[index - 1].className = "on";
    }

    prev.onclick = function () {
        index -= 1;
        if (index < 1) {
            index = 5
        }
        buttonsShow();
        animate(735);
    };

    next.onclick = function () {
        //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        index += 1;
        if (index > 5) {
            index = 1
        }
        animate(-735);
        buttonsShow();
    };

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            //优化，当前图片点击当前的小圆点不执行以下代码。
            if (this.className == "on") {
                return;
            }
            /*   这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
            /*   由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = -735 * (clickIndex - index); //这个index是当前图片停留时的index
            animate(offset);
            index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
            buttonsShow();
        }
    }

    container.onmouseover = stop;
    container.onmouseout = play;
    play();

}
go_1()

function go_2() {
    var container = document.getElementById('container_2');
    var list = document.getElementById('list_2');
    var buttons = document.getElementById('buttons_2').getElementsByTagName('span');
    var prev = document.getElementById('prev_2');
    var next = document.getElementById('next_2');
    var index = 1;
    var timer;

    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        //无限滚动判断
        if (newLeft > -735) {
            list.style.left = -3675 + 'px';
        }
        if (newLeft < -3675) {
            list.style.left = -735 + 'px';
        }
    }

    function play() {
        //重复执行的定时器
        timer = setInterval(function () {
            next.onclick();
        }, 2000)
    }

    function stop() {
        clearInterval(timer);
    }

    function buttonsShow() {
        //将之前的小圆点的样式清除
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
            }
        }
        //数组从0开始，故index需要-1
        buttons[index - 1].className = "on";
    }

    prev.onclick = function () {
        index -= 1;
        if (index < 1) {
            index = 5
        }
        buttonsShow();
        animate(735);
    };

    next.onclick = function () {
        //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        index += 1;
        if (index > 5) {
            index = 1
        }
        animate(-735);
        buttonsShow();
    };

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            //优化，当前图片点击当前的小圆点不执行以下代码。
            if (this.className == "on") {
                return;
            }
            /*   这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
            /*   由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = -800 * (clickIndex - index); //这个index是当前图片停留时的index
            animate(offset);
            index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
            buttonsShow();
        }
    }

    container.onmouseover = stop;
    container.onmouseout = play;
    play();

}
go_2()

function go_3() {
    var container = document.getElementById('container_3');
    var list = document.getElementById('list_3');
    var buttons = document.getElementById('buttons_3').getElementsByTagName('span');
    var prev = document.getElementById('prev_3');
    var next = document.getElementById('next_3');
    var index = 1;
    var timer;

    function animate(offset) {
        //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
        //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
        var newLeft = parseInt(list.style.left) + offset;
        list.style.left = newLeft + 'px';
        //无限滚动判断
        if (newLeft > -735) {
            list.style.left = -3675 + 'px';
        }
        if (newLeft < -3675) {
            list.style.left = -735 + 'px';
        }
    }

    function play() {
        //重复执行的定时器
        timer = setInterval(function () {
            next.onclick();
        }, 3000)
    }

    function stop() {
        clearInterval(timer);
    }

    function buttonsShow() {
        //将之前的小圆点的样式清除
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == "on") {
                buttons[i].className = "";
            }
        }
        //数组从0开始，故index需要-1
        buttons[index - 1].className = "on";
    }

    prev.onclick = function () {
        index -= 1;
        if (index < 1) {
            index = 5
        }
        buttonsShow();
        animate(735);
    };

    next.onclick = function () {
        //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
        index += 1;
        if (index > 5) {
            index = 1
        }
        animate(-735);
        buttonsShow();
    };

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            //优化，当前图片点击当前的小圆点不执行以下代码。
            if (this.className == "on") {
                return;
            }
            /*   这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
            /*   由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
            var clickIndex = parseInt(this.getAttribute('index'));
            var offset = -735 * (clickIndex - index); //这个index是当前图片停留时的index
            animate(offset);
            index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
            buttonsShow();
        }
    }

    container.onmouseover = stop;
    container.onmouseout = play;
    play();

}
go_3()