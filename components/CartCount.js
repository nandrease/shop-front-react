import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const AnimationStyles = styled.span`
	position: relative;
	.count {
		display: block;
		position: relative;
		transition: all .4s;
		backface-visibility: hidden;
	}
	/* Initial step flipped on the back*/
	.count-enter {
		transform: rotateX(.5turn);
	}
	.count-enter-active {
		transform: rotateX(0);
	}
	.count-exit {
		top: 0;
		position: absolute;
		transform: rotateX(0);
	}
	.count-exit-active {
		transform: rotateX(.5turn);
	}
`;
const Dot = styled.div`
	background: ${(props) => props.theme.red};
	color: white;
	border-radius: 50%;
	padding: .5rem;
	line-height: 2rem;
	min-width: 3rem;
	margin-left: 1rem;
	font-weight: 100;
	font-feature-settings: 'tnum';
	font-variant-numeric: tabular-nums;
`;
const CartCount = ({ count }) => (
	<AnimationStyles>
		<TransitionGroup>
			<CSSTransition
				unmountOnExit
				className="count"
				classNames="count"
				key={count}
				timeout={{ enter: 400, exit: 400 }}
			>
				<Dot>{count}</Dot>
			</CSSTransition>
		</TransitionGroup>
	</AnimationStyles>
);
export default CartCount;
