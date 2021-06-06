document.addEventListener('DOMContentLoaded', function(){
    Typed.new('.type', {
      strings: ["Search local businesses any way you want.", "Local shops and businesses are around you everywhere and carry all the products and services you need."],
      stringsElement: null,
      // typing speed
      typeSpeed: 20,
      // time before typing starts
      startDelay: 600,
      // backspacing speed
      backSpeed: 0,
      // time before backspacing
      backDelay: 500,
      // loop
      loop: false,
      // false = infinite
      loopCount: 5,
      // show cursor
      showCursor: false,
      // character for cursor
      cursorChar: "|",
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
    });
});