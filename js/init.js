/*
 * Copyright (c) 2021 marketify
 * Author: marketify
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	manee_tm_owl_carousel();
	manee_tm_down();
	manee_tm_trigger_menu();
	manee_tm_nav_bg();
	manee_tm_modalbox_news();
	manee_tm_modalbox();
	manee_tm_cursor();
	manee_tm_imgtosvg();
	manee_tm_popup();
	manee_tm_data_images();
	manee_tm_contact_form();
	
	jQuery(window).load('body', function(){
		manee_tm_my_load();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function manee_tm_owl_carousel(){

	"use strict";
	
	var carousel			= jQuery('.my_carousel .owl-carousel');
	var carousel2			= jQuery('.manee_tm_testimonials .owl-carousel');
	
	var rtlMode	= false;

	if(jQuery('body').hasClass('rtl')){
		rtlMode = 'true';
	}
	
	carousel.each(function(){
		var element = jQuery(this);		
		
		element.owlCarousel({
			loop: false,
			items: 3,
			lazyLoad: false,
			margin: 30,
			autoplay: true,
			autoplayTimeout: 7000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: false,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 2
				},
				1040 : {
					items: 3
				}
			}
		});

		element.parent().find('.next_button').click(function() {
			element.trigger('next.owl.carousel');
			return false;
		});
		// Go to the previous item
		element.parent().find('.prev_button').click(function() {
			// With optional speed parameter
			// Parameters has to be in square bracket '[]'
			element.trigger('prev.owl.carousel');
			return false;
		});
		
	});
	
	carousel2.owlCarousel({
			loop: true,
			items: 2,
			lazyLoad: false,
			margin: 30,
			autoplay: true,
			autoplayTimeout: 7000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: false,
			responsive : {
					0 : {
						items: 1
					},
					768 : {
						items: 2
					}
				}
		});
		manee_tm_imgtosvg();
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function manee_tm_down(){
	
	"use strict";
	
	var topbar		= jQuery('.manee_tm_topbar').outerHeight();
	jQuery('.manee_tm_hero .manee_tm_button a').on('click',function(){
		if($('.manee_tm_topbar').length){
			if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-topbar+40
			}, 800);
		}
		}
	});
	
	jQuery('.manee_tm_intro .manee_tm_button a').on('click',function(){
		
			if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-100
			}, 800);
		}
		
	});
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		var number 			= progress.find('.number');
		var label 			= progress.find('.label');
		number.css({right:(100 - pValue)+'%'});
		setTimeout(function(){label.addClass('opened');},500);
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

jQuery('.dodo_progress').each(function() {

	"use strict";

	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	
});

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function manee_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.my_trigger .hamburger');
	var mobileMenu		= jQuery('.manee_tm_mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.manee_tm_mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.my_trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -----------------------------------------------------
// --------------   TOPBAR BACKGROUND    ---------------
// -----------------------------------------------------

function manee_tm_nav_bg(){
	
	"use strict";

	jQuery(window).on('scroll',function(){
		var topbar	 		= jQuery('.manee_tm_topbar');
		var WinOffset		= jQuery(window).scrollTop();

		if(WinOffset >= 100){
			topbar.addClass('animate');
		}else{
			topbar.removeClass('animate');
		}
	});
}

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

jQuery('.anchor_nav').onePageNav();

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function manee_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------

function manee_tm_modalbox_news(){
	
	"use strict";
	
	var modalBox	= jQuery('.manee_tm_modalbox');
	var list 		= jQuery('.manee_tm_news ul li');
	var closePopup	= modalBox.find('.close');
	
	list.each(function(){
		var element 	= jQuery(this);
		var details 	= element.find('.main_content').html();
		var buttons 	= element.find('.manee_tm_full_link, .news_details .title a');
		var mainImage	= element.find('.main');
		var imgData		= mainImage.data('img-url');
		var title		= element.find('.title a').text();
		
		buttons.on('click',function(e){
			e.preventDefault();
			jQuery('body').addClass('modal');
			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(details);
			var imageWrap = modalBox.find('.description_wrap .image');
			imageWrap.find('.main').css({backgroundImage: 'url('+imgData+')'});
			modalBox.find('.news_details .title').html('<h3>'+title+'</h3>');
			manee_tm_imgtosvg();
			return false;
		});
	});
	
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		jQuery('body').removeClass('modal');
		return false;
	});
	
	modalBox.on('click',function(e){
		if(e.target === modalBox[0]){
			modalBox.removeClass('opened');
			modalBox.find('.description_wrap').html('');
			jQuery('body').removeClass('modal');
			return false;
		}
	});
	
	jQuery(document).on('keydown',function(e){
		if(e.key === 'Escape' && modalBox.hasClass('opened')){
			modalBox.removeClass('opened');
			modalBox.find('.description_wrap').html('');
			jQuery('body').removeClass('modal');
			return false;
		}
	});
}

// -------------------------------------------------
// -------------  MODALBOX SERVICE -----------------
// -------------------------------------------------

function manee_tm_modalbox(){
	
	"use strict";
	
	var modalBox	= jQuery('.manee_tm_modalbox');
	var list 		= jQuery('.manee_tm_services ul li');
	var closePopup	= modalBox.find('.close');
	
	list.each(function(){
		var element 	= jQuery(this);
		var details 	= element.find('.list_inner').html();
		var buttons 	= element.find('.manee_tm_full_link');
		var mainImage	= element.find('.main');
		var imgData		= mainImage.data('img-url');
		buttons.on('click',function(){
			jQuery('body').addClass('modal');
			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(details);
			mainImage = modalBox.find('.main');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			manee_tm_imgtosvg();
			return false;
		});
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		jQuery('body').removeClass('modal');
		return false;
	});
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function manee_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){manee_tm_preloader();},speed);
	setTimeout(function(){jQuery('body').addClass('opened');},speed+2000);
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

new WOW().init();

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function manee_tm_cursor(){
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .toky_tm_topbar .trigger, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .toky_tm_topbar .trigger, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function manee_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function manee_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function manee_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function manee_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||subject===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// Certifications Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.certification-card');
    const modal = document.querySelector('.certification-modal');
    const modalContent = document.querySelector('.certification-modal .modal-content');
    const modalImage = document.querySelector('.certification-modal .modal-image');
    const modalTitle = document.querySelector('.certification-modal .modal-title');
    const modalDate = document.querySelector('.certification-modal .modal-date');
    const modalShortDesc = document.querySelector('.certification-modal .modal-short-description');
    const modalDescription = document.querySelector('.certification-modal .modal-description');
    const modalClose = document.querySelector('.certification-modal .modal-close');
    const paginationDotsContainer = document.querySelector('.pagination-dots');

    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const imageSrc = this.querySelector('.card-image img').src;
            const title = this.querySelector('.card-content h5').textContent;
            const date = this.getAttribute('data-date');
            const shortDesc = this.getAttribute('data-short-desc');
            const fullDesc = this.getAttribute('data-full-desc');

            modalImage.src = imageSrc;
            modalImage.alt = title;
            modalTitle.textContent = title;
            modalDate.textContent = date;
            modalShortDesc.textContent = shortDesc;
            modalDescription.textContent = fullDesc;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    modalClose.addEventListener('click', function(e) {
        e.preventDefault();
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        // Clear modal content to prevent stale data
        modalImage.src = '';
        modalImage.alt = '';
        modalTitle.textContent = '';
        modalDate.textContent = '';
        modalShortDesc.textContent = '';
        modalDescription.textContent = '';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            // Clear modal content
            modalImage.src = '';
            modalImage.alt = '';
            modalTitle.textContent = '';
            modalDate.textContent = '';
            modalShortDesc.textContent = '';
            modalDescription.textContent = '';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            // Clear modal content
            modalImage.src = '';
            modalImage.alt = '';
            modalTitle.textContent = '';
            modalDate.textContent = '';
            modalShortDesc.textContent = '';
            modalDescription.textContent = '';
        }
    });

    const itemsPerSet = 6;
    let currentSet = 0;

    function updatePagination() {
        cards.forEach(card => {
            card.classList.add('hidden');
            card.style.display = 'none';
        });

        const visibleCards = Array.from(cards);
        const totalSets = Math.ceil(visibleCards.length / itemsPerSet);

        paginationDotsContainer.innerHTML = '';

        if (totalSets > 1) {
            for (let i = 0; i < totalSets; i++) {
                const dot = document.createElement('span');
                dot.classList.add('pagination-dot');
                if (i === currentSet) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    currentSet = i;
                    updateGallery(visibleCards);
                });
                paginationDotsContainer.appendChild(dot);
            }
        }

        updateGallery(visibleCards);
    }

    function updateGallery(visibleCards) {
        visibleCards.forEach((card, index) => {
            if (visibleCards.length <= itemsPerSet || 
                (index >= currentSet * itemsPerSet && index < (currentSet + 1) * itemsPerSet)) {
                card.classList.remove('hidden');
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        const dots = document.querySelectorAll('.pagination-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSet);
        });
    }

    updatePagination();
});

// Projects Section Functionality
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectModal = document.querySelector('.project-modal');
    const modalCarousel = document.querySelector('.project-modal .modal-carousel');
    const modalTitle = document.querySelector('.project-modal .modal-title');
    const modalDate = document.querySelector('.project-modal .modal-date');
    const modalLocation = document.querySelector('.project-modal .modal-location');
    const modalShortDesc = document.querySelector('.project-modal .modal-short-description');
    const modalDescription = document.querySelector('.project-modal .modal-description');
    const modalClose = document.querySelector('.project-modal .modal-close');

    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const date = this.getAttribute('data-date');
            const location = this.getAttribute('data-location');
            const shortDesc = this.getAttribute('data-short-desc');
            const fullDesc = this.getAttribute('data-full-desc');
            const images = JSON.parse(this.getAttribute('data-images'));

            modalTitle.textContent = title;
            modalDate.textContent = date;
            modalLocation.textContent = location;
            modalShortDesc.textContent = shortDesc;
            modalDescription.textContent = fullDesc;

            const carouselImages = modalCarousel.querySelectorAll('.modal-image');
            carouselImages.forEach((img, index) => {
                img.src = images[index];
                img.alt = `${title} Image ${index + 1}`;
            });

            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';

            jQuery(modalCarousel).owlCarousel('destroy');
            jQuery(modalCarousel).owlCarousel({
                loop: true,
                items: 1,
                lazyLoad: false,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 5000,
                dots: true,
                nav: false
            });
        });
    });

    modalClose.addEventListener('click', function() {
        projectModal.classList.remove('active');
        document.body.style.overflow = 'auto';
        jQuery(modalCarousel).owlCarousel('destroy');
    });

    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            jQuery(modalCarousel).owlCarousel('destroy');
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            projectModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            jQuery(modalCarousel).owlCarousel('destroy');
        }
    });
});

jQuery(document).ready(function($) {
    "use strict";

    const newsData = [
        {
            image: "img/news/005_1.jpg",
            writer: "AS Maneesha",
            date: "2024/10/14",
            title: "Pink October: Breast Cancer Awareness",
            content: `
                <div class="descriptions">
                    <p class="bigger">I participated in the 'Awareness Program on Breast Cancer - Prevention, Detection, and Treatment' organized by the Cancer Surgery Unit, Health Promotion Unit, and Public Health Unit at Teaching Hospital Anuradhapura.</p>
                    <p>Led by Dr. Wathsala Bandara, Consultant Oncologist, the program educated us on breast cancer epidemiology, risk factors, stages, and screening methods. Practical sessions using dummies enhanced our understanding, equipping me to promote awareness at the community level as a health promotion student.</p>
                </div>
                <div class="news_images">
                    <img src="img/news/005_2.jpg" alt="Image 2" />
                    <img src="img/news/005_3.jpg" alt="Image 3" />
                </div>
            `
        },
        {
            image: "img/news/004_1.jpg",
            writer: "AS Maneesha",
            date: "2024/10/15",
            title: "Charity Shop 2024: Love for Our Planet",
            content: `
                <div class="descriptions">
                    <p class="bigger">On October 15th, 2024, the Health Promotion Society organized a charity shop at Rajarata University, promoting sustainability and charitable causes.</p>
                    <p>Featuring clothing, mehendi, juice, and game corners, the event fostered a circular economy and reduced waste. Supported by Vice Chancellor Prof. Sanjeevani Ginigaddara, Dean Dr. Manoj Fernando, and Dr. Lalith Senaratne, it highlighted the power of collective effort in building community and environmental awareness.</p>
                </div>
                <div class="news_images">
                    <img src="img/news/004_2.jpg" alt="Image 2" />
                    <img src="img/news/004_3.jpg" alt="Image 3" />
                    <img src="img/news/004_4.jpg" alt="Image 4" />
                </div>
            `
        },
        {
            image: "img/news/003_1.jpg",
            writer: "AS Maneesha",
            date: "2024/11/14",
            title: "World Diabetes Day 2024",
            content: `
                <div class="descriptions">
                    <p class="bigger">I participated in World Diabetes Day at Anuradhapura Teaching Hospital, focusing on raising awareness about diabetes prevention and management.</p>
                    <p>The event emphasized healthier lifestyles and proper diet, delivering impactful messages. Supported by the Health Promotion Department and HPS Exco, it was a valuable learning experience that reinforced the importance of public health initiatives.</p>
                </div>
                <div class="news_images">
                    <img src="img/news/003_2.jpg" alt="Image 2" />
                    <img src="img/news/003_3.jpg" alt="Image 3" />
                    <img src="img/news/003_4.jpg" alt="Image 4" />
                    <img src="img/news/003_6.jpg" alt="Image 5" />
                </div>
            `
        },
        {
            image: "img/news/002_1.jpg",
            writer: "AS Maneesha",
            date: "2025/01/07",
            title: "Under the Moon: A Magical Evening",
            content: `
                <div class="descriptions">
                    <p class="bigger">On January 7th, 2025, the Health Promotion Society hosted 'Under the Moon' at the Faculty of Applied Sciences Auditorium.</p>
                    <p>The event, filled with music and laughter, fostered mental and social well-being, showcasing departmental unity. Supported by the Department Head, staff, and students, it was a vibrant celebration of togetherness and positivity.</p>
                </div>
                <div class="news_images">
                    <img src="img/news/002_2.jpg" alt="Image 2" />
                    <img src="img/news/002_3.jpg" alt="Image 3" />
                    <img src="img/news/002_4.jpg" alt="Image 4" />
                    <img src="img/news/002_5.jpg" alt="Image 5" />
                    <img src="img/news/002_6.jpg" alt="Image 6" />
                </div>
            `
        },
        {
            image: "img/news/001_1.jpg",
            writer: "AS Maneesha",
            date: "2023/08/01",
            title: "Research Assistant: CKDu Study",
            content: `
                <div class="descriptions">
                    <p class="bigger">I served as a Research Assistant for a WHO and Ministry of Health study on Chronic Kidney Disease of Uncertain Origin (CKDu) in Medawachchiya.</p>
                    <p>Collecting field data in August 2023, I engaged with communities to support research aimed at uncovering CKDu causes. This experience deepened my passion for medical research and health promotion.</p>
                </div>
                <div class="news_images">
                    <img src="img/news/001_2.jpg" alt="Image 2" />
                    <img src="img/news/001_3.jpg" alt="Image 3" />
                </div>
            `
        }
    ];

    const itemsPerPage = 6;
    let currentPage = 0;

    function renderNewsItems(page) {
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        const itemsToShow = newsData.slice(start, end);

        $('.news_list').empty();
        itemsToShow.forEach(item => {
            $('.news_list').append(`
                <li>
                    <div class="list_inner">
                        <div class="image">
                            <img src="${item.image}" alt="${item.title}" />
                        </div>
                        <div class="meta_row">
                            <span class="writer">${item.writer}</span>
                            <span class="date">${item.date}</span>
                        </div>
                        <div class="news_details">
                            <h3 class="title"><a href="#">${item.title}</a></h3>
                        </div>
                        <div class="main_content">${item.content}</div>
                    </div>
                </li>
            `);
        });

        updatePagination();
    }

    function updatePagination() {
        const totalPages = Math.ceil(newsData.length / itemsPerPage);
        $('.pagination_dots').empty();
        for (let i = 0; i < totalPages; i++) {
            $('.pagination_dots').append(`
                <li class="${i === currentPage ? 'active' : ''}" data-page="${i}"></li>
            `);
        }

        $('.pagination_dots li').off('click').on('click', function() {
            currentPage = parseInt($(this).data('page'));
            renderNewsItems(currentPage);
        });
    }

    // Modal Functionality
    function initializeModal() {
        const modalBox = $('.manee_tm_modalbox');

        $('.news_list').off('click').on('click', '.list_inner', function(e) {
            e.preventDefault();
            const content = $(this).find('.main_content').html();
            const title = $(this).find('.title a').text();
            const writer = $(this).find('.meta_row .writer').text();
            const date = $(this).find('.meta_row .date').text();
            const mainImage = $(this).find('.image img').attr('src');

            $('body').addClass('modal');
            modalBox.addClass('opened');
            modalBox.find('.description_wrap').empty().html(`
                <div class="news_details">
                    <h3 class="title">${title}</h3>
                </div>
                <img src="${mainImage}" alt="${title}" class="main_image" />
                <div class="meta_row">
                    <span class="writer">${writer}</span>
                    <span class="date">${date}</span>
                </div>
                <div class="main_content">${content}</div>
            `);
            // Add close button outside description_wrap
            modalBox.find('.box_inner').prepend(`
                <div class="close">
                    <a href="#"><img class="svg" src="img/svg/cancel.svg" alt="" /></a>
                </div>
            `);
        });

        // Use event delegation for close button
        modalBox.off('click', '.close').on('click', '.close', function(e) {
            e.preventDefault();
            modalBox.removeClass('opened');
            modalBox.find('.description_wrap').empty();
            modalBox.find('.close').remove();
            $('body').removeClass('modal');
        });

        modalBox.off('click').on('click', function(e) {
            if (e.target === modalBox[0]) {
                modalBox.removeClass('opened');
                modalBox.find('.description_wrap').empty();
                modalBox.find('.close').remove();
                $('body').removeClass('modal');
            }
        });

        $(document).off('keydown').on('keydown', function(e) {
            if (e.key === 'Escape' && modalBox.hasClass('opened')) {
                modalBox.removeClass('opened');
                modalBox.find('.description_wrap').empty();
                modalBox.find('.close').remove();
                $('body').removeClass('modal');
            }
        });
    }

    // Initialize
    renderNewsItems(currentPage);
    initializeModal();
});


function manee_tm_contact_form() {
    "use strict";

    jQuery(".contact_form #send_message").on('click', function() {
        var name = jQuery(".contact_form #name").val();
        var email = jQuery(".contact_form #email").val();
        var message = jQuery(".contact_form #message").val();
        var success = jQuery(".contact_form .returnmessage").data('success');
        var popup = jQuery(".manee_tm_contact_popup");
        var popupTitle = popup.find(".popup_title");
        var popupMessage = popup.find(".popup_message");
        var popupIcon = popup.find(".popup_icon .svg");

        jQuery(".contact_form .returnmessage").empty();
        if (name === '' || email === '' || message === '') {
            jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
            popup.removeClass('active error');
        } else {
            jQuery.post("https://formsubmit.co/ahamedmaneesha@gmail.com", { ajax_name: name, ajax_email: email, ajax_message: message }, function(data) {
                jQuery(".contact_form .returnmessage").append(data);

                if (jQuery(".contact_form .returnmessage span.contact_error").length) {
                    popupTitle.text("Submission Failed");
                    popupMessage.text("There was an error sending your message. Please try again later.");
                    popupIcon.attr("src", "img/svg/x-circle.svg");
                    popup.addClass('active error');
                } else {
                    popupTitle.text("Message Sent Successfully!");
                    popupMessage.text(success);
                    popupIcon.attr("src", "img/svg/checkcircle.svg");
                    popup.addClass('active').removeClass('error');
                    jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
                    jQuery("#contact_form")[0].reset();
                }
            }).fail(function() {
                popupTitle.text("Submission Failed");
                popupMessage.text("There was an error sending your message. Please try again later.");
                popupIcon.attr("src", "img/svg/x-circle.svg");
                popup.addClass('active error');
            });
        }

        // Close popup
        popup.find(".popup_close").on('click', function() {
            popup.removeClass('active error');
            return false;
        });

        popup.on('click', function(e) {
            if (e.target === this) {
                popup.removeClass('active error');
            }
        });

        return false;
    });
}

/* Ensure the contact form function is called on document ready */
jQuery(document).ready(function($) {
    /* ... [Your existing document.ready code here] ... */
    manee_tm_contact_form();
});