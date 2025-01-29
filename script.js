const colors = ["#B5DFB2", "white"];
        let currentIndex = 0;

        function changeColor() {
            const resume = document.getElementById('resume');
            currentIndex = (currentIndex + 1) % colors.length;
            resume.style.backgroundColor = colors[currentIndex];
        }