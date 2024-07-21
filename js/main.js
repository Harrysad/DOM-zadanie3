function setBackground() {
    /*
    --Jeżeli potrzebuje dodać stylowanie inline to robię tą metodoą--
    document.getElementById('par2').style.backgroundColor = 'red';
    document.getElementById('par2').style.backgroundColor = 'yellow'; */

    // Dodatkowo jeżeli chce aby style się przełączały to zamiast add użyć może metody toggle
    document.getElementById('par1').classList.add('bg-red');
    document.getElementById('par2').classList.add('bg-yellow');
}

document.getElementById('setButton').addEventListener('click', setBackground);