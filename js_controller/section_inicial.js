var frasesDiv = document.getElementById('frases_inicial');
    var imgDiv = document.getElementById('img_inicial');
    var isFraseVisible = true;
    var isImgVisible = true;

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition >= 200 && isFraseVisible) {
            frasesDiv.classList.remove('fade-in-left');
            frasesDiv.classList.add('fade-out-left');
            isFraseVisible = false;
        } else if (scrollPosition < 200 && !isFraseVisible) {
            frasesDiv.classList.remove('fade-out-left');
            frasesDiv.classList.add('fade-in-left');
            isFraseVisible = true;
        }

        if (scrollPosition >= 200 && isImgVisible) {
            imgDiv.classList.remove('fade-in-right');
            imgDiv.classList.add('fade-out-right');
            isImgVisible = false;
        } else if (scrollPosition < 200 && !isImgVisible) {
            imgDiv.classList.remove('fade-out-right');
            imgDiv.classList.add('fade-in-right');
            isImgVisible = true;
        }

    });