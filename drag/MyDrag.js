function MyDrag(id) {
    var _this = this;
    this.disX = 0;
    this.disY = 0;
    this.l = 0;
    this.t = 0;
    this.oDiv = document.getElementById(id);
    this.oDiv.onmousedown = function () {
        _this.MouseDown();
    };
}

MyDrag.prototype.MouseDown = function (ev) {
    var oEvent = ev || event;
    var _this = this;
    this.disX = oEvent.clientX - this.oDiv.offsetLeft;
    this.disY = oEvent.clientY - this.oDiv.offsetTop;

    document.onmousemove = function () {
        _this.MouseMove();
    }

    document.onmouseup = function () {
        _this.MouseUp();
    }
}

MyDrag.prototype.MouseMove = function (ev) {
    var oEvent = ev || event;
    //oDiv.style.left = oEvent.clientX - disX + "px";
    //oDiv.style.top = oEvent.clientY - disY + "px";

    this.l = oEvent.clientX - this.disX;
    this.t = oEvent.clientY - this.disY;

    if (this.l < 0) {
        this.l = 0;
    }
    else if (this.l > document.documentElement.clientWidth - this.oDiv.offsetWidth) {
        this.l = document.documentElement.clientWidth - this.oDiv.offsetWidth;
    }
    if (this.t < 0) {
        this.t = 0;
    }
    else if (this.t > document.documentElement.clientHeight - this.oDiv.offsetHeight) {
        this.t = document.documentElement.clientHeight - this.oDiv.offsetHeight;
    }
    this.oDiv.style.left = this.l + "px";
    this.oDiv.style.top = this.t + "px";
}


MyDrag.prototype.MouseUp = function () {
    document.onmousemove = null;
    document.onmouseup = null;
}