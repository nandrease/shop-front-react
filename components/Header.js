import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';
import Cart from './Cart';
import Search from './Search';

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};
Router.onRouteChangeError = () => {
	NProgress.done();
};

const Logo = styled.h1`
	font-size: 4rem;
	font-weight: normal;
	position: relative;
	z-index: 2;
	transform: skew(-7deg);
	a {
		padding: .5rem;
		background: ${(props) => props.theme.red};
		color: white;
		text-decoration: uppercase;
		text-decoration: none;
	}
	@media (max-width: 1300px) {
		margin: 0;
		text-align: center;
	}
`;

const StyledHeader = styled.header`
	.bar {
		border-bottom: 10px solid ${(props) => props.theme.black};
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		align-items: stretch;
		overflow: hidden;
		@media (max-width: 1300px) {
			grid-template-columns: 1fr;
			justify-content: center;
		}
	}
	.sub-bar {
		display: grid;
		grid-template-columns: 1fr auto;
		border-top: 1px solid ${(props) => props.theme.lightGrey};
	}
`;

const Header = () => (
	<StyledHeader>
		<div className="bar">
			<Logo>
				<Link href="/">
					<a>Sick Fits</a>
				</Link>
			</Logo>
		</div>
		<Nav />
		<div className="sub-bar">
			<Search />
		</div>
		<Cart />
	</StyledHeader>
);

export default Header;
