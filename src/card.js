function Card({symbol, title, keywords}) {
  return (
    <div className="card">
      <p className="symbol">{symbol}</p>
      <p className="title">{title}</p>
      <p className="keywords">{keywords}</p>
    </div>
  )
}

export default Card;
