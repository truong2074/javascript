function Cong(a, b) {
    return a + b;
}

function Tru(a, b) {
    return a - b;
}

function Nhan(a, b) {
    return a * b;
}

function Chia(a, b) {
    if (b === 0) {
        return "Không thể chia cho 0";
    }
    return a / b;
}

function CanBacHai(x) {
    if (x < 0) {
        return "Không thể tính căn bậc hai của số âm";
    }
    return Math.sqrt(x);
}

function LuyThua(a, b) {
    return Math.pow(a, b);
}

console.log("Cong: "+Cong(4,5))
onsole.log("Tru: "+Tru(4,5))
onsole.log("Nhan: "+Nhan(4,5))
onsole.log("Chia: "+Chia(4,5))
onsole.log("Can Bac Hai: "+CanBacHai(4))
onsole.log("Luy Thua: "+LuyThua(4,5))