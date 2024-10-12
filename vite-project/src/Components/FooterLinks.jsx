function FooterLinks({ linkTitle, links }) {
  return (
    <div className="footerLInks">
      <p className="linkTitle">{linkTitle}</p>
      {links.map((item, index) => (
        <p className="innerlinks" key={index}>
          <a href={item.link} /* target="#" */ rel="Footer Links">
            {item.title}
          </a>
        </p>
      ))}
    </div>
  );
}

export default FooterLinks;
