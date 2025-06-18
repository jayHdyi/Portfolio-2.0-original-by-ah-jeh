  const words = ["Welcome to My Website.", "Explore Our Features.", "Join Our Community."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = { typing: 90, deleting: 60, delay: 1000 };
    const target = document.getElementById("typed-word");

    function typeWord() {
      const currentWord = words[wordIndex];
      const visible = currentWord.slice(0, charIndex);
      target.textContent = visible;

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeWord, speed.typing);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeWord, speed.deleting);
      } else {
        if (!isDeleting) {
          isDeleting = true;
          setTimeout(typeWord, speed.delay);
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeWord, speed.typing);
        }
      }
    }

    typeWord();