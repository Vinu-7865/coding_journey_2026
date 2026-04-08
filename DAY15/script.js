// ── Theme switcher ──────────────────────────
  // Gets all theme dot buttons
  const dots = document.querySelectorAll('.theme-dot');

  // Sets the active dot visual on page load
  function setActiveDot(theme) {
    dots.forEach(dot => {
      if (dot.dataset.theme === theme) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // When a dot is clicked — change the theme
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const theme = dot.dataset.theme;
      // Sets data-theme on <html> element
      // This triggers the CSS variable switch
      document.documentElement.dataset.theme = theme;
      // Save choice to localStorage so it persists on refresh
      localStorage.setItem('ref-theme', theme);
      setActiveDot(theme);
    });
  });

  // Load saved theme on page load
  const savedTheme = localStorage.getItem('ref-theme') || 'cyberpunk';
  document.documentElement.dataset.theme = savedTheme;
  setActiveDot(savedTheme);


  // ── Waitlist form ────────────────────────────
  // Handles both forms on the page
  function handleWaitlist(event) {
    event.preventDefault(); // stops page reload
    const form = event.target;
    const input = form.querySelector('input[type="email"]');
    const email = input.value;

    // In a real app you would send this to your backend
    // For now — just show a success message
    const msg = document.getElementById('waitlistMsg');
    if (msg) {
      msg.textContent = `✓ ${email} added to waitlist. We will be in touch!`;
      msg.classList.remove('hidden');
    }

    // Show alert for the second form
    if (!msg || form.querySelector('input').id !== 'emailInput') {
      alert(`✓ ${email} added to waitlist!`);
    }

    input.value = '';
  }

// Every REF feature is a function
const getDaysUntilReview = (rating) => {
    if (rating === 4) return 14
    if (rating === 3) return 7
    if (rating === 2) return 3
    if (rating === 1) return 1
    throw new Error(`Invalid rating: ${rating}`)
  }
  
  const getNextReviewDate = (rating) => {
    const days = getDaysUntilReview(rating)
    const date = new Date()
    date.setDate(date.getDate() + days)
    return date
  }
  
  const formatDate = (date) =>
    date.toLocaleDateString("en-GB", {
      day:   "numeric",
      month: "short",
      year:  "numeric"
    })
  
  // Used together
  const rating = 3
  const nextDate = getNextReviewDate(rating)
  console.log(formatDate(nextDate))   // e.g. "15 Jan 2026"