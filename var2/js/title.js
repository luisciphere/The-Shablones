;(function($) {
	// wrap tables in content for swipe on mobile devices
	$(function() {
		$('article.content').find('table').wrap('<div class="for-mobile-view"></div>');
	});
}(jQuery));$(function () {
	$(document).click(function (event) {
		$('.contacts-block').each(function() {
			if ($(event.target).closest($(this)).length) {
				return;
			} else {
				$(this).find('.tgl-but').prop("checked", false);
				$(this).find('.icon').removeClass('active');
			}
		});
	});

	function setMargin($block) {
		if ($(window).width() > 960) {
			$block.find(".block-body-drop").css({
				"margin-left": "0px"
			});
		} else {
			var left = $block.offset().left * -1;
			$block.find(".block-body-drop").css({
				"margin-left": left + "px"
			});
		}
	}

	$('.contacts-block').each(function() {
		var $block = $(this),
			allClasses = $block.attr("class").split(" "),
			mainClass = allClasses[0],
			mainSelector = ".side-panel ."+mainClass+" .block-body-drop",
			styles = document.styleSheets;

		for(var i = 0; i < styles.length; i++) {
			if (styles[i].href && styles[i].href.indexOf("styles.css") !== -1) {
				for(var j = 0; j < styles[i].cssRules.length; j++) {
					if (styles[i].cssRules[j].selectorText == mainSelector && styles[i].cssRules[j].style.width == "100vw") {
						$block.data("fullwidth", 1);
						setMargin($block);
						break;
					}
				}
				break;
			}
		}
	});

	$(window).resize(function() {
		$('.contacts-block').each(function() {
			var $block = $(this);
			if ($block.data("fullwidth") == 1) {
				setMargin($block);
			}
		});
	});

	$('.contacts-block').each(function() {
		var $block = $(this);
		$block.find('.icon').click(function() {
			if ($block.data("fullwidth") == 1) {
				setMargin($block);
			}
			if ($block.find('.tgl-but').prop("checked")) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});
	});
});
$(function () {
	$(document).click(function (event) {
		$('.contacts-block').each(function() {
			if ($(event.target).closest($(this)).length) {
				return;
			} else {
				$(this).find('.tgl-but').prop("checked", false);
				$(this).find('.icon').removeClass('active');
			}
		});
	});

	function setMargin($block) {
		if ($(window).width() > 960) {
			$block.find(".block-body-drop").css({
				"margin-left": "0px"
			});
		} else {
			var left = $block.offset().left * -1;
			$block.find(".block-body-drop").css({
				"margin-left": left + "px"
			});
		}
	}

	$('.contacts-block').each(function() {
		var $block = $(this),
			allClasses = $block.attr("class").split(" "),
			mainClass = allClasses[0],
			mainSelector = ".side-panel ."+mainClass+" .block-body-drop",
			styles = document.styleSheets;

		for(var i = 0; i < styles.length; i++) {
			if (styles[i].href && styles[i].href.indexOf("styles.css") !== -1) {
				for(var j = 0; j < styles[i].cssRules.length; j++) {
					if (styles[i].cssRules[j].selectorText == mainSelector && styles[i].cssRules[j].style.width == "100vw") {
						$block.data("fullwidth", 1);
						setMargin($block);
						break;
					}
				}
				break;
			}
		}
	});

	$(window).resize(function() {
		$('.contacts-block').each(function() {
			var $block = $(this);
			if ($block.data("fullwidth") == 1) {
				setMargin($block);
			}
		});
	});

	$('.contacts-block').each(function() {
		var $block = $(this);
		$block.find('.icon').click(function() {
			if ($block.data("fullwidth") == 1) {
				setMargin($block);
			}
			if ($block.find('.tgl-but').prop("checked")) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});
	});
});
$(function () {
	$(document).click(function (event) {
		$('.contacts-block').each(function() {
			if ($(event.target).closest($(this)).length) {
				return;
			} else {
				$(this).find('.tgl-but').prop("checked", false);
				$(this).find('.icon').removeClass('active');
			}
		});
	});

	function setMargin($block) {
		if ($(window).width() > 960) {
			$block.find(".block-body-drop").css({
				"margin-left": "0px"
			});
		} else {
			var left = $block.offset().left * -1;
			$block.find(".block-body-drop").css({
				"margin-left": left + "px"
			});
		}
	}

	$('.contacts-block').each(function() {
		var $block = $(this),
			allClasses = $block.attr("class").split(" "),
			mainClass = allClasses[0],
			mainSelector = ".side-panel ."+mainClass+" .block-body-drop",
			styles = document.styleSheets;

		for(var i = 0; i < styles.length; i++) {
			if (styles[i].href && styles[i].href.indexOf("styles.css") !== -1) {
				for(var j = 0; j < styles[i].cssRules.length; j++) {
					if (styles[i].cssRules[j].selectorText == mainSelector && styles[i].cssRules[j].style.width == "100vw") {
						$block.data("fullwidth", 1);
						setMargin($block);
						break;
					}
				}
				break;
			}
		}
	});

	$(window).resize(function() {
		$('.contacts-block').each(function() {
			var $block = $(this);
			if ($block.data("fullwidth") == 1) {
				setMargin($block);
			}
		});
	});

	$('.contacts-block').each(function() {
		var $block = $(this);
		$block.find('.icon').click(function() {
			if ($block.data("fullwidth") == 1) {
				setMargin($block);
			}
			if ($block.find('.tgl-but').prop("checked")) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});
	});
});
$(function () {
	$(document).click(function (event) {
		$('.contacts-block').each(function() {
			if ($(event.target).closest($(this)).length) {
				return;
			} else {
				$(this).find('.tgl-but').prop("checked", false);
				$(this).find('.icon').removeClass('active');
			}
		});
	});

	function setMargin($block) {
		if ($(window).width() > 960) {
			$block.find(".block-body-drop").css({
				"margin-left": "0px"
			});
		} else {
			var left = $block.offset().left * -1;
			$block.find(".block-body-drop").css({
				"margin-left": left + "px"
			});
		}
	}

	$('.contacts-block').each(function() {
		var $block = $(this),
			allClasses = $block.attr("class").split(" "),
			mainClass = allClasses[0],
			mainSelector = ".side-panel ."+mainClass+" .block-body-drop",
			styles = document.styleSheets;

		for(var i = 0; i < styles.length; i++) {
			if (styles[i].href && styles[i].href.indexOf("styles.css") !== -1) {
				for(var j = 0; j < styles[i].cssRules.length; j++) {
					if (styles[i].cssRules[j].selectorText == mainSelector && styles[i].cssRules[j].style.width == "100vw") {
						$block.data("fullwidth", 1);
						setMargin($block);
						break;
					}
				}
				break;
			}
		}
	});

	$(window).resize(function() {
		$('.contacts-block').each(function() {
			var $block = $(this);
			if ($block.data("fullwidth") == 1) {
				setMargin($block);
			}
		});
	});

	$('.contacts-block').each(function() {
		var $block = $(this);
		$block.find('.icon').click(function() {
			if ($block.data("fullwidth") == 1) {
				setMargin($block);
			}
			if ($block.find('.tgl-but').prop("checked")) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}
		});
	});
});
(function ($, undefined) {

	var $win = $(window);
	var $doc = $(document);
	var $grid = $('<div class="grid"></div>');
	var $grid2 = $('<div class="grid-2"></div>');
	var media = {
		over: 1024,
		screen: 960,
		tl: 768,
		tp: 640,
		ml: 480,
		mp: 0
	};

	var init = function (settings) {
		var	$self = $(this), $li;
		var more_text = $self.data('more-text') || '';
		var more_button = $self.find('.more-button');
		var ul_mode = $self.find('.menu-scroll > ul');

		var activate_more_button = {
			active: false,
			from: 0,
			to: 0
		};

		if ($self.data('screen-button') == 'more') {
			if (ul_mode.is('.sub_popup_horizontal') != true) {
				activate_more_button.active = true;
				if (media.over > activate_more_button.to) {
					activate_more_button.to = media.over;
				}
				if (media.screen < activate_more_button.from || activate_more_button.from == 0) {
					activate_more_button.from = media.screen;
				}
			}
		}

		if ($self.data('responsive-tl') == 'button') {
			if (ul_mode.is('.sub_popup_horizontal') != true) {
				activate_more_button.active = true;
				if (media.screen > activate_more_button.to) {
					activate_more_button.to = media.screen;
				}
				if (media.tl < activate_more_button.from || activate_more_button.from == 0) {
					activate_more_button.from = media.tl;
				}
			}
		}

		if ($self.data('responsive-tp') == 'button') {
			if (ul_mode.is('.sub_popup_horizontal') != true) {
				activate_more_button.active = true;
				if (media.tl > activate_more_button.to) {
					activate_more_button.to = media.tl;
				}
				if (media.tp < activate_more_button.from || activate_more_button.from == 0) {
					activate_more_button.from = media.tp;
				}
			}

		}

		if ($self.data('responsive-ml') == 'button') {
			if (ul_mode.is('.sub_popup_horizontal') != true) {
				activate_more_button.active = true;
				if (media.tp > activate_more_button.to) {
					activate_more_button.to = media.tp;
				}
				if (media.ml < activate_more_button.from || activate_more_button.from == 0) {
					activate_more_button.from = media.ml;
				}
			}
		}

		var first_level_wrapper = $self.find('.menu-scroll>ul');

		settings = $.extend({
			itemElem: 'li',
			subMenu: 'ul',
			hasChildIcon: $self.attr('data-child-icons')
		}, settings);

		var first_level_items = first_level_wrapper.find('>.menu-item:visible, >.delimiter:visible');

		$grid.appendTo('body');
		$grid2.appendTo('body');

		if (!more_button.size()) {
			more_button = $('<li class="more-button"><a><span>' + more_text + '</span></a></li>');
			$self.find('.menu-scroll>ul').append(more_button);
			more_button.attr('data-position', 'bottom right');
		}
		if (!more_button.find('>' + settings.subMenu).size()) {
			more_button.append('<' + settings.subMenu +'>');
		} else {
			more_button.find('>' + settings.subMenu).html('');
		}
		var cloned = first_level_items.clone(true, true);
		more_button.find('>' + settings.subMenu).append(cloned);

		$li = $self.find(settings.itemElem + ":has('>" + settings.subMenu + "')").addClass('has_child');

		$li.add(cloned.filter('.has_child')).each(function () {
			var $item = $(this),
				$submenu = $item.children(settings.subMenu),
				$a = $item.children('a'),
				$parents = $item.parentsUntil($self.parent()).filter(settings.subMenu),
				$parent = $parents.first(),
				level = $parents.length,
				position = $item.data('position') || (((level == 1 && $self.is('.vertical')) || level > 1) ? 'right top' :  'bottom left'),
				type = $item.data('type') || 'vertical',
				trigger = $item.data('trigger') || 'hover',
				effect = $item.data('effect') || 'none',
				timer_show,
				submenu_left = $submenu.css('left'),
				getParent = $item.closest('ul'),
				timer_hide,
				has_touch = ('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch;

			$a.on('click', function(e){
				var $this = $(this);
				if(has_touch && !$submenu.is(':visible') && !$this.data('first_click') || ($this.parent().data('trigger') == 'click' && ($this.attr('href') == '#' || !$this.attr('href')))) {
					$this.data('first_click', 'true');
					e.preventDefault();
				}
			});

			var childIconLen = $a.find('.has-child-icon').length;

			if (!childIconLen && settings.hasChildIcon == '1') {
				var childIconTag = $('<em class="has-child-icon"></em>');
				$a.append(childIconTag);
			}

			if (trigger === 'hover') {
				$item.on('mouseenter', onMouseEnter);
				$item.on('mouseleave', onMouseLeave);
			} else if (trigger === 'click') {
				$submenu.click(function(e) {
					e.stopPropagation();
				});
				$item.on('click', onMouseClick);
			}

			$item.on('hide', function () {
				hideSub(true);
			});

			function onMouseEnter() {
				clearTimeout(timer_hide);
				timer_show = setTimeout(function () {
					showSub();
				}, 100);
			}

			function onMouseLeave() {
				clearTimeout(timer_show);
				timer_hide = setTimeout(function () {
					hideSub();
				}, 300);
			}

			function onMouseClick(e) {
				e.stopPropagation();
				if ($item.data('clicked')) {
					hideSub();
				} else {
					showSub();
					$item.data('clicked', true);
				}
				$doc.one('click', function () {
					$item.triggerHandler('hide');
				});
			}

			function showSub() {
				var opts, maxHeight, visible;
				var childIcon = $a.find('.has-child-icon');

				visible = $submenu.is(':visible');

				opts = getPosition();

				switch (submenu_left) {
					case '50%':
						$.extend(true, opts, {'right': 'auto', 'left': '50%', 'align': 'center'});
						break;
					case '0px':
						$.extend(true, opts, {'right': 'auto', 'left': '0px', 'align': 'left'});
						break;
					case 'auto':
						$.extend(true, opts, {'right': '0px', 'left': 'auto', 'align': 'right'});
						break;
				}

				if (!visible) {
					$item.data('opts', opts);

					if (opts.align === 'contain' && level > 1) {
						if (!$parent.data('height')) {
							$parent.data('height', $parent.height());
						}
						maxHeight = Math.max($parent.height(), $submenu.height());
						$parent.height(maxHeight);
						$submenu.height(maxHeight);
					}

					beforeShow();

					$a.addClass('hover');

					if (childIcon.length) {
						childIcon.addClass('hover');
					}
				}

				switch (effect) {
					case 'fade':
						if (visible) {
							$submenu.stop().animate({
								opacity: 1
							}, 'fast');
						} else {
							$submenu.css({
								display: 'block',
								opacity: 0,
								top: opts.top,
								left: opts.left
							}).animate({
								opacity: 1
							}, 'fast');
						}
						break;
					case 'fade-motion':
						if (visible) {
							$submenu.stop().animate({
								opacity: 1
							}, 'fast');
						} else {
							$submenu.css({
								display: 'block',
								opacity: 0,
								top: opts.top + 10,
								left: opts.left
							}).animate({
								opacity: 1,
								top: opts.top
							}, 'fast');
						}
						break;
					default:
						$submenu.css({
							top: opts.top,
							left: opts.left
						}).show();
				}
			}

			function hideSub(force) {
				var childIcon = $a.find('.has-child-icon');

				if (!$submenu.is(':visible')) {
					return;
				}

				$item.find('.has_child').each(function () {
					$(this).triggerHandler('hide');
				});

				$a.removeClass('hover');

				if (childIcon.length) {
					childIcon.removeClass('hover');
				}

				if (force) {
					$submenu.stop().hide();
					afterHide();
					return;
				}

				switch (effect) {
					case 'fade':
					case 'fade-motion':
						$submenu.stop().animate({
							opacity: 0
						}, {
							duration: 'fast',
							complete: function () {
								$submenu.hide();
								afterHide();
							}
						});
						break;
					default:
						$submenu.hide();
						afterHide();
						break;
				}
			}

			function beforeShow() {
				var opts = $item.data('opts'),
					submenuRect, old_css,
					leftEdge, rightEdge, submenuCenter, parentsLength;

				//$item.siblings('.has_child').each(function () {
				//	$(this).triggerHandler('hide');
				//});

				old_css = {
					'visibility': $submenu.css('visibility'),
					'left': $submenu.css('left'),
					'display': $submenu.css('display')
				};

				$submenu.css({
					'visibility': 'hidden',
					'left': opts.left,
					'display': 'block'
				});

				submenuRect = $submenu[0].getBoundingClientRect();

				$submenu.css({
					'visibility': '',
					'left': '',
					'display': old_css.display
				});

				if ($self.hasClass('horizontal')) {
					parentsLength = $parents.length - 1;
				} else {
					parentsLength = $parents.length;
				}

				$parents.slice(0, parentsLength).each(function () {
					var submenuRect = this.getBoundingClientRect();
					if (typeof leftEdge === 'undefined' || submenuRect.left < leftEdge) {
						leftEdge = submenuRect.left;
					}
					if (typeof rightEdge === 'undefined' || submenuRect.right > rightEdge) {
						rightEdge = submenuRect.right;
					}
				});

				submenuCenter = submenuRect.left + submenuRect.width * .5;

				if (leftEdge && rightEdge) {
					$grid.css({
						left: leftEdge,
						width: rightEdge - leftEdge
					});
					$grid2.css({
						left: submenuRect.left,
						width: submenuRect.width
					});
					if (submenuCenter > leftEdge && submenuCenter < rightEdge) {
						$parents.slice(1).addClass('blur');
					}
				}
			}

			function afterHide() {
				var opts = $item.data('opts');

				$parents.slice(0,2).removeClass('blur');

				if (trigger === 'click') $item.data('clicked', false);
				if (opts.align === 'contain') {
					$parent.height($parent.data('height'));
				}
			}

			function getPosition() {

				var itemRect = $item[0].getBoundingClientRect(),
					itemPosition,
					submenuWidth = $submenu.outerWidth(),
					submenuHeight = $submenu.outerHeight(),
					winWidth = $win.width(),
					scrollLeft = $win.scrollLeft(),
					top, left, side, align;

				side = position.split(' ')[0];    // right, left, top, bottom
				align = position.split(' ')[1];   // top, bottom, right, left, center, contain

				if (typeof align === 'undefined') {
					if (side === 'bottom' || side === 'top') {
						align = 'left';
					}
					if (side === 'right' || side === 'left') {
						align = 'top';
					}
				}

				switch (side) {
					case 'top':
						top = -submenuHeight;
						switch (align) {
							case 'left':
								left = 0;
								break;
							case 'center':
								left = (itemRect.width - submenuWidth) * .5;
								break;
							case 'right':
								left = itemRect.width - submenuWidth;
								break;
						}
						break;
					case 'bottom':
						top = itemRect.height;
						switch (align) {
							case 'left':
								left = 0;
								break;
							case 'center':
								left = (itemRect.width - submenuWidth) * .5;
								break;
							case 'right':
								left = itemRect.width - submenuWidth;
								break;
						}
						break;
					case 'right':
						left = itemRect.width;
						switch (align) {
							case 'top':
								top = 0;
								break;
							case 'center':
								top = (itemRect.height - submenuHeight) * .5;
								break;
							case 'bottom':
								top = itemRect.height - submenuHeight;
								break;
							case 'contain':
								top = $parent.offset().top - $item.offset().top;
								break;
						}
						break;
					case 'left':
						left = -submenuWidth;
						switch (align) {
							case 'top':
								top = 0;
								break;
							case 'center':
								top = (itemRect.height - submenuHeight) * .5;
								break;
							case 'bottom':
								top = itemRect.height - submenuHeight;
								break;
							case 'contain':
								top = $parent.offset().top - $item.offset().top;
						}
						break;
				}

				if ($item.css('position') === 'static' && getParent.is('.sub_popup_horizontal') != true  ) {
					itemPosition = $item.position();
					top += itemPosition.top;
					left += itemPosition.left;
				} else if (getParent.is('.sub_popup_horizontal') == true) {
					itemPosition = $item.position();
					top += itemPosition.top;
					left += 0;
				}

				// determine for submenu positioned out of viewport
				if (side === 'right' && itemRect.right + submenuWidth > winWidth - scrollLeft && itemRect.left > submenuWidth) {
					left = left - itemRect.width - submenuWidth;
				} else if (side === 'left' && submenuWidth > itemRect.left && itemRect.right + submenuWidth < winWidth - scrollLeft) {
					left = left + itemRect.width + submenuWidth;
				}

				return {
					top: top,
					left: left,
					side: side,
					align: align
				}
			}
		});

		var clss = $self.get(0).classList[0];
		var checkPanel = function() {
			return window.side_panel_controller &&
				typeof window.side_panel_controller.inPanel === 'function' &&
				window.side_panel_controller.inPanel(clss);
		};
		$win.resize(function() {
			var testA = !checkPanel() && activate_more_button.active;
			var testB = window.innerWidth <= activate_more_button.to && window.innerWidth > activate_more_button.from;
			var testC = window.innerWidth >= activate_more_button.from && $self.data('screen-button') == 'more';

			if (testA && (testB || testC) && !more_button.hasClass('removed')) {
				var moreButItems = more_button.find('>' + settings.subMenu).children();
				moreButItems.show();
				first_level_items.css('display', '');

				more_button.removeClass('disabled').show();

				var top_el = first_level_items.filter(':visible:first');
				if (!top_el.length) {
					return false;
				}
				var firstRect = top_el[0].getBoundingClientRect();
				var pos_left = more_button[0].getBoundingClientRect().left;
				var oldRight = firstRect.right;

				more_button.addClass('disabled').css('display', '');

				var toHideArr = [];
				var hideFlag = false;

				first_level_items.each(function(index){
					var itemRectRight = this.getBoundingClientRect().right;
					if (itemRectRight >= pos_left || itemRectRight < oldRight) {
						toHideArr.push(index);
						hideFlag = true;
					}
					oldRight = itemRectRight;
				});

				if (hideFlag) {
					moreButItems.each(function(ind){
						if (ind < toHideArr[0]) {
							$(this).hide();
						} else {
							$(first_level_items[ind]).hide();
						}
					});
					more_button.removeClass('disabled');
				}
			} else {
				if (!more_button.is('.disabled')) more_button.addClass('disabled');
				if (first_level_items.filter(':hidden').size()) first_level_items.show();
			}
		});

		setTimeout(function() {
			$win.trigger('resize');
		}, 300);
	};

	$.fn.wmMenuH = function(settings) {
		return this.each(function () {
			init.call(this, settings)
		});
	};

	$(function() {
		$('.wm-widget-menu.horizontal').wmMenuH();
	});
})(jQuery);
$(function() {

	var debounce = (function () {
		return function (fn, time) {
			var timer, func;
			func = function() {
				var args = [].slice.call(arguments, 0);
				window.clearTimeout(timer);
				timer = window.setTimeout(function () {
					window.requestAnimationFrame && window.requestAnimationFrame(function() {
						fn.apply(null, args);
					}) || fn.apply(null, args);
				}, time)
			};
			return func;
		}
	}());

	$('.slider').each(function() {
		var $this = $(this),
			options = {},
			bxslider,
			$slider_item = $this.find('.slider-item');
		options.mode = $this.attr('data-setting-mode');
		options.pagerCustom = $this.attr('data-setting-pager_selector');
		options.prevSelector = $this.attr('data-setting-prev_selector');
		options.nextSelector = $this.attr('data-setting-next_selector');
		options.prevText = $this.attr('data-setting-prev_text') || '';
		options.nextText = $this.attr('data-setting-next_text') || '';
		options.auto = !!parseInt($this.attr('data-setting-auto'));
		options.controls = !!parseInt($this.attr('data-setting-controls'));
		options.pager = !!parseInt($this.attr('data-setting-pager'));
		options.pause = parseInt($this.attr('data-setting-pause'), 10) || 4000;
		options.useCSS = false;
		options.responsive = false;

		var itemLength = $slider_item.length;
		var $pager_wrap = $this.find('.slider-pager-wrap');
		var $pager = '<a href="" data-slide-index=""><span></span></a>';
		var $dotsType = $this.attr('data-type-pager');
		var textPosition = $this.attr('data-text_position');
		var $pager_wrap_inner = $('<div class="slider-pager"></div>');
		var force = true;

		if (!options.autoControls && options.auto) {
			options.onSlideAfter = function () {
				bxslider.startAuto();
			}
		}

		function init() {

			if (bxslider) {
				bxslider.destroySlider();
			}
			if (!$this.is(':visible')) {
				return;
			}

			$this.find('.slider-item[data-src]').each(function () {
				$(this).css('background-image', 'url("' + $(this).data('src') + '")');
			});

			if ($this.find('.slider-item .overfill').length == 0) {
				$this.find('.slider-item').prepend('<div class="overfill"></div>');
			}

			var bg_attc = $this.css('background-attachment');
			var bg_cl = $this.css('background-clip');
			var bg_colr = $this.css('background-color');
			var bg_image = $this.css('background-image');
			var bg_org = $this.css('background-origin');
			var bg_rep = $this.css('background-repeat');
			var bg_size = $this.css('background-size');


			$this.find('.overfill').css({
				'background-attachment': bg_attc,
				'background-clip': bg_cl,
				'background-color': bg_colr,
				'background-image': bg_image,
				'background-origin': bg_org,
				'background-repeat': bg_rep,
				'background-size': bg_size
			});

			$this.find('>.overfill').remove();

			if(textPosition=='out' && force){
				var $textWrap = $this.find('.text_wrapper');
				var text_options = {};
				var $textInner = $textWrap.find('.text_inner');
				var clone_text = $textInner.find('.text_slider').clone();
				text_options.mode = $this.attr('data-setting-mode');
				text_options.auto = false;
				text_options.controls = false;
				text_options.pager = false;


				if($this.find('>.wrap_text_dm').length > 0){
					for (var i = 1; i < itemLength; i++) {
						$textInner.append(clone_text.clone());
					}
					$this.find('>.wrap_text_dm').remove();
				}

				if(text_options.mode=="fade"){
					var itemHeight = Math.max.apply(Math, $textInner.find('.text_slider').map(function() {
						return $(this).height()
					}).get());
					$textInner.css('min-height', itemHeight);
				}

				var textSlider = $textInner.bxSlider(text_options);
				$textInner.data('bxslider', textSlider);

				options.onSlideNext = function(){
					textSlider.goToNextSlide();
				};

				options.onSlidePrev = function(){
					textSlider.goToPrevSlide();
				};

				options.onSlideBefore = function($slideElement, oldIndex, newIndex){
					if(newIndex == 0 && oldIndex == textSlider.getSlideCount() - 1 || newIndex-oldIndex == 1) {
						textSlider.goToNextSlide();
					} else if(oldIndex == 0 && newIndex == textSlider.getSlideCount() - 1 || oldIndex-newIndex == 1){
						textSlider.goToPrevSlide();
					} else {
						textSlider.goToSlide(newIndex);
					}
				};
				force = false;

			} else if(textPosition=='in' && $this.find('>.wrap_text_dm').length > 0){
				var clone_text = $this.find('.text-slider').clone();
				$this.find('.slider-item .overfill').after(clone_text);
				$this.find('>.wrap_text_dm').remove();
			}


			if(itemLength>1){
				if (bxslider) {
					if (options.pager && $pager_wrap.find('.slider-pager').length==0) {
						$pager_wrap.append($pager_wrap_inner);

						for (var i = 0; i < itemLength; i++) {
							$pager_wrap_inner.append($pager);
						}

						$pager = $pager_wrap_inner.find('a');
						$pager.each(function () {
							var $this = $(this);
							var index = $this.index();
							$this.attr('data-slide-index', index);
							if ($dotsType == 'figures') {
								$this.find('span').html(index + 1);
							}
						});
					}

					bxslider.reloadSlider(options);

				} else {
					$this.find('.slider-inner').data('bxslider', (bxslider = $this.find('.slider-inner').bxSlider(options)));
				}
			}
			else{
				$this.find('.slider-controls').addClass('hidden');
				$this.find('.slider-pager-wrap').addClass('hidden');
			}
		}

		$(window).on('resize', debounce(init, 300));

		init();
	});
});
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
$(function() {

	var debounce = (function () {
		return function (fn, time) {
			var timer, func;
			func = function() {
				var args = [].slice.call(arguments, 0);
				window.clearTimeout(timer);
				timer = window.setTimeout(function () {
					window.requestAnimationFrame && window.requestAnimationFrame(function() {
						fn.apply(null, args);
					}) || fn.apply(null, args);
				}, time)
			};
			return func;
		}
	}());

	var throttle = (function() {
		return function (fn, threshhold, scope) {
			threshhold || (threshhold = 250);
			var last,
				deferTimer,
				func;
			func = function () {
				var context = scope || this;
				var now = +new Date,
					args = arguments;
				if (last && now < last + threshhold) {
					// hold on to it
					clearTimeout(deferTimer);
					deferTimer = setTimeout(function () {
						last = now;
						fn.apply(context, args);
					}, threshhold);
				} else {
					last = now;
					fn.apply(context, args);
				}
			};
			return func;
		}
	}());

	$('.horizontal_blocklist').each(function() {
		var $blocklist = $(this),
			$items = $blocklist.find('.item-outer'),
			$list = $blocklist.find('.list'),
			$body = $blocklist.find('.body'),
			$controls = $blocklist.find('.controls'),
			$pagers = $blocklist.find('.pager-wrap'),
			options = {},
			count,
			col_arr, pager_arr, controls_arr,
			bxslider,
			containerWidth,
			isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

		if ($blocklist.attr('data-slider') === '1' && $.fn.bxSlider) {

			options.pagerSelector= $blocklist.attr('data-setting-pager_selector');
			options.prevSelector = $blocklist.attr('data-setting-prev_selector');
			options.nextSelector = $blocklist.attr('data-setting-next_selector');
			options.prevText = $blocklist.attr('data-setting-prev_text') || '';
			options.nextText = $blocklist.attr('data-setting-next_text') || '';
			options.auto = !!parseInt($blocklist.attr('data-setting-auto'));
			options.controls = !!parseInt($blocklist.attr('data-setting-controls'));
			options.pager = !!parseInt($blocklist.attr('data-setting-pager').split(',')[0]);
			options.pause = parseInt($blocklist.attr('data-setting-pause'), 10) || 4000;
			options.useCSS = isMobile;
			options.infiniteLoop = true;
			options.adaptiveHeight = false;
			options.mode = $blocklist.attr('data-setting-mode') || 'horizontal';
			options.touchEnabled = options.mode === 'horizontal';
			options.slideMargin = 0;
			options.maxSlides = parseInt($blocklist.attr('data-setting-count'), 10) || 1;
			options.minSlides = options.mode === 'horizontal' ? 1 : options.maxSlides;
			options.moveSlides = $blocklist.attr('data-setting-move') || 0;

			col_arr = $blocklist.attr('data-setting-columns').split(",");
			pager_arr = $blocklist.attr('data-setting-pager').split(",");
			controls_arr = $blocklist.attr('data-setting-controls').split(",");

			if (!options.autoControls && options.auto) {
				options.onSlideAfter = function() {
					bxslider.startAuto();
				}
			}

			$items.removeClass('hidden');
			if ($list.parent().hasClass('bx-viewport')) {
				$list.unwrap();
				$list.unwrap();
			}

			function init(force) {
				var media_type,
					body_width = $('body').width();

				var mediaList = ["screen", "tablet_landscape", "tablet_portrait", "mobile_landscape", "mobile_portrait"];
				var media_ind, setting_columns,
					isJustify, space_between;

				var newContainerWidth = $blocklist.width(), itemHeight, viewportHeight;
				if (!$blocklist.is(':visible')) {
					if (bxslider) {
						bxslider.destroySlider();
					}
					return;
				}
				if (!force && containerWidth && containerWidth === newContainerWidth) {
					return;
				}
				containerWidth = newContainerWidth;

				if (bxslider) {
					bxslider.destroySlider();
				}

				if (body_width >= 961) {
					media_type = "screen";
				} else if (body_width <= 960 && body_width >= 769) {
					media_type = "tablet_landscape";
				} else if (body_width <= 768 && body_width >= 641) {
					media_type = "tablet_portrait";
				} else if (body_width <= 640 && body_width >= 481) {
					media_type = "mobile_landscape";
				} else if (body_width <= 480) {
					media_type = "mobile_portrait";
				}
				media_ind = mediaList.indexOf(media_type);
				count = parseInt($blocklist.attr('data-setting-count'), 10);

				isJustify = $body.css('justify-content') == "space-between" ? true : false;

				$list.width('auto');
				$items
					.attr('style', '')
					.slice(1).addClass('hidden').end()
					.width(options.slideWidth = $items.width())
					.removeClass('hidden');

				if (pager_arr.length > 1) {
					options.pager = pager_arr[0] == false ? false : !!parseInt(pager_arr[media_ind]);
				}
				if (controls_arr.length > 1) {
					options.controls = controls_arr[0] == false ? false : !!parseInt(controls_arr[media_ind]);
				}

				$(options.pagerSelector).css({"display": options.pager == true ? "flex" : "none"});
				$blocklist.find(".controls").css({"display": options.controls == true ? "flex" : "none"});

				if (options.mode === 'vertical') {
					itemHeight = Math.max.apply(Math, $items.map(function() {
						return $(this).height()
					}).get());
					$items.css('min-height', itemHeight);
					viewportHeight = itemHeight * count;
				} else {
					setting_columns = col_arr[media_ind] == "auto" ? false : parseInt(col_arr[media_ind]);
					if (setting_columns) {
						count = setting_columns;
					}
					options.maxSlides = Math.min(count, Math.ceil($items.parent().width() / $items.width()));
				}

				if (isJustify) {
					if (options.maxSlides > 1) {
						space_between = Math.floor(($body.width() - $items.width() * options.maxSlides)/ (options.maxSlides-1));
						space_between = space_between < 0 ? 0 : space_between;
					} else {
						space_between = 0;
					}
					options.slideMargin = space_between;
				}

				if ($items.length > options.maxSlides) {
					$list.css({'justify-content': 'flex-start'});
					if (bxslider) {
						bxslider.reloadSlider(options);
					} else {
						$list.data('bxslider', (bxslider = $list.bxSlider(options)));
					}
				} else {
					$list.css({'justify-content': isJustify ? 'space-between' : 'inherit', 'flex-wrap': 'nowrap'});
					$pagers.hide();
					$controls.hide();
				}

				if (viewportHeight) {
					$list.parent().css('min-height', viewportHeight);
				}
				if (options.mode === 'horizontal') {
					var align = {};
					switch ($body.css('justify-content')) {
						case 'flex-end':
							align['margin-left'] = 'auto';
							align['margin-right'] = '0px';
							break;
						case 'center':
							align['margin-left'] = 'auto';
							align['margin-right'] = 'auto';
							break;
						default:
							align['margin-left'] = '0px';
							align['margin-right'] = 'auto';
					}
					$blocklist.find('.bx-wrapper').css(align);
				}
			}

			$(window).on('resize', debounce(init, 300));
			$(window).on('load', function(){
				init(true);
			});

			init();
		}

		$(window).on('resize', debounce(swipeScrollInit, 300));
		swipeScrollInit();

		function swipeScrollInit() {
			var $shadowLeft = $blocklist.find(".swipe-shadow-left");
			var $shadowRight = $blocklist.find(".swipe-shadow-right");
			if ($list.css("overflow-x") == "auto") {
				var scroll_width = $list.get(0).scrollWidth;
				var view_width = $list.width();
				$shadowLeft.css("pointer-events","none");
				$shadowRight.css("pointer-events","none");

				$list.off('scroll');
				$list.on('scroll', throttle(swipeScrollCheack, 200));

				swipeScrollCheack();

				function swipeScrollCheack() {
					var scroll_left = $list.scrollLeft();

					if (scroll_left > 0) {
						$shadowLeft.show();
					} else {
						$shadowLeft.hide();
					}

					if (scroll_left + view_width >= scroll_width - 1) {
						$shadowRight.hide();
					} else {
						$shadowRight.show();
					}
				}
			} else {
				$shadowLeft.hide();
				$shadowRight.hide();
			}
		}

	});
});
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing"),f(),o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:p()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return i(),void 0;var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(v()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",Z),o.settings.auto&&o.settings.autoStart&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&O()},v=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(true)}).get()),e},p=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width();t=Math.floor(o.viewport.width()/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=o.children.length/m();else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.width())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),N()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),N()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",y),o.controls.prev.bind("click",z),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",k),o.controls.autoEl.on("click",".bx-stop",M),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(){var e=t(this).find("img:first").attr("title");void 0!=e&&(""+e).length&&t(this).append('<div class="bx-caption"><span>'+e+"</span></div>")})},y=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},z=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},k=function(t){r.startAuto(),t.preventDefault()},M=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget),s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i),void 0):(o.pagerEl.find("a").removeClass("active"),o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}),void 0)},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){o.settings.autoDelay>0?setTimeout(r.startAuto,o.settings.autoDelay):r.startAuto(),o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));N(n)}),N()},N=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},O=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",X)},X=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",Y),o.viewport.bind("touchend",V)}},Y=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},V=function(t){o.viewport.unbind("touchmove",Y);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",V)},Z=function(){var e=t(window).width(),i=t(window).height();(a!=e||l!=i)&&(a=e,l=i,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,o.active.index=0>e?x()-1:e>=x()?0:e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=v()&&o.viewport.animate({height:v()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).outerWidth(u()),o.viewport.css("height",v()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",Z))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
$(function() {

	var debounce = (function () {
		return function (fn, time) {
			var timer, func;
			func = function() {
				var args = [].slice.call(arguments, 0);
				window.clearTimeout(timer);
				timer = window.setTimeout(function () {
					window.requestAnimationFrame && window.requestAnimationFrame(function() {
						fn.apply(null, args);
					}) || fn.apply(null, args);
				}, time)
			};
			return func;
		}
	}());

	var throttle = (function() {
		return function (fn, threshhold, scope) {
			threshhold || (threshhold = 250);
			var last,
				deferTimer,
				func;
			func = function () {
				var context = scope || this;
				var now = +new Date,
					args = arguments;
				if (last && now < last + threshhold) {
					// hold on to it
					clearTimeout(deferTimer);
					deferTimer = setTimeout(function () {
						last = now;
						fn.apply(context, args);
					}, threshhold);
				} else {
					last = now;
					fn.apply(context, args);
				}
			};
			return func;
		}
	}());

	$('.blocklist').each(function() {
		var $blocklist = $(this),
			$items = $blocklist.find('.item-outer'),
			$list = $blocklist.find('.list'),
			$body = $blocklist.find('.body'),
			$controls = $blocklist.find('.controls'),
			$pagers = $blocklist.find('.pager-wrap'),
			options = {},
			count,
			col_arr, pager_arr, controls_arr,
			bxslider,
			containerWidth,
			isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

		if ($blocklist.attr('data-slider') === '1' && $.fn.bxSlider) {

			options.pagerSelector= $blocklist.attr('data-setting-pager_selector');
			options.prevSelector = $blocklist.attr('data-setting-prev_selector');
			options.nextSelector = $blocklist.attr('data-setting-next_selector');
			options.prevText = $blocklist.attr('data-setting-prev_text') || '';
			options.nextText = $blocklist.attr('data-setting-next_text') || '';
			options.auto = !!parseInt($blocklist.attr('data-setting-auto'));
			options.controls = !!parseInt($blocklist.attr('data-setting-controls'));
			options.pager = !!parseInt($blocklist.attr('data-setting-pager').split(',')[0]);
			options.pause = parseInt($blocklist.attr('data-setting-pause'), 10) || 4000;
			options.useCSS = isMobile;
			options.infiniteLoop = true;
			options.adaptiveHeight = false;
			options.mode = $blocklist.attr('data-setting-mode') || 'horizontal';
			options.touchEnabled = options.mode === 'horizontal';
			options.slideMargin = 0;
			options.maxSlides = parseInt($blocklist.attr('data-setting-count'), 10) || 1;
			options.minSlides = options.mode === 'horizontal' ? 1 : options.maxSlides;
			options.moveSlides = $blocklist.attr('data-setting-move') || 0;

			col_arr = $blocklist.attr('data-setting-columns').split(",");
			pager_arr = $blocklist.attr('data-setting-pager').split(",");
			controls_arr = $blocklist.attr('data-setting-controls').split(",");

			if (!options.autoControls && options.auto) {
				options.onSlideAfter = function() {
					bxslider.startAuto();
				}
			}

			$items.removeClass('hidden');
			if ($list.parent().hasClass('bx-viewport')) {
				$list.unwrap();
				$list.unwrap();
			}

			function init(force) {
				var media_type,
					body_width = $('body').width();

				var mediaList = ["screen", "tablet_landscape", "tablet_portrait", "mobile_landscape", "mobile_portrait"];
				var media_ind, setting_columns,
					isJustify, space_between;

				var newContainerWidth = $blocklist.width(), itemHeight, viewportHeight;
				if (!$blocklist.is(':visible')) {
					if (bxslider) {
						bxslider.destroySlider();
					}
					return;
				}
				if (!force && containerWidth && containerWidth === newContainerWidth) {
					return;
				}
				containerWidth = newContainerWidth;

				if (bxslider) {
					bxslider.destroySlider();
				}

				if (body_width >= 961) {
					media_type = "screen";
				} else if (body_width <= 960 && body_width >= 769) {
					media_type = "tablet_landscape";
				} else if (body_width <= 768 && body_width >= 641) {
					media_type = "tablet_portrait";
				} else if (body_width <= 640 && body_width >= 481) {
					media_type = "mobile_landscape";
				} else if (body_width <= 480) {
					media_type = "mobile_portrait";
				}
				media_ind = mediaList.indexOf(media_type);
				count = parseInt($blocklist.attr('data-setting-count'), 10);

				isJustify = $body.css('justify-content') == "space-between" ? true : false;

				$list.width('auto');
				$items
					.attr('style', '')
					.slice(1).addClass('hidden').end()
					.width(options.slideWidth = $items.width())
					.removeClass('hidden');

				if (pager_arr.length > 1) {
					options.pager = pager_arr[0] == false ? false : !!parseInt(pager_arr[media_ind]);
				}
				if (controls_arr.length > 1) {
					options.controls = controls_arr[0] == false ? false : !!parseInt(controls_arr[media_ind]);
				}

				$(options.pagerSelector).css({"display": options.pager == true ? "flex" : "none"});
				$blocklist.find(".controls").css({"display": options.controls == true ? "flex" : "none"});

				if (options.mode === 'vertical') {
					itemHeight = Math.max.apply(Math, $items.map(function() {
						return $(this).height()
					}).get());
					$items.css('min-height', itemHeight);
					viewportHeight = itemHeight * count;
				} else {
					setting_columns = col_arr[media_ind] == "auto" ? false : parseInt(col_arr[media_ind]);
					if (setting_columns) {
						count = setting_columns;
					}
					options.maxSlides = Math.min(count, Math.ceil($items.parent().width() / $items.width()));
				}

				if (isJustify) {
					if (options.maxSlides > 1) {
						space_between = Math.floor(($body.width() - $items.width() * options.maxSlides)/ (options.maxSlides-1));
						space_between = space_between < 0 ? 0 : space_between;
					} else {
						space_between = 0;
					}
					options.slideMargin = space_between;
				}

				if ($items.length > options.maxSlides) {
					$list.css({'justify-content': 'flex-start'});
					if (bxslider) {
						bxslider.reloadSlider(options);
					} else {
						$list.data('bxslider', (bxslider = $list.bxSlider(options)));
					}
				} else {
					$list.css({'justify-content': isJustify ? 'space-between' : 'inherit', 'flex-wrap': 'nowrap'});
					$pagers.hide();
					$controls.hide();
				}

				if (viewportHeight) {
					$list.parent().css('min-height', viewportHeight);
				}
				if (options.mode === 'horizontal') {
					var align = {};
					switch ($body.css('justify-content')) {
						case 'flex-end':
							align['margin-left'] = 'auto';
							align['margin-right'] = '0px';
							break;
						case 'center':
							align['margin-left'] = 'auto';
							align['margin-right'] = 'auto';
							break;
						default:
							align['margin-left'] = '0px';
							align['margin-right'] = 'auto';
					}
					$blocklist.find('.bx-wrapper').css(align);
				}
			}

			$(window).on('resize', debounce(init, 300));
			$(window).on('load', function(){
				init(true);
			});

			init();
		}

		$(window).on('resize', debounce(swipeScrollInit, 300));
		swipeScrollInit();

		function swipeScrollInit() {
			var $shadowLeft = $blocklist.find(".swipe-shadow-left");
			var $shadowRight = $blocklist.find(".swipe-shadow-right");
			if ($list.css("overflow-x") == "auto") {
				var scroll_width = $list.get(0).scrollWidth;
				var view_width = $list.width();
				$shadowLeft.css("pointer-events","none");
				$shadowRight.css("pointer-events","none");

				$list.off('scroll');
				$list.on('scroll', throttle(swipeScrollCheack, 200));

				swipeScrollCheack();

				function swipeScrollCheack() {
					var scroll_left = $list.scrollLeft();

					if (scroll_left > 0) {
						$shadowLeft.show();
					} else {
						$shadowLeft.hide();
					}

					if (scroll_left + view_width >= scroll_width - 1) {
						$shadowRight.hide();
					} else {
						$shadowRight.show();
					}
				}
			} else {
				$shadowLeft.hide();
				$shadowRight.hide();
			}
		}

	});
});
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="'+o.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing");f();o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:v()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return void i();var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",V),o.settings.auto&&o.settings.autoStart&&(x()>1||o.settings.autoSlideForOnePage)&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&N()},p=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(i){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"==o.viewport.css("box-sizing")?e+=parseFloat(o.viewport.css("padding-top"))+parseFloat(o.viewport.css("padding-bottom"))+parseFloat(o.viewport.css("border-top-width"))+parseFloat(o.viewport.css("border-bottom-width")):"padding-box"==o.viewport.css("box-sizing")&&(e+=parseFloat(o.viewport.css("padding-top"))+parseFloat(o.viewport.css("padding-bottom"))),e},v=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width()+o.settings.slideMargin;t=Math.floor((o.viewport.width()+o.settings.slideMargin)/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=Math.ceil(o.children.length/m());else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.outerWidth())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),F()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),F()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",z),o.controls.prev.bind("click",y),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",M),o.controls.autoEl.on("click",".bx-stop",k),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!=i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},z=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},y=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},M=function(t){r.startAuto(),t.preventDefault()},k=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget);if(void 0!==i.attr("data-slide-index")){var s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()}},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),void o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i)):(o.pagerEl.find("a").removeClass("active"),void o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}))},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){if(o.settings.autoDelay>0){setTimeout(r.startAuto,o.settings.autoDelay)}else r.startAuto();o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(i){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));F(n)}),F()},F=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},N=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",O)},O=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",X),o.viewport.bind("touchend",Y)}},X=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},Y=function(t){o.viewport.unbind("touchmove",X);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",Y)},V=function(e){if(o.initialized){var i=t(window).width(),s=t(window).height();(a!=i||l!=s)&&(a=i,l=s,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))}};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,0>e?o.active.index=x()-1:e>=x()?o.active.index=0:o.active.index=e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).width(u()),o.viewport.css("height",p()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",V))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
$(function() {

	var debounce = (function () {
		return function (fn, time) {
			var timer, func;
			func = function() {
				var args = [].slice.call(arguments, 0);
				window.clearTimeout(timer);
				timer = window.setTimeout(function () {
					window.requestAnimationFrame && window.requestAnimationFrame(function() {
						fn.apply(null, args);
					}) || fn.apply(null, args);
				}, time)
			};
			return func;
		}
	}());

	var throttle = (function() {
		return function (fn, threshhold, scope) {
			threshhold || (threshhold = 250);
			var last,
				deferTimer,
				func;
			func = function () {
				var context = scope || this;
				var now = +new Date,
					args = arguments;
				if (last && now < last + threshhold) {
					// hold on to it
					clearTimeout(deferTimer);
					deferTimer = setTimeout(function () {
						last = now;
						fn.apply(context, args);
					}, threshhold);
				} else {
					last = now;
					fn.apply(context, args);
				}
			};
			return func;
		}
	}());

	$('.bx-reviews').each(function() {
		var $reviews = $(this),
			$items = $reviews.find('.item-outer'),
			$list = $reviews.find('.list'),
			$body = $reviews.find('.body'),
			$controls = $reviews.find('.controls'),
			$pagers = $reviews.find('.pager-wrap'),
			options = {},
			count,
			col_arr, pager_arr, controls_arr,
			bxslider,
			containerWidth,
			isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

		if ($reviews.attr('data-slider') === '1' && $.fn.bxSlider) {

			options.pagerSelector= $reviews.attr('data-setting-pager_selector');
			options.prevSelector = $reviews.attr('data-setting-prev_selector');
			options.nextSelector = $reviews.attr('data-setting-next_selector');
			options.prevText = $reviews.attr('data-setting-prev_text') || '';
			options.nextText = $reviews.attr('data-setting-next_text') || '';
			options.auto = !!parseInt($reviews.attr('data-setting-auto'));
			options.controls = !!parseInt($reviews.attr('data-setting-controls'));
			options.pager = !!parseInt($reviews.attr('data-setting-pager').split(',')[0]);
			options.pause = parseInt($reviews.attr('data-setting-pause'), 10) || 4000;
			options.useCSS = isMobile;
			options.infiniteLoop = true;
			options.adaptiveHeight = false;
			options.mode = $reviews.attr('data-setting-mode') || 'horizontal';
			options.touchEnabled = options.mode === 'horizontal';
			options.slideMargin = 0;
			options.maxSlides = parseInt($reviews.attr('data-setting-count'), 10) || 1;
			options.minSlides = options.mode === 'horizontal' ? 1 : options.maxSlides;
			options.moveSlides = $reviews.attr('data-setting-move') || 0;

			col_arr = $reviews.attr('data-setting-columns').split(",");
			pager_arr = $reviews.attr('data-setting-pager').split(",");
			controls_arr = $reviews.attr('data-setting-controls').split(",");

			if (!options.autoControls && options.auto) {
				options.onSlideAfter = function() {
					bxslider.startAuto();
				}
			}

			$items.removeClass('hidden');
			if ($list.parent().hasClass('bx-viewport')) {
				$list.unwrap();
				$list.unwrap();
			}

			function init(force) {
				var media_type,
					body_width = $('body').width();

				var mediaList = ["screen", "tablet_landscape", "tablet_portrait", "mobile_landscape", "mobile_portrait"];
				var media_ind, setting_columns,
					isJustify, space_between;

				var newContainerWidth = $reviews.width(), itemHeight, viewportHeight;
				if (!$reviews.is(':visible')) {
					if (bxslider) {
						bxslider.destroySlider();
					}
					return;
				}
				if (!force && containerWidth && containerWidth === newContainerWidth) {
					return;
				}
				containerWidth = newContainerWidth;

				if (bxslider) {
					bxslider.destroySlider();
				}

				if (body_width >= 961) {
					media_type = "screen";
				} else if (body_width <= 960 && body_width >= 769) {
					media_type = "tablet_landscape";
				} else if (body_width <= 768 && body_width >= 641) {
					media_type = "tablet_portrait";
				} else if (body_width <= 640 && body_width >= 481) {
					media_type = "mobile_landscape";
				} else if (body_width <= 480) {
					media_type = "mobile_portrait";
				}
				media_ind = mediaList.indexOf(media_type);
				count = parseInt($reviews.attr('data-setting-count'), 10);

				isJustify = $body.css('justify-content') == "space-between" ? true : false;

				$list.width('auto');
				$items
					.attr('style', '')
					.slice(1).addClass('hidden').end()
					.width(options.slideWidth = $items.width())
					.removeClass('hidden');

				if (pager_arr.length > 1) {
					options.pager = pager_arr[0] == false ? false : !!parseInt(pager_arr[media_ind]);
				}
				if (controls_arr.length > 1) {
					options.controls = controls_arr[0] == false ? false : !!parseInt(controls_arr[media_ind]);
				}

				$(options.pagerSelector).css({"display": options.pager == true ? "flex" : "none"});
				$reviews.find(".controls").css({"display": options.controls == true ? "flex" : "none"});

				if (options.mode === 'vertical') {
					itemHeight = Math.max.apply(Math, $items.map(function() {
						return $(this).height()
					}).get());
					$items.css('min-height', itemHeight);
					viewportHeight = itemHeight * count;
				} else {
					setting_columns = col_arr[media_ind] == "auto" ? false : parseInt(col_arr[media_ind]);
					if (setting_columns) {
						count = setting_columns;
					}
					options.maxSlides = Math.min(count, Math.ceil($items.parent().width() / $items.width()));
				}

				if (isJustify) {
					if (options.maxSlides > 1) {
						space_between = Math.floor(($body.width() - $items.width() * options.maxSlides)/ (options.maxSlides-1));
						space_between = space_between < 0 ? 0 : space_between;
					} else {
						space_between = 0;
					}
					options.slideMargin = space_between;
				}

				if ($items.length > options.maxSlides) {
					$list.css({'justify-content': 'flex-start'});
					if (bxslider) {
						bxslider.reloadSlider(options);
					} else {
						$list.data('bxslider', (bxslider = $list.bxSlider(options)));
					}
				} else {
					$list.css({'justify-content': isJustify ? 'space-between' : 'inherit', 'flex-wrap': 'nowrap'});
					$pagers.hide();
					$controls.hide();
				}

				if (viewportHeight) {
					$list.parent().css('min-height', viewportHeight);
				}
				if (options.mode === 'horizontal') {
					var align = {};
					switch ($body.css('justify-content')) {
						case 'flex-end':
							align['margin-left'] = 'auto';
							align['margin-right'] = '0px';
							break;
						case 'center':
							align['margin-left'] = 'auto';
							align['margin-right'] = 'auto';
							break;
						default:
							align['margin-left'] = '0px';
							align['margin-right'] = 'auto';
					}
					$reviews.find('.bx-wrapper').css(align);
				}
			}

			$(window).on('resize', debounce(init, 300));
			$(window).on('load', function(){
				init(true);
			});

			init();
		}

		$(window).on('resize', debounce(swipeScrollInit, 300));
		swipeScrollInit();

		function swipeScrollInit() {
			var $shadowLeft = $reviews.find(".swipe-shadow-left");
			var $shadowRight = $reviews.find(".swipe-shadow-right");
			if ($list.css("overflow-x") == "auto") {
				var scroll_width = $list.get(0).scrollWidth;
				var view_width = $list.width();
				$shadowLeft.css("pointer-events","none");
				$shadowRight.css("pointer-events","none");

				$list.off('scroll');
				$list.on('scroll', throttle(swipeScrollCheack, 200));

				swipeScrollCheack();

				function swipeScrollCheack() {
					var scroll_left = $list.scrollLeft();

					if (scroll_left > 0) {
						$shadowLeft.show();
					} else {
						$shadowLeft.hide();
					}

					if (scroll_left + view_width >= scroll_width - 1) {
						$shadowRight.hide();
					} else {
						$shadowRight.show();
					}
				}
			} else {
				$shadowLeft.hide();
				$shadowRight.hide();
			}
		}

	});
});
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
!function(t){var e={},s={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,onSliderLoad:function(){},onSlideBefore:function(){},onSlideAfter:function(){},onSlideNext:function(){},onSlidePrev:function(){},onSliderResize:function(){}};t.fn.bxSlider=function(n){if(0==this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var o={},r=this;e.el=this;var a=t(window).width(),l=t(window).height(),d=function(){o.settings=t.extend({},s,n),o.settings.slideWidth=parseInt(o.settings.slideWidth),o.children=r.children(o.settings.slideSelector),o.children.length<o.settings.minSlides&&(o.settings.minSlides=o.children.length),o.children.length<o.settings.maxSlides&&(o.settings.maxSlides=o.children.length),o.settings.randomStart&&(o.settings.startSlide=Math.floor(Math.random()*o.children.length)),o.active={index:o.settings.startSlide},o.carousel=o.settings.minSlides>1||o.settings.maxSlides>1,o.carousel&&(o.settings.preloadImages="all"),o.minThreshold=o.settings.minSlides*o.settings.slideWidth+(o.settings.minSlides-1)*o.settings.slideMargin,o.maxThreshold=o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin,o.working=!1,o.controls={},o.interval=null,o.animProp="vertical"==o.settings.mode?"top":"left",o.usingCSS=o.settings.useCSS&&"fade"!=o.settings.mode&&function(){var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var i in e)if(void 0!==t.style[e[i]])return o.cssPrefix=e[i].replace("Perspective","").toLowerCase(),o.animProp="-"+o.cssPrefix+"-transform",!0;return!1}(),"vertical"==o.settings.mode&&(o.settings.maxSlides=o.settings.minSlides),r.data("origStyle",r.attr("style")),r.children(o.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),c()},c=function(){r.wrap('<div class="'+o.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),o.viewport=r.parent(),o.loader=t('<div class="bx-loading" />'),o.viewport.prepend(o.loader),r.css({width:"horizontal"==o.settings.mode?100*o.children.length+215+"%":"auto",position:"relative"}),o.usingCSS&&o.settings.easing?r.css("-"+o.cssPrefix+"-transition-timing-function",o.settings.easing):o.settings.easing||(o.settings.easing="swing");f();o.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),o.viewport.parent().css({maxWidth:v()}),o.settings.pager||o.viewport.parent().css({margin:"0 auto 0px"}),o.children.css({"float":"horizontal"==o.settings.mode?"left":"none",listStyle:"none",position:"relative"}),o.children.css("width",u()),"horizontal"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginRight",o.settings.slideMargin),"vertical"==o.settings.mode&&o.settings.slideMargin>0&&o.children.css("marginBottom",o.settings.slideMargin),"fade"==o.settings.mode&&(o.children.css({position:"absolute",zIndex:0,display:"none"}),o.children.eq(o.settings.startSlide).css({zIndex:o.settings.slideZIndex,display:"block"})),o.controls.el=t('<div class="bx-controls" />'),o.settings.captions&&P(),o.active.last=o.settings.startSlide==x()-1,o.settings.video&&r.fitVids();var e=o.children.eq(o.settings.startSlide);"all"==o.settings.preloadImages&&(e=o.children),o.settings.ticker?o.settings.pager=!1:(o.settings.pager&&T(),o.settings.controls&&C(),o.settings.auto&&o.settings.autoControls&&E(),(o.settings.controls||o.settings.autoControls||o.settings.pager)&&o.viewport.after(o.controls.el)),g(e,h)},g=function(e,i){var s=e.find("img, iframe").length;if(0==s)return void i();var n=0;e.find("img, iframe").each(function(){t(this).one("load",function(){++n==s&&i()}).each(function(){this.complete&&t(this).load()})})},h=function(){if(o.settings.infiniteLoop&&"fade"!=o.settings.mode&&!o.settings.ticker){var e="vertical"==o.settings.mode?o.settings.minSlides:o.settings.maxSlides,i=o.children.slice(0,e).clone().addClass("bx-clone"),s=o.children.slice(-e).clone().addClass("bx-clone");r.append(i).prepend(s)}o.loader.remove(),S(),"vertical"==o.settings.mode&&(o.settings.adaptiveHeight=!0),o.viewport.height(p()),r.redrawSlider(),o.settings.onSliderLoad(o.active.index),o.initialized=!0,o.settings.responsive&&t(window).bind("resize",V),o.settings.auto&&o.settings.autoStart&&(x()>1||o.settings.autoSlideForOnePage)&&H(),o.settings.ticker&&L(),o.settings.pager&&q(o.settings.startSlide),o.settings.controls&&W(),o.settings.touchEnabled&&!o.settings.ticker&&N()},p=function(){var e=0,s=t();if("vertical"==o.settings.mode||o.settings.adaptiveHeight)if(o.carousel){var n=1==o.settings.moveSlides?o.active.index:o.active.index*m();for(s=o.children.eq(n),i=1;i<=o.settings.maxSlides-1;i++)s=n+i>=o.children.length?s.add(o.children.eq(i-1)):s.add(o.children.eq(n+i))}else s=o.children.eq(o.active.index);else s=o.children;return"vertical"==o.settings.mode?(s.each(function(i){e+=t(this).outerHeight()}),o.settings.slideMargin>0&&(e+=o.settings.slideMargin*(o.settings.minSlides-1))):e=Math.max.apply(Math,s.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"==o.viewport.css("box-sizing")?e+=parseFloat(o.viewport.css("padding-top"))+parseFloat(o.viewport.css("padding-bottom"))+parseFloat(o.viewport.css("border-top-width"))+parseFloat(o.viewport.css("border-bottom-width")):"padding-box"==o.viewport.css("box-sizing")&&(e+=parseFloat(o.viewport.css("padding-top"))+parseFloat(o.viewport.css("padding-bottom"))),e},v=function(){var t="100%";return o.settings.slideWidth>0&&(t="horizontal"==o.settings.mode?o.settings.maxSlides*o.settings.slideWidth+(o.settings.maxSlides-1)*o.settings.slideMargin:o.settings.slideWidth),t},u=function(){var t=o.settings.slideWidth,e=o.viewport.width();return 0==o.settings.slideWidth||o.settings.slideWidth>e&&!o.carousel||"vertical"==o.settings.mode?t=e:o.settings.maxSlides>1&&"horizontal"==o.settings.mode&&(e>o.maxThreshold||e<o.minThreshold&&(t=(e-o.settings.slideMargin*(o.settings.minSlides-1))/o.settings.minSlides)),t},f=function(){var t=1;if("horizontal"==o.settings.mode&&o.settings.slideWidth>0)if(o.viewport.width()<o.minThreshold)t=o.settings.minSlides;else if(o.viewport.width()>o.maxThreshold)t=o.settings.maxSlides;else{var e=o.children.first().width()+o.settings.slideMargin;t=Math.floor((o.viewport.width()+o.settings.slideMargin)/e)}else"vertical"==o.settings.mode&&(t=o.settings.minSlides);return t},x=function(){var t=0;if(o.settings.moveSlides>0)if(o.settings.infiniteLoop)t=Math.ceil(o.children.length/m());else for(var e=0,i=0;e<o.children.length;)++t,e=i+f(),i+=o.settings.moveSlides<=f()?o.settings.moveSlides:f();else t=Math.ceil(o.children.length/f());return t},m=function(){return o.settings.moveSlides>0&&o.settings.moveSlides<=f()?o.settings.moveSlides:f()},S=function(){if(o.children.length>o.settings.maxSlides&&o.active.last&&!o.settings.infiniteLoop){if("horizontal"==o.settings.mode){var t=o.children.last(),e=t.position();b(-(e.left-(o.viewport.width()-t.outerWidth())),"reset",0)}else if("vertical"==o.settings.mode){var i=o.children.length-o.settings.minSlides,e=o.children.eq(i).position();b(-e.top,"reset",0)}}else{var e=o.children.eq(o.active.index*m()).position();o.active.index==x()-1&&(o.active.last=!0),void 0!=e&&("horizontal"==o.settings.mode?b(-e.left,"reset",0):"vertical"==o.settings.mode&&b(-e.top,"reset",0))}},b=function(t,e,i,s){if(o.usingCSS){var n="vertical"==o.settings.mode?"translate3d(0, "+t+"px, 0)":"translate3d("+t+"px, 0, 0)";r.css("-"+o.cssPrefix+"-transition-duration",i/1e3+"s"),"slide"==e?(r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),D()})):"reset"==e?r.css(o.animProp,n):"ticker"==e&&(r.css("-"+o.cssPrefix+"-transition-timing-function","linear"),r.css(o.animProp,n),r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),b(s.resetValue,"reset",0),F()}))}else{var a={};a[o.animProp]=t,"slide"==e?r.animate(a,i,o.settings.easing,function(){D()}):"reset"==e?r.css(o.animProp,t):"ticker"==e&&r.animate(a,speed,"linear",function(){b(s.resetValue,"reset",0),F()})}},w=function(){for(var e="",i=x(),s=0;i>s;s++){var n="";o.settings.buildPager&&t.isFunction(o.settings.buildPager)?(n=o.settings.buildPager(s),o.pagerEl.addClass("bx-custom-pager")):(n=s+1,o.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+s+'" class="bx-pager-link">'+n+"</a></div>"}o.pagerEl.html(e)},T=function(){o.settings.pagerCustom?o.pagerEl=t(o.settings.pagerCustom):(o.pagerEl=t('<div class="bx-pager" />'),o.settings.pagerSelector?t(o.settings.pagerSelector).html(o.pagerEl):o.controls.el.addClass("bx-has-pager").append(o.pagerEl),w()),o.pagerEl.on("click","a",I)},C=function(){o.controls.next=t('<a class="bx-next" href="">'+o.settings.nextText+"</a>"),o.controls.prev=t('<a class="bx-prev" href="">'+o.settings.prevText+"</a>"),o.controls.next.bind("click",z),o.controls.prev.bind("click",y),o.settings.nextSelector&&t(o.settings.nextSelector).append(o.controls.next),o.settings.prevSelector&&t(o.settings.prevSelector).append(o.controls.prev),o.settings.nextSelector||o.settings.prevSelector||(o.controls.directionEl=t('<div class="bx-controls-direction" />'),o.controls.directionEl.append(o.controls.prev).append(o.controls.next),o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))},E=function(){o.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+o.settings.startText+"</a></div>"),o.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+o.settings.stopText+"</a></div>"),o.controls.autoEl=t('<div class="bx-controls-auto" />'),o.controls.autoEl.on("click",".bx-start",M),o.controls.autoEl.on("click",".bx-stop",k),o.settings.autoControlsCombine?o.controls.autoEl.append(o.controls.start):o.controls.autoEl.append(o.controls.start).append(o.controls.stop),o.settings.autoControlsSelector?t(o.settings.autoControlsSelector).html(o.controls.autoEl):o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl),A(o.settings.autoStart?"stop":"start")},P=function(){o.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!=i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},z=function(t){o.settings.auto&&r.stopAuto(),r.goToNextSlide(),t.preventDefault()},y=function(t){o.settings.auto&&r.stopAuto(),r.goToPrevSlide(),t.preventDefault()},M=function(t){r.startAuto(),t.preventDefault()},k=function(t){r.stopAuto(),t.preventDefault()},I=function(e){o.settings.auto&&r.stopAuto();var i=t(e.currentTarget);if(void 0!==i.attr("data-slide-index")){var s=parseInt(i.attr("data-slide-index"));s!=o.active.index&&r.goToSlide(s),e.preventDefault()}},q=function(e){var i=o.children.length;return"short"==o.settings.pagerType?(o.settings.maxSlides>1&&(i=Math.ceil(o.children.length/o.settings.maxSlides)),void o.pagerEl.html(e+1+o.settings.pagerShortSeparator+i)):(o.pagerEl.find("a").removeClass("active"),void o.pagerEl.each(function(i,s){t(s).find("a").eq(e).addClass("active")}))},D=function(){if(o.settings.infiniteLoop){var t="";0==o.active.index?t=o.children.eq(0).position():o.active.index==x()-1&&o.carousel?t=o.children.eq((x()-1)*m()).position():o.active.index==o.children.length-1&&(t=o.children.eq(o.children.length-1).position()),t&&("horizontal"==o.settings.mode?b(-t.left,"reset",0):"vertical"==o.settings.mode&&b(-t.top,"reset",0))}o.working=!1,o.settings.onSlideAfter(o.children.eq(o.active.index),o.oldIndex,o.active.index)},A=function(t){o.settings.autoControlsCombine?o.controls.autoEl.html(o.controls[t]):(o.controls.autoEl.find("a").removeClass("active"),o.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},W=function(){1==x()?(o.controls.prev.addClass("disabled"),o.controls.next.addClass("disabled")):!o.settings.infiniteLoop&&o.settings.hideControlOnEnd&&(0==o.active.index?(o.controls.prev.addClass("disabled"),o.controls.next.removeClass("disabled")):o.active.index==x()-1?(o.controls.next.addClass("disabled"),o.controls.prev.removeClass("disabled")):(o.controls.prev.removeClass("disabled"),o.controls.next.removeClass("disabled")))},H=function(){if(o.settings.autoDelay>0){setTimeout(r.startAuto,o.settings.autoDelay)}else r.startAuto();o.settings.autoHover&&r.hover(function(){o.interval&&(r.stopAuto(!0),o.autoPaused=!0)},function(){o.autoPaused&&(r.startAuto(!0),o.autoPaused=null)})},L=function(){var e=0;if("next"==o.settings.autoDirection)r.append(o.children.clone().addClass("bx-clone"));else{r.prepend(o.children.clone().addClass("bx-clone"));var i=o.children.first().position();e="horizontal"==o.settings.mode?-i.left:-i.top}b(e,"reset",0),o.settings.pager=!1,o.settings.controls=!1,o.settings.autoControls=!1,o.settings.tickerHover&&!o.usingCSS&&o.viewport.hover(function(){r.stop()},function(){var e=0;o.children.each(function(i){e+="horizontal"==o.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)});var i=o.settings.speed/e,s="horizontal"==o.settings.mode?"left":"top",n=i*(e-Math.abs(parseInt(r.css(s))));F(n)}),F()},F=function(t){speed=t?t:o.settings.speed;var e={left:0,top:0},i={left:0,top:0};"next"==o.settings.autoDirection?e=r.find(".bx-clone").first().position():i=o.children.first().position();var s="horizontal"==o.settings.mode?-e.left:-e.top,n="horizontal"==o.settings.mode?-i.left:-i.top,a={resetValue:n};b(s,"ticker",speed,a)},N=function(){o.touch={start:{x:0,y:0},end:{x:0,y:0}},o.viewport.bind("touchstart",O)},O=function(t){if(o.working)t.preventDefault();else{o.touch.originalPos=r.position();var e=t.originalEvent;o.touch.start.x=e.changedTouches[0].pageX,o.touch.start.y=e.changedTouches[0].pageY,o.viewport.bind("touchmove",X),o.viewport.bind("touchend",Y)}},X=function(t){var e=t.originalEvent,i=Math.abs(e.changedTouches[0].pageX-o.touch.start.x),s=Math.abs(e.changedTouches[0].pageY-o.touch.start.y);if(3*i>s&&o.settings.preventDefaultSwipeX?t.preventDefault():3*s>i&&o.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!=o.settings.mode&&o.settings.oneToOneTouch){var n=0;if("horizontal"==o.settings.mode){var r=e.changedTouches[0].pageX-o.touch.start.x;n=o.touch.originalPos.left+r}else{var r=e.changedTouches[0].pageY-o.touch.start.y;n=o.touch.originalPos.top+r}b(n,"reset",0)}},Y=function(t){o.viewport.unbind("touchmove",X);var e=t.originalEvent,i=0;if(o.touch.end.x=e.changedTouches[0].pageX,o.touch.end.y=e.changedTouches[0].pageY,"fade"==o.settings.mode){var s=Math.abs(o.touch.start.x-o.touch.end.x);s>=o.settings.swipeThreshold&&(o.touch.start.x>o.touch.end.x?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto())}else{var s=0;"horizontal"==o.settings.mode?(s=o.touch.end.x-o.touch.start.x,i=o.touch.originalPos.left):(s=o.touch.end.y-o.touch.start.y,i=o.touch.originalPos.top),!o.settings.infiniteLoop&&(0==o.active.index&&s>0||o.active.last&&0>s)?b(i,"reset",200):Math.abs(s)>=o.settings.swipeThreshold?(0>s?r.goToNextSlide():r.goToPrevSlide(),r.stopAuto()):b(i,"reset",200)}o.viewport.unbind("touchend",Y)},V=function(e){if(o.initialized){var i=t(window).width(),s=t(window).height();(a!=i||l!=s)&&(a=i,l=s,r.redrawSlider(),o.settings.onSliderResize.call(r,o.active.index))}};return r.goToSlide=function(e,i){if(!o.working&&o.active.index!=e)if(o.working=!0,o.oldIndex=o.active.index,0>e?o.active.index=x()-1:e>=x()?o.active.index=0:o.active.index=e,o.settings.onSlideBefore(o.children.eq(o.active.index),o.oldIndex,o.active.index),"next"==i?o.settings.onSlideNext(o.children.eq(o.active.index),o.oldIndex,o.active.index):"prev"==i&&o.settings.onSlidePrev(o.children.eq(o.active.index),o.oldIndex,o.active.index),o.active.last=o.active.index>=x()-1,o.settings.pager&&q(o.active.index),o.settings.controls&&W(),"fade"==o.settings.mode)o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed),o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex:0}),o.children.eq(o.active.index).css("zIndex",o.settings.slideZIndex+1).fadeIn(o.settings.speed,function(){t(this).css("zIndex",o.settings.slideZIndex),D()});else{o.settings.adaptiveHeight&&o.viewport.height()!=p()&&o.viewport.animate({height:p()},o.settings.adaptiveHeightSpeed);var s=0,n={left:0,top:0};if(!o.settings.infiniteLoop&&o.carousel&&o.active.last)if("horizontal"==o.settings.mode){var a=o.children.eq(o.children.length-1);n=a.position(),s=o.viewport.width()-a.outerWidth()}else{var l=o.children.length-o.settings.minSlides;n=o.children.eq(l).position()}else if(o.carousel&&o.active.last&&"prev"==i){var d=1==o.settings.moveSlides?o.settings.maxSlides-m():(x()-1)*m()-(o.children.length-o.settings.maxSlides),a=r.children(".bx-clone").eq(d);n=a.position()}else if("next"==i&&0==o.active.index)n=r.find("> .bx-clone").eq(o.settings.maxSlides).position(),o.active.last=!1;else if(e>=0){var c=e*m();n=o.children.eq(c).position()}if("undefined"!=typeof n){var g="horizontal"==o.settings.mode?-(n.left-s):-n.top;b(g,"slide",o.settings.speed)}}},r.goToNextSlide=function(){if(o.settings.infiniteLoop||!o.active.last){var t=parseInt(o.active.index)+1;r.goToSlide(t,"next")}},r.goToPrevSlide=function(){if(o.settings.infiniteLoop||0!=o.active.index){var t=parseInt(o.active.index)-1;r.goToSlide(t,"prev")}},r.startAuto=function(t){o.interval||(o.interval=setInterval(function(){"next"==o.settings.autoDirection?r.goToNextSlide():r.goToPrevSlide()},o.settings.pause),o.settings.autoControls&&1!=t&&A("stop"))},r.stopAuto=function(t){o.interval&&(clearInterval(o.interval),o.interval=null,o.settings.autoControls&&1!=t&&A("start"))},r.getCurrentSlide=function(){return o.active.index},r.getCurrentSlideElement=function(){return o.children.eq(o.active.index)},r.getSlideCount=function(){return o.children.length},r.redrawSlider=function(){o.children.add(r.find(".bx-clone")).width(u()),o.viewport.css("height",p()),o.settings.ticker||S(),o.active.last&&(o.active.index=x()-1),o.active.index>=x()&&(o.active.last=!0),o.settings.pager&&!o.settings.pagerCustom&&(w(),q(o.active.index))},r.destroySlider=function(){o.initialized&&(o.initialized=!1,t(".bx-clone",this).remove(),o.children.each(function(){void 0!=t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!=t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),o.controls.el&&o.controls.el.remove(),o.controls.next&&o.controls.next.remove(),o.controls.prev&&o.controls.prev.remove(),o.pagerEl&&o.settings.controls&&o.pagerEl.remove(),t(".bx-caption",this).remove(),o.controls.autoEl&&o.controls.autoEl.remove(),clearInterval(o.interval),o.settings.responsive&&t(window).unbind("resize",V))},r.reloadSlider=function(t){void 0!=t&&(n=t),r.destroySlider(),d()},d(),this}}(jQuery);
document.addEventListener('DOMContentLoaded', function() {
	var bodyScrollBarWidth = (function () {
		var widthHidden, widthScroll, currentValue, currentPriority;
		currentValue = document.body.style.getPropertyValue('overflow');
		currentPriority = document.body.style.getPropertyPriority('overflow');
		document.body.style.setProperty('overflow', 'hidden', 'important');
		widthHidden = document.body.clientWidth;
		document.body.style.setProperty('overflow', 'scroll', 'important');
		widthScroll = document.body.clientWidth;
		document.body.style.setProperty('overflow', currentValue ? currentValue : '', currentPriority);
		return widthHidden - widthScroll;
	}());
	var media = {
		'tablet-landscape': 960,
		'tablet-portrait': 768,
		'mobile-landscape': 640,
		'mobile-portrait': 480
	};
	var side_panel = document.querySelector('.side-panel');
	var side_panel_content, side_panel_content_inner, side_panel_top, side_panel_mask, side_panel_button, side_panel_close, side_panel_controller, leftEdge, rightEdge;
	var layers, elements = {}, comments = {};

	if (!side_panel || side_panel.classList.contains('removed')) {
		return;
	}

	try {
		layers =  JSON.parse(side_panel.getAttribute('data-layers').replace(/\[/g, '{').replace(/\]/g, '}').replace(/\'/g, '"'));
	} catch(e) {
		console.error(e);
	}

	if (typeof layers !== 'object' || Object.keys(layers).length === 0) {
		return;
	}

	Object.keys(layers).forEach(function(clss) {
		elements[clss] = document.querySelector('.' + clss);
		comments[clss] = document.createComment(clss);
		if (elements[clss]) {
			elements[clss].parentNode.insertBefore(comments[clss], elements[clss]);
		} else {
			delete layers[clss];
		}
	});

	side_panel_button = side_panel.querySelector('.side-panel-button');
	side_panel_close = side_panel.querySelector('.side-panel-close');
	side_panel_content = side_panel.querySelector('.side-panel-content');
	side_panel_content_inner = side_panel.querySelector('.side-panel-content-inner') || side_panel_content;
	side_panel_mask = side_panel.querySelector('.side-panel-mask');
	side_panel_top = side_panel.querySelector('.side-panel-top-inner');

	side_panel.classList.remove('hidden');
	side_panel_button.classList.remove('hidden');
	side_panel_button.style.display = 'none';
	side_panel_content.classList.remove('hidden');
	side_panel_content.style.display = 'none';
	side_panel_mask.classList.remove('hidden');
	side_panel_mask.style.display = 'none';

	leftEdge = 0;
	rightEdge = parseInt(getComputedStyle(side_panel_content, null).width) + 50;

	window.side_panel_controller = side_panel_controller = new DrawerController({
		target: side_panel,
		left: leftEdge,
		right: rightEdge,
		position: 0,
		curve: 'ease-in-out',
		willOpen: function() {
			side_panel_mask.style.display = 'block';
			side_panel_content.style.display = 'block';
			document.body.classList.add('noscroll');
			if (bodyScrollBarWidth && document.documentElement.scrollHeight > document.documentElement.clientHeight) {
				document.body.style.borderRight = bodyScrollBarWidth + 'px solid transparent'
			}
		},
		didClose: function() {
			side_panel_mask.style.display = 'none';
			side_panel_content.style.display = 'none';
			document.body.classList.remove('noscroll');
			if (bodyScrollBarWidth && document.documentElement.scrollHeight > document.documentElement.clientHeight) {
				document.body.style.borderRight = ''
			}
		},
		onAnimate: function(position) {
			side_panel_mask.style.opacity = (position ) / rightEdge;
			side_panel_content.style.transform = 'translate3d(' + (position - rightEdge) + 'px,0,0)'
		}
	});

	side_panel_controller.inPanel = function(clss) {
		var viewportWidth;
		var current_media;

		if (typeof clss !== 'string') {
			return false;
		}

		if (clss.charAt(0) === '.') {
			clss = clss.slice(1);
		}

		viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

		Object.keys(media).forEach(function(key) {
			if (viewportWidth <= media[key]) {
				current_media = key;
			}
		});

		if (typeof current_media === 'undefined') {
			current_media = 'screen';
		}

		return layers[clss] && layers[clss][current_media];
	};

	side_panel_button.addEventListener('click', function(e) {
		e.preventDefault();
		side_panel_controller.toggle();
		return false;
	});

	if (side_panel_close) {
		side_panel_close.addEventListener('click', function(e) {
			e.preventDefault();
			side_panel_controller.close();
			return false;
		});
	}

	side_panel_mask.addEventListener('click', function() {
		side_panel_controller.close();
		return false;
	});


	var debounce = (function () {
		return function (fn, time) {
			var timer, func;
			if (window.requestAnimationFrame) {
				func = function() {
					timer && cancelAnimationFrame(timer);
					timer = requestAnimationFrame(fn);
				}
			} else {
				func = function() {
					window.clearTimeout(timer);
					timer = window.setTimeout(function () {
						fn();
					}, time)
				};
			}
			return func;
		}
	}());

	function checkSidePanel() {
		var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		var current_media;
		var emptySide = true;
		var emptyTop = true;

		if (checkSidePanel.viewportWidth === viewportWidth) {
			return;
		}

		checkSidePanel.viewportWidth = viewportWidth;

		Object.keys(media).forEach(function(key) {
			if (viewportWidth <= media[key]) {
				current_media = key;
			}
		});

		if (typeof current_media === 'undefined') {
			current_media = 'screen';
		}

		Object.keys(layers).forEach(function(clss){
			var element, comment;

			element = elements[clss];
			comment = comments[clss];

			if (current_media in layers[clss]) {
				if (layers[clss][current_media] == 'onTop') {
					side_panel_top.appendChild(element);
					emptyTop = false;
				} else {
					side_panel_content_inner.appendChild(element);
					emptySide = false;
				}
			} else {
				if (comment) {
					comment.parentNode.insertBefore(element, comment);
				}
			}
		});

		if (emptySide) {
			side_panel_button.style.display = 'none';
		} else {
			side_panel_button.style.display = 'block';
		}

		if (!emptyTop || !emptySide) {
			side_panel.style.display = 'block';
		} else {
			side_panel.style.display = 'none';
			side_panel_controller.close();
		}
	}

	checkSidePanel = debounce(checkSidePanel, 40);

	checkSidePanel();
	window.addEventListener('resize', checkSidePanel);
});
/*
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

"use strict";

(function (exports) {

	function sign(number) {
		if (number < 0)
			return -1;
		if (number > 0)
			return 1;
		return 0;
	}

	function Animator(delegate) {
		this.delegate = delegate;
		this.startTimeStamp = 0;
		this.request_ = null;
	};

	Animator.prototype.scheduleAnimation = function () {
		if (this.request_)
			return;
		this.request_ = requestAnimationFrame(this.onAnimation_.bind(this));
	};

	Animator.prototype.startAnimation = function () {
		this.startTimeStamp = 0;
		this.scheduleAnimation();
	};

	Animator.prototype.stopAnimation = function () {
		cancelAnimationFrame(this.request_);
		this.startTimeStamp = 0;
		this.request_ = null;
	};

	Animator.prototype.onAnimation_ = function (timeStamp) {
		this.request_ = null;
		if (!this.startTimeStamp)
			this.startTimeStamp = timeStamp;
		if (this.delegate.onAnimation(timeStamp))
			this.scheduleAnimation();
	};

	function VelocityTracker() {
		this.recentTouchMoves_ = [];
		this.velocityX = 0;
		this.velocityY = 0;
	}

	VelocityTracker.kTimeWindow = 50;

	VelocityTracker.prototype.pruneHistory_ = function (timeStamp) {
		for (var i = 0; i < this.recentTouchMoves_.length; ++i) {
			if (this.recentTouchMoves_[i].timeStamp > timeStamp - VelocityTracker.kTimeWindow) {
				this.recentTouchMoves_ = this.recentTouchMoves_.slice(i);
				return;
			}
		}
		// All touchmoves are old.
		this.recentTouchMoves_ = [];
	};

	VelocityTracker.prototype.update_ = function (e) {
		this.pruneHistory_(e.timeStamp);
		this.recentTouchMoves_.push(e);

		var oldestTouchMove = this.recentTouchMoves_[0];

		var deltaX = e.changedTouches[0].clientX - oldestTouchMove.changedTouches[0].clientX;
		var deltaY = e.changedTouches[0].clientY - oldestTouchMove.changedTouches[0].clientY;
		var deltaT = e.timeStamp - oldestTouchMove.timeStamp;

		if (deltaT > 0) {
			this.velocityX = deltaX / deltaT;
			this.velocityY = deltaY / deltaT;
		} else {
			this.velocityX = 0;
			this.velocityY = 0;
		}
	};

	VelocityTracker.prototype.onTouchStart = function (e) {
		this.recentTouchMoves_.push(e);
		this.velocityX = 0;
		this.velocityY = 0;
	};

	VelocityTracker.prototype.onTouchMove = function (e) {
		this.update_(e);
	};

	VelocityTracker.prototype.onTouchEnd = function (e) {
		this.update_(e);
		this.recentTouchMoves_ = [];
	};

	function LinearTimingFunction() {
	};

	LinearTimingFunction.prototype.scaleTime = function (fraction) {
		return fraction;
	};

	function CubicBezierTimingFunction(spec) {
		this.map = [];
		for (var ii = 0; ii <= 100; ii += 1) {
			var i = ii / 100;
			this.map.push([
				3 * i * (1 - i) * (1 - i) * spec[0] +
				3 * i * i * (1 - i) * spec[2] + i * i * i,
				3 * i * (1 - i) * (1 - i) * spec[1] +
				3 * i * i * (1 - i) * spec[3] + i * i * i
			]);
		}
	};

	CubicBezierTimingFunction.prototype.scaleTime = function (fraction) {
		var fst = 0;
		while (fst !== 100 && fraction > this.map[fst][0]) {
			fst += 1;
		}
		if (fraction === this.map[fst][0] || fst === 0) {
			return this.map[fst][1];
		}
		var yDiff = this.map[fst][1] - this.map[fst - 1][1];
		var xDiff = this.map[fst][0] - this.map[fst - 1][0];
		var p = (fraction - this.map[fst - 1][0]) / xDiff;
		return this.map[fst - 1][1] + p * yDiff;
	};

	var presetTimingFunctions = {
		'linear': new LinearTimingFunction(),
		'ease': new CubicBezierTimingFunction([0.25, 0.1, 0.25, 1.0]),
		'ease-in': new CubicBezierTimingFunction([0.42, 0, 1.0, 1.0]),
		'ease-out': new CubicBezierTimingFunction([0, 0, 0.58, 1.0]),
		'ease-in-out': new CubicBezierTimingFunction([0.42, 0, 0.58, 1.0]),
	};

	function DrawerController(options) {
		this.velocityTracker = new VelocityTracker();
		this.animator = new Animator(this);

		this.target = options.target;
		this.left = options.left;
		this.right = options.right;
		this.position = options.position;

		this.width = this.right - this.left;
		this.curve = presetTimingFunctions[options.curve || 'linear'];

		this.willOpenCallback = options.willOpen;
		this.didCloseCallback = options.didClose;
		this.animateCallback = options.onAnimate;

		this.state = DrawerController.kClosed;

		this.defaultAnimationSpeed = (this.right - this.left) / DrawerController.kBaseSettleDurationMS;

		this.onTouchMove = this.onTouchMove.bind(this);
		this.onTouchEnd = this.onTouchEnd.bind(this);

		this.target.addEventListener('touchstart', this.onTouchStart.bind(this));
	}

	DrawerController.kOpened = 'opened';
	DrawerController.kClosed = 'closed';
	DrawerController.kOpening = 'opening';
	DrawerController.kClosing = 'closing';
	DrawerController.kDragging = 'dragging';
	DrawerController.kFlinging = 'flinging';

	DrawerController.kBaseSettleDurationMS = 246;
	DrawerController.kMaxSettleDurationMS = 600;

	DrawerController.kMinFlingVelocity = 0.4;  // Matches Android framework.
	DrawerController.kTouchSlop = 5;  // Matches Android framework.
	DrawerController.kTouchSlopSquare = DrawerController.kTouchSlop * DrawerController.kTouchSlop;

	DrawerController.prototype.restrictToCurrent = function (offset) {
		return Math.max(this.left, Math.min(this.position, offset));
	};

	DrawerController.prototype.restrictToBounds = function (offset) {
		return Math.max(this.left, Math.min(this.right, offset));
	};

	DrawerController.prototype.onTouchStart = function (e) {
		this.velocityTracker.onTouchStart(e);

		var touchX = e.changedTouches[0].clientX;
		var touchY = e.changedTouches[0].clientY;

		if (this.state != DrawerController.kOpened) {
			if (touchX != this.restrictToCurrent(touchX))
				return;
			this.state = DrawerController.kDragging;
		}

		this.animator.stopAnimation();
		this.target.addEventListener('touchmove', this.onTouchMove);
		this.target.addEventListener('touchend', this.onTouchEnd);
		// TODO(abarth): Handle touchcancel.

		this.startX = touchX;
		this.startY = touchY;
		this.startPosition = this.position;
		this.touchBaseX = Math.min(touchX, this.startPosition);
	};

	DrawerController.prototype.onTouchMove = function (e) {
		this.velocityTracker.onTouchMove(e);

		if (this.state == DrawerController.kOpened) {
			var deltaX = e.changedTouches[0].clientX - this.startX;
			var deltaY = e.changedTouches[0].clientY - this.startY;

			if (deltaX * deltaX + deltaY * deltaY < DrawerController.kTouchSlopSquare) {
				e.preventDefault();
				return;
			}

			if (Math.abs(deltaY) > Math.abs(deltaX)) {
				this.target.removeEventListener('touchmove', this.onTouchMove);
				this.target.removeEventListener('touchend', this.onTouchEnd);
				return;
			}

			this.state = DrawerController.kDragging;
		}

		e.preventDefault();
		var touchDeltaX = e.changedTouches[0].clientX - this.touchBaseX;
		this.position = this.restrictToBounds(this.startPosition + touchDeltaX);
		this.animator.scheduleAnimation();
	};

	DrawerController.prototype.onTouchEnd = function (e) {
		this.velocityTracker.onTouchEnd(e);
		this.target.removeEventListener('touchmove', this.onTouchMove);
		this.target.removeEventListener('touchend', this.onTouchEnd);

		var velocityX = this.velocityTracker.velocityX;
		if (Math.abs(velocityX) > DrawerController.kMinFlingVelocity) {
			this.fling(velocityX);
		} else if (this.isOpen()) {
			this.open();
		} else {
			this.close();
		}
	};

	DrawerController.prototype.openFraction = function () {
		var width = this.right - this.left;
		var offset = this.position - this.left;
		return offset / width;
	};

	DrawerController.prototype.isOpen = function () {
		return this.openFraction() >= 0.5;
	};

	DrawerController.prototype.isOpening = function () {
		return this.state == DrawerController.kOpening ||
			(this.state == DrawerController.kFlinging && this.animationVelocityX > 0);
	}

	DrawerController.prototype.isClosing = function () {
		return this.state == DrawerController.kClosing ||
			(this.state == DrawerController.kFlinging && this.animationVelocityX < 0);
	}

	DrawerController.prototype.toggle = function () {
		if (this.isOpen())
			this.close();
		else
			this.open();
	};

	DrawerController.prototype.open = function () {
		if (!this.position)
			this.willOpenCallback.call(this.target);

		this.animator.stopAnimation();
		this.animationDuration = 400;
		this.state = DrawerController.kOpening;
		this.animate();
	};

	DrawerController.prototype.close = function () {
		this.animator.stopAnimation();
		this.animationDuration = 400;
		this.state = DrawerController.kClosing;
		this.animate();
	};

	DrawerController.prototype.fling = function (velocityX) {
		this.animator.stopAnimation();
		this.animationVelocityX = velocityX;
		this.state = DrawerController.kFlinging;
		this.animate();
	};

	DrawerController.prototype.animate = function () {
		this.positionAnimationBase = this.position;
		this.animator.startAnimation();
	};

	DrawerController.prototype.targetPosition = function (deltaT) {
		if (this.state == DrawerController.kFlinging)
			return this.positionAnimationBase + this.animationVelocityX * deltaT;
		var targetFraction = this.curve.scaleTime(deltaT / this.animationDuration);
		var animationWidth = this.state == DrawerController.kOpening ?
		this.width - this.positionAnimationBase : -this.positionAnimationBase;
		return this.positionAnimationBase + targetFraction * animationWidth;
	};

	DrawerController.prototype.onAnimation = function (timeStamp) {
		if (this.state == DrawerController.kDragging) {
			this.animateCallback.call(this.target, this.position);
			return false;
		}

		var deltaT = timeStamp - this.animator.startTimeStamp;
		var targetPosition = this.targetPosition(deltaT);
		this.position = this.restrictToBounds(targetPosition);

		this.animateCallback.call(this.target, this.position);

		if (targetPosition <= this.left && this.isClosing()) {
			this.state = DrawerController.kClosed;
			this.didCloseCallback.call(this.target);
			return false;
		}
		if (targetPosition >= this.right && this.isOpening()) {
			this.state = DrawerController.kOpened;
			return false;
		}

		return true;
	};


	exports.DrawerController = DrawerController;

})(window);
