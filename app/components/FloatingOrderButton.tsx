"use client";

export default function FloatingOrderButton() {
  return (
    <a
      href="https://order.online/store/szechuan-royale"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order Online"
      className="floating-order-btn"
    >
      <span className="floating-order-btn__icon" aria-hidden="true">
        {/* chopsticks / bowl icon using pure CSS */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3C7.03 3 3 6.13 3 10c0 2.38 1.44 4.48 3.67 5.83L6 21h12l-.67-5.17C19.56 14.48 21 12.38 21 10c0-3.87-4.03-7-9-7z" fill="currentColor" opacity="0.15"/>
          <path d="M12 3C7.03 3 3 6.13 3 10c0 2.38 1.44 4.48 3.67 5.83L6 21h12l-.67-5.17C19.56 14.48 21 12.38 21 10c0-3.87-4.03-7-9-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <line x1="9" y1="21" x2="15" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8.5 10.5 Q12 8 15.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      </span>
      <span className="floating-order-btn__label">Order Online</span>
      <span className="floating-order-btn__shimmer" aria-hidden="true" />
    </a>
  );
}
