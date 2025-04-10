export default function Footer() {
    return (
      <footer style={{
        backgroundColor: 'var(--navy)',
        color: 'var(--gold)',
        padding: '1rem',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%'
      }}>
        © {new Date().getFullYear()} Boi Hoanh Lam Portfolio
      </footer>
    );
  }