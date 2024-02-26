const btnBook = document.querySelector(".btn-booking");
const book = document.querySelector(".book");
const btnClose = document.querySelector(".btn-close");

$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$(".navbar").addClass("smallheader");
	} else {
		$(".navbar").removeClass("smallheader");
	}
});

btnBook.addEventListener(`click`, function () {
	book.classList.toggle(`visually-hidden`);
});

btnClose.addEventListener(`click`, function () {
	book.classList.add(`visually-hidden`);
});
