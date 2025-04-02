function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightNotice = `© ${currentYear} Nc News. All Rights Reserved`;

  return (
    <footer>
     <p>{copyrightNotice}</p>
    </footer>
  )
}

export default Footer
