import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Item = styled.div`
  height: 400px;
  width: ${props => props.width}px;
  background-image: url('${props => props.content}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.imagePosition};
`;


const Slide = ({
  content,
  width,
  imagePosition = "center",
  ...wrapperProps
}) => {
  return (
  <Item
    content={content}
    width={width}
    imagePosition={imagePosition}
    {...wrapperProps}
  />
)};

Slide.propTypes = {
  content: PropTypes.string,
  width: PropTypes.number,
  imagePosition: PropTypes.string,
  wrapperProps: PropTypes.object
};

export default Slide;
