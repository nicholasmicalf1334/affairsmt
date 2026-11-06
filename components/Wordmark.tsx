type Props = { className?: string };

// Script wordmark with the heart over the "i", like the logo.
export default function Wordmark({ className = "" }: Props) {
  return (
    <span className={`wordmark ${className}`} aria-label="affairs.mt">
      <span aria-hidden>affa</span>
      <span className="wm-i" aria-hidden>
        ı
        <svg viewBox="0 0 24 22" className="wm-heart">
          <path d="M12 21s-9-5.6-9-12.1C3 5.1 5.6 3 8.4 3c1.6 0 2.9.8 3.6 2 .7-1.2 2-2 3.6-2C18.4 3 21 5.1 21 8.9 21 15.4 12 21 12 21z" />
        </svg>
      </span>
      <span aria-hidden>rs.mt</span>
    </span>
  );
}
