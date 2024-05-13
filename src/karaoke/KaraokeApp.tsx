import DataTable from './DataTable.tsx';
import './Karaoke.css';
import quoteJson from './assets/quotes.json';
import { qType, quoteUnicode } from './KaraokeContexts.tsx';
import { Link } from 'react-router-dom';

function KaraokeApp() {
	const randomQuote = () => {
		const quotes = quoteUnicode(quoteJson);
		const quote: qType = quotes[(Math.random() * quotes.length) | 0];

		const scroll = (id: string) => {
			const target = document.getElementById(id);
			target?.scrollIntoView();
		}

		return (
			<div className="quote" onClick={() => scroll(String(quote.JOYSOUND))}>
				<span className="quote-quote">
					{quote.Quote}
				</span>
				<br/>
				<span className="quote-from">
					- 「{quote.Title}」 / {quote.Composer}
				</span>
				<br/>
			</div>
		)
	}

  return (
    <>
      <div className="App">
        <Link to="/">Go to home.</Link>
        <h1>JOYSOUND 家庭用収録曲</h1>
				<div className="quote-wrapper">
					{randomQuote()}
				</div>
        <DataTable />
      </div>
    </>
  )
}

export default KaraokeApp;
