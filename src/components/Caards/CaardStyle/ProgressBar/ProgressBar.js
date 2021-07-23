import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./Progress.css";
const Container = styled.div`
    progress[value]{
        width : ${(props) => props.width};
        appearance: none;
        :: -webkit-progress-bar{

            background-color=#945ad1;
        }
    }

    `;
const ProgressBar = ({ value, max, color }) => {
  return (
    <div>
      <Container color={color}>
        <progress value={value} max={max} color={color} />
      </Container>
    </div>
  );
};
ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  color: PropTypes.string,
};
ProgressBar.defaultProps = {
  max: 100,
  color: "#945ad1",
};
export default ProgressBar;
