import styled from 'styled-components';

const ThemeTogglerStyles = styled.div`

    display: flex;
    color: ${props => props.theme.button_colour};
    font-size: 0.875rem;

  .toggle-container {
    display: flex;
    cursor: pointer;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: 1em;
  }


input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
  cursor: pointer;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 52px;
	height: 20px;
	background: ${props => props.theme.button_colour};
	float: left;
	border-radius: 5px;
	position: relative;
    display: flex;
    justify-content: space-between;
    div {
        display: flex;
        align-items: flex-end;
        height: 100%;
        padding: 0 5px;
        svg {
            height: 17px;
            width: auto;
            fill: ${props => props.theme.button_hover_colour};
        }
    }
}

label:after {
	content: '';
	position: absolute;
	top: 2px;
	right: 2px;
	width: 22px;
	height: 16px;
	background: ${props => props.theme.button_hover_colour};
	border-radius: 3px;
	transition: transform 0.3s;
  will-change: transform;
}

input:checked + label {
	background: ${props => props.theme.button_colour};
}

input:checked + label:after {
	transform: translateX(calc((-100%) - 4px));
}

html.transition,
html.transition *,
html.transition *:before,
html.transition *:after {
  transition: all 500ms !important;
  transition-delay: 0 !important;
}

//MOBILE
@media screen and (max-width: 768px) {
  .panel {
    width: 90%;
    padding-left: 0;
    .fa-stack {
      display: none;
    }
    .select {
      padding: 25px;
    }
  }
}
`;

export default ThemeTogglerStyles;
