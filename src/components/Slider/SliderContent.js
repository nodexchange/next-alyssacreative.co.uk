import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Content = styled.div`
transform: translateX(-${props => props.translate}px);
transition: transform ease-out ${props => props.transition}s;
height: 100%;
width: ${props => props.width}px;
display: flex;
`

const SliderContent = ({
  translate,
  transition,
  width,
  children,
  ...wrapperProps
}) => (
  <Content
    translate={translate}
    transition={transition}
    width={width}
    {...wrapperProps}
  >
    {children}
  </Content>
);

SliderContent.propTypes = {
  translate: PropTypes.number,
  transition: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node,
  wrapperProps: PropTypes.object
};

export default SliderContent;
