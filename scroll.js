// document.querySelectorAll('.square').forEach(button => {
//     button.addEventListener('click', function() {
//         const target = document.querySelector(this.getAttribute('target-pos'));
//         target.scrollIntoView({ behavior: 'smooth' });
//     });
// });

document.querySelectorAll('.square').forEach(a => {
    a.addEventListener('click', function() {
        const pos = this.getAttribute('target-pos');
        const target = document.getElementById(pos);
        target.scrollIntoView({behavior: 'smooth'});

        document.querySelectorAll('.full-box').forEach(b => {
            if (b.getAttribute('flash-id') == pos) {
                b.classList.add('flash');

                setTimeout(() => {
                    b.classList.remove('flash');
                }, 2000);
            }
        })
    })
})