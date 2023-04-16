const Footer = () => {
    return(
      <>
      <footer className="border-top py-2 text-center">
        <span>&copy;</span>
        <span className="mx-2">Asya Roikhman</span>
        <span>{new Date().getFullYear()}</span>
      </footer>
    </>
    );
  
  };
  export default Footer;