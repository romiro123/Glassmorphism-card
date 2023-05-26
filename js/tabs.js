document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tablinks').forEach(function (stepBtn) {
        stepBtn.addEventListener('click', function (eventStep) {
            const path = eventStep.currentTarget.dataset.path;
            console.log(path)

            document.querySelectorAll('.tablinks').forEach(function (btn) {
                btn.classList.remove('tablinks--active')
            });

            eventStep.currentTarget.classList.add('tablinks--active');

            document.querySelectorAll('.tabcontent').forEach(function (tabContent) {
                tabContent.classList.remove('tabcontent--active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('tabcontent--active')
        });
    })
})