
import React, {Component} from 'react'
import './Header.css'
// import '../../../App.css'

class Header extends Component
{
	render()
	{
		return (
			<div className = ''>
				<header className = 'header min-vh-100 position-relative'>
					<div className = 'img-overlay position-absolute w-100 h-100'></div>
					<div className = 'content position-absolute translate-middle top-50 start-50 text-center'>
						<h3 className = 'brand-name mb-5 text-center' ><span>S</span>GSITS</h3>
						<p className = 'brand-description mb-3 text-muted text-center'>Department of Electronics & Instrumentation</p>
						<div className = 'empty-line mx-auto w-25 mb-5'></div>
						<br/>
						<div  className = 'brand-description mb-3 text-muted text-center landing-desc'>
						Discover a new way of learning! <br />
       					This Portal is your one-stop-solution for all classroom needs
						<br/>
						</div>
						<a href = '#navbar' className = 'btn btn-outline-success text-capitalize btn-sm'>click to scroll down <i className="fas fa-arrow-down ms-2"></i></a>
					</div>
				</header>
			</div>
		)
	}
}

export default Header