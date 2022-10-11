import Sidebar from './components/sidebar'
import Reviews from './components/reviews'
import AverageRating from './components/average-rating'
import SetimentAnaylis from './components/sentiment-analysis'
import WebsiteVisitors from './components/website-visitors'

function App() {
  return (
    <div className="app">
      <Sidebar
        navLinks={[
          'Dashboard',
          'Widget',
          'Reviews',
          'Customers',
          'Online Analysis',
          'Settings'
        ]}
      />
      <Reviews title="Reviews" total="1,281" />
      <AverageRating title="Average Rating" total="4.6" />
      <SetimentAnaylis title="Sentiment Analysis" totals={[960, 122, 321]} />
      <WebsiteVisitors title="Website Visitors" total="821" />
    </div>
  )
}

export default App
