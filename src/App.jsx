import './globals.css'

import Nav from './components/nav/Nav'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Section4 from './components/section4/Section4'
import Section5 from './components/section5/Section5'
import Section6 from './components/section6/Section6'
import Footer from './components/footer/Footer'

const App = () => {
	return (
		<>
			<Nav />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			<Section5 />
			<Section6 />
			<Footer />
		</>
	)
}

export default App
